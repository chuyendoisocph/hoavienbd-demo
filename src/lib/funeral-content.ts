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
  details: [
    "Gia đình được hướng dẫn lựa chọn các hạng mục cần thiết theo tín ngưỡng, phong tục, quy mô lễ tang và ngân sách dự kiến. Mỗi phương án được trao đổi rõ ràng trước khi thực hiện để hạn chế những quyết định vội vàng trong lúc tang gia bối rối.",
    "Đội ngũ phụ trách phối hợp xuyên suốt từ tiếp nhận, khâm liệm, nhập quan, chuẩn bị lễ viếng đến di quan, an táng hoặc hỏa táng, giúp gia đình có thêm thời gian ở bên nhau và tưởng nhớ người đã khuất.",
  ],
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

export const FUNERAL_SUPPLIES = {
  eyebrow: "HỖ TRỢ THEO NHU CẦU",
  title: "Vật Dụng Tang Lễ",
  image: "/images/hvbd/dich-vu-tang-le-2.jpg",
  imageAlt: "Đội ngũ Hoa Viên Bình Dương phối hợp thực hiện nghi thức di quan",
  body:
    "Hoa Viên Bình Dương không vận hành danh mục quan tài hoặc bình tro cốt cố định. Khi gia đình có nhu cầu, đội ngũ sẽ tư vấn tiêu chí lựa chọn và phối hợp với đơn vị cung cấp phù hợp.",
  note:
    "Mẫu mã, chất liệu, kích thước, chi phí và khả năng cung ứng được xác nhận theo từng trường hợp trước khi gia đình quyết định.",
  items: [
    "Phù hợp với hình thức an táng hoặc hỏa táng",
    "Tôn trọng tín ngưỡng và nghi thức của gia đình",
    "Trao đổi rõ mẫu, chất liệu và chi phí dự kiến",
    "Phối hợp giao nhận theo thời gian tổ chức",
  ],
  cta: { label: "TRAO ĐỔI NHU CẦU", href: "/lien-he" },
};

export const REASONS = {
  title: "6 Lý Do",
  subtitle: "để gia đình an tâm lựa chọn Hoa Viên Bình Dương",
  items: [
    { title: "Tiếp nhận và tư vấn kịp thời khi gia đình cần", body: "Đầu mối hỗ trợ tiếp nhận thông tin, giải thích các bước cần thực hiện và giúp gia đình xác định những việc ưu tiên trong thời gian đầu." },
    { title: "Phối hợp trọn gói từ khâm liệm đến di quan", body: "Các hạng mục được phối hợp theo một kế hoạch thống nhất, hạn chế việc gia đình phải tự liên hệ nhiều đơn vị trong lúc bối rối." },
    { title: "Nghi thức phù hợp phong tục, tôn giáo và nguyện vọng", body: "Mỗi tang lễ được trao đổi kỹ về tín ngưỡng, tập quán gia đình và mong muốn của người đã khuất để tổ chức trang nghiêm, phù hợp." },
    { title: "Đội ngũ có kinh nghiệm, phục vụ tận tâm và chỉn chu", body: "Nhân sự phụ trách từng công đoạn được phân công rõ ràng, giữ thái độ điềm tĩnh, tôn trọng và hỗ trợ gia đình xuyên suốt buổi lễ." },
    { title: "Không gian và phương tiện phục vụ trang nghiêm", body: "Không gian tổ chức, phương tiện vận chuyển và các vật dụng nghi lễ được chuẩn bị đồng bộ theo phương án đã thống nhất." },
    { title: "Hạng mục dịch vụ được trao đổi rõ ràng trước khi thực hiện", body: "Phạm vi công việc, lựa chọn sản phẩm và chi phí dự kiến cần được xác nhận rõ để gia đình chủ động cân nhắc và kiểm soát ngân sách." },
  ],
};

export const CARE_TEAM = {
  image: "/images/hvbd/dich-vu-tang-le-1.jpg",
  title: "Đội Ngũ Phục Vụ Tận Tâm",
  subtitle: "Đồng hành cùng gia đình trong từng nghi thức",
  body: "Đội ngũ Hoa Viên Bình Dương đồng hành từ khi tiếp nhận nhu cầu, chuẩn bị khâm liệm, nhập quan và lễ viếng đến điều phối xe tang, di quan, an táng hoặc hỏa táng. Mỗi công việc được thực hiện chỉn chu, tôn trọng phong tục, tín ngưỡng và nguyện vọng riêng của từng gia đình.",
  cta: { label: "LIÊN HỆ TƯ VẤN", href: "/lien-he" },
};

