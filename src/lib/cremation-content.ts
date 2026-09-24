/** Nội dung trang Dịch Vụ Lưu Tro Cốt — Hoa Viên Bình Dương */

export const CREMATION_HERO = {
  background: "/images/hvbd/thien-phuoc-courtyard.jpg",
  title: "Dịch Vụ Lưu Tro Cốt",
  subtitle: "Trang nghiêm, thanh tịnh và chu đáo",
};

export const CREMATION_INTRO = {
  badge: "KHÔNG GIAN CHÙA THIÊN PHƯỚC",
  title: "Nơi gia đình an tâm gửi gắm và tưởng nhớ người thân",
  body: "Nằm trong khuôn viên Hoa Viên Nghĩa Trang Bình Dương, Chùa Thiên Phước là nơi lưu giữ tro cốt trong không gian thanh tịnh và trang nghiêm. Các hộc lưu cốt được bố trí ngay ngắn, thuận tiện để gia đình nhận biết, thăm viếng, dâng hương và lễ Phật.",
  details: [
    "Không gian lưu giữ được tổ chức gắn với khuôn viên tâm linh, lối đi và khu vực lễ bái để thân nhân có thể thăm viếng trong sự yên tĩnh. Việc bố trí từng hộc rõ ràng giúp gia đình nhận biết và gìn giữ thông tin người đã khuất.",
    "Trước khi lựa chọn, gia đình nên tìm hiểu vị trí, thời hạn lưu giữ, cách thức bàn giao, quy định thăm viếng và phạm vi chăm sóc để bảo đảm phù hợp với nhu cầu lâu dài.",
  ],
  image: "/images/hvbd/thien-phuoc-front.jpg",
  imageAlt: "Mặt tiền Chùa Thiên Phước tại Hoa Viên Bình Dương",
};

export interface ColumbariaType {
  eyebrow: string;
  title: string;
  body: string;
  details: string[];
  images: string[];
  dark: boolean;
  imageLeft: boolean;
  buttons: { label: string; href: string }[];
}

export const COLUMBARIA_HEADING = {
  eyebrow: "TÌM HIỂU",
  title: "Dịch Vụ Lưu Tro Cốt Tại Chùa Thiên Phước",
};

