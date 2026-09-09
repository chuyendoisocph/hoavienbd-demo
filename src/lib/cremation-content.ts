/** Nội dung trang Lưu Tro Cốt — Hoa Viên Bình Dương */

export const CREMATION_HERO = {
  background: "/images/hvbd/columbaria-blue.jpg",
  title: "Lưu Tro Cốt",
  subtitle: "Vẻ tráng lệ tầm cỡ quốc tế",
};

export const CREMATION_INTRO = {
  badge: "VIDEO TOÀN CẢNH",
  title: "Định nghĩa lại sự tôn kính qua kiến trúc tráng lệ",
  body: "Nhà lưu tro cốt đang thay đổi cách chúng ta tưởng niệm và tôn vinh người đã khuất bằng lối kiến trúc tráng lệ vô song. Quỹ đất ngày càng hạn hẹp cùng sự phổ biến của hình thức hỏa táng là nguồn cảm hứng để Hoa Viên Bình Dương kiến tạo những nhà lưu tro cốt như chốn an nghỉ vĩnh hằng nguy nga và đầy tính nghệ thuật.",
  cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
  poster: "/images/IMG_9472a.jpg",
  video: "/videos/22222.mp4",
};

export interface ColumbariaType {
  eyebrow: string;
  title: string;
  body: string;
  images: string[];
  dark: boolean; // indigo bg block, white text
  imageLeft: boolean;
  buttons: { label: string; href: string }[];
}

export const COLUMBARIA_HEADING = { eyebrow: "KHÁM PHÁ", title: "Các Loại Nhà Lưu Tro Cốt" };

