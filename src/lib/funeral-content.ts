/** Nội dung trang Dịch Vụ Tang Lễ — Hoa Viên Bình Dương */

export const FUNERAL_HERO = {
  image: "/images/hvbd/family-walk.jpg",
  title: "Dịch Vụ Tang Lễ",
  subtitle: "Tận Tâm . Chu Toàn .",
};

export const FUNERAL_INTRO = {
  eyebrow: "DỊCH VỤ TANG LỄ",
  title: "Gói Dịch Vụ Trọn Gói",
  body: "Lo liệu tang lễ là việc hệ trọng và nhạy cảm. Dù là chuẩn bị trước hay khi hữu sự, việc biết bắt đầu từ đâu và quyết định những gì cần làm có thể khiến nhiều người bối rối, nhất là với những ai chưa từng trực tiếp lo liệu hậu sự. Với bề dày kinh nghiệm trong lĩnh vực dịch vụ tang lễ, Hoa Viên Bình Dương thấu hiểu sâu sắc nỗi trăn trở này.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
  services: [
    "Tư vấn",
    "Dịch vụ khâm liệm & nhập quan",
    "Chuẩn bị lễ tưởng niệm",
    "Điều phối tang lễ & lễ tưởng niệm",
    "Dịch vụ di quan",
    "Sản phẩm & dịch vụ bổ sung",
  ],
};

export const INTRO_WATCH = {
  youtubeId: "msZmffahu1g",
  poster: "/images/nckl-showroom.jpg",
};

export interface HowStep {
  icon: string;
  title: string;
  body: string;
}

export const HOW_IT_WORKS = {
  title: "Quy Trình Thực Hiện",
  intro:
    "Với gói dịch vụ trọn gói, chúng tôi đảm bảo mọi nhu cầu được lo liệu chu toàn qua bốn bước đơn giản, để bạn và gia đình được trọn vẹn tiễn biệt người thân yêu.",
  steps: [
    {
      icon: "/images/Icon_1_Artboard-1.png",
      title: "Bước 1 : Lập kế hoạch",
      body: "Lựa chọn gói dịch vụ phù hợp. Đội ngũ tư vấn tận tình của chúng tôi sẽ hỗ trợ mọi nhu cầu và thắc mắc của bạn.",
    },
    {
      icon: "/images/Icon_1_Artboard-2.png",
      title: "Bước 2 : Vận chuyển",
      body: "Đội ngũ phục vụ chuyên nghiệp sẽ hỗ trợ tiếp nhận và vận chuyển người đã khuất để chuẩn bị cho lễ tang.",
    },
    {
      icon: "/images/Icon_1_Artboard-3.png",
      title: "Bước 3 : Thủ tục giấy tờ",
      body: "Để gia đình an lòng, đội ngũ của chúng tôi sẽ hỗ trợ hoàn tất các thủ tục và giấy tờ cần thiết.",
    },
    {
      icon: "/images/Icon_1_Artboard-4.png",
      title: "Bước 4 : Tổ chức tang lễ",
      body: "Đội ngũ phục vụ chuyên nghiệp sẽ tổ chức tang lễ theo đúng gói dịch vụ đã chọn cùng các yêu cầu khác, với sự tham gia tối thiểu từ tang quyến.",
    },
  ] as HowStep[],
};

export const PARLOURS = {
  title: "Đại Sảnh Tang Lễ",
  body: "Sang trọng và rộng rãi bậc nhất, Đại Sảnh Tang Lễ là nơi tôn vinh và tưởng niệm cuộc đời một cách trang nhã. Được thiết kế để đón tiếp đông đảo quan khách, người thân và bạn bè có thể cùng ôn lại một cuộc đời ý nghĩa trong không gian ấm áp, dịu nhẹ và tiễn biệt một cách trang trọng, vẹn toàn.",
  note: "* Có thể nâng cấp",
  slides: [
    { image: "/images/P23_0950_REV-scaled.jpg", caption: "Nhà Tang Lễ VIP" },
    { image: "/images/nfuguitang-25.jpg", caption: "Nhà Tang Lễ Tiêu Chuẩn" },
    { image: "/images/nfuguitang-31.jpg", caption: "Nhà Tang Lễ Tiêu Chuẩn" },
    { image: "/images/nfuguitang-4.jpg", caption: "Đại Sảnh Tang Lễ" },
  ],
};

export const CASKETS = {
  title: "Quan Tài & Hũ Cốt Cao Cấp",
  bodyOne:
    "Trang nghiêm và chất lượng cao, nổi bật với tay nghề thủ công tinh xảo tôn lên dáng vẻ tự nhiên và thanh nhã, được chế tác từ chất liệu thượng hạng.",
  bodyTwo:
    "Được tuyển chọn từ những chất liệu tinh tuyển và chế tác bằng tay nghề thủ công điêu luyện, tạo nên một tác phẩm độc bản với những đường chạm khắc tinh tế, dáng hình và chất lượng vượt trội.",
  note: "*Trang trí hoa tươi có sẵn khi nâng cấp",
  caskets: [
    "/images/nCasket-Honour1.png",
    "/images/nCasket-Harmony1.png",
    "/images/nCasket-Elegant1.png",
    "/images/nCasket-Gracious-1-1.png",
    "/images/nCasket-Blessing1-1.png",
  ],
  urns: [
    { image: "/images/nUrn-honour-3.png", label: "Hũ Cốt Honour Cao Cấp" },
    { image: "/images/nUrn-blessing1-1.png", label: "Hũ Cốt Gracious Cao Cấp (Công Giáo)" },
    { image: "/images/nurn-elegant-C.png", label: "Hũ Cốt Elegant Cao Cấp" },
    { image: "/images/nurn-harmony.png", label: "Hũ Cốt Harmony Tiêu Chuẩn" },
  ],
};