export const PLANS = {
  title: "DỊCH VỤ TANG LỄ & HẬU SỰ",
  introLead: "Hoa Viên Bình Dương tư vấn giải pháp phù hợp với nhu cầu, tín ngưỡng và điều kiện của từng gia đình. ",
  introBold: "Mọi hạng mục sẽ được trao đổi rõ ràng trước khi thực hiện.",
  buttons: [
    { label: "NHẬN TƯ VẤN DỊCH VỤ", href: "/lien-he" },
    { label: "DỊCH VỤ AN TÁNG", href: "/dich-vu/phan-mo" },
    { label: "DỊCH VỤ HỎA TÁNG", href: "/dich-vu/luu-tro-cot" },
    { label: "LƯU GIỮ TRO CỐT", href: "/dich-vu/luu-tro-cot" },
  ],
};

export const GUIDE = {
  bannerImage: "/images/hvbd/family-walk.jpg",
  title: "Cẩm nang chọn đơn vị dịch vụ tang lễ",
  body: "Lựa chọn đơn vị dịch vụ tang lễ phù hợp giúp gia đình được hướng dẫn rõ ràng và giảm bớt áp lực khi lo liệu hậu sự. Một đơn vị uy tín cần cung cấp thông tin minh bạch, tôn trọng tín ngưỡng và thực hiện đúng những nội dung đã thống nhất.",
  details: [
    "Gia đình nên dành thời gian tìm hiểu kinh nghiệm, phạm vi dịch vụ, cách phối hợp và phản hồi từ những người từng sử dụng. Không nên quyết định chỉ dựa trên mức giá khi chưa hiểu rõ những hạng mục đã bao gồm và các chi phí có thể phát sinh.",
    "Một đơn vị phù hợp cần biết lắng nghe, giải thích dễ hiểu và không gây áp lực lựa chọn. Cảm giác tin cậy, sự minh bạch và khả năng đáp ứng đúng nghi thức là những yếu tố quan trọng trong suốt quá trình tổ chức.",
  ],
  considerTitle: "5 điều cần cân nhắc khi chọn đơn vị dịch vụ tang lễ",
  considerItems: [
    { title: "Tôn giáo và văn hóa", body: "Đơn vị có hiểu và thực hiện được các nghi thức phù hợp với tín ngưỡng, truyền thống của gia đình hay không?" },
    { title: "Dịch vụ và sản phẩm", body: "Phạm vi dịch vụ có đáp ứng đúng nhu cầu thực tế, có hạng mục bổ sung nào thật sự hữu ích cho gia đình hay không?" },
    { title: "Ngân sách và giá cả", body: "Bảng giá có minh bạch, phản ánh đúng chất lượng phục vụ và nêu rõ những khoản có thể phát sinh hay không?" },
    { title: "Cơ sở vật chất", body: "Không gian, phương tiện và trang thiết bị có phù hợp với quy mô cũng như hình thức tang lễ gia đình mong muốn hay không?" },
    { title: "Sự an tâm của gia đình", body: "Đội ngũ có thể hiện sự thấu cảm, tác phong đúng mực và tập trung giải quyết nhu cầu thay vì tạo áp lực mua thêm dịch vụ hay không?" },
  ],
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
    { title: "Đơn vị dịch vụ tang lễ là gì?", image: "/images/hvbd/dich-vu-tang-le-2.jpg", href: "/bai-viet/can-lam-gi-khi-co-nguoi-than-qua-doi" },
    { title: "Chuẩn bị một nghi lễ trang nghiêm", image: "/images/hvbd/dai-le-cau-sieu-cau-an.jpg", href: "/bai-viet/can-lam-gi-khi-co-nguoi-than-qua-doi" },
    { title: "Thăm viếng và tưởng nhớ", image: "/images/hvbd/grave-offering-white.jpg", href: "/bai-viet/tham-vieng-va-cham-soc-mo-phan" },
    { title: "An táng hay hỏa táng", image: "/images/hvbd/thien-phuoc-courtyard.jpg", href: "/bai-viet/an-tang-hay-hoa-tang" },
  ] as AboutCard[],
};
