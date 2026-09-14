/** Nội dung trang Phần Mộ — Hoa Viên Bình Dương */

export const BURIAL_HERO = {
  image: "/images/hvbd/park-aerial-graves.jpg",
  video: "/videos/hero-dji0305-1080.mp4",
  videoMobile: "/videos/hero-dji0305-720.mp4",
  title: "Phần Mộ",
  subtitle: "Tĩnh lặng tự nhiên, vẻ đẹp an yên",
};

export const BURIAL_INTRO = {
  eyebrow: "GIỚI THIỆU",
  title: "Nơi an nghỉ vượng khí, khác biệt vượt trội",
  body: "Phong thủy hữu tình được kiến tạo từ những thế đất tự nhiên đặc biệt trong môi trường. Một thế đất phong thủy tốt hội tụ năm yếu tố cát tường: sơn (gọi là “long mạch”), huyệt vị, nguồn nước, thế ôm bao bọc và hướng. Năm yếu tố này khi quy tụ trong một bối cảnh hài hòa sẽ tạo nên môi trường tích tụ vượng khí (hay “sinh khí”). Bởi vậy, phần mộ tọa lạc trên những vùng đất hội đủ các đặc điểm này được tin rằng sẽ mang lại phúc lộc, thịnh vượng và công danh cho con cháu đời sau.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
};

export const COMMITMENT = {
  eyebrow: "XEM VIDEO",
  title: "Lời Cam Kết",
  body: "Một lời cam kết vượt qua mọi giới hạn được gắn kết bằng tình yêu thương chân thành. Tại Hoa Viên Bình Dương, hãy an tâm rằng việc thực hiện trọn vẹn cam kết đó chính là lời hứa của chúng tôi.",
  cta: { label: "KHÁM PHÁ", href: "/resources/contact-us-new" },
  poster: "/images/video-commit.jpg",
  video: "/videos/14444444.mp4",
};

export interface PlotType {
  eyebrow: string;
  title: string;
  body: string;
  images: string[];
  buttons: { label: string; href: string }[];
  imageFirst: boolean;
  dark: boolean; // true → indigo bg block, white text
}

export const PLOT_TYPES_HEADING = {
  eyebrow: "KHÁM PHÁ",
  title: "Các Khu Mộ Đơn – Đôi Tiêu Biểu",
};

const PLOT_BUTTONS = [
  { label: "TÌM HIỂU THÊM", href: "https://sanpham.cphaco.vn" },
  { label: "NHẬN BÁO GIÁ", href: "/resources/contact-us-new" },
];

