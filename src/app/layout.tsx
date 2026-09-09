import type { Metadata } from "next";
import { Didact_Gothic, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const headingFont = Didact_Gothic({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hoa Viên Bình Dương | Trân trọng từng cuộc đời",
  description:
    "Hoa Viên Bình Dương (Chánh Phú Hòa) – công viên tưởng niệm sinh thái tại Bến Cát, Bình Dương, mang đến dịch vụ tang lễ và tưởng niệm toàn diện. Trân trọng từng cuộc đời.",
  icons: {
    icon: [
      { url: "/seo/cropped-Skype_Picture_2020_10_26T02_46_02_575Z-32x32.png", sizes: "32x32" },
      { url: "/seo/cropped-Skype_Picture_2020_10_26T02_46_02_575Z-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/cropped-Skype_Picture_2020_10_26T02_46_02_575Z-180x180.png",
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
      className={`${openSans.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
