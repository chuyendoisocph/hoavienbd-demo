import { useDocumentOperation, type DocumentActionComponent } from "sanity";
import { slugify } from "./slugify";

/** Nút Publish tự tạo đường dẫn từ tiêu đề nếu người soạn chưa tạo, để khỏi phải bấm Generate. */
export function withAutoSlug(publish: DocumentActionComponent): DocumentActionComponent {
  const AutoSlugPublish: DocumentActionComponent = (props) => {
    const { patch } = useDocumentOperation(props.id, props.type);
    const result = publish(props);
    if (!result) return result;
    return {
      ...result,
      onHandle: () => {
        const doc = props.draft ?? props.published;
        const slug = doc?.slug as { current?: string } | undefined;
        if (doc && !slug?.current && typeof doc.title === "string" && doc.title.trim()) {
          patch.execute([{ set: { slug: { _type: "slug", current: slugify(doc.title) } } }]);
        }
        result.onHandle?.();
      },
    };
  };
  return AutoSlugPublish;
}
