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
  {
    label: "Bắt Đầu",
    href: "#",
    children: [
      { label: "Nhu Cầu Cấp Thiết", href: "/getting-started/immediate-need" },
      { label: "Lập Kế Hoạch Trước", href: "/getting-started/pre-planning" },
    ],
  },
  {
    label: "Lựa Chọn Dịch Vụ",
    href: "#",
    children: [
      { label: "Dịch Vụ Tang Lễ", href: "/planning-options/funeral-service" },
      { label: "Phần Mộ", href: "/planning-options/burial" },
      { label: "Lưu Tro Cốt", href: "/planning-options/cremation" },
      { label: "Sản Phẩm Khác", href: "/planning-options/others" },
    ],
  },
  {
    label: "Thông Tin",
    href: "#",
    children: [
      { label: "Về Chúng Tôi", href: "/resources/who-we-are" },
      { label: "Bài Viết", href: "/resources/article" },
      { label: "Hỏi & Đáp", href: "/resources/faq" },
      { label: "Liên Hệ", href: "/resources/contact-us-new" },
    ],
  },
];

// Hotline thật của Hoa Viên Bình Dương (CPHA). Email tạm dùng theo tên miền cphaco.vn — cần xác nhận.
export const CARELINE = "0818 555 444";
export const EMAIL = "info@cphaco.vn";

export const HERO = {
  video: "/videos/hero-hoa-vien-slow.mp4",
  image: "/images/hvbd/lotus-monument.jpg",
  title: "Hoa Viên Bình Dương",
  subtitle: "Nơi Cuộc Sống Vĩnh Hằng",
};

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    title: "Hoa Viên Bình Dương",
    body: "Công viên tưởng niệm sinh thái hàng đầu, kiến tạo không gian an nghỉ trang nghiêm giữa thiên nhiên xanh mát.",
    image: "/images/hvbd/monument-complex-1.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/resources/who-we-are" },
  },
  {
    title: "Cảnh Quan Hữu Tình",
    body: "Hơn 200 hecta hoa viên được quy hoạch bài bản với phong thủy hữu tình, mang lại sự bình an cho người đã khuất và gia đình.",
    image: "/images/hvbd/park-aerial-roundabout.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/resources/who-we-are" },
  },
  {
    title: "Lễ Cầu Siêu – Cầu An",
    body: "Các nghi lễ tâm linh trang trọng được tổ chức thường niên, gửi gắm lòng thành kính và sự tri ân đến tổ tiên.",
    image: "/images/hvbd/ceremony-stage.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/resources/contact-us-new" },
  },
  {
    title: "Dịch Vụ Tang Lễ Trọn Gói",
    body: "Đội ngũ chuyên nghiệp đồng hành cùng gia đình trong từng bước, để bạn an tâm tiễn biệt người thân một cách trọn vẹn.",
    image: "/images/hvbd/procession-1.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/planning-options/funeral-service" },
  },
  {
    title: "Tham Quan Miễn Phí",
    body: "Hệ thống xe đưa đón tận tình, mời quý khách tham quan và tìm hiểu hoa viên trước khi quyết định.",
    image: "/images/hvbd/tour-bus-gate.jpg",
    cta: { label: "Tìm hiểu thêm", href: "/resources/contact-us-new" },
  },
];

export const CULTURE = {
  eyebrow: "HOA VIÊN BÌNH DƯƠNG",
  title: "Văn Hóa & Tương Lai",
  body: "Một nền văn hóa đã trường tồn hàng ngàn năm tựa như dòng nước – góp nhặt từng chút một để rồi hình thành nên bề dày lịch sử. Hoa Viên Bình Dương thấu hiểu sâu sắc điều này, tự hào gìn giữ truyền thống và văn hóa hiếu nghĩa của dân tộc bằng việc mang đến hệ thống dịch vụ tang lễ toàn diện, để tôn vinh và trân trọng từng cuộc đời.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/who-we-are" },
};

export const CARING = {
  title: "Trân Trọng Từng Cuộc Đời",
  body: "Với hệ thống tiện ích đồng bộ cùng các sản phẩm và dịch vụ toàn diện, Hoa Viên Bình Dương mong muốn mang đến trải nghiệm ấm áp và sẻ chia trong thời khắc quan trọng nhất. “Trân trọng từng cuộc đời” là triết lý của chúng tôi – nơi mỗi cuộc đời đều ý nghĩa và đáng quý. Hãy an tâm rằng đội ngũ của chúng tôi luôn nỗ lực để người thân của bạn được tôn vinh và tiễn biệt một cách trọn vẹn, bằng tất cả sự chuyên nghiệp và tận tâm.",
  background: "/images/83609s.jpg",
};

