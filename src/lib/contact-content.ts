/** Nội dung trang Liên Hệ — Hoa Viên Bình Dương. */

export const CONTACT_HERO = {
  background: "/images/hvbd/vinh-hoa-mon.jpg",
  title: "Liên Hệ",
  subtitle:
    "Quý khách cần tư vấn hoặc hỗ trợ? Hãy liên hệ với chúng tôi tại văn phòng gần nhất hoặc gửi yêu cầu qua biểu mẫu bên dưới.",
};

export const CONTACT_INFO = {
  eyebrow: "KẾT NỐI",
  title: "Thông Tin Liên Hệ & Tham Quan",
  office: {
    label: "VĂN PHÒNG CHÍNH",
    lines: [
      "Hoa Viên Nghĩa Trang Bình Dương,",
      "Khu phố 1B,",
      "phường Chánh Phú Hòa,",
      "TP. Hồ Chí Minh.",
    ],
  },
  contact: {
    label: "ĐIỆN THOẠI",
    hotline: "0818 555 444",
  },
  hours: "7h30 – 17h00, tất cả các ngày trong tuần (kể cả Chủ nhật và ngày lễ).",
  mapUrl: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
  mapQuery: "Hoa Viên Nghĩa Trang Bình Dương, Chánh Phú Hòa",
};

export interface Branch {
  name: string;
  body: string;
}

export interface Region {
  name: string;
  summary: string[];
  explore: string;
  locations: Branch[];
}

export const BRANCHES: Region[] = [
  {
    name: "HỆ THỐNG HOA VIÊN",
    summary: [
      "Hoa Viên Nghĩa Trang Bình Dương",
      "Khu phố 1B, phường Chánh Phú Hòa, TP. Hồ Chí Minh",
    ],
    explore: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
    locations: [
      {
        name: "HOA VIÊN NGHĨA TRANG BÌNH DƯƠNG",
        body: `Khu phố 1B, phường Chánh Phú Hòa, TP. Hồ Chí Minh.
TỔNG ĐÀI: 0818 555 444
Giờ làm việc: 7h30 – 17h00, tất cả các ngày trong tuần (kể cả Chủ nhật và ngày lễ).
Website: cphaco.vn`,
      },
    ],
  },
  {
    name: "VĂN PHÒNG GIAO DỊCH TP. HỒ CHÍ MINH",
    summary: [
      "Các văn phòng và điểm giao dịch tại TP. Hồ Chí Minh",
      "Hỗ trợ tư vấn, ký hợp đồng và đưa đón tham quan hoa viên",
    ],
    explore:
      "https://www.google.com/maps/search/?api=1&query=99 Điện Biên Phủ, Phường Gia Định, TP.HCM",
    locations: [
      {
        name: "VĂN PHÒNG CHI NHÁNH TP.HCM",
        body: `99 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh.
TỔNG ĐÀI: 0818 555 444`,
      },
      {
        name: "VĂN PHÒNG GIAO DỊCH",
        body: `746 Trần Hưng Đạo, Phường Chợ Quán, TP. Hồ Chí Minh.
TỔNG ĐÀI: 0818 555 444`,
      },
      {
        name: "ĐIỂM GIAO DỊCH 3",
        body: `Số 253D Lương Định Của, Phường Bình Trưng, TP. Hồ Chí Minh.
TỔNG ĐÀI: 0818 555 444`,
      },
    ],
  },
];

export const CONTACT_FORM = {
  title: "Gửi Yêu Cầu Tư Vấn",
  fields: [
    { name: "name", label: "Họ và tên", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Số điện thoại", type: "tel" },
    { name: "message", label: "Nội dung", type: "textarea" },
  ],
  submit: "GỬI",
};

export const CAREER = {
  eyebrow: "GIA NHẬP",
  title: "Cơ Hội Nghề Nghiệp",
  image: "/images/1642a.jpg",
  body: [
    "Hãy cùng kiến tạo tương lai và trở thành một phần của đội ngũ Hoa Viên Bình Dương. Với đội ngũ nhân sự đa lĩnh vực, chúng tôi mang đến nhiều lộ trình nghề nghiệp đầy thử thách để bạn phát triển và hoàn thiện kỹ năng của mình.",
    "Khám phá các vị trí đang tuyển dụng và trò chuyện cùng chúng tôi. Mở ra cánh cửa đến với những cơ hội mới mẻ và thú vị, cùng nhau tạo nên sự khác biệt!",
  ],
  cta: {
    label: "Tìm hiểu thêm",
    href: "/ve-chung-toi",
  },
};
