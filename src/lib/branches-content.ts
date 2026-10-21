export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
  phones?: string[];
  image?: string;
  imageAlt?: string;
}

export interface BranchGroup {
  id: string;
  name: string;
  description: string;
  locations: BranchLocation[];
}

export const BRANCH_GROUPS: BranchGroup[] = [
  {
    id: "hoa-vien",
    name: "Hoa Viên Bình Dương",
    description: "Không gian hoa viên và nơi đón tiếp khách tham quan tại Chánh Phú Hòa.",
    locations: [
      {
        id: "hoa-vien-binh-duong",
        name: "Hoa Viên Nghĩa Trang Bình Dương",
        address: "Khu phố Bông Trang, phường Chánh Phú Hòa, TP. Hồ Chí Minh",
        mapUrl: "https://maps.app.goo.gl/UGsyaCrNZpi6F3yY6",
        image: "/images/hvbd/vinh-hoa-mon.jpg",
        imageAlt: "Cổng Vĩnh Hoa Môn tại Hoa Viên Bình Dương",
      },
    ],
  },
  {
    id: "van-phong-tphcm",
    name: "Các chi nhánh tại TP. Hồ Chí Minh",
    description: "Các chi nhánh tiếp đón và tư vấn để quý khách thuận tiện kết nối với Hoa Viên.",
    locations: [
      {
        id: "dien-bien-phu",
        name: "Chi nhánh 1 TP. Hồ Chí Minh",
        address: "Số 99 Điện Biên Phủ, Phường Gia Định, TP. Hồ Chí Minh",
        mapUrl: "https://maps.app.goo.gl/8mYyyu3q4Rc9T6XQ7",
        phones: ["(028) 35.127.898", "0778.454.544"],
      },
      {
        id: "nguyen-cu-trinh",
        name: "Chi nhánh 2 TP. Hồ Chí Minh",
        address: "Số 140C Nguyễn Cư Trinh, Phường Cầu Ông Lãnh, TP. Hồ Chí Minh",
        mapUrl: "https://maps.app.goo.gl/VZ7pZWe38hjBoX366",
        phones: ["(028) 3 838 2389"],
      },
      {
        id: "luong-dinh-cua",
        name: "Chi nhánh 3 TP. Hồ Chí Minh",
        address: "Số 253D Lương Định Của, Phường Bình Trưng, TP. Hồ Chí Minh",
        mapUrl: "https://maps.app.goo.gl/u18v3rkt53oEzXyK6",
        phones: ["0947.542.279"],
      },
    ],
  },
];
