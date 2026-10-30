/** Nội dung bài viết dành riêng cho Hoa Viên Bình Dương. */

export interface Article {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  slug: string;
  href: string;
  image: string;
}

type ArticleInput = Omit<Article, "href">;

export const ARTICLES_HERO = {
  image: "/images/hvbd/park-aerial-roundabout.jpg",
  title: "BÀI VIẾT",
};

const ARTICLE_INPUTS: ArticleInput[] = [
  {
    title: "Chuyện thầy trò: Khi nào là thời điểm tốt nhất để chuẩn bị chuyện trăm năm?",
    date: "30/10/2026",
    category: "Chuẩn bị từ sớm",
    excerpt:
      "Không cần đợi đến tuổi già, cũng chẳng cần vội vàng quyết định: thời điểm thích hợp là khi ta đã có thể nghĩ về điều ấy một cách bình thản.",
    slug: "chuyen-thay-tro-khi-nao-chuan-bi-chuyen-tram-nam",
    image: "/images/hvbd/chuyen-thay-tro-chuan-bi-chuyen-tram-nam-v3.webp",
  },
  {
    title: "Đồi Phượng Hoàng: Chuyện về một người biết lo trước",
    date: "13/10/2026",
    category: "Chuẩn bị từ sớm",
    excerpt:
      "Câu chuyện minh họa về một người ông tự mình chọn nơi an nghỉ khi còn khỏe, để gia đình an lòng sống tiếp.",
    slug: "doi-phuong-hoang-chuyen-ve-mot-nguoi-biet-lo-truoc",
    image: "/images/hvbd/doi-phuong-hoang-mo-bai-v2.webp",
  },
  {
    title: "Hướng dẫn các bước cần thiết khi tổ chức tang lễ",
    date: "17/09/2026",
    category: "Hướng dẫn dành cho gia đình",
    excerpt:
      "Những việc cần ưu tiên trong thời gian đầu, từ liên hệ đơn vị hỗ trợ đến chuẩn bị giấy tờ và thống nhất hình thức tiễn biệt.",
    slug: "can-lam-gi-khi-co-nguoi-than-qua-doi",
    image: "/images/hvbd/care-team.jpg",
  },
  {
    title: "An táng hay hỏa táng: Gia đình nên cân nhắc điều gì?",
    date: "17/09/2026",
    category: "Hướng dẫn dành cho gia đình",
    excerpt:
      "Mỗi hình thức đều có những đặc điểm riêng. Gia đình nên cân nhắc di nguyện, tín ngưỡng, nơi an nghỉ và điều kiện thực tế.",
    slug: "an-tang-hay-hoa-tang",
    image: "/images/158a.jpg",
  },
  {
    title: "Lưu giữ tro cốt trong không gian trang nghiêm",
    date: "17/09/2026",
    category: "Lưu giữ tro cốt",
    excerpt:
      "Các yếu tố gia đình nên tìm hiểu khi lựa chọn vị trí lưu giữ tro cốt và chuẩn bị nghi thức an vị.",
    slug: "luu-giu-tro-cot-trang-nghiem",
    image: "/images/hvbd/columbaria-white.jpg",
  },
  {
    title: "Chủ động chuẩn bị từ sớm: Một cách sẻ chia với gia đình",
    date: "17/09/2026",
    category: "Chuẩn bị từ sớm",
    excerpt:
      "Chủ động trao đổi nguyện vọng và chuẩn bị các lựa chọn cần thiết giúp gia đình bớt áp lực khi hữu sự.",
    slug: "chuan-bi-hau-su-tu-som",
    image: "/images/45-vietnam.png",
  },
  {
    title: "Những điều cần lưu ý khi thăm viếng và chăm sóc khu mộ",
    date: "17/09/2026",
    category: "Chăm sóc khu mộ",
    excerpt:
      "Một số lưu ý giúp việc thăm viếng diễn ra trang nghiêm, thuận tiện và góp phần giữ gìn cảnh quan chung của hoa viên.",
    slug: "tham-vieng-va-cham-soc-mo-phan",
    image: "/images/hvbd/grave-offering-white.jpg",
  },
  {
    title: "Thanh Minh và truyền thống tưởng nhớ tổ tiên",
    date: "17/09/2026",
    category: "Văn hóa tưởng niệm",
    excerpt:
      "Thanh Minh là dịp con cháu thăm viếng, chăm sóc mộ và cùng nhau gìn giữ đạo lý uống nước nhớ nguồn.",
    slug: "thanh-minh-va-truyen-thong-tuong-nho-to-tien",
    image: "/images/hvbd/dai-le-vu-lan.jpg",
  },
];

export const ARTICLES: Article[] = ARTICLE_INPUTS.map((article) => ({
  ...article,
  href: `/bai-viet/${article.slug}`,
}));

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticleBySlug(slug);
  const others = ARTICLES.filter((article) => article.slug !== slug);
  const sameCategory = current
    ? others.filter((article) => article.category === current.category)
    : [];
  const remaining = others.filter((article) => !sameCategory.includes(article));

  return [...sameCategory, ...remaining].slice(0, count);
}
