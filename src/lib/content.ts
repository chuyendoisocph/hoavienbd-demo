/** Nội dung Hoa Viên Bình Dương (Chánh Phú Hòa). Nguồn dữ liệu chung cho toàn bộ giao diện. */
import type {
  CarouselSlide,
  PreplanCard,
  AdvantageCard,
  ProductItem,
  Testimonial,
  NavItem,
  FooterLinkColumn,
} from "@/types";

export const LOGO = "/images/hvbd/cpha-logo.png";

export const TOP_NAV: NavItem[] = [
  { label: "Tặng Tre Giữ Nghề", href: "https://cphaco.vn/duong-thien-thai-noi-tre-que-nha-hoi-tu/" },
  {
    label: "Hỗ Trợ",
    href: "#",
    children: [
      { label: "Cần Hỗ Trợ Ngay", href: "/ho-tro/khi-co-nguoi-than-qua-doi" },
      { label: "Chuẩn Bị Từ Sớm", href: "/ho-tro/chuan-bi-tu-som" },
    ],
  },
  {
    label: "Lựa Chọn Dịch Vụ",
    href: "#",
    children: [
      { label: "Dịch Vụ Tang Lễ", href: "/dich-vu/tang-le" },
      { label: "Khu Mộ & Vị Trí An Nghỉ", href: "/dich-vu/phan-mo" },
      { label: "Dịch Vụ Lưu Tro Cốt", href: "/dich-vu/luu-tro-cot" },
      { label: "Dịch Vụ Khác", href: "/dich-vu/dich-vu-khac" },
    ],
  },
  { label: "Chi Nhánh", href: "/chi-nhanh" },
  {
    label: "Thông Tin",
    href: "#",
    children: [
      { label: "Về Chúng Tôi", href: "/ve-chung-toi" },
      { label: "Tham Quan 360°", href: "/tham-quan-360" },
      { label: "Sự Kiện", href: "/su-kien" },
      { label: "Bài Viết", href: "/bai-viet" },
      { label: "Hỏi & Đáp", href: "/hoi-dap" },
      { label: "Liên Hệ", href: "/lien-he" },
    ],
  },
];

// Tổng đài dịch vụ 24/7 đã được đối chiếu trên cphaco.vn (09/2026).
export const CARELINE = "0818 555 444";

export const HERO = {
  video: "/videos/hero-dji0305-1080.mp4",
  videoMobile: "/videos/hero-dji0305-720.mp4",
  image: "/images/hero-dji0305-poster-optimized.webp",
  title: "Hoa Viên Bình Dương",
  subtitle: "Nơi Cuộc Sống Vĩnh Hằng",
};

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    title: "Hoa Viên Bình Dương",
    body: "Công viên tưởng niệm sinh thái hàng đầu, kiến tạo không gian an nghỉ trang nghiêm giữa thiên nhiên xanh mát.",
    image: "/images/hvbd/linh-hoa-tue-dan-1.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/ve-chung-toi" },
  },
  {
    title: "Cảnh Quan Hữu Tình",
    body: "Quy mô quy hoạch lên đến 300 ha, được kiến tạo hài hòa giữa cảnh quan thiên nhiên và các công trình tâm linh, mang lại sự an yên cho người đã khuất và gia đình.",
    image: "/images/hvbd/park-aerial-roundabout.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/ve-chung-toi" },
  },
  {
    title: "Lễ Cầu Siêu – Cầu An",
    body: "Các nghi lễ tâm linh trang trọng được tổ chức thường niên, gửi gắm lòng thành kính và sự tri ân đến tổ tiên.",
    image: "/images/hvbd/dai-le-cau-sieu-cau-an.jpg",
    cta: { label: "LIÊN HỆ TƯ VẤN", href: "/lien-he" },
  },
  {
    title: "Dịch Vụ Tang Lễ Trọn Gói",
    body: "Đội ngũ chuyên nghiệp đồng hành cùng gia đình trong từng bước, để tang quyến an tâm tiễn biệt người thân một cách trọn vẹn.",
    image: "/images/hvbd/dich-vu-tang-le-1.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/dich-vu/tang-le" },
  },
  {
    title: "Tham Quan Miễn Phí",
    body: "Hệ thống xe đưa đón tận tình, mời quý khách tham quan và tìm hiểu hoa viên trước khi quyết định.",
    image: "/images/hvbd/tour-bus-gate.jpg",
    cta: { label: "ĐẶT LỊCH THAM QUAN", href: "/lien-he" },
  },
];

