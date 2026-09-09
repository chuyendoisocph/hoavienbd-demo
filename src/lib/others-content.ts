/** Nội dung trang Sản Phẩm Khác — Hoa Viên Bình Dương */

export const OTHERS_HERO = {
  image: "/images/hvbd/ceremony-offerings.jpg",
  title: "Sản Phẩm Khác",
  subtitle: "Bài Vị Tổ Tiên . Đèn Cầu An . Sinh Phần",
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
    eyebrow: "Bài Vị Tổ Tiên",
    title: "Bài Vị Tổ Tiên",
    body: [
      "Thờ cúng tổ tiên qua hình thức bài vị là một truyền thống lâu đời, gắn liền với đạo hiếu của người Á Đông từ ngàn xưa. Bài vị tổ tiên thuở trước thường được đặt ở vị trí trang trọng nhất trên bàn thờ trong mỗi gia đình. Đó là vật phẩm thiêng liêng tượng trưng cho đức hiếu nghĩa.",
      "Thời gian đổi thay cách chúng ta tưởng nhớ tổ tiên, và nhiều gia đình có thể không đủ thời gian hay không gian để thờ phụng tại nhà. Hoa Viên Bình Dương mang đến lựa chọn an vị bài vị tổ tiên tại các trung tâm tưởng niệm, vừa gìn giữ và phát huy truyền thống hiếu nghĩa, vừa phù hợp với nhịp sống hiện đại. Đồng thời, chúng tôi cung cấp những bài vị được thiết kế tinh tế, an vị trong không gian trang nhã, có máy lạnh – bao quanh là những điện thờ tôn nghiêm dâng kính chư Phật và các bậc giác ngộ.",
    ],
    images: [
      "/images/NRV07890_OKs-1.jpg",
      "/images/NRV01533.jpg",
      "/images/NRV07905_OKs-1.jpg",
      "/images/NRV08025_OKs.jpg",
      "/images/NRV08030_OKs.jpg",
      "/images/NRV01529.jpg",
    ],
    imageLeft: false,
    gray: false,
  },
  {
    eyebrow: "Đèn Cầu An Vĩnh Hằng",
    title: "Đèn Cầu An Vĩnh Hằng",
    body: [
      "Truyền thống dâng đèn trong Phật giáo tượng trưng cho việc xua tan bóng tối vô minh và đạt đến sự giác ngộ của Đức Phật. Nó cũng mang theo khát vọng giải thoát khỏi khổ đau và vun bồi công đức qua những việc thiện lành.",
      "Vì gắn liền với điều cát tường, truyền thống tích phước này được khuyến khích và thể hiện qua Đèn Cầu An Vĩnh Hằng của Hoa Viên Bình Dương. Những ngọn đèn dầu truyền thống được nâng tầm thành các đèn pha lê tinh xảo mang hình tượng chư Phật, Bồ Tát cùng những ngọn nến nhân tạo tỏa ánh sáng dịu nhẹ dâng kính các bậc giác ngộ. Món quà ánh sáng và lời nguyện cầu – dù trong lúc khó khăn hay như một việc thiện – đều mang lại an vui trong những lúc bệnh tật, mất mát, đồng thời vun đắp tình thân, sự nghiệp, sức khỏe và phúc lộc.",
    ],
    images: [
      "/images/NRV01539aaa.jpg",
      "/images/NRV07911_OKs.jpg",
      "/images/NRV07875_OKs.jpg",
    ],
    imageLeft: false,
    gray: false,
  },
];

export const NV_SEED = {
  eyebrow: "Sinh Phần",
  title: "Sinh Phần (Mộ Sống)",
  intro: [
    "Nguyên lý của Sinh Phần (hay “Mộ Sống”) là việc kiến tạo phần mộ cho người còn sống nhằm thu nạp vượng khí cát tường của một môi trường phong thủy hữu tình, để hóa giải những khiếm khuyết trong vận mệnh hay Bát Tự của gia chủ.",
    "Sinh Phần tận dụng thế phong thủy mạnh mẽ tại các hoa viên của Hoa Viên Bình Dương, vốn được các bậc thầy uy tín chứng giám, để an vị Sinh Phần. Bằng cách áp dụng phương pháp phong thủy này, cuộc đời của một người có thể được cải thiện theo nhiều cách như tăng tiến tài lộc, sự nghiệp, sức khỏe, tình thân và vận may tổng thể.",
  ],
  images: ["/images/Nirvana-Semenyih-175.jpg", "/images/Nirvana-Semenyih-187.jpg"],
  benefitsTitle: "7 lợi ích khi an vị Sinh Phần",
  benefitsIntro:
    "Việc an vị Sinh Phần (hay “Mộ Sống”) mang lại nhiều lợi ích nếu được thực hiện cẩn trọng và có tư vấn đúng đắn. Bảy lợi ích chính của việc an vị Sinh Phần gồm:",
  benefits: [
    "Tăng cường trường thọ",
    "Khơi dậy năng lượng tích cực",
    "Cải biến vận mệnh",
    "Thúc đẩy sự nghiệp thăng tiến",
    "Vun đắp tài lộc và phúc đức",
    "Cải thiện nhân duyên và vận may",
    "Khuyến khích những việc thiện lành",
  ],
};

export const OTHERS_READ = {
  eyebrow: "TÌM HIỂU THÊM",
  cards: [
    { title: "Ý nghĩa của bài vị tổ tiên", image: "/images/NRV08030_OKs.jpg", href: "/resources/article" },
    { title: "Nguyên lý phong thủy đằng sau Sinh Phần", image: "/images/504.jpg", href: "/resources/article" },
    { title: "Vì sao nên dâng đèn cúng dường?", image: "/images/85_Weba.jpg", href: "/resources/article" },
  ],
};
