import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_CACHE_TAG } from "@/lib/cms";

/**
 * Sanity gọi địa chỉ này mỗi khi bấm Publish, để bài mới hiện lên ngay
 * thay vì chờ hết thời gian lưu đệm. Cần đặt SANITY_REVALIDATE_SECRET giống ô Secret của webhook.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Chưa cấu hình SANITY_REVALIDATE_SECRET" }, { status: 500 });

  const { isValidSignature } = await parseBody(request, secret);
  if (!isValidSignature) return NextResponse.json({ message: "Chữ ký không hợp lệ" }, { status: 401 });

  revalidateTag(SANITY_CACHE_TAG, "max");
  return NextResponse.json({ revalidated: true });
}