export const CASKET_WATCH = {
  youtubeId: "OLvh1_cUk48",
  poster: "/images/caraaa.jpg",
};

export const REASONS = {
  title: "6 Lý Do",
  subtitle: "để gửi gắm nhu cầu tang lễ của bạn cho Hoa Viên Bình Dương",
  items: [
    "Uy tín với dịch vụ chuyên nghiệp và xuất sắc",
    "Lựa chọn tốt nhất cho mọi nhu cầu với mức giá hợp lý",
    "Được đảm bảo bởi quỹ tín thác do bên độc lập quản lý",
    "Dịch vụ tang lễ trọn gói bởi đội ngũ chuyên nghiệp",
    "Một tổng đài duy nhất hỗ trợ tức thời",
    "Linh hoạt trong thanh toán",
  ],
};

export const WHITE_LADIES = {
  image: "/images/hvbd/care-team.jpg",
  title: "Đội Ngũ Nữ Phục Vụ",
  subtitle: "Gìn giữ phẩm giá cho những người thân nữ giới của bạn",
  body: "Nhằm gìn giữ phẩm giá cho những người phụ nữ đã khuất, Hoa Viên Bình Dương tự hào giới thiệu đội ngũ nữ phục vụ chuyên nghiệp, đảm trách và lo liệu mọi khâu trong dịch vụ tang lễ. Đội ngũ gồm các nữ chuyên viên khâm liệm, trang điểm, điều phối nghi lễ và nhiều vị trí khác, để dành cho các bà, các mẹ và các con gái sự tôn trọng và trang nghiêm cao nhất, mang lại sự an lòng trọn vẹn.",
  cta: { label: "Dịch Vụ Chăm Sóc & Phục Dựng Di Hài", href: "/resources/contact-us-new" },
};

export const PLANS = {
  title: "GÓI ƯU ĐÃI CÓ THỜI HẠN",
  introLead: "Khám phá các gói dịch vụ hoặc tìm hiểu thêm về ",
  introBold: "Gói Ưu Đãi Có Thời Hạn NV Elegant Plus+.",
  buttons: [
    { label: "GÓI NV ELEGANT PLUS+", href: "/resources/contact-us-new" },
    { label: "GÓI KHU VỰC PHÍA BẮC", href: "/resources/contact-us-new" },
    { label: "GÓI KHU VỰC TRUNG TÂM", href: "/resources/contact-us-new" },
    { label: "GÓI KHU VỰC PHÍA NAM", href: "/resources/contact-us-new" },
  ],
};

export const GUIDE = {
  bannerImage: "/images/1395a.jpg",
  title: "Cẩm nang chọn đơn vị dịch vụ tang lễ",
  body: "Chọn đúng đơn vị dịch vụ tang lễ không chỉ quan trọng trong việc đảm bảo mọi nhu cầu và mối bận tâm của bạn được đáp ứng, mà còn là sự hỗ trợ không thể thiếu. Một đơn vị uy tín sẽ giúp san sẻ gánh nặng và áp lực khi lo liệu tang lễ, để gia đình bạn tập trung vào điều quan trọng hơn trong thời khắc đau buồn.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
  considerTitle: "5 điều cần cân nhắc khi chọn đơn vị dịch vụ tang lễ",
  considerItems: [
    "Tôn giáo và văn hóa",
    "Dịch vụ và sản phẩm",
    "Ngân sách và giá cả",
    "Cơ sở vật chất",
    "Sự thoải mái của bạn",
  ],
  considerCta: { label: "TÌM HIỂU", href: "/resources/contact-us-new" },
};

export interface AboutCard {
  title: string;
  image: string;
  href: string;
}

export const ABOUT = {
  title: "Về Dịch Vụ Tang Lễ & Hậu Sự",
  background: "/images/outdoor-05.jpg",
  cards: [
    { title: "Đơn vị dịch vụ tang lễ là gì?", image: "/images/113.jpg", href: "/resources/article" },
    { title: "Gặp gỡ đơn vị dịch vụ tang lễ", image: "/images/151a.jpg", href: "/resources/article" },
    { title: "Tang lễ", image: "/images/chinh-le-duc-S9XD0IZ6iZA-unsplash-scaled.jpg", href: "/resources/article" },
    { title: "An táng hay hỏa táng", image: "/images/158a.jpg", href: "/resources/article" },
  ] as AboutCard[],
};
