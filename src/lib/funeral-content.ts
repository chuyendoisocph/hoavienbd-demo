/** Nội dung trang Dịch Vụ Tang Lễ — Hoa Viên Bình Dương */

export const FUNERAL_HERO = {
  image: "/images/hvbd/dich-vu-tang-le-3.jpg",
  title: "Dịch Vụ Tang Lễ",
  subtitle: "Tận tâm trong từng nghi thức",
};

export const FUNERAL_INTRO = {
  eyebrow: "DỊCH VỤ TANG LỄ",
  title: "Gói Dịch Vụ Trọn Gói",
  body: "Lo liệu tang lễ là việc hệ trọng và nhạy cảm. Dù là chuẩn bị trước hay khi hữu sự, việc biết bắt đầu từ đâu và quyết định những gì cần làm có thể khiến nhiều người bối rối, nhất là với những ai chưa từng trực tiếp lo liệu hậu sự. Với bề dày kinh nghiệm trong lĩnh vực dịch vụ tang lễ, Hoa Viên Bình Dương thấu hiểu sâu sắc nỗi trăn trở này.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
  services: [
    "Tư vấn nghi thức & phương án tổ chức",
    "Khâm liệm & nhập quan",
    "Chuẩn bị lễ viếng & bàn thờ",
    "Tang phục & nhạc lễ",
    "Xe tang & điều phối di quan",
    "Rạp, bàn ghế & dịch vụ hỗ trợ",
  ],
};

export const INTRO_WATCH = {
  youtubeId: "msZmffahu1g",
  poster: "/images/hvbd/dich-vu-tang-le-1.jpg",
};

export interface HowStep {
  icon: string;
  title: string;
  body: string;
}

export const HOW_IT_WORKS = {
  title: "Quy Trình Thực Hiện",
  intro:
    "Đội ngũ Hoa Viên phối hợp cùng gia đình chuẩn bị bốn nghi thức chính một cách trang nghiêm, phù hợp với phong tục, tín ngưỡng và nguyện vọng đã thống nhất.",
  steps: [
    {
      icon: "/images/Icon_1_Artboard-1.png",
      title: "Bước 1: Khâm liệm",
      body: "Chuẩn bị chu đáo cho người đã khuất và các vật dụng cần thiết theo nội dung gia đình đã thống nhất.",
    },
    {
      icon: "/images/Icon_1_Artboard-2.png",
      title: "Bước 2: Nhập quan",
      body: "Thực hiện nghi thức nhập quan trang nghiêm, tôn trọng phong tục, tôn giáo và nguyện vọng của gia đình.",
    },
    {
      icon: "/images/Icon_1_Artboard-3.png",
      title: "Bước 3: Lễ viếng",
      body: "Chuẩn bị bàn thờ, không gian lễ viếng, tang phục và nhạc lễ để gia đình, thân hữu cùng tưởng niệm.",
    },
    {
      icon: "/images/Icon_1_Artboard-4.png",
      title: "Bước 4: Di quan",
      body: "Điều phối xe tang và đoàn đưa tiễn đến nơi an táng hoặc hỏa táng theo phương án gia đình đã lựa chọn.",
    },
  ] as HowStep[],
};

export const PARLOURS = {
  title: "Không Gian Nghi Lễ & Tưởng Niệm",
  body: "Hoa Viên Bình Dương tổ chức và hỗ trợ các nghi lễ tưởng niệm trong không gian trang nghiêm, hài hòa với cảnh quan xanh. Từng khu vực được chuẩn bị chỉn chu để gia đình, thân hữu cùng tiễn biệt người đã khuất theo tín ngưỡng và nguyện vọng đã thống nhất.",
  note: "Không gian và hình thức nghi lễ được tư vấn theo nhu cầu thực tế của từng gia đình.",
  slides: [
    { image: "/images/hvbd/dai-le-cau-sieu-cau-an.jpg", caption: "Không Gian Cầu Siêu – Cầu An" },
    { image: "/images/hvbd/dai-le-vu-lan.jpg", caption: "Nghi Lễ Tưởng Niệm Trang Nghiêm" },
    { image: "/images/hvbd/dich-vu-tang-le-2.jpg", caption: "Nghi Thức Di Quan Chỉn Chu" },
    { image: "/images/hvbd/dich-vu-tang-le-1.jpg", caption: "Đội Ngũ Điều Phối Chuyên Nghiệp" },
  ],
};

