import { viVNLocale } from "@sanity/locale-vi-vn";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityDataset, sanityProjectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schema";

export default defineConfig({
  name: "hoa-vien-binh-duong",
  title: "Hoa Viên Bình Dương",
  basePath: "/studio",
  // Trang /studio không hiển thị Studio khi chưa có mã dự án.
  projectId: sanityProjectId ?? "unconfigured",
  dataset: sanityDataset,
  plugins: [structureTool(), viVNLocale()],
  schema: { types: schemaTypes },
});