export const PREPLAN_CARDS: PreplanCard[] = [
  {
    title: "5 lợi ích chính của việc lập kế hoạch trước",
    image: "/images/45.jpg",
    href: "/resources/article/5-main-advantages-of-pre-planning",
  },
  {
    title: "Khi nào là thời điểm tốt nhất để lập kế hoạch?",
    image: "/images/920.jpg",
    href: "/getting-started/pre-planning",
  },
  {
    title: "Ai nên lập kế hoạch trước?",
    image: "/images/1661.jpg",
    href: "/getting-started/pre-planning",
  },
];

export const WATCH_VIDEO = {
  eyebrow: "XEM VIDEO",
  video: "/videos/resize-eng.mp4",
  poster: "/images/hvbd/monument-complex-2.jpg",
};

export const PRODUCTS = {
  title: "Sản Phẩm & Dịch Vụ",
  items: [
    { label: "Phần Mộ", href: "/planning-options/burial" },
    { label: "Lưu Tro Cốt", href: "/planning-options/cremation" },
    { label: "Dịch Vụ Tang Lễ", href: "/planning-options/funeral-service" },
    { label: "Bài Vị Tổ Tiên", href: "/planning-options/others" },
    { label: "Đèn Cầu An", href: "/planning-options/others" },
    { label: "Vườn Tưởng Niệm Thú Cưng", href: "/planning-options/others" },
    { label: "Sinh Phần (Mộ Sống)", href: "/planning-options/others" },
  ] as ProductItem[],
  image: "/images/hvbd/columbaria-white.jpg",
};

export const SITE_VIEW_360 = {
  eyebrow: "THAM QUAN TRỰC TUYẾN",
  title: "Toàn cảnh Hoa Viên Bình Dương",
  description:
    "Khám phá không gian xanh, cảnh quan và các công trình nổi bật của hoa viên qua góc nhìn toàn cảnh.",
  video: "/videos/toan-canh-hoa-vien.mp4",
  poster: "/images/poster-toan-canh-hoa-vien-moi.jpg",
};

export const ADVANTAGES = {
  title: "5 lợi ích chính khi lập kế hoạch trước cùng Hoa Viên Bình Dương",
  subtitle: "Nhu cầu của bạn là ưu tiên hàng đầu",
  cta: { label: "ĐẶT LỊCH HẸN", href: "/resources/contact-us-new" },
  cards: [
    {
      icon: "/images/PrePlan_Icon_Trust-Fund-150x150.png",
      title: "Quỹ bảo trì dài hạn",
      description:
        "Hoa viên được duy trì bởi quỹ bảo trì dài hạn, đảm bảo việc chăm sóc đường sá, cảnh quan và hạ tầng luôn được giữ gìn chu đáo theo thời gian.",
    },
    {
      icon: "/images/PrePlan_Icon_FengShui.png",
      title: "Phong thủy hữu tình",
      description:
        "Hoa viên được các bậc thầy phong thủy uy tín đánh giá cao về thế đất và vượng khí.",
    },
    {
      icon: "/images/PrePlan_Icon_0-interest.png",
      title: "Trả góp 0% lãi suất",
      description:
        "An tâm với chương trình trả góp 0% lãi suất lên đến 36 tháng cùng mức trả trước thấp.",
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
    heading: "Bắt Đầu",
    links: [
      { label: "Nhu Cầu Cấp Thiết", href: "/getting-started/immediate-need" },
      { label: "Lập Kế Hoạch Trước", href: "/getting-started/pre-planning" },
    ],
  },
  {
    heading: "Lựa Chọn Dịch Vụ",
    links: [
      { label: "Dịch Vụ Tang Lễ", href: "/planning-options/funeral-service" },
      { label: "Phần Mộ", href: "/planning-options/burial" },
      { label: "Lưu Tro Cốt", href: "/planning-options/cremation" },
      { label: "Sản Phẩm Khác", href: "/planning-options/others" },
    ],
  },
  {
    heading: "Thông Tin",
    links: [
      { label: "Về Chúng Tôi", href: "/resources/who-we-are" },
      { label: "Chi Nhánh", href: "/resources/contact-us-new" },
      { label: "Liên Hệ", href: "/resources/contact-us-new" },
      { label: "Bài Viết", href: "/resources/article" },
      { label: "Hỏi & Đáp", href: "/resources/faq" },
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
