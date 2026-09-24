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
  { label: "Nhìn Lại Đêm Diễn", href: "https://demdientrian.cphaco.vn/" },
  {
    label: "Hỗ Trợ",
    href: "#",
    children: [
      { label: "Khi Có Người Thân Qua Đời", href: "/ho-tro/khi-co-nguoi-than-qua-doi" },
      { label: "Chuẩn Bị Từ Sớm", href: "/ho-tro/chuan-bi-tu-som" },
    ],
  },
  {
    label: "Lựa Chọn Dịch Vụ",
    href: "#",
    children: [
      { label: "Dịch Vụ Tang Lễ", href: "/dich-vu/tang-le" },
      { label: "Phần Mộ", href: "/dich-vu/phan-mo" },
      { label: "Dịch Vụ Lưu Tro Cốt", href: "/dich-vu/luu-tro-cot" },
      { label: "Dịch Vụ Khác", href: "/dich-vu/dich-vu-khac" },
    ],
  },
  {
    label: "Thông Tin",
    href: "#",
    children: [
      { label: "Về Chúng Tôi", href: "/ve-chung-toi" },
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

export const CULTURE = {
  eyebrow: "HOA VIÊN BÌNH DƯƠNG",
  title: "Văn Hóa & Tương Lai",
  body: "Một nền văn hóa đã trường tồn hàng ngàn năm tựa như dòng nước – góp nhặt từng chút một để rồi hình thành nên bề dày lịch sử. Hoa Viên Bình Dương thấu hiểu sâu sắc điều này, tự hào gìn giữ truyền thống và văn hóa hiếu nghĩa của dân tộc bằng việc mang đến hệ thống dịch vụ tang lễ toàn diện, để tôn vinh và trân trọng từng cuộc đời.",
  details: [
    "Chúng tôi nhìn cuộc sống bằng sự trân trọng và lắng nghe bằng cả tấm lòng. Mỗi nghi thức tưởng niệm không chỉ là lời tiễn biệt mà còn là cách gia đình gìn giữ ký ức, tình thân và những giá trị đã được trao truyền qua nhiều thế hệ.",
    "Bằng việc kết hợp truyền thống với cách tổ chức phù hợp đời sống hiện đại, Hoa Viên Bình Dương hướng đến một không gian nơi mọi người đã khuất đều được tưởng nhớ trang nghiêm, không phân biệt tín ngưỡng hay hoàn cảnh.",
  ],
};

export const CARING = {
  title: "Trân Trọng Từng Cuộc Đời",
  body: "Với hệ thống tiện ích đồng bộ cùng các sản phẩm và dịch vụ toàn diện, Hoa Viên Bình Dương mong muốn mang đến sự đồng hành ấm áp trong những thời khắc thiêng liêng. “Trân trọng từng cuộc đời” là triết lý của chúng tôi – nơi mỗi cuộc đời đều ý nghĩa và đáng quý. Đội ngũ Hoa Viên luôn nỗ lực để người thân của mỗi gia đình được tôn vinh và tiễn biệt một cách trọn vẹn, bằng tất cả sự chuyên nghiệp và tận tâm.",
  background: "/images/83609s.jpg",
};

export const PREPLAN_CARDS: PreplanCard[] = [
  {
    title: "5 lợi ích của việc chuẩn bị hậu sự từ sớm",
    image: "/images/45.jpg",
    href: "/bai-viet/chuan-bi-hau-su-tu-som",
  },
  {
    title: "Khi nào nên bắt đầu chuẩn bị?",
    image: "/images/920.jpg",
    href: "/ho-tro/chuan-bi-tu-som",
  },
  {
    title: "Ai nên chuẩn bị hậu sự từ sớm?",
    image: "/images/1661.jpg",
    href: "/ho-tro/chuan-bi-tu-som",
  },
];

export const WATCH_VIDEO = {
  eyebrow: "XEM VIDEO",
  video: "/videos/resize-eng.mp4",
  poster: "/images/hvbd/linh-hoa-tue-dan-2.jpg",
};

export const PRODUCTS = {
  title: "Sản Phẩm & Dịch Vụ",
  items: [
    { label: "Phần Mộ", href: "/dich-vu/phan-mo" },
    { label: "Dịch Vụ Lưu Tro Cốt", href: "/dich-vu/luu-tro-cot" },
    { label: "Dịch Vụ Tang Lễ", href: "/dich-vu/tang-le" },
    { label: "Chăm Sóc Mộ Phần", href: "/dich-vu/dich-vu-khac" },
    { label: "Tư Vấn Thiết Kế & Xây Dựng Mộ", href: "/dich-vu/dich-vu-khac" },
    { label: "Sanh Phần", href: "/dich-vu/dich-vu-khac" },
  ] as ProductItem[],
  image: "/images/hvbd/TV da sua.jpg",
  imageAlt: "Khu mộ song thân trong cảnh quan xanh tại Hoa Viên Bình Dương",
};

export const SITE_VIEW_360 = {
  eyebrow: "THAM QUAN TRỰC TUYẾN",
  title: "Toàn cảnh Hoa Viên Bình Dương",
  description:
    "Khám phá không gian xanh, cảnh quan và các công trình nổi bật của hoa viên qua góc nhìn toàn cảnh.",
  video: "/videos/toan-canh-dji0304-1080.mp4",
  videoMobile: "/videos/toan-canh-dji0304-720.mp4",
  poster: "/images/toan-canh-dji0304-poster-optimized.webp",
};

export const ADVANTAGES = {
  title: "5 lợi ích khi chuẩn bị hậu sự từ sớm cùng Hoa Viên Bình Dương",
  subtitle: "Nguyện vọng của gia đình là ưu tiên hàng đầu",
  cta: { label: "ĐẶT LỊCH HẸN", href: "/lien-he" },
  cards: [
    {
      icon: "/images/PrePlan_Icon_Trust-Fund-150x150.png",
      title: "Chăm sóc cảnh quan lâu dài",
      description:
        "Đường sá, cây xanh, cảnh quan và các khu vực chung được đội ngũ Hoa Viên chăm sóc thường xuyên.",
    },
    {
      icon: "/images/PrePlan_Icon_FengShui.png",
      title: "Phong thủy hữu tình",
      description:
        "Hoa viên được các bậc thầy phong thủy uy tín đánh giá cao về thế đất và vượng khí.",
    },
    {
      icon: "/images/PrePlan_Icon_0-interest.png",
      title: "Phương án thanh toán linh hoạt",
      description:
        "Quý khách được tư vấn phương án thanh toán theo chính sách áp dụng tại từng thời điểm.",
    },
    {
      icon: "/images/PrePlan_Icon_Comprehensive.png",
      title: "Tiện ích toàn diện",
      description:
        "Hệ thống hoa viên và trung tâm tích hợp với đầy đủ tiện ích cùng đội ngũ phục vụ chuyên nghiệp.",
    },
    {
      icon: "/images/PrePlan_Icon_Majestic.png",
      title: "Kiến trúc trang nghiêm",
      description:
        "Mỗi khu trong hoa viên đều được thiết kế với kiến trúc thanh nhã, trang nghiêm, mang lại sự bình an và thư thái.",
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
      { label: "Khi Có Người Thân Qua Đời", href: "/ho-tro/khi-co-nguoi-than-qua-doi" },
      { label: "Chuẩn Bị Từ Sớm", href: "/ho-tro/chuan-bi-tu-som" },
    ],
  },
  {
    heading: "Lựa Chọn Dịch Vụ",
    links: [
      { label: "Dịch Vụ Tang Lễ", href: "/dich-vu/tang-le" },
      { label: "Phần Mộ", href: "/dich-vu/phan-mo" },
      { label: "Dịch Vụ Lưu Tro Cốt", href: "/dich-vu/luu-tro-cot" },
      { label: "Dịch Vụ Khác", href: "/dich-vu/dich-vu-khac" },
    ],
  },
  {
    heading: "Thông Tin",
    links: [
      { label: "Về Chúng Tôi", href: "/ve-chung-toi" },
      { label: "Chi Nhánh", href: "/lien-he" },
      { label: "Liên Hệ", href: "/lien-he" },
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
    "Hoa Viên Nghĩa Trang Bình Dương, Khu phố 1B, phường Chánh Phú Hòa, TP. Hồ Chí Minh.",
  hours:
    "Giờ làm việc: 7h30 – 17h00, tất cả các ngày trong tuần (kể cả Chủ nhật và ngày lễ).",
  website: "cphaco.vn",
  websiteUrl: "https://cphaco.vn",
  mapUrl: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
  copyright:
    "© 2026 Công ty CP Đầu tư Xây dựng Chánh Phú Hòa. Bảo lưu mọi quyền.",
};