export const CASKETS = {
  title: "Quan Tài & Bình Tro Cốt",
  bodyOne:
    "Trang nghiêm và chất lượng cao, nổi bật với tay nghề thủ công tinh xảo tôn lên dáng vẻ tự nhiên và thanh nhã, được chế tác từ chất liệu thượng hạng.",
  bodyTwo:
    "Được tuyển chọn từ những chất liệu tinh tuyển và chế tác bằng tay nghề thủ công điêu luyện, tạo nên một tác phẩm độc bản với những đường chạm khắc tinh tế, dáng hình và chất lượng vượt trội.",
  note: "Mẫu mã và hạng mục đi kèm được tư vấn theo nhu cầu thực tế.",
  caskets: [
    "/images/nCasket-Honour1.png",
    "/images/nCasket-Harmony1.png",
    "/images/nCasket-Elegant1.png",
    "/images/nCasket-Gracious-1-1.png",
    "/images/nCasket-Blessing1-1.png",
  ],
  urns: [
    { image: "/images/nUrn-honour-3.png", label: "Bình Tro Cốt Cao Cấp" },
    { image: "/images/nUrn-blessing1-1.png", label: "Bình Tro Cốt Công Giáo" },
    { image: "/images/nurn-elegant-C.png", label: "Bình Tro Cốt Hoa Văn Thanh Nhã" },
    { image: "/images/nurn-harmony.png", label: "Bình Tro Cốt Tiêu Chuẩn" },
  ],
};

export const CASKET_WATCH = {
  youtubeId: "OLvh1_cUk48",
  poster: "/images/caraaa.jpg",
};

export const REASONS = {
  title: "6 Lý Do",
  subtitle: "để gia đình an tâm lựa chọn Hoa Viên Bình Dương",
  items: [
    "Tiếp nhận và tư vấn kịp thời khi gia đình cần",
    "Phối hợp trọn gói từ khâm liệm đến di quan",
    "Nghi thức phù hợp phong tục, tôn giáo và nguyện vọng",
    "Đội ngũ có kinh nghiệm, phục vụ tận tâm và chỉn chu",
    "Không gian và phương tiện phục vụ trang nghiêm",
    "Hạng mục dịch vụ được trao đổi rõ ràng trước khi thực hiện",
  ],
};

export const CARE_TEAM = {
  image: "/images/hvbd/dich-vu-tang-le-1.jpg",
  title: "Đội Ngũ Phục Vụ Tận Tâm",
  subtitle: "Đồng hành cùng gia đình trong từng nghi thức",
  body: "Đội ngũ Hoa Viên Bình Dương đồng hành từ khi tiếp nhận nhu cầu, chuẩn bị khâm liệm, nhập quan và lễ viếng đến điều phối xe tang, di quan, an táng hoặc hỏa táng. Mỗi công việc được thực hiện chỉn chu, tôn trọng phong tục, tín ngưỡng và nguyện vọng riêng của từng gia đình.",
  cta: { label: "LIÊN HỆ TƯ VẤN", href: "/resources/contact-us-new" },
};

export const PLANS = {
  title: "DỊCH VỤ TANG LỄ & HẬU SỰ",
  introLead: "Hoa Viên Bình Dương tư vấn giải pháp phù hợp với nhu cầu, tín ngưỡng và điều kiện của từng gia đình. ",
  introBold: "Mọi hạng mục sẽ được trao đổi rõ ràng trước khi thực hiện.",
  buttons: [
    { label: "NHẬN TƯ VẤN DỊCH VỤ", href: "/resources/contact-us-new" },
    { label: "DỊCH VỤ AN TÁNG", href: "/planning-options/burial" },
    { label: "DỊCH VỤ HỎA TÁNG", href: "/planning-options/cremation" },
    { label: "LƯU GIỮ TRO CỐT", href: "/planning-options/cremation" },
  ],
};

export const GUIDE = {
  bannerImage: "/images/hvbd/family-walk.jpg",
  title: "Cẩm nang chọn đơn vị dịch vụ tang lễ",
  body: "Lựa chọn đơn vị dịch vụ tang lễ phù hợp giúp gia đình được hướng dẫn rõ ràng và giảm bớt áp lực khi lo liệu hậu sự. Một đơn vị uy tín cần cung cấp thông tin minh bạch, tôn trọng tín ngưỡng và thực hiện đúng những nội dung đã thống nhất.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
  considerTitle: "5 điều cần cân nhắc khi chọn đơn vị dịch vụ tang lễ",
  considerItems: [
    "Tôn giáo và văn hóa",
    "Dịch vụ và sản phẩm",
    "Ngân sách và giá cả",
    "Cơ sở vật chất",
    "Sự an tâm của gia đình",
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
  background: "/images/hvbd/linh-hoa-tue-dan-3.jpg",
  cards: [
    { title: "Đơn vị dịch vụ tang lễ là gì?", image: "/images/hvbd/dich-vu-tang-le-2.jpg", href: "/resources/article" },
    { title: "Chuẩn bị một nghi lễ trang nghiêm", image: "/images/hvbd/dai-le-cau-sieu-cau-an.jpg", href: "/resources/article" },
    { title: "Thăm viếng và tưởng nhớ", image: "/images/hvbd/grave-offering-white.jpg", href: "/resources/article" },
    { title: "An táng hay hỏa táng", image: "/images/hvbd/thien-phuoc-courtyard.jpg", href: "/resources/article" },
  ] as AboutCard[],
};
