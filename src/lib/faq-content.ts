/** Nội dung trang Hỏi & Đáp — Hoa Viên Bình Dương.
 *  Biên tập từ bộ FAQ thường gặp về nghĩa trang, điều chỉnh cho phù hợp Hoa Viên Bình Dương. */

export const FAQ_HERO = {
  background: "/images/hvbd/actual/faq-hero-vinh-hang-dai-expanded.jpg",
  title: "Hỏi & Đáp",
  subtitle: "Giải đáp những thắc mắc thường gặp tại Hoa Viên Bình Dương",
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
    category: "Thông tin, bảo mật & hỏa táng",
    items: [
      {
        q: "Yêu cầu tìm hiểu thông tin có tuân theo quy định bảo mật không?",
        a: [
          "Có. Hoa Viên Bình Dương tuân thủ nghiêm ngặt quy trình bảo mật thông tin cá nhân. Quý vị vui lòng gọi hotline 0818 555 444 để trao đổi về nhu cầu tra cứu và được hướng dẫn thủ tục phù hợp.",
        ],
      },
      {
        q: "Tro cốt có thể bị nhầm lẫn không?",
        a: [
          "Không. Mỗi thời điểm chỉ diễn ra một lễ hỏa táng. Hồ sơ và giấy tờ nhận diện đều được đối chiếu trước khi bắt đầu, đồng thời nhân viên hỏa táng phải tuân thủ quy trình kiểm soát nghiêm ngặt trong suốt quá trình thực hiện và bàn giao tro cốt.",
        ],
      },
    ],
  },
  {
    category: "Mộ phần, xây dựng & cảnh quan",
    items: [
      {
        q: "Tôi muốn xây mộ, làm bia mộ hoặc thực hiện hạng mục xây dựng thì cần làm gì?",
        a: [
          "Toàn bộ việc xây dựng mộ phần và lắp đặt bia mộ tại Hoa Viên Bình Dương đều do đội ngũ thợ của Hoa Viên trực tiếp thực hiện, bảo đảm đúng thiết kế, tiêu chuẩn kỹ thuật và sự đồng bộ của cảnh quan.",
          "Quý vị chỉ cần liên hệ bộ phận tiếp nhận để được tư vấn mẫu, vật liệu và chi phí. Sau khi gia đình xác nhận phương án và hoàn tất thanh toán, Hoa Viên sẽ sắp xếp thi công và thông báo tiến độ cụ thể.",
        ],
      },
      {
        q: "Cách tốt nhất để giữ gìn bia hoặc bảng tưởng niệm là gì?",
        a: [
          "Bia và bảng tưởng niệm sẽ hao mòn dần dưới tác động của thời tiết. Việc khắc và dát vàng chữ hoặc sử dụng loại sơn bền màu có thể giúp kéo dài tuổi thọ và giữ nội dung dễ đọc hơn.",
          "Không sử dụng chất tẩy rửa có tính mài mòn hoặc dung môi vì có thể làm hỏng bề mặt và lớp hoàn thiện.",
        ],
      },
      {
        q: "Các mộ phần được chăm sóc như thế nào?",
        a: [
          "Tùy vị trí và loại đất, sau khi an táng có thể mất vài tháng để nền đất ổn định. Trong thời gian này, Hoa Viên sẽ bồi thêm đất khi cần thiết.",
          "Cây xanh và thảm cỏ được bổ sung khi điều kiện phù hợp. Khi cây cỏ đã ổn định, đội ngũ chăm sóc cảnh quan sẽ tiếp tục bảo dưỡng mộ phần và khu vực xung quanh thường xuyên.",
        ],
      },
      {
        q: "Tại sao cảnh quan Hoa Viên thay đổi theo thời gian?",
        a: [
          "Cây xanh thay đổi theo mùa; một số loại rụng lá vào mùa khô, phát triển mạnh vào mùa mưa hoặc chỉ ra hoa vào những thời điểm nhất định. Đội ngũ làm vườn và kỹ thuật lập kế hoạch chăm sóc theo mùa để duy trì không gian an nghỉ yên bình.",
          "Hạn hán, nắng nóng hoặc mưa lớn có thể ảnh hưởng tạm thời đến cây cỏ và lối đi. Hoa Viên sẽ điều chỉnh việc tưới, thoát nước và bảo dưỡng trong phạm vi điều kiện thực tế, đồng thời thông báo khi có vấn đề ảnh hưởng đến việc thăm viếng.",
        ],
      },
      {
        q: "Tôi có thể tìm mộ phần bằng cách nào?",
        a: [
          "Quý vị có thể gọi hotline 0818 555 444 và cung cấp họ tên, tuổi cùng năm mất của người quá cố. Nhân viên sẽ tra cứu và hướng dẫn chính xác vị trí mộ phần.",
          "Khi đến Hoa Viên, quý vị có thể ghé văn phòng hoặc sử dụng màn hình tra cứu để nhận bản đồ và hướng dẫn đường đi.",
        ],
      },
    ],
  },
  {
    category: "Hồ sơ & hỗ trợ khách hàng",
    items: [
      {
        q: "Tại sao cập nhật thông tin lại quan trọng và tôi cập nhật bằng cách nào?",
        a: [
          "Thông tin chính xác giúp Hoa Viên liên hệ kịp thời về nghi lễ, bảo dưỡng và nghĩa vụ dịch vụ; duy trì hồ sơ pháp lý, nội dung khắc bia và thông tin người đại diện; đồng thời bảo vệ quyền lợi của gia đình khi có sự cố hạ tầng hoặc thời tiết.",
          "Quý vị có thể cập nhật trực tiếp tại quầy tiếp nhận hoặc từ xa qua hotline, email hay Zalo OA. Khi cập nhật thay người khác, vui lòng chuẩn bị CCCD, số hợp đồng và giấy ủy quyền. Hồ sơ thông thường được xử lý trong 1–3 ngày làm việc và được bảo mật theo quy định.",
        ],
      },
      {
        q: "Tôi có thể đóng góp ý kiến bằng cách nào?",
        a: [
          "Quý vị có thể gọi hotline 0818 555 444 hoặc điền phiếu góp ý tại văn phòng Hoa Viên. Phiếu có thể được gửi vào hộp thư góp ý tại khu vực tiếp nhận.",
        ],
      },
      {
        q: "Tôi trình báo trộm cắp hoặc hư hại và đề nghị thay thế bằng cách nào?",
        a: [
          "Người sở hữu quyền an táng cần thông báo sự việc cho Hoa Viên để được hướng dẫn xử lý và xác định trường hợp có thể đề nghị bồi thường.",
          "Hồ sơ có thể gồm biên bản xác nhận sự việc, báo giá sửa chữa hoặc thay thế đối với mộ xây, cùng hình ảnh đầy đủ của phần bị hư hại hoặc mất cắp. Người sở hữu quyền an táng cần trực tiếp điền và ký hồ sơ đề nghị.",
        ],
      },
    ],
  },
  {
    category: "Quyền an táng & lựa chọn vị trí",
    items: [
      {
        q: "Tôi có được lựa chọn vị trí an táng không?",
        a: [
          "Có. Các khu an táng được bố trí theo quy hoạch để bảo đảm cảnh quan đồng bộ và thuận tiện cho việc chăm sóc, nhưng quý vị vẫn có thể trực tiếp tham quan và lựa chọn trong số những vị trí còn trống tại khu mộ phù hợp.",
          "Nhân viên Chăm sóc Khách hàng sẽ cung cấp danh sách vị trí đang còn trống và tư vấn về loại mộ, hướng cùng các đặc điểm liên quan trước khi gia đình xác nhận.",
        ],
      },
      {
        q: "Thời hạn của quyền an táng là gì?",
        a: [
          "Thời hạn là khoảng thời gian gia đình được quyền sử dụng vị trí để an táng. Tùy loại sản phẩm và nội dung hợp đồng, quyền sử dụng có thể là 50 năm hoặc vĩnh viễn.",
          "Quý vị nên yêu cầu nhân viên giải thích rõ thời hạn, phạm vi chăm sóc và các quyền lợi liên quan trước khi ký hợp đồng.",
        ],
      },
      {
        q: "Sau khi mua quyền an táng, tôi có thời gian cân nhắc lại không?",
        a: [
          "Có. Thời gian cân nhắc lại là 30 ngày, với điều kiện chưa thực hiện mai táng trong khoảng thời gian này. Quý vị vui lòng liên hệ bộ phận Chăm sóc Khách hàng để được hướng dẫn theo hồ sơ cụ thể.",
        ],
      },
    ],
  },
  {
    category: "Thanh toán",
    items: [
      {
        q: "Tôi có thể thanh toán bằng những hình thức nào?",
        a: [
          "Quý vị có thể thanh toán bằng tiền mặt, chuyển khoản, séc hoặc chi phiếu ngân hàng. Vui lòng trao đổi với nhân viên Chăm sóc Khách hàng để nhận thông tin tài khoản và hướng dẫn phù hợp.",
        ],
      },
      {
        q: "Séc hoặc chi phiếu cần ghi trả cho ai?",
        a: [
          "Tất cả séc hoặc chi phiếu cần ghi trả cho “Công ty Cổ phần Đầu tư Xây dựng Chánh Phú Hòa”.",
        ],
      },
      {
        q: "Tôi có thể trả góp không?",
        a: [
          "Hiện tại Hoa Viên không áp dụng hình thức trả góp hoặc nhận một phần khoản thanh toán. Quý vị vui lòng liên hệ nhân viên Chăm sóc Khách hàng để được hướng dẫn về thời điểm và phương thức thanh toán.",
        ],
      },
    ],
  },
];