export const PREPLAN_CARDS: PreplanCard[] = [
  {
    title: "5 lợi ích khi chủ động chuẩn bị từ sớm",
    image: "/images/45-vietnam.png",
    href: "/bai-viet/chuan-bi-hau-su-tu-som",
  },
  {
    title: "Chuyện thầy trò: Khi nào là thời điểm tốt nhất để chuẩn bị chuyện trăm năm?",
    image: "/images/hvbd/chuyen-thay-tro-chuan-bi-chuyen-tram-nam-v3.webp",
    href: "/bai-viet/chuyen-thay-tro-khi-nao-chuan-bi-chuyen-tram-nam",
  },
  {
    title: "Đồi Phượng Hoàng: Chuyện về một người biết lo trước",
    image: "/images/hvbd/doi-phuong-hoang-mo-bai-v2.webp",
    href: "/bai-viet/doi-phuong-hoang-chuyen-ve-mot-nguoi-biet-lo-truoc",
  },
];

export const WATCH_VIDEO = {
  eyebrow: "XEM VIDEO",
  video: "/videos/toan-canh-dji0304-1080.mp4",
  poster: "/images/hvbd/linh-hoa-tue-dan-2.jpg",
};

export const PRODUCTS = {
  title: "Sản Phẩm & Dịch Vụ",
  items: [
    { label: "Khu Mộ & Vị Trí An Nghỉ", href: "/dich-vu/phan-mo" },
    { label: "Dịch Vụ Lưu Tro Cốt", href: "/dich-vu/luu-tro-cot" },
    { label: "Dịch Vụ Tang Lễ", href: "/dich-vu/tang-le" },
    { label: "Chăm Sóc Khu Mộ", href: "/dich-vu/dich-vu-khac" },
    { label: "Tư Vấn Thiết Kế & Xây Dựng Mộ", href: "/dich-vu/dich-vu-khac" },
    { label: "Sanh Phần", href: "/dich-vu/dich-vu-khac" },
  ] as ProductItem[],
  image: "/images/hvbd/doi-ngu-cham-soc-khu-mo-v2.png",
  imageAlt: "Đội ngũ chăm sóc cảnh quan và khu mộ tại Hoa Viên Bình Dương",
};

export const SITE_VIEW_360 = {
  title: "Toàn cảnh Hoa Viên Bình Dương",
  description:
    "Cùng ngắm không gian xanh và những công trình nổi bật của Hoa Viên Bình Dương qua video flycam từ trên cao.",
  videoId: "5eMkcNdEj6U",
  videoTitle: "Video flycam toàn cảnh Hoa Viên Bình Dương",
  poster: "/images/toan-canh-dji0304-poster-optimized.webp",
};

export const ADVANTAGES = {
  eyebrow: "Ba giá trị cốt lõi",
  title: "Chọn sanh phần sớm – An tâm cho nhiều thế hệ",
  subtitle:
    "Trong cuộc sống hiện đại, chuẩn bị trước nơi an nghỉ là cách chủ động hoạch định tương lai, thể hiện trách nhiệm với bản thân và sự chu đáo dành cho con cháu.",
  slogan: "Chủ động hôm nay – Nhẹ gánh người thân – Trọn nghĩa mai sau.",
  cta: { label: "LIÊN HỆ TƯ VẤN", href: "/lien-he" },
  cards: [
    {
      icon: "shield",
      pillar: "Thiên thời",
      title: "Hợp pháp",
      tagline: "Vững tin lâu dài",
      description:
        "**Pháp lý rõ ràng, quyền lợi minh bạch**; các khoản phí và trách nhiệm chăm sóc được xác lập theo **hợp đồng, thỏa thuận và quy định pháp luật**, tạo sự an tâm lâu dài.",
    },
    {
      icon: "scale",
      pillar: "Địa lợi",
      title: "Hợp lý",
      tagline: "Chủ động hôm nay",
      description:
        "Quỹ đất quy hoạch **khoảng 300 ha**, nhiều sản phẩm và **mức giá phù hợp** để chủ động ngân sách. Giao thông kết nối thuận tiện; nền tảng quản lý, tra cứu và tương tác số được cung cấp **miễn phí** theo chính sách của Hoa Viên.",
    },
    {
      icon: "heart",
      pillar: "Nhân hòa",
      title: "Hợp lòng",
      tagline: "Trọn nghĩa mai sau",
      description:
        "**Đa dạng tiểu khu, cảnh quan và không gian tâm linh** để lựa chọn nơi an nghỉ phù hợp văn hóa, tín ngưỡng, nguyện vọng gia đình; dễ tìm, dễ nhớ, thuận tiện thăm viếng và **gìn giữ nghĩa tình nhiều thế hệ**.",
    },
  ] as AdvantageCard[],
};

