const NAME = /Hoa Viên Nghĩa Trang Bình Dương/g;
const NAME_UPPER = /HOA VIÊN NGHĨA TRANG BÌNH DƯƠNG/g;
const NBSP = " ";

/**
 * Giữ tên hoa viên khỏi bị ngắt giữa chữ ("Hoa / Viên", "Nghĩa / Trang") trong tiêu đề:
 * chỉ cho xuống dòng giữa "Hoa Viên Nghĩa Trang" và "Bình Dương".
 * Chỉ dùng khi hiển thị, không dùng cho metadata hay dữ liệu gửi Google.
 */
export function keepNameTogether(text: string) {
  return text
    .replace(NAME, ["Hoa", "Viên", "Nghĩa", "Trang"].join(NBSP) + " Bình" + NBSP + "Dương")
    .replace(NAME_UPPER, ["HOA", "VIÊN", "NGHĨA", "TRANG"].join(NBSP) + " BÌNH" + NBSP + "DƯƠNG");
}
