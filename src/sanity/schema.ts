import { defineArrayMember, defineField, defineType } from "sanity";
import { slugify } from "./slugify";

const required = { validation: <R extends { required(): R }>(rule: R) => rule.required() };

const imageWithAlt = [
  defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true }, ...required }),
  defineField({
    name: "alt",
    title: "Mô tả ảnh",
    description: "Không bắt buộc. Một câu ngắn tả ảnh, giúp người khiếm thị và Google hiểu ảnh.",
    type: "string",
  }),
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
  // Khung ảnh trong bài: nói rõ khi chưa chọn ảnh, thay vì hiện chữ "Untitled".
  preview: {
    select: { caption: "caption", alt: "alt", media: "image" },
    prepare: ({ caption, alt, media }) => ({
      title: media ? caption || alt || "Ảnh" : "Ảnh — chưa chọn ảnh",
      subtitle: media ? undefined : "Bấm vào đây để tải ảnh lên",
      media,
    }),
  },
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
  preview: {
    select: { media: "items.0.image", second: "items.1.image" },
    prepare: ({ media, second }) => ({
      title: "Hai ảnh cạnh nhau",
      subtitle: media && second ? undefined : "Bấm vào đây để chọn đủ hai ảnh",
      media,
    }),
  },
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
  // Mọi ô nằm trên một trang, theo thứ tự người soạn thường điền; phần ít dùng gom vào "Cài đặt thêm".
  fieldsets: [{ name: "advanced", title: "Cài đặt thêm (thường không cần sửa)", options: { collapsible: true, collapsed: true } }],
  fields: [
    defineField({
      name: "title",
      title: "Tiêu đề",
      description: "Nên dưới 60 ký tự để Google hiện đủ.",
      type: "string",
      validation: (rule) => [rule.required().error("Cần có tiêu đề."), rule.max(60).warning("Tiêu đề hơi dài, Google có thể cắt bớt.")],
    }),
    defineField({
      name: "image",
      title: "Ảnh đại diện",
      description: "Ảnh ngang, hiện ở đầu bài và ở danh sách bài viết. Nên thu nhỏ ảnh còn khoảng 2.000px trước khi tải lên.",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required().error("Cần có ảnh đại diện."),
    }),
    defineField({
      name: "category",
      title: "Chuyên mục",
      type: "string",
      options: {
        list: ["Chuẩn bị từ sớm", "Hướng dẫn dành cho gia đình", "Lưu giữ tro cốt", "Chăm sóc khu mộ", "Văn hóa tưởng niệm"],
        layout: "dropdown",
      },
      validation: (rule) => rule.required().error("Chọn một chuyên mục."),
    }),
    defineField({
      name: "excerpt",
      title: "Tóm tắt",
      description: "1–2 câu giới thiệu bài. Hiện ở danh sách bài viết và dưới tiêu đề trên Google.",
      type: "text",
      rows: 3,
      validation: (rule) => [rule.required().error("Cần có tóm tắt."), rule.max(160).warning("Nên dưới 160 ký tự.")],
    }),
    defineField({
      name: "body",
      title: "Nội dung bài",
      description: "Gõ như soạn văn bản. Bấm nút Ảnh trên thanh công cụ để chèn ảnh, rồi bấm vào khung ảnh vừa chèn để tải ảnh lên. Bấm biểu tượng ⤢ để mở rộng khung soạn.",
      type: "array",
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
      hidden: ({ document }) => document?.format !== "story",
      fields: [
        defineField({ name: "thay", title: "Nhân vật 1 (người lớn tuổi)", type: "string" }),
        defineField({ name: "tro", title: "Nhân vật 2 (người trẻ)", type: "string" }),
      ],
    }),
    defineField({
      name: "story",
      title: "Nội dung truyện",
      description: "Bấm Add item để thêm từng phần: lời kể, câu thoại, câu thơ, ảnh…",
      type: "array",
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
          fields: [...imageWithAlt, defineField({ name: "caption", title: "Chú thích", type: "string" })],
          preview: { select: { title: "caption", media: "image" } },
        }),
        textPart("storyNote", "Ghi chú cuối bài"),
      ],
    }),
    defineField({
      name: "date",
      title: "Ngày đăng",
      description: "Tự điền ngày hôm nay.",
      type: "date",
      fieldset: "advanced",
      options: { dateFormat: "DD/MM/YYYY" },
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required().error("Cần có ngày đăng."),
    }),
    defineField({
      name: "format",
      title: "Kiểu bài",
      description: "Chỉ đổi sang Truyện đối thoại khi viết bài dạng hai nhân vật trò chuyện.",
      type: "string",
      fieldset: "advanced",
      options: {
        list: [
          { title: "Bài thường", value: "standard" },
          { title: "Truyện đối thoại", value: "story" },
        ],
        layout: "radio",
      },
      initialValue: "standard",
    }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      description: "Tự tạo từ tiêu đề khi bấm Publish. Không đổi sau khi đã đăng, vì liên kết cũ sẽ hỏng.",
      type: "slug",
      fieldset: "advanced",
      options: { source: "title", slugify },
    }),
  ],
  orderings: [{ title: "Mới nhất", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "image" } },
});

const event = defineType({
  name: "event",
  title: "Sự kiện",
  type: "document",
  fieldsets: [{ name: "advanced", title: "Cài đặt thêm (thường không cần sửa)", options: { collapsible: true, collapsed: true } }],
  fields: [
    defineField({ name: "title", title: "Tên sự kiện", type: "string", validation: (rule) => rule.required().error("Cần có tên sự kiện.") }),
    defineField({ name: "image", title: "Ảnh", type: "image", options: { hotspot: true }, validation: (rule) => rule.required().error("Cần có ảnh.") }),
    defineField({ name: "occasion", title: "Thời điểm", description: "Ví dụ: Rằm tháng Bảy Âm lịch", type: "string", ...required }),
    defineField({ name: "description", title: "Mô tả ngắn", description: "Hiện ở danh sách sự kiện và trên Google.", type: "text", rows: 3, ...required }),
    defineField({ name: "introduction", title: "Đoạn mở đầu", type: "text", rows: 3, ...required }),
    defineField({
      name: "paragraphs",
      title: "Các đoạn nội dung",
      description: "Mỗi đoạn một ô. Bấm Add item để thêm đoạn.",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 4 })],
      ...required,
    }),
    defineField({
      name: "highlights",
      title: "Điểm chính",
      description: "Vài dòng ngắn, hiện trong khung bên phải.",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "imageAlt",
      title: "Mô tả ảnh",
      description: "Không bắt buộc. Bỏ trống thì dùng tên sự kiện.",
      type: "string",
      fieldset: "advanced",
    }),
    defineField({
      name: "featured",
      title: "Sự kiện nổi bật",
      description: "Hiện ở khối lớn đầu trang Sự kiện.",
      type: "boolean",
      fieldset: "advanced",
      initialValue: false,
    }),
    defineField({ name: "order", title: "Thứ tự hiển thị", description: "Số nhỏ hiện trước.", type: "number", fieldset: "advanced", initialValue: 10 }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      description: "Tự tạo từ tên sự kiện khi bấm Publish.",
      type: "slug",
      fieldset: "advanced",
      options: { source: "title", slugify },
    }),
  ],
  orderings: [{ title: "Thứ tự hiển thị", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "occasion", media: "image" } },
});

export const schemaTypes = [figure, figurePair, storyLine, article, event];
