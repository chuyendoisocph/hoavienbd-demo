import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";
import { sanityProjectId } from "@/sanity/env";
import { Studio } from "./Studio";

export const metadata = { ...studioMetadata, title: "Soạn bài | Hoa Viên Nghĩa Trang Bình Dương" };
export const viewport = studioViewport;

export default function StudioPage() {
  if (!sanityProjectId) {
    return (
      <main className="grid min-h-[100dvh] place-items-center p-6 text-center">
        <p>Chưa kết nối dự án Sanity. Hãy đặt NEXT_PUBLIC_SANITY_PROJECT_ID trong .env.local rồi khởi động lại.</p>
      </main>
    );
  }
  return <Studio />;
}
