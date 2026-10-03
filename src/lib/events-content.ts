export interface HoaVienEvent {
  slug: string;
  title: string;
  occasion: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  introduction: string;
  paragraphs: string[];
  highlights: string[];
}

export const EVENTS_HERO = {
  title: "Sự Kiện Hoa Viên",
  subtitle:
    "Nơi những giá trị hiếu nghĩa được gìn giữ qua các mùa lễ truyền thống và những dịp sum vầy của gia đình.",
  image: "/images/hvbd/park-aerial-roundabout.jpg",
  imageAlt: "Toàn cảnh cây xanh và công trình trung tâm tại Hoa Viên Bình Dương",
};

export const HOA_VIEN_EVENTS: HoaVienEvent[] = [
  {
    slug: "le-cau-sieu-cau-an-tiet-thanh-minh",
    title: "Lễ Cầu Siêu – Cầu An Tiết Thanh Minh",
    occasion: "Tiết Thanh Minh · Tháng Ba Âm lịch",
    description:
      "Dịp để các gia đình cùng tưởng nhớ tổ tiên, gửi lời cầu nguyện bình an và chăm sóc mộ trong không gian trang nghiêm của Hoa Viên.",
    image: "/images/hvbd/dai-le-cau-sieu-cau-an.jpg",
    imageAlt:
      "Không gian Đại lễ Cầu Siêu – Cầu An Tiết Thanh Minh tại Hoa Viên Bình Dương",
    featured: true,
    introduction:
      "Lễ Cầu Siêu – Cầu An Tiết Thanh Minh là hoạt động văn hóa tâm linh thường niên, nơi lòng tri ân được thể hiện bằng những nghi thức trang trọng và sự sum họp của các thế hệ.",
    paragraphs: [
      "Trong tiết Thanh Minh, các gia đình trở về Hoa Viên để thăm viếng, chỉnh trang mộ và dành thời gian tưởng niệm người thân. Không gian xanh yên tĩnh giúp mỗi cuộc hội ngộ trở nên gần gũi, lắng đọng và trọn vẹn hơn.",
      "Hoa Viên Bình Dương chuẩn bị cảnh quan, khu vực nghi lễ và đội ngũ hỗ trợ để gia đình thuận tiện tham dự. Lịch tổ chức chi tiết của từng năm sẽ được công bố trên website và các kênh chính thức của Hoa Viên.",
    ],
    highlights: [
      "Nghi lễ cầu siêu, cầu an trang nghiêm",
      "Không gian tưởng niệm dành cho gia đình",
      "Hỗ trợ hướng dẫn thăm viếng và chăm sóc mộ",
    ],
  },
  {
    slug: "gio-to-hung-vuong",
    title: "Giỗ Tổ Hùng Vương",
    occasion: "Mùng 10 tháng Ba Âm lịch",
    description:
      "Hoạt động hướng về cội nguồn, nhắc nhớ truyền thống uống nước nhớ nguồn và kết nối các thế hệ trong gia đình Việt.",
    image: "/images/hvbd/actual/cong-hon-viet-gate.jpg",
    imageAlt: "Cổng Hồn Việt trong khuôn viên xanh của Hoa Viên Bình Dương",
    introduction:
      "Ngày Giỗ Tổ Hùng Vương là dịp để mỗi người Việt cùng hướng về nguồn cội và gìn giữ tinh thần biết ơn tiền nhân.",
    paragraphs: [
      "Tại Hoa Viên Bình Dương, giá trị uống nước nhớ nguồn được thể hiện xuyên suốt trong cảnh quan, nghi thức tưởng niệm và cách đón tiếp các gia đình.",
      "Thông tin về chương trình hưởng ứng và thời gian tổ chức từng năm sẽ được Hoa Viên cập nhật khi kế hoạch được xác nhận.",
    ],
    highlights: [
      "Tôn vinh đạo lý uống nước nhớ nguồn",
      "Không gian văn hóa mang bản sắc Việt",
      "Hoạt động kết nối gia đình và các thế hệ",
    ],
  },
  {
    slug: "dai-le-vu-lan-bao-hieu",
    title: "Đại Lễ Vu Lan Báo Hiếu",
    occasion: "Rằm tháng Bảy Âm lịch",
    description:
      "Mùa báo hiếu để mỗi gia đình bày tỏ lòng biết ơn cha mẹ, tưởng nhớ ông bà tổ tiên và lan tỏa sự yêu thương.",
    image: "/images/hvbd/dai-le-vu-lan.jpg",
    imageAlt: "Đại lễ Vu Lan với đông đảo gia đình tham dự tại Hoa Viên Bình Dương",
    introduction:
      "Vu Lan là mùa của lòng biết ơn, nhắc mỗi người trân trọng tình thân và những giá trị đã được trao truyền qua nhiều thế hệ.",
    paragraphs: [
      "Trong không gian thanh tịnh của Hoa Viên, các gia đình cùng tham dự nghi lễ, hướng lòng tưởng niệm tổ tiên và cầu nguyện bình an cho cha mẹ, người thân.",
      "Chương trình cụ thể có thể thay đổi theo từng năm. Hoa Viên sẽ cập nhật thời gian, khu vực tổ chức và hướng dẫn tham dự trên các kênh chính thức.",
    ],
    highlights: [
      "Nghi thức báo hiếu và tưởng niệm",
      "Không gian sum họp dành cho gia đình",
      "Hướng dẫn tham dự được cập nhật trước sự kiện",
    ],
  },
  {
    slug: "tao-mo-cuoi-nam",
    title: "Tảo Mộ Cuối Năm",
    occasion: "Tháng Chạp hằng năm",
    description:
      "Dịp gia đình chăm sóc nơi an nghỉ của người thân, dâng hương tưởng niệm và chuẩn bị đón năm mới trong sự an yên.",
    image: "/images/hvbd/actual/grave-care-aerial-1.jpg",
    imageAlt: "Khu mộ được chăm sóc giữa cảnh quan xanh tại Hoa Viên Bình Dương",
    introduction:
      "Tảo mộ cuối năm là nét đẹp truyền thống, giúp các thành viên trong gia đình cùng trở về, chăm sóc nơi an nghỉ và tưởng nhớ người thân.",
    paragraphs: [
      "Hoa Viên duy trì cảnh quan, lối đi và các khu vực chung để việc thăm viếng diễn ra thuận tiện. Đội ngũ chăm sóc sẵn sàng hướng dẫn gia đình khi cần hỗ trợ tại khuôn viên.",
      "Vào thời gian cao điểm cuối năm, gia đình nên liên hệ trước để được cập nhật hướng dẫn di chuyển, dịch vụ chăm sóc và các khung giờ phù hợp.",
    ],
    highlights: [
      "Thăm viếng và chỉnh trang mộ",
      "Cảnh quan xanh được chăm sóc thường xuyên",
      "Đội ngũ Hoa Viên hỗ trợ tại khuôn viên",
    ],
  },
];

export const FEATURED_EVENT =
  HOA_VIEN_EVENTS.find((event) => event.featured) ?? HOA_VIEN_EVENTS[0];

export const ANNUAL_EVENTS = HOA_VIEN_EVENTS.filter((event) => !event.featured);

export function getEventBySlug(slug: string) {
  return HOA_VIEN_EVENTS.find((event) => event.slug === slug);
}
