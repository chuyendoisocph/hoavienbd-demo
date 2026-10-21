/** Nội dung trang Liên Hệ — Hoa Viên Bình Dương. */

export const CONTACT_HERO = {
  background: "/images/hvbd/vinh-hoa-mon.jpg",
  title: "Liên Hệ",
  subtitle:
    "Quý khách cần tư vấn hoặc hỗ trợ? Hãy liên hệ với chi nhánh thuận tiện nhất hoặc gửi yêu cầu qua biểu mẫu bên dưới.",
};

export const CONTACT_INFO = {
  eyebrow: "KẾT NỐI",
  title: "Thông Tin Liên Hệ & Tham Quan",
  office: {
    label: "VĂN PHÒNG CHÍNH",
    lines: [
      "Hoa Viên Nghĩa Trang Bình Dương,",
      "Khu phố Bông Trang,",
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
  mapUrl?: string;
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
      "Khu phố Bông Trang, phường Chánh Phú Hòa, TP. Hồ Chí Minh",
    ],
    explore: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
    locations: [
      {
        name: "HOA VIÊN NGHĨA TRANG BÌNH DƯƠNG",
        body: `Khu phố Bông Trang, phường Chánh Phú Hòa, TP. Hồ Chí Minh.
TỔNG ĐÀI: 0818 555 444
Giờ làm việc: 7h30 – 17h00, tất cả các ngày trong tuần (kể cả Chủ nhật và ngày lễ).
Website: cphaco.vn`,
        mapUrl: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
      },
    ],
  },
  {
    name: "CÁC CHI NHÁNH TP. HỒ CHÍ MINH",
    summary: [
      "Ba chi nhánh tại TP. Hồ Chí Minh",
      "Hỗ trợ tư vấn và tham quan hoa viên",
    ],
    explore: "https://maps.app.goo.gl/8mYyyu3q4Rc9T6XQ7",
    locations: [
      {
        name: "CHI NHÁNH 1 TP. HỒ CHÍ MINH",
        body: `Số 99 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh.
ĐIỆN THOẠI: (028) 35.127.898 - 0778.454.544`,
        mapUrl: "https://maps.app.goo.gl/8mYyyu3q4Rc9T6XQ7",
      },
      {
        name: "CHI NHÁNH 2 TP. HỒ CHÍ MINH",
        body: `Số 140C Nguyễn Cư Trinh, Phường Cầu Ông Lãnh, TP. Hồ Chí Minh.
ĐIỆN THOẠI: (028) 3 838 2389`,
        mapUrl: "https://maps.app.goo.gl/VZ7pZWe38hjBoX366",
      },
      {
        name: "CHI NHÁNH 3 TP. HỒ CHÍ MINH",
        body: `Số 253D Lương Định Của, Phường Bình Trưng, TP. Hồ Chí Minh.
ĐIỆN THOẠI: 0947.542.279`,
        mapUrl: "https://maps.app.goo.gl/u18v3rkt53oEzXyK6",
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
