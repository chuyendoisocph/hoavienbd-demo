/** Nội dung trang Dịch Vụ Khác — Hoa Viên Bình Dương */

export const OTHERS_HERO = {
  image: "/images/hvbd/dai-le-vu-lan.jpg",
  title: "Dịch Vụ Khác",
  subtitle: "Chăm Sóc Mộ Phần · Xây Dựng Mộ · Sanh Phần",
};

export interface OtherProduct {
  eyebrow: string;
  title: string;
  body: string[];
  images: string[];
  imageLeft: boolean;
  gray: boolean;
}

export const PRODUCTS: OtherProduct[] = [
  {
    eyebrow: "CHĂM SÓC CHU ĐÁO, GÌN GIỮ DÀI LÂU",
    title: "Chăm Sóc Mộ Phần",
    body: [
      "Mộ phần là nơi gia đình gửi gắm lòng tưởng nhớ và sự tri ân đối với người đã khuất. Việc chăm sóc thường xuyên giúp khuôn viên luôn sạch sẽ, trang nghiêm và thuận tiện cho thân nhân mỗi khi đến thăm viếng.",
      "Hoa Viên Bình Dương cung cấp dịch vụ vệ sinh, chăm sóc cảnh quan và hỗ trợ chuẩn bị mộ phần theo nhu cầu thực tế của gia đình. Các hạng mục được trao đổi rõ ràng trước khi thực hiện.",
    ],
    images: [
      "/images/hvbd/grave-offering-white.jpg",
      "/images/hvbd/care-team.jpg",
    ],
    imageLeft: false,
    gray: false,
  },
  {
    eyebrow: "THIẾT KẾ PHÙ HỢP, THI CÔNG CHỈN CHU",
    title: "Tư Vấn Thiết Kế & Xây Dựng Mộ",
    body: [
      "Mỗi phần mộ cần đáp ứng hài hòa yêu cầu về kiến trúc, độ bền, cảnh quan chung và nét riêng của gia đình. Đội ngũ Hoa Viên hỗ trợ tư vấn kiểu dáng, vật liệu và phương án thi công phù hợp với từng khu mộ.",
      "Quá trình thiết kế và xây dựng được thực hiện theo quy hoạch của Hoa Viên, đồng thời tôn trọng tín ngưỡng, truyền thống gia đình và các yêu cầu đã thống nhất.",
    ],
    images: [
      "/images/hvbd/linh-hoa-tue-dan-1.jpg",
      "/images/hvbd/linh-hoa-tue-dan-3.jpg",
    ],
    imageLeft: false,
    gray: false,
  },
];

export const SANH_PHAN = {
  eyebrow: "SANH PHẦN",
  title: "Chuẩn Bị Nơi An Nghỉ Từ Sớm",
  intro: [
    "Sanh phần là cách gọi truyền thống cho việc chủ động chuẩn bị phần mộ khi còn tại thế. Việc chuẩn bị từ sớm giúp mỗi người có thời gian cân nhắc vị trí, hình thức an nghỉ và nguyện vọng của mình trong sự đồng thuận của gia đình.",
    "Tại Hoa Viên Bình Dương, quý khách có thể tham quan thực tế, tìm hiểu quy hoạch và trao đổi cùng đội ngũ tư vấn trước khi lựa chọn. Những yếu tố phong thủy được trình bày theo quan niệm văn hóa truyền thống và nhu cầu riêng của từng gia đình.",
  ],
  images: ["/images/hvbd/khu-gia-toc.jpg", "/images/hvbd/linh-hoa-tue-dan-2.jpg"],
  benefitsTitle: "Những lợi ích khi chuẩn bị từ sớm",
  benefitsIntro:
    "Việc chuẩn bị sanh phần là một quyết định quan trọng. Gia đình nên cân nhắc kỹ nhu cầu, điều kiện tài chính và nguyện vọng của các thành viên trước khi lựa chọn.",
  benefits: [
    "Chủ động lựa chọn vị trí và loại hình phần mộ",
    "Có thời gian trao đổi nguyện vọng cùng gia đình",
    "Dễ dàng cân đối ngân sách và phương án thanh toán",
    "Hạn chế những quyết định vội vàng khi hữu sự",
    "Giúp người thân hiểu rõ di nguyện",
    "Thuận tiện chuẩn bị hồ sơ và kế hoạch dài hạn",
    "An tâm hơn khi những mong muốn đã được sắp xếp rõ ràng",
  ],
};

export const OTHERS_READ = {
  eyebrow: "TÌM HIỂU THÊM",
  cards: [
    { title: "Kinh nghiệm lựa chọn phần mộ phù hợp", image: "/images/hvbd/grave-offering-white.jpg", href: "/dich-vu/phan-mo" },
    { title: "Chuẩn bị sanh phần từ sớm", image: "/images/504-vietnam.png", href: "/ho-tro/chuan-bi-tu-som" },
    { title: "Dịch vụ chăm sóc mộ phần", image: "/images/hvbd/care-team.jpg", href: "/lien-he" },
  ],
};
