import { createClient } from "next-sanity";
import { sanityApiVersion, sanityDataset, sanityProjectId } from "./env";

/** `null` khi chưa cấu hình dự án Sanity: website dùng dữ liệu có sẵn trong `src/lib`. */
export const sanityClient = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;
