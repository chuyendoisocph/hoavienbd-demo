import { defineArrayMember, defineField, defineType } from "sanity";

const required = { validation: <R extends { required(): R }>(rule: R) => rule.required() };

const imageWithAlt = [
  defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true }, ...required }),
  defineField({ name: "alt", title: "Mô tả ảnh (cho người khiếm thị và Google)", type: "string", ...required }),
];

const figure = defineType({
  name: "figure",
  title: "Ảnh",
  type: "object",
  fields: [
    ...imageWithAlt,
    defineField({ name: "caption", title: "Chú thích", type: "string" }),
    defineField({ name: "narrow", title: "Hiển thị khổ hẹp (hợp với ảnh dọc)", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "alt", media: "image" } },
});

const figurePair = defineType({
  name: "figurePair",
  title: "Hai ảnh cạnh nhau",
  type: "object",
  fields: [
    defineField({
      name: "items",
      title: "Ảnh",
      type: "array",
      of: [defineArrayMember({ type: "figure" })],
      validation: (rule) => rule.required().length(2),
    }),
  ],
  preview: { prepare: () => ({ title: "Hai ảnh cạnh nhau" }) },
});

const textPart = (name: string, title: string) =>
  defineArrayMember({
    name,
    title,
    type: "object",
    fields: [defineField({ name: "text", title: "Nội dung", type: "text", rows: 3, ...required })],
    preview: { select: { subtitle: "text" }, prepare: ({ subtitle }) => ({ title, subtitle }) },
  });

const speechFields = [
  defineField({
    name: "who",
    title: "Người nói",
    type: "string",
    options: {
      list: [
        { title: "Nhân vật 1 (người lớn tuổi)", value: "thay" },
        { title: "Nhân vật 2 (người trẻ)", value: "tro" },
      ],
      layout: "radio",
    },
    ...required,
  }),
  defineField({ name: "cue", title: "Lời dẫn trước câu thoại", type: "string" }),
  defineField({ name: "text", title: "Câu thoại", type: "text", rows: 3, ...required }),
];
const speechPreview = { select: { title: "text", subtitle: "cue" } };

const storyLine = defineType({
  name: "storyLine",
  title: "Câu thoại",
  type: "object",
  fields: speechFields,
  preview: speechPreview,
});

const article = defineType({
  name: "article",
  title: "Bài viết",
  type: "document",
  groups: [
    { name: "info", title: "Thông tin", default: true },
    { name: "content", title: "Nội dung" },
  ],
  fields: [
    defineField({ name: "title", title: "Tiêu đề", type: "string", group: "info", ...required }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      description: "Bấm Generate để tạo từ tiêu đề. Không đổi sau khi đã đăng, vì liên kết cũ sẽ hỏng.",
      type: "slug",
      group: "info",
      options: { source: "title" },
      ...required,
    }),
    defineField({ name: "date", title: "Ngày đăng", type: "date", group: "info", options: { dateFormat: "DD/MM/YYYY" }, ...required }),
    defineField({
      name: "category",
      title: "Chuyên mục",
      type: "string",
      group: "info",
      options: {
        list: ["Chuẩn bị từ sớm", "Hướng dẫn dành cho gia đình", "Lưu giữ tro cốt", "Chăm sóc khu mộ", "Văn hóa tưởng niệm"],
      },
      ...required,
    }),
    defineField({ name: "excerpt", title: "Tóm tắt", type: "text", rows: 3, group: "info", ...required }),
    defineField({ name: "image", title: "Ảnh đại diện", type: "image", group: "info", options: { hotspot: true }, ...required }),
    defineField({
      name: "format",
      title: "Kiểu bài",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Bài thường", value: "standard" },
          { title: "Truyện đối thoại", value: "story" },
        ],
        layout: "radio",
      },
      initialValue: "standard",
      ...required,
    }),
    defineField({
      name: "body",
      title: "Nội dung bài",
      type: "array",
      group: "content",
      hidden: ({ document }) => document?.format === "story",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Đoạn văn", value: "normal" },
            { title: "Tiêu đề mục", value: "h2" },
            { title: "Trích dẫn, câu thơ", value: "blockquote" },
          ],
          lists: [{ title: "Danh sách", value: "bullet" }],
          marks: {
            decorators: [
              { title: "In đậm", value: "strong" },
              { title: "In nghiêng", value: "em" },
            ],
          },
        }),
        defineArrayMember({ type: "figure" }),
        defineArrayMember({ type: "figurePair" }),
      ],
    }),
    defineField({
      name: "speakers",
      title: "Tên hai nhân vật",
      type: "object",
      group: "content",
      hidden: ({ document }) => document?.format !== "story",
      fields: [
        defineField({ name: "thay", title: "Nhân vật 1 (người lớn tuổi)", type: "string" }),
        defineField({ name: "tro", title: "Nhân vật 2 (người trẻ)", type: "string" }),
      ],
    }),
    defineField({
      name: "story",
      title: "Nội dung truyện",
      type: "array",
      group: "content",
      hidden: ({ document }) => document?.format !== "story",
      of: [
        textPart("storyLead", "Câu mở đầu"),
        textPart("storyChapter", "Tiêu đề chương"),
        textPart("storyNarration", "Lời kể"),
        defineArrayMember({ name: "storySpeech", title: "Câu thoại", type: "object", fields: speechFields, preview: speechPreview }),
        defineArrayMember({
          name: "storyHighlight",
          title: "Đoạn thoại nổi bật",
          type: "object",
          fields: [
            defineField({ name: "lines", title: "Các câu thoại", type: "array", of: [defineArrayMember({ type: "storyLine" })], ...required }),
            defineField({ name: "keyPhrase", title: "Câu chốt được in đậm (chép đúng từ câu thoại)", type: "string", ...required }),
          ],
          preview: { select: { subtitle: "keyPhrase" }, prepare: ({ subtitle }) => ({ title: "Đoạn thoại nổi bật", subtitle }) },
        }),
        defineArrayMember({
          name: "storyVerse",
          title: "Câu thơ",
          type: "object",
          fields: [
            defineField({ name: "cue", title: "Lời dẫn", type: "string", ...required }),
            defineField({ name: "lines", title: "Các dòng thơ", type: "array", of: [defineArrayMember({ type: "string" })], ...required }),
            defineField({ name: "source", title: "Nguồn trích", type: "string" }),
          ],
          preview: { select: { subtitle: "cue" }, prepare: ({ subtitle }) => ({ title: "Câu thơ", subtitle }) },
        }),
        textPart("storyMoral", "Câu đúc kết"),
        defineArrayMember({
          name: "storyImage",
          title: "Ảnh",
          type: "object",
          fields: [...imageWithAlt, defineField({ name: "caption", title: "Chú thích", type: "string", ...required })],
          preview: { select: { title: "alt", media: "image" } },
        }),
        textPart("storyNote", "Ghi chú cuối bài"),
      ],
    }),
  ],
  orderings: [{ title: "Mới nhất", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "image" } },
});

