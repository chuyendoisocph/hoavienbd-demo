/** Đường dẫn không dấu từ tiêu đề tiếng Việt: "Đại Lễ Vu Lan" → "dai-le-vu-lan". */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/đ/g, "d")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}
