/** Nội dung trang Phần Mộ — Hoa Viên Bình Dương */

export const BURIAL_HERO = {
  image: "/images/hvbd/khu-long-phung.jpg",
  video: "/videos/hero-dji0305-1080.mp4",
  videoMobile: "/videos/hero-dji0305-720.mp4",
  title: "Phần Mộ",
  subtitle: "Tĩnh lặng tự nhiên, vẻ đẹp an yên",
};

export const BURIAL_INTRO = {
  eyebrow: "GIỚI THIỆU",
  title: "Nơi an nghỉ vượng khí, khác biệt vượt trội",
  body: "Phong thủy hữu tình được kiến tạo từ những thế đất tự nhiên đặc biệt trong môi trường. Một thế đất phong thủy tốt hội tụ năm yếu tố cát tường: sơn (gọi là “long mạch”), huyệt vị, nguồn nước, thế ôm bao bọc và hướng. Năm yếu tố này khi quy tụ trong một bối cảnh hài hòa sẽ tạo nên môi trường tích tụ vượng khí (hay “sinh khí”). Bởi vậy, phần mộ tọa lạc trên những vùng đất hội đủ các đặc điểm này được tin rằng sẽ mang lại phúc lộc, thịnh vượng và công danh cho con cháu đời sau.",
  details: [
    "Bên cạnh yếu tố cảnh quan, một nơi an nghỉ lâu dài cần được xem xét về quy hoạch, khả năng tiếp cận, chất lượng chăm sóc và sự thuận tiện khi gia đình đến thăm viếng. Các khu vực tại Hoa Viên được bố trí theo từng đặc điểm và nhu cầu sử dụng khác nhau.",
    "Gia đình nên tham quan thực tế, xem sơ đồ vị trí và trao đổi kỹ về diện tích, hướng, thiết kế, phạm vi chăm sóc cùng những quy định xây dựng trước khi lựa chọn.",
  ],
};

export const COMMITMENT = {
  eyebrow: "XEM VIDEO",
  title: "Lời Cam Kết",
  body: "Một lời cam kết vượt qua mọi giới hạn được gắn kết bằng tình yêu thương chân thành. Tại Hoa Viên Bình Dương, hãy an tâm rằng việc thực hiện trọn vẹn cam kết đó chính là lời hứa của chúng tôi.",
  cta: { label: "KHÁM PHÁ", href: "/lien-he" },
  poster: "/images/video-commit.jpg",
  video: "/videos/14444444.mp4",
};

export interface PlotType {
  eyebrow: string;
  title: string;
  body: string;
  details: string[];
  images: string[];
  buttons: { label: string; href: string }[];
  imageFirst: boolean;
  dark: boolean; // true → indigo bg block, white text
}

export const PLOT_TYPES_HEADING = {
  eyebrow: "KHÁM PHÁ",
  title: "Các Khu Mộ Đơn Tiêu Biểu",
};

const PLOT_BUTTONS = [{ label: "NHẬN BÁO GIÁ", href: "/lien-he" }];

