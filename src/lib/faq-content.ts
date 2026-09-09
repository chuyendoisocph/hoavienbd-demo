/** Nội dung trang Hỏi & Đáp — Hoa Viên Bình Dương.
 *  Biên tập từ bộ FAQ thường gặp về nghĩa trang, điều chỉnh cho phù hợp Hoa Viên Bình Dương. */

export const FAQ_HERO = {
  background: "/images/hvbd/grave-offering-white.jpg",
  title: "Hỏi & Đáp",
  subtitle: "Những thắc mắc thường gặp về hoa viên của quý vị",
};

export interface FaqItem {
  q: string;
  a: string[];
}

export interface FaqGroup {
  category: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    category: "Chăm sóc & Cảnh quan",
    items: [
      {
        q: "Các mộ phần được chăm sóc như thế nào?",
        a: [
          "Tùy thuộc vào vị trí và loại đất, sau khi an táng có thể mất vài tháng để đất ổn định. Trong thời gian này, mộ phần sẽ được bồi thêm đất khi cần thiết.",
          "Việc gieo hạt hoặc trải cỏ được thực hiện ngay khi điều kiện phù hợp để cỏ bén rễ. Một khi lớp cỏ đã vững, đội ngũ của chúng tôi sẽ thường xuyên chăm sóc cẩn thận.",
        ],
      },
      {
        q: "Tại sao cảnh quan hoa viên lại thay đổi?",
        a: [
          "Cảnh quan thay đổi vì nhiều lý do. Cây cối thay đổi theo mùa – rụng lá hay đâm chồi – và thời kỳ ra hoa phụ thuộc vào loại cây và thời điểm trong năm. Đội ngũ làm vườn và kỹ thuật của chúng tôi luôn lên kế hoạch chăm sóc theo mùa để mang lại không gian an nghỉ đẹp nhất có thể.",
          "Trong điều kiện thời tiết khắc nghiệt như hạn hán hay mưa lớn, một số khu vực khó tránh khỏi bị ảnh hưởng. Chúng tôi cam kết sẽ nỗ lực hết sức để duy trì cảnh quan và tiện nghi tại hoa viên, đồng thời luôn lắng nghe ý kiến đóng góp của quý vị.",
        ],
      },
      {
        q: "Cách nào tốt nhất để giữ gìn bia/bảng tưởng niệm?",
        a: [
          "Mọi bia và bảng tưởng niệm đều hao mòn dần theo thời gian. Quý vị có thể kéo dài tuổi thọ lớp bảo vệ bằng cách thường xuyên rửa nhẹ bằng nước và xà phòng (hoặc chất tẩy rửa loại nhẹ), xả sạch và để khô.",
          "Khuyến cáo: không dùng chất tẩy mài mòn, hóa chất ăn mòn mạnh hay dung môi, vì có thể làm hỏng bề mặt và lớp phủ bảo vệ.",
        ],
      },
    ],
  },
  {
    category: "Mộ phần & Xây dựng",
    items: [
      {
        q: "Tôi muốn xây mộ hoặc làm bia mộ thì nên làm gì?",
        a: [
          "Quý vị vui lòng liên hệ với chúng tôi để nhận danh sách các đơn vị thi công đã đăng ký với hoa viên. Để giữ tính minh bạch và độc lập, chúng tôi không chỉ định hay ưu tiên bất kỳ đơn vị nào.",
          "Chúng tôi khuyên quý vị nên khảo giá vài đơn vị vì giá có thể chênh lệch đáng kể, đồng thời tìm hiểu về tay nghề và uy tín của họ. Sau khi quý vị đặt và thanh toán, đơn vị thi công sẽ phối hợp cùng chúng tôi để tiến hành xây mộ/làm bia.",
        ],
      },
      {
        q: "Tại sao vị trí an táng phải được phân bố? Tôi có được chọn vị trí không?",
        a: [
          "Các vị trí an táng được phân bố có trật tự để tránh phát triển rời rạc, tạo điều kiện chăm sóc cảnh quan hiệu quả và mang lại không gian yên bình cho khách đến viếng.",
          "Tại một số khu vực, quý vị có thể chọn vị trí mong muốn. Vui lòng hỏi nhân viên Chăm sóc Khách hàng về những khu vực được phép chọn vị trí.",
        ],
      },
      {
        q: "Tôi có thể tìm mộ phần bằng cách nào?",
        a: [
          "Để tìm mộ phần, quý vị vui lòng gọi điện đến hoa viên. Để hỗ trợ nhanh nhất, chúng tôi sẽ hỏi họ tên, tuổi và năm mất của người quá cố, sau đó cung cấp chính xác vị trí mộ phần.",
          "Khi đến viếng, quý vị có thể ghé văn phòng để được hỗ trợ bản đồ và đường đi đến mộ phần.",
        ],
      },
    ],
  },
  {
    category: "Hỏa táng & Quyền riêng tư",
    items: [
      {
        q: "Liệu tro cốt có thể bị lẫn lộn không?",
        a: [
          "Không. Mỗi thời điểm chỉ có một lễ hỏa táng diễn ra, và toàn bộ hồ sơ, thủ tục đều được đối chiếu kỹ lưỡng trước khi bắt đầu. Đội ngũ của chúng tôi tuân thủ quy trình nghiêm ngặt này cho từng lễ hỏa táng.",
        ],
      },
      {
        q: "Yêu cầu tra cứu thông tin có bị chi phối bởi quy định bảo mật không?",
        a: [
          "Hoa Viên Bình Dương tuân thủ nghiêm ngặt các quy định về bảo mật thông tin cá nhân. Xin quý vị liên hệ trực tiếp với chúng tôi để được trao đổi về yêu cầu của mình.",
        ],
      },
    ],
  },
  {
    category: "Quyền an táng & Thanh toán",
    items: [
      {
        q: "“Thời hạn” quyền an táng là gì?",
        a: [
          "Thời hạn là quyền sử dụng – ở đây là quyền an táng trong một khoảng thời gian nhất định. Phần mộ thường là vĩnh viễn, trong khi vị trí lưu tro cốt có thể theo thời hạn hoặc vĩnh viễn. Nhân viên Chăm sóc Khách hàng sẽ giải thích các lựa chọn cụ thể tại hoa viên.",
        ],
      },
      {
        q: "Có thời gian cân nhắc lại sau khi mua quyền an táng hoặc vị trí tưởng niệm không?",
        a: [
          "Có. Quý vị có thời gian cân nhắc lại sau khi mua, miễn là chưa tiến hành an táng trong thời gian này. Vui lòng liên hệ nhân viên để biết chi tiết áp dụng tại hoa viên.",
        ],
      },
      {
        q: "Tôi thanh toán bằng cách nào?",
        a: [
          "Vì sự an toàn của cả hai bên, chúng tôi ưu tiên thanh toán không dùng tiền mặt. Quý vị có thể thanh toán bằng thẻ, chuyển khoản ngân hàng hoặc các hình thức khác. Vui lòng trao đổi với nhân viên Chăm sóc Khách hàng để được hướng dẫn cụ thể.",
        ],
      },
      {
        q: "Tôi có thể trả góp không?",
        a: [
          "Có. Hoa Viên Bình Dương có chương trình trả góp linh hoạt với lãi suất ưu đãi, giúp quý vị chủ động hơn về tài chính. Vui lòng liên hệ để được tư vấn phương án phù hợp.",
        ],
      },
    ],
  },
  {
    category: "Thông tin & Phản hồi",
    items: [
      {
        q: "Vì sao cập nhật thông tin lại quan trọng? Tôi cập nhật bằng cách nào?",
        a: [
          "Cũng như khi thay đổi địa chỉ với ngân hàng, việc báo cho chúng tôi khi quý vị đổi địa chỉ là rất quan trọng để chúng tôi giữ liên lạc. Quý vị có thể cập nhật thông tin qua điện thoại, email hoặc trực tiếp tại văn phòng hoa viên.",
        ],
      },
      {
        q: "Tôi có thể đóng góp ý kiến bằng cách nào?",
        a: [
          "Quý vị có thể gọi điện, gửi email hoặc điền phiếu góp ý có sẵn tại các văn phòng của chúng tôi. Mọi ý kiến đóng góp đều được trân trọng tiếp nhận để chúng tôi phục vụ ngày càng tốt hơn.",
        ],
      },
      {
        q: "Tôi trình báo trộm cắp hoặc hư hại và sắp xếp thay thế bằng cách nào?",
        a: [
          "Người sở hữu quyền an táng cần trình báo sự việc để chúng tôi hướng dẫn thủ tục và xác định khả năng được bồi thường.",
          "Tùy trường hợp, quý vị có thể cần cung cấp: báo giá sửa chữa/thay thế phần bị hư hại (đối với mộ xây), hình ảnh phần bị hư hại hoặc mất cắp, và biên bản trình báo của cơ quan chức năng đối với các trường hợp cố ý phá hoại.",
        ],
      },
    ],
  },
];
