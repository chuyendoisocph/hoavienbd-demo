import type { Metadata } from "next";
import { Be_Vietnam_Pro, Newsreader } from "next/font/google";
import { SiteMotion } from "@/components/SiteMotion";
import "./globals.css";

const bodyFont = Be_Vietnam_Pro({
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

// Italic only in the two weights the quotes use, to keep the font payload small.
const bodyItalicFont = Be_Vietnam_Pro({
  variable: "--font-body-italic",
  weight: ["400", "600"],
  style: "italic",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

// Chỉ tải kiểu đứng: bản nghiêng của Newsreader nặng 264 KB mà chỉ dùng cho
// một đoạn trích, không đáng.
const displayFont = Newsreader({
  variable: "--font-display-face",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const SITE_TITLE = "Hoa Viên Bình Dương | Nơi Cuộc Sống Vĩnh Hằng";
const SITE_DESCRIPTION =
  "Hoa Viên Bình Dương (Chánh Phú Hòa) – công viên tưởng niệm sinh thái tại Bến Cát, Bình Dương, mang đến dịch vụ tang lễ và tưởng niệm toàn diện. Trân trọng từng cuộc đời.";
const SOCIAL_IMAGE = "/images/hvbd/park-aerial-roundabout.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://demo-cphaco.vercel.app"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Hoa Viên Bình Dương",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1630,
        height: 965,
        alt: "Toàn cảnh xanh tại Hoa Viên Bình Dương",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: {
    icon: [
      { url: "/seo/hoa-vien-binh-duong-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/hoa-vien-binh-duong-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: {
      url: "/seo/hoa-vien-binh-duong-180x180.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${bodyFont.variable} ${bodyItalicFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteMotion />
        {children}
      </body>
    </html>
  );
}
