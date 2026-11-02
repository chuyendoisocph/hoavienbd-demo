/** Chuỗi thẻ thơ "Công cha nghĩa mẹ" trên trang chủ, theo bộ banner của Hoa Viên Bình Dương. */

export interface FilialVerse {
  /** Không có ảnh: thẻ mở đầu chỉ có chữ. */
  image?: {
    src: string;
    alt: string;
    /** Vị trí cắt ảnh trong khung ngang, để không mất mặt người trong ảnh. */
    position?: string;
  };
  lines: string[];
}

export const FILIAL_VERSES = {
  title: "Công cha nghĩa mẹ",
  tagline: "Trọn chữ hiếu, trọn nghĩa tình",
  cta: { label: "ĐỌC BÀI CÔNG CHA NGHĨA MẸ", href: "/bai-viet/cong-cha-nghia-me-tron-chu-hieu" },
  verses: [
    {
      lines: ["Đi khắp thế gian", "không ai tốt bằng mẹ.", "Gánh nặng cuộc đời", "không ai khổ bằng cha."],
    },
    {
      image: { src: "/images/hvbd/cong-cha-nghia-me/ba-cu-toc-bac.webp", position: "object-[50%_45%]", alt: "Chân dung đen trắng một bà cụ tóc bạc" },
      lines: [
        "Ơn cha núi chất trời tây,",
        "Lai láng nghĩa mẹ nước đầy biển Đông.",
        "Ơn cha trọng lắm ai ơi,",
        "Nghĩa mẹ bằng trời mang nặng đẻ đau.",
        "Lên non mới biết non cao,",
        "Nuôi con mới biết công lao mẫu từ.",
      ],
    },
    {
      image: { src: "/images/hvbd/cong-cha-nghia-me/me-dap-xe-cho-con.webp", alt: "Người mẹ đạp xe, đứa con ngủ say trên chiếc giỏ phía sau" },
      lines: [
        "Ầu ơ con ngủ cho say,",
        "Nhẹ chân mẹ đạp xoay đều xe lăn.",
        "Ve chai đồng nát mẹ cần,",
        "Con trẻ của mẹ nhọc nhằn tuổi thơ.",
        "Xót thương con trẻ ngủ đường, ngủ hiên,",
        "Nhìn con thơ ngủ nén lòng mẹ đau.",
      ],
    },
    {
      image: { src: "/images/hvbd/cong-cha-nghia-me/gia-dinh-ganh-con.webp", position: "object-[50%_70%]", alt: "Gia đình gánh con nhỏ trong đôi thúng trên đường làng" },
      lines: ["Phụ mẫu hai vị Phật Đà,", "Một lòng hiếu thảo hơn là đi tu."],
    },
    {
      image: { src: "/images/hvbd/cong-cha-nghia-me/cha-ganh-con.webp", position: "object-[50%_34%]", alt: "Người cha vừa cõng con vừa gánh hành lý" },
      lines: [
        "Cha cõng con sợ con đi chân mỏi,",
        "Giờ chân con cứng cáp bước đường dài.",
        "Cha chẳng ngại khổ, chỉ sợ con hư hỏng,",
        "Dìu dắt con trong bão táp gió mưa.",
        "Bao công lao dưỡng dục lúc sinh thành,",
        "Làm sao trả ơn cha cao như núi.",
      ],
    },
    {
      image: { src: "/images/hvbd/cong-cha-nghia-me/cha-che-du-cho-con.webp", position: "object-[50%_25%]", alt: "Người cha nghiêng chiếc dù che cho con dưới mưa" },
      lines: [
        "Nhớ lại những chuỗi ngày thơ,",
        "Mỗi lần vấp ngã con nhờ cha khuyên.",
        "Bây giờ vấp ngã triền miên,",
        "Cha không còn nữa, lời khuyên không còn.",
        "Dù cho biển cạn non mòn,",
        "Lòng con mãi mãi vẫn còn nhớ cha.",
      ],
    },
  ] as FilialVerse[],
};