export const PLOT_TYPES: PlotType[] = [
  {
    eyebrow: "GÓI TIÊU CHUẨN",
    title: "Khu Long Phụng Minh Đồ",
    body: "An vị trang nghiêm · Chi phí hợp lý · Gần Chùa Thiên Phước. Khu mộ đơn – đôi được quy hoạch tiêu chuẩn với chi phí hợp lý, nằm gần Chùa Thiên Phước nên thuận tiện hương khói, lễ bái và phù hợp tín ngưỡng Phật giáo. Diện tích tiêu chuẩn 5.735 m²/phần mộ; nằm giữa hai trục đường chính Minh Đạo – Minh Lộc; đường nội khu 4,5 m; đường giữa hai hàng mộ 2 m.",
    images: [
      "/images/hvbd/park-aerial-graves.jpg",
      "/images/hvbd/temple-aerial.jpg",
      "/images/hvbd/memorial-hall-green.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: true,
    dark: false,
  },
  {
    eyebrow: "GÓI TRANG TRỌNG",
    title: "Khu Đại Lộ Vĩnh Hằng",
    body: "Vị trí trung tâm · Dễ thăm viếng · Gần trọn tâm linh. Khu mộ nằm gần cổng chính, kề cận các công trình tâm linh trọng điểm của Hoa Viên, di chuyển thuận tiện, dễ tìm và dễ đến. Diện tích tiêu chuẩn 11,63 m²/phần mộ; đường chính là trục thần đạo Đại Lộ Vĩnh Hằng; đường nội khu 4,8 m; đường giữa hai hàng mộ 2 m.",
    images: [
      "/images/hvbd/park-aerial-roundabout.jpg",
      "/images/hvbd/lotus-monument.jpg",
      "/images/hvbd/entrance-gate.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: false,
    dark: false,
  },
  {
    eyebrow: "GÓI CAO CẤP",
    title: "Khu Linh Hoa Tuệ Đàn",
    body: "Suối biếc rừng tre · Chốn về an lạc · Phúc trạch muôn đời. Dễ dàng tìm vị trí “Tọa cát – Hướng cát”, ưu tiên khách hàng quan tâm chuyên sâu về chọn hướng huyệt mộ theo phong thủy; đồng thời là trung tâm tổ chức các lễ hội tâm linh lớn hằng năm. Diện tích tiêu chuẩn 10,87 m²/phần mộ; đường chính Đại Lộ Vĩnh Hằng; đường nội khu 5,2 m; đường giữa hai hàng mộ 2 m.",
    images: [
      "/images/hvbd/monument-panorama.jpg",
      "/images/hvbd/monument-complex-1.jpg",
      "/images/hvbd/ceremony-stage.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: true,
    dark: true,
  },
  {
    eyebrow: "GÓI CAO CẤP",
    title: "Khu Song Thân",
    body: "Không gian gia tộc · Tôn vinh song thân · Kết nối nhiều thế hệ. Khu mộ song thân trung tâm trong nhà thờ họ tộc, tích hợp không gian lưu cốt nhiều thế hệ và quy tụ gia đình. Quy hoạch liền kề, đồng bộ kiến trúc, thiết kế riêng biệt theo dấu ấn từng gia tộc; nằm ở vị trí trung tâm dự án với quỹ đất giá trị cao, giới hạn số lượng. Diện tích tiêu chuẩn 66 m²; đường chính Minh Nghĩa, rộng 6 m.",
    images: [
      "/images/hvbd/temple-aerial.jpg",
      "/images/hvbd/family-walk.jpg",
      "/images/hvbd/monument-complex-2.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: false,
    dark: true,
  },
];

export const MEMORIAL_360 = {
  eyebrow: "XEM VIDEO",
  title: "Hoa Viên Bình Dương",
  subtitle: "Video Toàn Cảnh",
  poster: "/images/poster-toan-canh-hoa-vien-moi.jpg",
  video: "/videos/toan-canh-hoa-vien.mp4",
};

export const CONSIDERATIONS = {
  title: "8 điều cần cân nhắc khi chọn nơi an táng",
  bannerImage: "/images/1660a.jpg",
  items: [
    { title: "Giá cả và các khoản phí phát sinh", body: "Giá cả tất nhiên là yếu tố quan trọng hàng đầu. Tuy nhiên, bạn nên thận trọng với cách tính giá phần mộ. Hãy kiểm tra xem giá đã bao gồm các khoản phí phát sinh hay phí ẩn nào sẽ được cộng thêm về sau hay chưa. Một số khoản có thể chỉ trả một lần như phí mở và lấp huyệt. Một số nơi thu phí bảo trì một lần khi mua, trong khi nơi khác lại thu theo năm." },
    { title: "Vị trí chính xác của phần mộ", body: "Hãy xác định chính xác vị trí phần mộ trước khi đặt bút ký mua. Một hoa viên thường có nhiều hạng phần mộ với mức giá khác nhau. Đôi khi nhân viên tư vấn có thể giới thiệu mẫu đẹp nhất của mỗi hạng. Điều bạn không mong muốn nhất là phát hiện phần mộ mình đã mua nằm ở vị trí có những đặc điểm không như ý." },
    { title: "Bảo trì, tiện ích và dịch vụ", body: "Việc bảo trì định kỳ cùng các tiện ích, dịch vụ đi kèm là một trong những ưu thế lớn nhất của hoa viên so với nghĩa trang thông thường. Tuy vậy, bạn nên tìm hiểu xem những tiện ích này có thực sự giá trị và ai chịu trách nhiệm về chúng. Một đơn vị có quỹ bảo trì luôn an toàn hơn đơn vị không có. Bạn cũng nên đến tận nơi để chắc rằng cảnh quan được chăm sóc tốt." },
    { title: "Cân nhắc lâu dài cho bản thân và gia đình", body: "Nhiều người xem việc chọn nơi an nghỉ cuối cùng là một quyết định rất riêng tư. Dù điều quan trọng nhất là bạn hài lòng với nơi mình chọn, bạn cũng nên cân nhắc nhu cầu và ý kiến của gia đình. Bạn sẽ không muốn chọn một vị trí gây bất tiện hay khiến người thân ngại đến viếng thăm." },
    { title: "Mối liên kết giữa đơn vị vận hành và đơn vị dịch vụ tang lễ", body: "Một hoa viên có mối quan hệ gắn bó với đơn vị cung cấp dịch vụ tang lễ thường mang lại nhiều thuận tiện về vận chuyển cũng như các gói dịch vụ trọn gói khi lo liệu tang lễ." },
    { title: "Các lựa chọn phần mộ", body: "Hầu hết hoa viên đều có nhiều lựa chọn phần mộ như mộ đơn, mộ đôi hay mộ gia đình. Bên cạnh đó, hãy luôn nhớ rằng vị trí ảnh hưởng đáng kể đến chi phí. Theo nguyên tắc chung, vị trí càng đẹp thì giá càng cao." },
    { title: "Lắp đặt bia mộ và công trình", body: "Hầu hết hoa viên đều có những quy định hoặc giới hạn về lựa chọn bia mộ và công trình nhằm giữ gìn tính thẩm mỹ của cảnh quan. Một số nơi yêu cầu sử dụng đơn vị thi công của họ, số khác cho phép tự do thuê nhà thầu riêng. Hãy luôn hỏi rõ quy định của đơn vị về vấn đề này." },
    { title: "Kế hoạch phát triển trong tương lai", body: "Kế hoạch phát triển tương lai của đơn vị vận hành thường phản ánh rõ tình hình tài chính của họ. Ngoài ra, cũng cần biết liệu các kế hoạch đó có ảnh hưởng tiêu cực đến thẩm mỹ của phần mộ hiện tại hay không." },
  ],
};

export const CEMETERIES = {
  title: "Khác biệt giữa hoa viên và nghĩa trang truyền thống",
  body: "Khi lập kế hoạch trước hoặc tìm nơi an nghỉ cho người thân, bạn có thể bắt gặp các khái niệm “hoa viên” và “nghĩa trang”. Đôi khi hai từ này được dùng thay thế cho nhau. Liệu chúng có cùng nghĩa? Dù mục đích có thể giống nhau, hoa viên và nghĩa trang truyền thống thực chất khác biệt rõ rệt.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
};
