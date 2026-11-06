import { viVNLocale } from "@sanity/locale-vi-vn";
import { CalendarDays, FileText } from "lucide-react";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { withAutoSlug } from "./src/sanity/actions";
import { sanityDataset, sanityProjectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "hoa-vien-binh-duong",
  title: "Hoa Viên Nghĩa Trang Bình Dương",
  basePath: "/studio",
  // Trang /studio không hiển thị Studio khi chưa có mã dự án.
  projectId: sanityProjectId ?? "unconfigured",
  dataset: sanityDataset,
  plugins: [
    // Menu chỉ có hai mục người soạn cần, bài mới nhất lên đầu.
    structureTool({
      structure: (S) =>
        S.list()
          .title("Nội dung")
          .items([
            S.listItem()
              .title("Bài viết")
              .icon(FileText)
              .child(S.documentTypeList("article").title("Bài viết").defaultOrdering([{ field: "date", direction: "desc" }])),
            S.listItem()
              .title("Sự kiện")
              .icon(CalendarDays)
              .child(S.documentTypeList("event").title("Sự kiện").defaultOrdering([{ field: "order", direction: "asc" }])),
          ]),
    }),
    viVNLocale(),
  ],
  schema: { types: schemaTypes },
  document: {
    // Nút "Tạo mới" chỉ gợi ý Bài viết và Sự kiện.
    newDocumentOptions: (previous) => previous.filter((item) => ["article", "event"].includes(item.templateId)),
    actions: (previous) => previous.map((action) => (action.action === "publish" ? withAutoSlug(action) : action)),
  },
});