export const QUOTE = {
  text: "Chúng ta vun đắp cho cuộc sống thêm ý nghĩa bằng những mục tiêu mới và lối sống lành mạnh. Ta cũng có thể chủ động lập kế hoạch cho chặng đường cuối cùng một cách an nhiên, tự mình gánh vác trọn vẹn trách nhiệm với cuộc đời và hạnh phúc của bản thân – bởi ai cũng xứng đáng được bình an trong tâm, hôm nay và mãi về sau.",
  background: "/images/joe-yates-wNOymf_yTUA-unsplashaa.jpg",
};

export const TESTIMONIALS_INTRO = {
  title: "Cảm Nhận Của Khách Hàng",
  body: "Những chia sẻ chân thành từ khách hàng là nguồn động lực để chúng tôi tiếp tục hành trình của sự sẻ chia và tận tâm.",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    title: "Dịch vụ tận tâm và chu đáo",
    excerpt:
      "Gia đình chúng tôi xin gửi lời cảm ơn chân thành đến đội ngũ Hoa Viên Bình Dương vì sự phục vụ tận tâm, chu đáo trong suốt tang lễ của cha chúng tôi. Mọi việc đều được lo liệu trọn vẹn…",
  },
  {
    title: "Chuyên nghiệp trong từng chi tiết",
    excerpt:
      "Gia đình rất trân trọng sự chuyên nghiệp và chu toàn của các anh chị nhân viên. Mất mát để lại nỗi đau khó nguôi ngoai, nhưng tình người và sự sẻ chia đã giúp chúng tôi vững vàng hơn rất nhiều…",
  },
  {
    title: "Cảnh quan đẹp và quy hoạch bài bản",
    excerpt:
      "Chúng tôi đặc biệt ấn tượng với cảnh quan xanh mát, không gian trang nghiêm và sự sắp xếp bài bản của hoa viên. Xin cảm ơn đội ngũ đã đồng hành cùng gia đình trong thời khắc khó khăn nhất…",
  },
];

export const FOOTER_COLUMNS: FooterLinkColumn[] = [
  {
    heading: "Hỗ Trợ",
    links: [
      { label: "Cần Hỗ Trợ Ngay", href: "/ho-tro/khi-co-nguoi-than-qua-doi" },
      { label: "Chuẩn Bị Từ Sớm", href: "/ho-tro/chuan-bi-tu-som" },
    ],
  },
  {
    heading: "Lựa Chọn Dịch Vụ",
    links: [
      { label: "Dịch Vụ Tang Lễ", href: "/dich-vu/tang-le" },
      { label: "Khu Mộ & Vị Trí An Nghỉ", href: "/dich-vu/phan-mo" },
      { label: "Dịch Vụ Lưu Tro Cốt", href: "/dich-vu/luu-tro-cot" },
      { label: "Dịch Vụ Khác", href: "/dich-vu/dich-vu-khac" },
    ],
  },
  {
    heading: "Thông Tin",
    links: [
      { label: "Về Chúng Tôi", href: "/ve-chung-toi" },
      { label: "Tham Quan 360°", href: "/tham-quan-360" },
      { label: "Chi Nhánh", href: "/chi-nhanh" },
      { label: "Liên Hệ", href: "/lien-he" },
      { label: "Sự Kiện", href: "/su-kien" },
      { label: "Bài Viết", href: "/bai-viet" },
      { label: "Hỏi & Đáp", href: "/hoi-dap" },
      { label: "Chính Sách Quyền Riêng Tư", href: "/chinh-sach-quyen-rieng-tu" },
    ],
  },
];

// Các nút tiện ích (Cẩm Nang, Cổng Khách Hàng, Cổng Đại Lý) chưa có trang —
// tạm ẩn cho tới khi có nội dung thật của Hoa Viên Bình Dương.
export const FOOTER_BUTTONS: { label: string; href: string }[] = [];

export const FOOTER_ADDRESS = {
  office: "Văn Phòng Chính",
  address:
    "Hoa Viên Nghĩa Trang Bình Dương, Khu phố Bông Trang, phường Chánh Phú Hòa, TP. Hồ Chí Minh.",
  hours:
    "Giờ làm việc: 7h30 – 17h00, tất cả các ngày trong tuần (kể cả Chủ nhật và ngày lễ).",
  website: "cphaco.vn",
  websiteUrl: "https://cphaco.vn",
  mapUrl: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
  copyright:
    "© 2026 Công ty CP Đầu tư Xây dựng Chánh Phú Hòa. Bảo lưu mọi quyền.",
};
