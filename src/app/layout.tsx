import type { Metadata } from "next";
import { Be_Vietnam_Pro, Newsreader, Playfair_Display } from "next/font/google";
import { SiteMotion } from "@/components/SiteMotion";
import { DEFAULT_SOCIAL_IMAGE, SITE_DESCRIPTION, SITE_INDEXABLE, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/seo";
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

// Riêng hai tiêu đề "Câu Chuyện Thương Hiệu" và "Hệ Tư Tưởng Thương Hiệu" ở trang chủ:
// chữ T của Newsreader ở cỡ lớn trông nặng, Playfair Display thanh hơn.
const accentFont = Playfair_Display({
  variable: "--font-accent-face",
  subsets: ["latin", "vietnamese"],
  weight: "500",
  display: "swap",
  // Chỉ dùng ở trang chủ: không tải trước trên mọi trang.
  preload: false,
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  ...(SITE_INDEXABLE ? {} : { robots: { index: false, follow: false } }),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE.url],
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
      className={`${bodyFont.variable} ${bodyItalicFont.variable} ${displayFont.variable} ${accentFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteMotion />
        {children}
      </body>
    </html>
  );
}
