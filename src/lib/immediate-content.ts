/** Nội dung trang Khi Người Thân Qua Đời — Hoa Viên Bình Dương */

export const IMMEDIATE_HERO = {
  background: "/images/immediate-need-hero.webp",
  title: "Khi Người Thân Qua Đời",
  subtitle: "Chúng tôi sẵn sàng hỗ trợ 24/7",
  cta: { label: "GỌI TỔNG ĐÀI 0818 555 444", href: "tel:0818555444" },
};

export interface ImmediateStep {
  icon: string;
  title: string;
  body: string;
}

export const PASSING_STEPS = {
  title: "Cần làm gì khi có người thân qua đời",
  intro:
    "Đội ngũ Hoa Viên luôn sẵn sàng hướng dẫn và đồng hành cùng gia đình trong từng bước.",
  steps: [
    {
      icon: "/images/Icon-01a.jpg",
      title: "Bước 1: Liên hệ nhân viên hoặc gọi tổng đài",
      body: "Đội ngũ phục vụ sẵn sàng hỗ trợ và hướng dẫn gia đình những việc cần làm.",
    },
    {
      icon: "/images/Icon-02a.jpg",
      title: "Bước 2: Lập kế hoạch tang lễ",
      body: "Gia đình kiểm tra xem người đã khuất có để lại kế hoạch hoặc di nguyện hay không, sau đó trao đổi với đội ngũ tư vấn để lựa chọn dịch vụ phù hợp.",
    },
    {
      icon: "/images/Icon-03a.jpg",
      title: "Bước 3: An táng hay hỏa táng",
      body: "Gia đình cân nhắc giữa an táng và hỏa táng dựa trên di nguyện, tín ngưỡng, nơi an nghỉ và điều kiện thực tế.",
    },
    {
      icon: "/images/Icon-04a.jpg",
      title: "Bước 4: Lựa chọn nơi an nghỉ",
      body: "Nếu còn băn khoăn, gia đình có thể tham quan thực tế và trao đổi với nhân viên tư vấn về vị trí, loại hình phần mộ hoặc nơi lưu giữ tro cốt.",
    },
    {
      icon: "/images/Icon-05a.jpg",
      title: "Bước 5: Dành thời gian bên gia đình",
      body: "Gia đình có thể dành thời gian ở bên nhau, tưởng nhớ người đã khuất và nói lời tiễn biệt trong sự trang nghiêm.",
    },
  ] as ImmediateStep[],
  cta: { label: "TÌM HIỂU", href: "/ho-tro/chuan-bi-tu-som" },
};

export const LOVED_ONE = {
  image: "/images/hvbd/grave-offering-white.jpg",
  title: "Khi người thân yêu qua đời",
  body: [
    "Chúng ta khó tránh khỏi những giây phút đau buồn khi người thân yêu ra đi. Trong khoảng thời gian nhạy cảm này, có những việc hệ trọng cần được lưu tâm. Thủ tục pháp lý và khai báo có thể trở thành gánh nặng trong lúc như thế, nhưng lại là điều không thể bỏ qua.",
    "Nếu biết rõ những việc cần làm, mọi thứ có thể được giải quyết nhanh chóng, để quá trình tiếc thương sớm bắt đầu. Chúng tôi không thể nhấn mạnh đủ tầm quan trọng của việc chuẩn bị trước, bởi một đơn vị dịch vụ tang lễ uy tín có thể hỗ trợ những việc này một cách nhẹ nhàng, để tang quyến tập trung vào điều quan trọng hơn – đối diện với nỗi đau và tưởng nhớ người đã khuất.",
  ],
  prompt: "Gia đình đã cân nhắc việc chuẩn bị hậu sự từ sớm chưa?",
  cta: { label: "CHUẨN BỊ TỪ SỚM", href: "/ho-tro/chuan-bi-tu-som" },
  deathTitle: "Cần làm gì khi có người qua đời",
  deathSteps: [
    "Khai báo tử vong",
    "Đăng ký khai tử và nhận Trích lục khai tử",
    "Lo liệu tang lễ cùng đơn vị dịch vụ tang lễ",
  ],
  deathCta: { label: "CÁC BƯỚC TIẾP THEO", href: "/lien-he" },
};

export interface ResourceLink {
  title: string;
  href: string;
}

export const RESOURCES = {
  title: "Thông Tin Hữu Ích",
  links: [
    { title: "So sánh dịch vụ tang lễ", href: "/dich-vu/tang-le" },
    { title: "Phần mộ tại Hoa Viên Bình Dương", href: "/dich-vu/phan-mo" },
    { title: "Tìm hiểu về dịch vụ lưu tro cốt", href: "/dich-vu/luu-tro-cot" },
  ] as ResourceLink[],
};