export const PLOT_TYPES: PlotType[] = [
  {
    eyebrow: "GÓI TIÊU CHUẨN",
    title: "Khu Long Phụng Minh Đồ",
    body: "An vị trang nghiêm · Chi phí hợp lý · Gần Chùa Thiên Phước. Khu mộ đơn – đôi được quy hoạch tiêu chuẩn với chi phí hợp lý, nằm gần Chùa Thiên Phước nên thuận tiện hương khói, lễ bái và phù hợp tín ngưỡng Phật giáo. Diện tích tiêu chuẩn 5,735 m²/phần mộ; nằm giữa hai trục đường chính Minh Đạo – Minh Lộc; đường nội khu 4,5 m; đường giữa hai hàng mộ 2 m.",
    details: ["Khu vực được tổ chức theo các dãy mộ rõ ràng, tạo thuận tiện cho việc tìm vị trí và chăm sóc. Gia đình có thể trao đổi thêm về lựa chọn mộ đơn, mộ đôi, hướng và mẫu thiết kế phù hợp."],
    images: [
      "/images/hvbd/khu-long-phung.jpg",
      "/images/hvbd/chua-thien-phuoc.jpg",
      "/images/hvbd/long-phung.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: true,
    dark: false,
  },
  {
    eyebrow: "GÓI TRANG TRỌNG",
    title: "Khu Đại Lộ Vĩnh Hằng",
    body: "Vị trí trung tâm · Dễ thăm viếng · Gần các công trình tâm linh. Khu mộ nằm gần cổng chính, kề cận các công trình tâm linh trọng điểm của Hoa Viên, thuận tiện di chuyển và tìm vị trí. Diện tích tiêu chuẩn 11,63 m²/phần mộ; đường chính là trục thần đạo Đại Lộ Vĩnh Hằng; đường nội khu 4,8 m; đường giữa hai hàng mộ 2 m.",
    details: ["Lợi thế của khu vực là khả năng tiếp cận từ các trục đường chính và khoảng cách thuận tiện đến những công trình phục vụ lễ bái. Khi tham quan, gia đình nên kiểm tra vị trí cụ thể trên sơ đồ và lộ trình di chuyển thực tế."],
    images: [
      "/images/hvbd/dai-lo-vinh-hang.jpg",
      "/images/hvbd/vinh-hang-dai.jpg",
      "/images/hvbd/park-aerial-roundabout.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: false,
    dark: false,
  },
  {
    eyebrow: "GÓI CAO CẤP",
    title: "Khu Linh Hoa Tuệ Đàn",
    body: "Suối biếc rừng tre · Chốn về an lạc · Phúc trạch muôn đời. Dễ dàng tìm vị trí “Tọa cát – Hướng cát”, ưu tiên khách hàng quan tâm chuyên sâu về chọn hướng huyệt mộ theo phong thủy; đồng thời là trung tâm tổ chức các lễ hội tâm linh lớn hằng năm. Diện tích tiêu chuẩn 10,87 m²/phần mộ; đường chính Đại Lộ Vĩnh Hằng; đường nội khu 5,2 m; đường giữa hai hàng mộ 2 m.",
    details: ["Cảnh quan tre, mặt nước và các khoảng xanh tạo nên không gian tĩnh tại cho hoạt động tưởng niệm. Gia đình quan tâm đến hướng phần mộ có thể trao đổi trên cơ sở vị trí thực tế và quy hoạch của từng lô."],
    images: [
      "/images/hvbd/linh-hoa-tue-dan-3.jpg",
      "/images/hvbd/linh-hoa-tue-dan-1.jpg",
      "/images/hvbd/dai-le-cau-sieu-cau-an.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: true,
    dark: true,
  },
  {
    eyebrow: "GÓI CAO CẤP",
    title: "Khu Song Thân",
    body: "Không gian gia tộc · Tôn vinh song thân · Kết nối nhiều thế hệ. Khu mộ song thân trung tâm trong nhà thờ họ tộc, tích hợp không gian lưu cốt nhiều thế hệ và quy tụ gia đình. Quy hoạch liền kề, đồng bộ kiến trúc, thiết kế riêng biệt theo dấu ấn từng gia tộc; nằm ở vị trí trung tâm dự án với quỹ đất giá trị cao, giới hạn số lượng. Diện tích tiêu chuẩn 66 m²; đường chính Minh Nghĩa, rộng 6 m.",
    details: ["Không gian được định hướng cho nhu cầu tưởng niệm song thân và gắn kết nhiều thế hệ trong gia đình. Phương án kiến trúc, khu vực thờ tự, lối tiếp cận và khả năng lưu giữ tro cốt cần được thống nhất chi tiết trước khi triển khai."],
    images: [
      "/images/hvbd/khu-song-than-2.jpg",
      "/images/hvbd/khu-song-than-1.jpg",
      "/images/hvbd/khu-song-than-3.jpg",
    ],
    buttons: PLOT_BUTTONS,
    imageFirst: false,
    dark: true,
  },
];

export const FAMILY_PLOT = {
  category: "KHU MỘ GIA TỘC",
  title: "Trúc Lâm Bích Thủy",
  tagline: "Suối biếc rừng tre. Chốn về an lạc. Phúc trạch muôn đời.",
  body: "Không gian an nghỉ dành cho gia đình nhiều thế hệ, được quy hoạch trên nền đất cao thoáng và dốc nhẹ tự nhiên. Khu vực nằm trên trục đường Thiên Thai, gần tượng Phật nhập Niết Bàn và cảnh quan rừng tre thanh tĩnh.",
  images: [
    {
      src: "/images/hvbd/truc-lam-bich-thuy.jpg",
      alt: "Phối cảnh tổng thể khu mộ gia tộc Trúc Lâm Bích Thủy",
    },
    {
      src: "/images/hvbd/khu-gia-toc.jpg",
      alt: "Toàn cảnh khu mộ gia tộc tại Hoa Viên Bình Dương",
    },
  ],
  facts: [
    { label: "DIỆN TÍCH TIÊU CHUẨN", value: "64-81 m²" },
    { label: "QUY MÔ AN TÁNG", value: "Tối đa 10 phần mộ" },
    { label: "ĐƯỜNG CHÍNH", value: "Đường Thiên Thai" },
    { label: "ĐƯỜNG NỘI KHU", value: "Rộng 3,6-4,5 m" },
  ],
  cta: { label: "NHẬN TƯ VẤN KHU GIA TỘC", href: "/lien-he" },
};

export const MEMORIAL_360 = {
  eyebrow: "XEM VIDEO",
  title: "Hoa Viên Bình Dương",
  subtitle: "Video Toàn Cảnh",
  poster: "/images/toan-canh-dji0304-poster-optimized.webp",
  video: "/videos/toan-canh-dji0304-1080.mp4",
  videoMobile: "/videos/toan-canh-dji0304-720.mp4",
};

export const CONSIDERATIONS = {
  title: "8 điều cần cân nhắc khi chọn nơi an táng",
  bannerImage: "/images/1660a.jpg",
  items: [
    { title: "Giá và các khoản chi phí liên quan", body: "Gia đình nên yêu cầu bảng giá và phạm vi dịch vụ rõ ràng, đồng thời xác nhận các khoản như mở huyệt, lấp huyệt, xây dựng và chăm sóc mộ phần được tính riêng hay đã nằm trong hợp đồng." },
    { title: "Vị trí chính xác của phần mộ", body: "Trước khi ký kết, gia đình nên tham quan thực tế và xác nhận vị trí phần mộ trên sơ đồ quy hoạch. Mỗi khu vực có đặc điểm, diện tích và mức chi phí khác nhau." },
    { title: "Bảo trì, tiện ích và dịch vụ", body: "Gia đình nên tìm hiểu đơn vị nào chịu trách nhiệm chăm sóc đường sá, cây xanh và hạ tầng; phạm vi công việc; thời hạn thực hiện; cùng các khoản phí liên quan. Việc tham quan thực tế giúp đánh giá rõ hơn chất lượng cảnh quan và dịch vụ." },
    { title: "Cân nhắc lâu dài cho bản thân và gia đình", body: "Lựa chọn nơi an nghỉ là một quyết định riêng tư nhưng có ảnh hưởng lâu dài đến gia đình. Khoảng cách, đường đi, khả năng thăm viếng và nguyện vọng của các thành viên đều nên được cân nhắc." },
    { title: "Mối liên kết giữa đơn vị vận hành và đơn vị dịch vụ tang lễ", body: "Một hoa viên có mối quan hệ gắn bó với đơn vị cung cấp dịch vụ tang lễ thường mang lại nhiều thuận tiện về vận chuyển cũng như các gói dịch vụ trọn gói khi lo liệu tang lễ." },
    { title: "Các lựa chọn phần mộ", body: "Hoa viên có thể có nhiều lựa chọn như mộ đơn, mộ đôi và khu mộ gia tộc. Vị trí, diện tích, thiết kế và hạng mục đi kèm sẽ ảnh hưởng đến tổng chi phí." },
    { title: "Lắp đặt bia mộ và công trình", body: "Hầu hết hoa viên đều có những quy định hoặc giới hạn về lựa chọn bia mộ và công trình nhằm giữ gìn tính thẩm mỹ của cảnh quan. Một số nơi yêu cầu sử dụng đơn vị thi công của họ, số khác cho phép tự do thuê nhà thầu riêng. Hãy luôn hỏi rõ quy định của đơn vị về vấn đề này." },
    { title: "Kế hoạch phát triển trong tương lai", body: "Kế hoạch phát triển tương lai của đơn vị vận hành thường phản ánh rõ tình hình tài chính của họ. Ngoài ra, cũng cần biết liệu các kế hoạch đó có ảnh hưởng tiêu cực đến thẩm mỹ của phần mộ hiện tại hay không." },
  ],
};

export const CEMETERIES = {
  title: "Khác biệt giữa hoa viên và nghĩa trang truyền thống",
  image: "/images/hvbd/family-walk.jpg",
  imageAlt: "Gia đình nhiều thế hệ dạo bước trong không gian xanh tại Hoa Viên Bình Dương",
  body: "Khi chuẩn bị nơi an nghỉ cho bản thân hoặc người thân, gia đình có thể bắt gặp các khái niệm “hoa viên” và “nghĩa trang”. Hai cách gọi có cùng chức năng cơ bản, nhưng thường khác nhau về quy hoạch cảnh quan, tiện ích và dịch vụ chăm sóc lâu dài.",
  details: [
    "Nghĩa trang truyền thống thường hình thành qua nhiều giai đoạn nên vị trí, kiểu dáng công trình và lối đi có thể không đồng nhất. Việc quản lý, chăm sóc cảnh quan và hạ tầng cũng tùy thuộc đơn vị hoặc cộng đồng phụ trách.",
    "Hoa viên tưởng niệm được quy hoạch tổng thể với đường nội khu, mảng xanh, khu vực nghi lễ và nguyên tắc kiến trúc chung. Mục tiêu là tạo môi trường trang nghiêm, thuận tiện thăm viếng và có kế hoạch chăm sóc lâu dài. Gia đình vẫn nên kiểm tra kỹ hợp đồng, phạm vi dịch vụ và quy định của từng đơn vị vận hành.",
  ],
};
