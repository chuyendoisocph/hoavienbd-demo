/** Thiết lập SEO dùng chung: địa chỉ website, metadata từng trang và dữ liệu có cấu trúc (JSON-LD). */

import type { Metadata } from "next";

/**
 * Tên miền chính thức. Chỉ khi đặt biến này website mới cho máy tìm kiếm lập chỉ mục,
 * để bản demo không bị Google ghi nhận trùng với website thật.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://demo-cphaco.vercel.app").replace(/\/$/, "");
export const SITE_INDEXABLE = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
export const SITE_NAME = "Hoa Viên Nghĩa Trang Bình Dương";
export const SITE_TITLE = "Hoa Viên Nghĩa Trang Bình Dương | Nơi Cuộc Sống Vĩnh Hằng";
export const SITE_DESCRIPTION =
  "Hoa Viên Nghĩa Trang Bình Dương – công viên tưởng niệm sinh thái tại phường Chánh Phú Hòa, TP. Hồ Chí Minh, mang đến dịch vụ tang lễ và tưởng niệm toàn diện.";

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/images/hvbd/park-aerial-roundabout.jpg",
  width: 1630,
  height: 965,
  alt: "Toàn cảnh xanh tại Hoa Viên Nghĩa Trang Bình Dương",
};

type SocialImage = { url: string; width?: number; height?: number; alt?: string };

interface PageSeo {
  title: string;
  description: string;
  image?: SocialImage;
  type?: "website" | "article";
  publishedTime?: string;
}

/** Metadata của một trang: đường dẫn chuẩn (canonical) và thẻ chia sẻ mạng xã hội riêng cho trang đó. */
export function pageMetadata(path: string, { title, description, image = DEFAULT_SOCIAL_IMAGE, type = "website", publishedTime }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "vi_VN",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [image],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

/** Ngày dạng DD/MM/YYYY sang ISO 8601. */
export function isoDate(date: string) {
  const [day, month, year] = date.split("/");
  return `${year}-${month}-${day}`;
}

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["Cemetery", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/seo/hoa-vien-binh-duong-logo.png"),
  image: absoluteUrl(DEFAULT_SOCIAL_IMAGE.url),
  telephone: "+84818555444",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khu phố Bông Trang",
    addressLocality: "Phường Chánh Phú Hòa",
    addressRegion: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:30",
    closes: "17:00",
  },
  hasMap: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "vi-VN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};
