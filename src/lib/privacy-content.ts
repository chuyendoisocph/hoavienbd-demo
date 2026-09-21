import type { PolicyItem } from "@/types";

// Dịch và điều chỉnh từ Privacy Policy của Nirvana Asia cho Hoa Viên Bình Dương.
// Cần bộ phận pháp chế rà soát (đặc biệt phần căn cứ pháp luật và đầu mối liên hệ)
// trước khi đưa lên môi trường chính thức.

export const PRIVACY_HERO = {
  title: "Chính Sách",
  background: "/images/hvbd/thien-phuoc-yellow-blossom.jpg",
};

export const PRIVACY_TITLE = "Chính sách quyền riêng tư";

const COMPANY = "Công ty CP Đầu tư Xây dựng Chánh Phú Hòa";

export const PRIVACY_ITEMS: PolicyItem[] = [
  {
    title: "Giới thiệu",
    blocks: [
      {
        type: "p",
        lead: "A.",
        text: `${COMPANY} (“CPHACO”), đơn vị quản lý và vận hành Hoa Viên Bình Dương, cùng các công ty liên kết và công ty con (gọi chung là “chúng tôi”) cam kết bảo vệ và tôn trọng quyền riêng tư của mỗi cá nhân đối với Dữ liệu cá nhân (theo định nghĩa bên dưới), bảo đảm tuân thủ các yêu cầu của pháp luật Việt Nam về bảo vệ dữ liệu cá nhân (“Pháp luật về quyền riêng tư”).`,
      },
      {
        type: "p",
        lead: "B.",
        text: "Khi sử dụng dịch vụ, đăng nhập, duyệt hoặc truy cập website của chúng tôi (“Website”) và/hoặc trong quá trình giao dịch, làm việc với chúng tôi, Quý khách có thể được đề nghị cung cấp Dữ liệu cá nhân, trực tiếp hoặc thông qua biểu mẫu trực tuyến và/hoặc các phương thức điện tử khác.",
      },
      {
        type: "p",
        lead: "C.",
        text: "Thông báo bảo vệ dữ liệu cá nhân dưới đây giúp Quý khách nắm rõ cách chúng tôi thu thập, lưu trữ, sử dụng, tiết lộ và/hoặc xử lý Dữ liệu cá nhân mà chúng tôi nhận được trong quá trình cung cấp dịch vụ hoặc quyền truy cập Website.",
      },
      {
        type: "p",
        lead: "D.",
        text: "Khi đăng nhập, sử dụng hoặc duyệt Website này, Quý khách xác nhận đã được thông báo, đã hiểu các điều khoản của Chính sách quyền riêng tư này, đồng thời đồng ý với việc thu thập, sử dụng, tiết lộ và/hoặc xử lý Dữ liệu cá nhân của mình như mô tả trong Thông báo bảo vệ dữ liệu cá nhân. Nếu không đồng ý với các điều khoản này, Quý khách có thể không sử dụng Website và vui lòng không cung cấp bất kỳ Dữ liệu cá nhân nào qua Website.",
        emphasis: true,
      },
      {
        type: "p",
        lead: "E.",
        text: "Chúng tôi có thể cập nhật Chính sách quyền riêng tư này theo từng thời điểm. Mọi thay đổi sẽ được đăng tải trên trang này. Việc Quý khách tiếp tục truy cập Website, bao gồm sử dụng các dịch vụ được cung cấp qua Website, được hiểu là Quý khách đã ghi nhận và chấp thuận các thay đổi đó.",
      },
      {
        type: "p",
        lead: "F.",
        text: "Chính sách quyền riêng tư này bổ sung, không giới hạn hay thay thế, các mục đích mà Quý khách cung cấp Dữ liệu cá nhân cho chúng tôi được nêu rõ trong bất kỳ biểu mẫu thu thập Dữ liệu cá nhân nào.",
      },
    ],
  },
  {
    title: "1. Mô tả dữ liệu cá nhân",
    blocks: [
      {
        type: "p",
        text: "Thông tin nhận dạng cá nhân có thể chịu sự điều chỉnh của pháp luật về bảo vệ dữ liệu, quyền riêng tư và các quy định tương tự, bao gồm: họ tên, số căn cước công dân, số hộ chiếu, địa chỉ thanh toán và liên lạc, giới tính, ngày sinh và tuổi, tình trạng hôn nhân, thông tin liên hệ, địa chỉ email, dân tộc, quốc tịch, tôn giáo, thông tin thẻ tín dụng hoặc tài khoản ngân hàng và/hoặc các thông tin khác liên quan đến các mục đích nêu tại Mục 3 (“Dữ liệu cá nhân”).",
      },
      {
        type: "p",
        text: "Dữ liệu cá nhân Quý khách cung cấp phải chính xác, đầy đủ và không gây hiểu nhầm. Nếu biết Dữ liệu cá nhân chúng tôi đang lưu giữ không chính xác, chưa đầy đủ, gây hiểu nhầm hoặc chưa được cập nhật, Quý khách có thể gửi yêu cầu chỉnh sửa bằng văn bản theo thông tin liên hệ tại Mục 7.",
      },
    ],
  },
  {
    title: "2. Hậu quả khi không cung cấp dữ liệu",
    blocks: [
      { type: "p", text: "Việc không cung cấp Dữ liệu cá nhân có thể dẫn đến:" },
      {
        type: "list",
        items: [
          "Chúng tôi không thể gửi cho Quý khách các thông báo, dịch vụ, sản phẩm và/hoặc thông tin theo yêu cầu;",
          "Ảnh hưởng đến việc các bên ký kết giao dịch mua bán, hợp đồng hoặc thỏa thuận cần thiết liên quan đến sản phẩm và dịch vụ;",
          "Chúng tôi không thể xử lý đơn đăng ký của Quý khách đối với các dịch vụ, sản phẩm, chương trình và/hoặc hoạt động cần thiết.",
        ],
      },
    ],
  },
  {
    title: "3. Mục đích",
    blocks: [
      { type: "p", text: "Dữ liệu cá nhân được thu thập cho các mục đích sau:" },
      {
        type: "list",
        items: [
          "Xử lý đơn đăng ký của Quý khách tham gia các chương trình và/hoặc hoạt động do chúng tôi tổ chức, hoặc liên quan đến sản phẩm và/hoặc dịch vụ của chúng tôi;",
          "Gửi cho Quý khách thông báo (kể cả qua mạng xã hội), thư và các tài liệu quảng cáo và/hoặc tiếp thị về sản phẩm, dịch vụ hiện tại hoặc trong tương lai, thông tin cập nhật, chương trình ưu đãi và/hoặc thông tin của bên thứ ba mà chúng tôi cho rằng Quý khách có thể quan tâm;",
          "Bán sản phẩm và/hoặc dịch vụ cho Quý khách, bao gồm mọi công việc cần thiết để hoàn tất giao dịch mua bán, bàn giao sản phẩm, dịch vụ và các dịch vụ hậu mãi;",
          "Ký kết giao dịch, hợp đồng hoặc văn bản trong hoạt động kinh doanh thông thường và thực hiện các nghĩa vụ hợp đồng của chúng tôi;",
          "Thực hiện hoạt động tiếp thị và xây dựng hồ sơ khách hàng liên quan đến dịch vụ và sản phẩm mới;",
          "Lưu trữ hồ sơ nội bộ;",
          "Thu hồi công nợ;",
          "Phản hồi thắc mắc hoặc khiếu nại của Quý khách, bao gồm xử lý yêu cầu và lập xác nhận, thông báo, sao kê;",
          "Đối chiếu dữ liệu chúng tôi lưu giữ về Quý khách theo từng thời điểm;",
          "Điều tra khiếu nại và giao dịch đáng ngờ;",
          "Khi được Quý khách đồng ý, giới thiệu các sản phẩm và gói dịch vụ tang lễ mới do chúng tôi triển khai;",
          "Thực hiện các nghĩa vụ của chúng tôi theo pháp luật, quy định, chỉ thị và hướng dẫn có liên quan;",
          "Chuẩn bị cho và trong quá trình mua bán, tái cơ cấu, hợp nhất hoặc sáp nhập toàn bộ hay một phần hoạt động kinh doanh của chúng tôi (dù đã hay có thể xảy ra); và/hoặc",
          "Mọi mục đích khác phát sinh từ hoặc gắn liền với các mục đích trên.",
        ],
      },
      {
        type: "p",
        text: "Nếu Quý khách cung cấp Dữ liệu cá nhân của người khác cho chúng tôi, Quý khách xác nhận đã có được sự đồng ý cần thiết của những người này đối với việc thu thập, sử dụng và tiết lộ Dữ liệu cá nhân của họ, và đã thông báo cho họ các mục đích nêu trên.",
      },
    ],
  },
  {
    title: "4. Tiết lộ thông tin",
    blocks: [
      {
        type: "p",
        text: "Dữ liệu cá nhân Quý khách cung cấp sẽ được giữ bảo mật. Tuy nhiên, Quý khách đồng ý và cho phép chúng tôi cung cấp hoặc tiết lộ Dữ liệu cá nhân cho các nhóm đối tượng sau:",
      },
      {
        type: "list",
        items: [
          "Bất kỳ cá nhân, tổ chức nào mà chúng tôi buộc phải cung cấp theo quy định pháp luật hoặc theo yêu cầu của cơ quan nhà nước có thẩm quyền;",
          "Các công ty liên kết và công ty con của chúng tôi, kể cả các công ty được thành lập trong tương lai;",
          "Đại lý được ủy quyền cung cấp dịch vụ liên quan hoặc thay mặt chúng tôi bán sản phẩm, dịch vụ;",
          "Cơ quan nhà nước, cơ quan có thẩm quyền theo luật định và cơ quan quản lý ngành;",
          "Kiểm toán viên, tư vấn viên, kế toán, luật sư hoặc các cố vấn tài chính, chuyên môn khác, kể cả các tổ chức tài chính có liên quan;",
          "Nhà thầu, nhà thầu phụ, đơn vị vận hành mạng hoặc các nhà cung cấp dịch vụ, sản phẩm, đơn vị quản lý bên thứ ba được chỉ định khi cần thiết hoặc phù hợp;",
          "Đối tác kinh doanh và đơn vị liên kết của chúng tôi;",
          "Bất kỳ bên nào khác có nghĩa vụ bảo mật với chúng tôi; và/hoặc",
          "Bất kỳ tổ chức nào khác mà chúng tôi thấy phù hợp và cần thiết cho các mục đích nêu tại Mục 3.",
        ],
      },
    ],
  },
  {
    title: "5. Bảo mật",
    blocks: [
      {
        type: "p",
        text: "Chúng tôi xử lý và lưu trữ Dữ liệu cá nhân của Quý khách một cách an toàn, áp dụng các biện pháp và quy trình thực tế phù hợp nhằm luôn ngăn chặn việc xử lý trái phép hoặc bất hợp pháp có thể gây mất mát, phá hủy hay hư hại ngoài ý muốn đối với Dữ liệu cá nhân.",
      },
      {
        type: "p",
        text: "Dữ liệu cá nhân được lưu giữ trong thời gian cần thiết để thực hiện các mục đích nêu tại Mục 3, hoặc theo thời hạn pháp luật cho phép tại từng thời điểm. Khi không còn cần thiết cho mục đích xử lý, chúng tôi sẽ thực hiện mọi biện pháp hợp lý để hủy hoặc ẩn danh vĩnh viễn Dữ liệu cá nhân đó.",
      },
    ],
  },
  {
    title: "6. Chuyển giao & chia sẻ dữ liệu cá nhân",
    blocks: [
      {
        type: "p",
        text: "Khi xét thấy cần thiết hoặc phù hợp, chúng tôi có thể chuyển giao hoặc chia sẻ Dữ liệu cá nhân của Quý khách cho công ty khác trong hệ thống hoặc đại lý được ủy quyền, bao gồm cả đơn vị hoạt động ở nước ngoài. Việc này có thể dẫn đến việc Dữ liệu cá nhân được chuyển ra ngoài lãnh thổ Việt Nam, nơi mức độ bảo vệ thông tin cá nhân có thể khác biệt.",
      },
      {
        type: "p",
        text: "Chúng tôi sẽ thực hiện các biện pháp hợp lý để bảo vệ Dữ liệu cá nhân khỏi việc bị lạm dụng, mất mát, truy cập, sửa đổi hoặc tiết lộ trái phép, theo đúng Pháp luật về quyền riêng tư có hiệu lực tại từng thời điểm.",
      },
    ],
  },
  {
    title: "7. Truy cập và chỉnh sửa",
    blocks: [
      {
        type: "p",
        text: "Quý khách có quyền yêu cầu truy cập và chỉnh sửa thông tin chúng tôi đang lưu giữ; việc này có thể phát sinh phí theo quy định. Cụ thể, Quý khách có thể:",
      },
      {
        type: "list",
        items: [
          "Kiểm tra việc chúng tôi có lưu giữ hoặc sử dụng Dữ liệu cá nhân của mình hay không và yêu cầu truy cập dữ liệu đó;",
          "Yêu cầu chỉnh sửa Dữ liệu cá nhân không chính xác, chưa đầy đủ hoặc đã lỗi thời;",
          "Yêu cầu chúng tôi chỉ lưu giữ Dữ liệu cá nhân trong thời gian cần thiết để thực hiện mục đích thu thập;",
          "Yêu cầu chúng tôi nêu rõ hoặc giải thích chính sách và quy trình xử lý Dữ liệu cá nhân;",
          "Thông báo việc phản đối sử dụng Dữ liệu cá nhân cho mục đích tiếp thị, khi đó chúng tôi sẽ không sử dụng dữ liệu cho mục đích này; và",
          "Rút lại một phần hoặc toàn bộ sự đồng ý đã đưa ra trước đó, tùy thuộc các giới hạn pháp lý, điều kiện hợp đồng và một khoảng thời gian hợp lý.",
        ],
      },
      {
        type: "p",
        text: "Nếu có thắc mắc, yêu cầu chỉnh sửa, khiếu nại hoặc muốn truy cập Dữ liệu cá nhân, vui lòng gửi yêu cầu bằng văn bản đến:",
      },
      {
        type: "contact",
        rows: [
          { label: "Công ty", value: COMPANY },
          {
            label: "Địa chỉ",
            value: "Hoa Viên Nghĩa Trang Bình Dương, Khu phố 1B, phường Chánh Phú Hòa, TP. Hồ Chí Minh",
          },
          { label: "Tổng đài", value: "0818 555 444", href: "tel:0818555444" },
          { label: "Trực tuyến", value: "Gửi yêu cầu tại trang Liên Hệ", href: "/lien-he" },
        ],
      },
    ],
  },
  {
    title: "8. Ngôn ngữ",
    blocks: [
      {
        type: "p",
        text: "Thông báo bảo vệ dữ liệu cá nhân này được ban hành bằng tiếng Việt. Trường hợp có bản dịch sang ngôn ngữ khác, bản tiếng Việt được ưu tiên áp dụng khi có khác biệt trong cách hiểu.",
      },
    ],
  },
];
