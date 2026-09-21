/** Kiểu dữ liệu nội dung dùng chung cho website Hoa Viên Bình Dương. */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CarouselSlide {
  title: string;
  subtitle?: string;
  body: string;
  image: string;
  cta?: { label: string; href: string };
}

export interface PreplanCard {
  title: string;
  image: string;
  href: string;
}

export interface AdvantageCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProductItem {
  label: string;
  href: string;
}

export interface Testimonial {
  title: string;
  excerpt: string;
  href?: string;
}

export interface FooterLinkColumn {
  heading: string;
  links: NavItem[];
}

export type PolicyBlock =
  | { type: "p"; text: string; lead?: string; emphasis?: boolean }
  | { type: "list"; items: string[] }
  | { type: "contact"; rows: { label: string; value: string; href?: string }[] };

export interface PolicyItem {
  title: string;
  blocks: PolicyBlock[];
}
