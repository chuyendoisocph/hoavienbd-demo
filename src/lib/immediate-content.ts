/** Nội dung trang Nhu Cầu Cấp Thiết — Hoa Viên Bình Dương */

export const IMMEDIATE_HERO = {
  background: "/images/immediate-need-hero.webp",
  title: "Nhu Cầu Cấp Thiết",
  subtitle: "Chúng tôi sẵn sàng hỗ trợ 24/7",
  cta: { label: "GỌI TỔNG ĐÀI 1800 1118", href: "tel:18001118" },
};

export interface ImmediateStep {
  icon: string;
  title: string;
  body: string;
}

export const PASSING_STEPS = {
  title: "Cần làm gì khi có người thân qua đời",
  intro:
    "Đội ngũ nhân viên tận tâm của chúng tôi luôn sẵn sàng đồng hành cùng bạn trong từng bước.",
  steps: [
    {
      icon: "/images/Icon-01a.jpg",
      title: "Bước 1 : Liên hệ nhân viên hoặc gọi tổng đài",
      body: "Nhân viên và đội ngũ phục vụ của chúng tôi sẵn sàng hỗ trợ và hướng dẫn bạn những việc cần làm.",
    },
    {
      icon: "/images/Icon-02a.jpg",
      title: "Bước 2 : Lập kế hoạch tang lễ",
      body: "Kiểm tra xem đã có kế hoạch chuẩn bị trước hay chưa. Hãy trao đổi với đội ngũ tư vấn về các gói dịch vụ nếu chưa có, hoặc bạn có thể tùy chỉnh kế hoạch tang lễ theo ý muốn.",
    },
    {
      icon: "/images/Icon-03a.jpg",
      title: "Bước 3 : An táng hay hỏa táng",
      body: "Cân nhắc giữa hai hình thức an táng và hỏa táng. Bạn có thể nhớ lại liệu người đã khuất có để lại di nguyện cụ thể về việc này, đồng thời cân đối ngân sách cho cả hai phương án.",
    },
    {
      icon: "/images/Icon-04a.jpg",
      title: "Bước 4 : Lựa chọn nơi an nghỉ",
      body: "Hãy trao đổi với nhân viên tư vấn nếu bạn còn băn khoăn. Hoa Viên Bình Dương quản lý hoa viên tưởng niệm được quy hoạch cảnh quan bài bản, phù hợp với mọi nhu cầu.",
    },
    {
      icon: "/images/Icon-05a.jpg",
      title: "Bước 5 : Tập trung vào điều quan trọng",
      body: "Bạn có thể dành thời gian cho điều quan trọng nhất – tiếc thương, nói lời tiễn biệt và chữa lành.",
    },
  ] as ImmediateStep[],
  cta: { label: "TÌM HIỂU", href: "/getting-started/pre-planning" },
};

export const LOVED_ONE = {
  image: "/images/hvbd/grave-offering-white.jpg",
  title: "Khi người thân yêu qua đời",
  body: [
    "Chúng ta khó tránh khỏi những giây phút đau buồn khi người thân yêu ra đi. Trong khoảng thời gian nhạy cảm này, có những việc hệ trọng cần được lưu tâm. Thủ tục pháp lý và khai báo có thể trở thành gánh nặng trong lúc như thế, nhưng lại là điều không thể bỏ qua.",
    "Nếu biết rõ những việc cần làm, mọi thứ có thể được giải quyết nhanh chóng, để quá trình tiếc thương sớm bắt đầu. Chúng tôi không thể nhấn mạnh đủ tầm quan trọng của việc chuẩn bị trước, bởi một đơn vị dịch vụ tang lễ uy tín có thể hỗ trợ những việc này một cách nhẹ nhàng, để tang quyến tập trung vào điều quan trọng hơn – đối diện với nỗi đau và tưởng nhớ người đã khuất.",
  ],
  prompt: "Bạn đã cân nhắc việc lập kế hoạch trước chưa?",
  cta: { label: "LẬP KẾ HOẠCH TRƯỚC", href: "/getting-started/pre-planning" },
  deathTitle: "Cần làm gì khi có người qua đời",
  deathSteps: [
    "Khai báo tử vong",
    "Đăng ký khai tử để nhận Giấy chứng tử",
    "Lo liệu tang lễ cùng đơn vị dịch vụ tang lễ",
  ],
  deathCta: { label: "CÁC BƯỚC TIẾP THEO", href: "/resources/contact-us-new" },
};

export interface ResourceLink {
  title: string;
  href: string;
}

export const RESOURCES = {
  title: "Thông Tin Hữu Ích",
  links: [
    { title: "So sánh dịch vụ tang lễ", href: "/planning-options/funeral-service" },
    { title: "Phần mộ tại Hoa Viên Bình Dương", href: "/planning-options/burial" },
    { title: "Tìm hiểu về Lưu Tro Cốt", href: "/planning-options/cremation" },
  ] as ResourceLink[],
};
