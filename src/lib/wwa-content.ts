/** Nội dung trang Về Chúng Tôi — Hoa Viên Bình Dương */

export const WWA_HERO = {
  image: "/images/hvbd/monument-panorama.jpg",
  title: "Về Chúng Tôi",
};

export const WWA_INTRO = {
  title: "Hoa Viên Bình Dương",
  eyebrow: "Giới Thiệu",
  body: [
    "Hoa Viên Bình Dương là công viên tưởng niệm sinh thái quy mô lớn, tọa lạc tại xã Chánh Phú Hòa, thị xã Bến Cát, tỉnh Bình Dương. Với cảnh quan xanh mát được quy hoạch bài bản cùng phong thủy hữu tình, nơi đây mang đến chốn an nghỉ trang nghiêm và thanh tịnh cho người đã khuất, đồng thời là không gian tưởng niệm ấm áp để các thế hệ con cháu tìm về.",
    "Chúng tôi không ngừng nỗ lực nâng cao chất lượng dịch vụ, gìn giữ và phát huy truyền thống hiếu nghĩa của dân tộc, mang đến hệ thống dịch vụ tang lễ và tưởng niệm toàn diện. Mỗi công trình, mỗi mảng xanh đều được chăm chút để tôn vinh và trân trọng từng cuộc đời.",
  ],
  map: "/images/hvbd/park-map.jpg",
};

export interface ValueCard {
  number: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
}

export const WWA_VALUES = {
  background: "/images/hvbd/temple-aerial.jpg",
  cards: [
    {
      number: "01",
      title: "Tầm Nhìn",
      body: "Cam kết mang đến dịch vụ chất lượng, tỉ mỉ, chuyên nghiệp và đậm tính cá nhân hóa.",
      cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
    },
    {
      number: "02",
      title: "Sứ Mệnh",
      body: "Kiên định với tinh thần “lấy khách hàng làm trọng tâm”, cung cấp dịch vụ trọn gói chuyên nghiệp.",
      cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
    },
    {
      number: "03",
      title: "Văn Hóa Doanh Nghiệp",
      body: "Với tinh thần chuyên nghiệp và trách nhiệm đối với nghề nghiệp cao quý này, Hoa Viên Bình Dương luôn nỗ lực vươn tới sự xuất sắc.",
      cta: { label: "TÌM HIỂU THÊM", href: "/resources/contact-us-new" },
    },
  ] as ValueCard[],
};

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// Số liệu mang tính minh họa — cập nhật theo số liệu thật của Hoa Viên Bình Dương.
export const WWA_STATS: Stat[] = [
  { value: 200, suffix: "", label: "Hecta Hoa Viên" },
  { value: 20, suffix: "+", label: "Năm Kinh Nghiệm" },
  { value: 50000, suffix: "+", label: "Phần Mộ" },
  { value: 100000, suffix: "+", label: "Khách Hàng Tin Tưởng" },
];

export interface Leader {
  image: string;
  imageLeft: boolean;
  eyebrow: string;
  name: string;
  role?: string;
  bio: string;
  quote?: string;
}

// Phần lãnh đạo hiện không hiển thị trên trang (chờ thông tin thật của Hoa Viên Bình Dương).
export const WWA_LEADERS: Leader[] = [];

export const WWA_AWARDS = {
  title: "Giải Thưởng & Ghi Nhận",
  body: [
    "Hoa Viên Bình Dương không ngừng phát triển qua từng ngày, nâng cao tiêu chuẩn dịch vụ bằng những đổi mới liên tục.",
    "Sự tin tưởng và đón nhận của khách hàng chính là động lực để chúng tôi vững bước trên hành trình của sự sẻ chia và tận tâm.",
    "Đội ngũ chuyên nghiệp của Hoa Viên Bình Dương luôn nỗ lực hết mình bằng sự cần mẫn và tận tụy, để xứng đáng với niềm tin mà quý khách hàng gửi gắm.",
  ],
  images: [] as string[],
};
