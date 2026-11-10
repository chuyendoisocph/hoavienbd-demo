import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { WORDPRESS_CACHE_TAG } from "@/lib/wordpress";

/**
 * WordPress của cphaco.vn gọi địa chỉ này mỗi khi đăng, sửa hoặc xoá bài,
 * để trang Bài Viết cập nhật ngay thay vì chờ hết 10 phút lưu đệm.
 * Mã bí mật gửi trong header `x-revalidate-secret`, phải giống biến WORDPRESS_REVALIDATE_SECRET.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.WORDPRESS_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Chưa cấu hình WORDPRESS_REVALIDATE_SECRET" }, { status: 500 });

  const given = Buffer.from(request.headers.get("x-revalidate-secret") ?? "");
  const expected = Buffer.from(secret);
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) {
    return NextResponse.json({ message: "Mã bí mật không đúng" }, { status: 401 });
  }

  revalidateTag(WORDPRESS_CACHE_TAG, "max");
  return NextResponse.json({ revalidated: true });
}
