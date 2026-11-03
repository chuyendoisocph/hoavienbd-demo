/** Dữ liệu có cấu trúc schema.org cho máy tìm kiếm. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Thoát dấu "<" để nội dung không thể đóng thẻ script.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