export const COLUMBARIA_TYPES: ColumbariaType[] = [
  {
    eyebrow: "TẦM NHÌN TUYỆT MỸ ĐẦY KỲ VĨ",
    title: "Nhà Lưu Tro Cốt Cao Cấp",
    body: "Với chuẩn trang trí 6 sao, công trình được kiến tạo bằng những thiết kế tinh xảo và lộng lẫy. Lấy cảm hứng từ kiến trúc cung điện phương Đông, không gian nội thất được dựng nên tinh tế và mỹ lệ, ấm áp đón chào người đến viếng. Trần nhà tráng lệ, những bức điêu khắc tinh xảo, tranh tường trang nhã cùng bầu không khí ấm cúng tạo nên một không gian thật sự đặc biệt – vừa làm dịu lòng người viếng thăm, vừa mang đến cho người đã khuất một chốn an nghỉ vĩnh hằng thanh tịnh.",
    images: [
      "/images/Nirvana-Shah-Alam-58.jpg",
      "/images/Nirvana-Shah-Alam-70-Display.jpg",
      "/images/Nirvana-Shah-Alam-92.jpg",
      "/images/Nirvana-Shah-Alam-12-master.jpg",
      "/images/NRV08043_OKs.jpg",
    ],
    dark: false,
    imageLeft: true,
    buttons: [{ label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" }],
  },
  {
    eyebrow: "SỰ HÒA QUYỆN HÀI HÒA VỚI TRUYỀN THỐNG",
    title: "Nhà Lưu Tro Cốt Hiện Đại",
    body: "Nhà lưu tro cốt hiện đại được thiết kế theo những đường nét nghệ thuật sống động, đặt trong một không gian cát tường vun đắp sự thịnh vượng. Thiết kế truyền tải tinh thần của một kiệt tác vượt thời gian. Những gian sảnh mộc mạc được điểm tô bằng tranh tường, điêu khắc và hội họa tối giản. Kiến trúc giàu đường nét cùng nội thất thanh thoát mang đến sự tinh tế tươi mới cho tổng thể, gợi lên hình ảnh một chốn bồng lai hòa hợp với thẩm mỹ đương đại.",
    images: [
      "/images/NB2S3_S_1-scaled.jpg",
      "/images/hvbd/columbaria-blue.jpg",
      "/images/NB2S3_S.jpg",
      "/images/NA1S7_S.jpg",
      "/images/NRV07986_OKs.jpg",
    ],
    dark: true,
    imageLeft: false,
    buttons: [{ label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" }],
  },
  {
    eyebrow: "THIẾT KẾ XA HOA GỢI NHỚ THỜI CỔ XƯA",
    title: "Nhà Lưu Tro Cốt Kiến Trúc Á Đông Cổ",
    body: "Biệt phủ Á Đông là kiệt tác mang tính biểu tượng của Hoa Viên Bình Dương. Được kiến tạo để lưu giữ hũ cốt của người đã khuất, không gian nội thất trang nhã và rộng rãi được thiết kế để truyền tải nét xa hoa cổ kính của kiến trúc Á Đông truyền thống. Quan trọng hơn cả, nơi đây mang lại cảm giác bình an tôn nghiêm mà người thân yêu của bạn thật sự xứng đáng.",
    images: [
      "/images/OV-17-Display-scaled.jpg",
      "/images/OV-71.jpg",
      "/images/river2.jpg",
      "/images/Untitled-02-scaled.jpg",
      "/images/Untitled-01-scaled.jpg",
    ],
    dark: false,
    imageLeft: true,
    buttons: [{ label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" }],
  },
  {
    eyebrow: "AN ỦI TÂM LINH HÒA CÙNG CẢM THỨC ĐƯƠNG ĐẠI",
    title: "Nhà Lưu Tro Cốt Công Giáo",
    body: "Nhà Lưu Tro Cốt Công Giáo đầy tính nghệ thuật là một kiệt tác kiến trúc tang lễ không nơi nào sánh được. Mang phong cách riêng đậm nét Công giáo, nơi đây hội tụ điều tốt đẹp nhất của cả hai: sự an ủi tâm linh và cảm thức đương đại.",
    images: [
      "/images/NRV07959_OKs.jpg",
      "/images/NRV07955_OKs.jpg",
      "/images/NB1S21_S.jpg",
      "/images/NRV01489b.jpg",
      "/images/0923-3-scaled.jpg",
    ],
    dark: true,
    imageLeft: false,
    buttons: [{ label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" }],
  },
  {
    eyebrow: "KÝ ỨC ĐƯỢC GÌN GIỮ LÀ NHỮNG TRÁI TIM ĐOÀN TỤ",
    title: "Khúc Ca Cuộc Đời",
    body: "Nếu có một nơi mà sự ra đi không có nghĩa là kết thúc – nơi ký ức sống mãi trong tim – thì đó chính là Khúc Ca Cuộc Đời. Không gian này gợi lên sự viên mãn của cuộc sống: đẹp đẽ, quý giá và trường tồn.",
    images: ["/images/A2S1-3-2-nw.jpg"],
    dark: false,
    imageLeft: true,
    buttons: [
      { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
      { label: "KHÁM PHÁ THÊM", href: "/resources/contact-us-new" },
    ],
  },
  {
    eyebrow: "SỰ HỢP NHẤT CỦA NHỮNG Ý NIỆM",
    title: "Vườn Hũ Cốt",
    body: "An vị trong nhà lưu tro cốt không phải là lựa chọn duy nhất cho người chọn hình thức hỏa táng. Khu vực dành riêng tại Hoa Viên Bình Dương là không gian an táng hũ cốt dành cho những ai muốn an táng theo cách truyền thống sau khi hỏa táng. Khung cảnh bình yên và tĩnh lặng, mỗi vị trí an táng đều có không gian riêng tựa như một ngôi mộ truyền thống, thuận tiện cho gia đình đến viếng thăm.",
    images: [
      "/images/Nirvana-Shah-Alam-436a.jpg",
      "/images/NRV08116_OKs.jpg",
      "/images/NRV08114_OKs.jpg",
      "/images/NRV08094_OKs.jpg",
      "/images/Nirvana-Shah-Alam-420a.jpg",
    ],
    dark: true,
    imageLeft: true,
    buttons: [{ label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" }],
  },
];

export interface CremationReadCard {
  title: string;
  image: string;
  href: string;
}

export const CREMATION_READ = {
  eyebrow: "TÌM HIỂU",
  title: "Hỏa Táng",
  cards: [
    { title: "Nhà lưu tro cốt và ô đặt hũ cốt", image: "/images/New_04.jpg", href: "/resources/article" },
    { title: "Các lựa chọn tưởng niệm cho hỏa táng", image: "/images/NA1S2_S.jpg", href: "/resources/article" },
    { title: "Khác biệt giữa nhà lưu tro cốt và lăng mộ", image: "/images/NRV01553b_web.jpg", href: "/resources/article" },
  ] as CremationReadCard[],
};