const event = defineType({
  name: "event",
  title: "Sự kiện",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Tên sự kiện", type: "string", ...required }),
    defineField({ name: "slug", title: "Đường dẫn", type: "slug", options: { source: "title" }, ...required }),
    defineField({ name: "occasion", title: "Thời điểm", description: "Ví dụ: Rằm tháng Bảy Âm lịch", type: "string", ...required }),
    defineField({ name: "description", title: "Mô tả ngắn", type: "text", rows: 3, ...required }),
    defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true }, ...required }),
    defineField({ name: "imageAlt", title: "Mô tả ảnh (cho người khiếm thị và Google)", type: "string", ...required }),
    defineField({ name: "featured", title: "Sự kiện nổi bật", description: "Hiện ở khối lớn đầu trang Sự kiện.", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Thứ tự hiển thị", description: "Số nhỏ hiện trước.", type: "number", ...required }),
    defineField({ name: "introduction", title: "Đoạn mở đầu", type: "text", rows: 3, ...required }),
    defineField({ name: "paragraphs", title: "Các đoạn nội dung", type: "array", of: [defineArrayMember({ type: "text", rows: 4 })], ...required }),
    defineField({ name: "highlights", title: "Điểm chính", type: "array", of: [defineArrayMember({ type: "string" })], ...required }),
  ],
  orderings: [{ title: "Thứ tự hiển thị", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "occasion", media: "image" } },
});

export const schemaTypes = [figure, figurePair, storyLine, article, event];