export const COLUMBARIA_TYPES: ColumbariaType[] = [
  {
    eyebrow: "KHÔNG GIAN TÂM LINH TRONG KHUÔN VIÊN HOA VIÊN",
    title: "Chùa Thiên Phước",
    body: "Chùa Thiên Phước vừa là nơi thờ tự, vừa là nơi lưu giữ tro cốt của người đã khuất. Không gian xanh, yên tĩnh và trang nghiêm tạo điều kiện thuận tiện để gia đình đến thăm viếng, dâng hương và tưởng nhớ người thân.",
    images: [
      "/images/hvbd/thien-phuoc-garden-angle.jpg",
      "/images/hvbd/thien-phuoc-garden-path.jpg",
      "/images/hvbd/thien-phuoc-yellow-blossom.jpg",
      "/images/hvbd/thien-phuoc-courtyard.jpg",
    ],
    dark: false,
    imageLeft: true,
    details: ["Các hoạt động thăm viếng, dâng hương và tưởng niệm được thực hiện trong cùng một khuôn viên, giúp gia đình thuận tiện kết hợp lễ Phật và tưởng nhớ người thân."],
    buttons: [],
  },
  {
    eyebrow: "THANH TỊNH, SẠCH SẼ VÀ TRANG NGHIÊM",
    title: "Không Gian Lưu Giữ Tro Cốt",
    body: "Khu lưu cốt được bố trí thành từng hàng ngay ngắn trong không gian thoáng sáng. Gia đình có thể thuận tiện đến thăm viếng và thực hiện các nghi thức tưởng niệm trong bầu không khí thanh tịnh của Chùa Thiên Phước.",
    images: [
      "/images/hvbd/columbarium-symmetric.jpg",
      "/images/hvbd/columbarium-main-hall.jpg",
      "/images/hvbd/columbarium-altar.jpg",
    ],
    dark: true,
    imageLeft: false,
    details: ["Lối đi, ánh sáng và cách đánh số vị trí được bố trí để thân nhân dễ tìm kiếm. Gia đình nên tham quan trực tiếp để lựa chọn khu vực phù hợp với thói quen thăm viếng."],
    buttons: [],
  },
  {
    eyebrow: "THIẾT KẾ RIÊNG BIỆT, BỐ TRÍ NGAY NGẮN",
    title: "Hộc Lưu Cốt Bằng Gỗ Tự Nhiên",
    body: "Mỗi hộc lưu cốt được thiết kế riêng bằng gỗ tự nhiên và bố trí thành từng hàng. Hũ tro cốt được lưu giữ bên trong; phía ngoài có hình ảnh cùng thông tin người đã khuất để gia đình dễ nhận biết khi đến thăm viếng.",
    images: [
      "/images/hvbd/columbarium-main-hall.jpg",
      "/images/hvbd/columbarium-altar.jpg",
      "/images/hvbd/columbarium-symmetric.jpg",
    ],
    dark: false,
    imageLeft: true,
    details: ["Vật liệu gỗ tạo cảm giác ấm cúng, đồng thời mỗi vị trí có khu vực nhận diện riêng. Thông tin, hình ảnh và cách trang trí cần tuân theo hướng dẫn chung để giữ sự trang nghiêm."],
    buttons: [],
  },
  {
    eyebrow: "AN TÂM TRONG SUỐT THỜI GIAN LƯU GIỮ",
    title: "Vị Trí Cố Định, Thuận Tiện Thăm Viếng",
    body: "Tro cốt được lưu giữ tại vị trí đã lựa chọn và không tự ý di dời. Cách bố trí rõ ràng giúp thân nhân thuận tiện tìm đến đúng hộc lưu cốt để dâng hương, thăm viếng và tưởng nhớ người đã khuất.",
    images: [
      "/images/hvbd/thien-phuoc-front.jpg",
      "/images/hvbd/thien-phuoc-courtyard.jpg",
      "/images/hvbd/thien-phuoc-garden-path.jpg",
    ],
    dark: true,
    imageLeft: false,
    details: ["Vị trí được ghi nhận trong hồ sơ bàn giao để gia đình có thể tìm lại thuận tiện trong những lần thăm viếng sau. Mọi thay đổi, nếu có, cần được thông báo và thống nhất theo quy định."],
    buttons: [],
  },
  {
    eyebrow: "GÌN GIỮ KHÔNG GIAN SẠCH SẼ VÀ CHU ĐÁO",
    title: "Chăm Sóc Thường Xuyên",
    body: "Đội ngũ Hoa Viên thường xuyên vệ sinh và chăm sóc khu vực lưu cốt, góp phần duy trì không gian sạch sẽ, trang nghiêm. Hương khói và các hoạt động lễ bái tại chùa được gìn giữ để gia đình an tâm khi gửi gắm người thân.",
    images: [
      "/images/hvbd/thien-phuoc-ceremony.jpg",
      "/images/hvbd/thien-phuoc-garden-angle.jpg",
    ],
    dark: false,
    imageLeft: true,
    details: ["Công việc vệ sinh khu vực chung và chăm sóc không gian lễ bái được thực hiện định kỳ. Gia đình nên hỏi rõ phạm vi chăm sóc từng hộc và các vật phẩm được phép đặt tại vị trí lưu giữ."],
    buttons: [],
  },
  {
    eyebrow: "HƯỚNG DẪN RÕ RÀNG, HỖ TRỢ CHU ĐÁO",
    title: "Tiếp Nhận Và Bàn Giao Tro Cốt",
    body: "Gia đình đến tham quan, chọn vị trí và thời hạn lưu giữ phù hợp trước khi ký hợp đồng lưu ký. Khi gia đình thông báo ngày giờ gửi tro cốt, Hoa Viên sẽ hướng dẫn thủ tục, hỗ trợ chuẩn bị lễ cúng và thực hiện tiếp nhận bàn giao.",
    images: [
      "/images/hvbd/columbarium-altar.jpg",
      "/images/hvbd/columbarium-main-hall.jpg",
      "/images/hvbd/thien-phuoc-ceremony.jpg",
    ],
    dark: true,
    imageLeft: true,
    details: ["Quy trình thường gồm xác nhận thông tin người đã khuất, đối chiếu vị trí, lập biên bản và hướng dẫn nghi thức tiếp nhận. Người đại diện gia đình nên kiểm tra kỹ thông tin trước khi hoàn tất bàn giao."],
    buttons: [],
  },
];

export interface CremationReadCard {
  title: string;
  image: string;
  href: string;
}

export const CREMATION_READ = {
  eyebrow: "TÌM HIỂU THÊM",
  title: "Thông Tin Về Hỏa Táng",
  cards: [
    {
      title: "An táng hay hỏa táng: Lựa chọn nào phù hợp?",
      image: "/images/hvbd/thien-phuoc-ceremony.jpg",
      href: "/bai-viet/an-tang-hay-hoa-tang",
    },
    {
      title: "Quy trình hỏa táng và những điều gia đình cần lưu ý",
      image: "/images/hvbd/columbarium-main-hall.jpg",
      href: "/bai-viet/an-tang-hay-hoa-tang",
    },
    {
      title: "Các lựa chọn lưu giữ tro cốt sau hỏa táng",
      image: "/images/hvbd/thien-phuoc-yellow-blossom.jpg",
      href: "/bai-viet/luu-giu-tro-cot-trang-nghiem",
    },
  ] as CremationReadCard[],
};
