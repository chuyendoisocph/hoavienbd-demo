import type { Metadata } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bodyFont = Be_Vietnam_Pro({
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display-face",
  weight: ["500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hoa Viên Bình Dương | Trân trọng từng cuộc đời",
  description:
    "Hoa Viên Bình Dương (Chánh Phú Hòa) – công viên tưởng niệm sinh thái tại Bến Cát, Bình Dương, mang đến dịch vụ tang lễ và tưởng niệm toàn diện. Trân trọng từng cuộc đời.",
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
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
