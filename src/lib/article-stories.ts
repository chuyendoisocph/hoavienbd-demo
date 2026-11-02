/**
 * Bài viết dạng truyện đối thoại: tách lời dẫn và lời từng nhân vật để trình bày
 * như một cuộc trò chuyện, thay vì một khối văn bản liền.
 */

export type Speaker = "thay" | "tro";

export interface StoryLine {
  who: Speaker;
  /** Lời dẫn ngắn trước câu thoại, ví dụ "Thầy mỉm cười". */
  cue?: string;
  text: string;
}

export type StoryPart =
  | { kind: "lead"; text: string }
  | { kind: "narration"; text: string }
  | { kind: "image"; src: string; alt: string; caption: string; width: number; height: number }
  | { kind: "line"; line: StoryLine }
  /** Đoạn thoại then chốt, được làm nổi bật. `key` là câu chốt in đậm trong câu cuối. */
  | { kind: "highlight"; lines: StoryLine[]; key: string }
  | { kind: "chapter"; text: string }
  | { kind: "verse"; cue: string; lines: string[]; source?: string }
  | { kind: "moral"; text: string }
  | { kind: "note"; text: string };

export interface ArticleStory {
  speakers: Record<Speaker, string>;
  parts: StoryPart[];
}

const line = (who: Speaker, text: string, cue?: string): StoryPart => ({ kind: "line", line: { who, cue, text } });
const narration = (text: string): StoryPart => ({ kind: "narration", text });

export const ARTICLE_STORIES: Record<string, ArticleStory> = {
  "doi-phuong-hoang-chuyen-ve-mot-nguoi-biet-lo-truoc": {
    speakers: { thay: "Ông", tro: "Cháu" },
    parts: [
      { kind: "lead", text: "Cuối một đời người, điều để lại không chỉ là tài sản, mà còn là sự an lòng cho những người thân yêu." },
      { kind: "chapter", text: "Câu chuyện bên chén trà" },
      narration(
        "Chiều xuống chậm. Nắng cuối ngày xuyên qua tán cây, đọng thành những vệt vàng trên chiếc bàn trà ngoài hiên. Ông nội ngồi đó, mái tóc bạc, tay nâng chén trà còn nghi ngút khói.",
      ),
      narration(
        "Một đời làm kinh doanh khiến ông quen ít nói. Nhưng mỗi khi muốn nhắn nhủ cháu điều gì, ông thường bắt đầu bằng một câu chuyện.",
      ),
      {
        kind: "verse",
        cue: "Nhìn về phía ngọn đồi xa, ông chậm rãi đọc",
        lines: ["“Đất là nơi con chim phượng hoàng", "bay về hòn núi bạc…”"],
        source: "Trích “Đất Nước”, chương V trường ca Mặt đường khát vọng của Nguyễn Khoa Điềm. Câu thơ sử dụng chất liệu dân ca Bình Trị Thiên.",
      },
      line("tro", "Câu thơ đẹp quá, nội."),
      line("thay", "Con nhìn ngọn đồi ấy đi. Người xưa gọi đó là Đồi Phượng Hoàng.", "Ông đặt chén trà xuống, chỉ tay về phía chân trời"),
      narration("Phía xa, những tán cây lớn chen nhau thành vòm xanh thẫm. Bên cạnh, các đồi đá nhấp nhô ánh lên dưới nắng chiều."),
      narration(
        "Ông kể rằng thuở xưa, một đàn phượng hoàng bay qua vùng này. Nhận ra đất lành, chúng chọn khu rừng làm chốn trú ngụ và những ngọn đồi đá làm nơi trở về.",
      ),
      { kind: "moral", text: "Phượng hoàng không đợi đến khi đôi cánh mỏi mới tìm chỗ dừng chân." },
      narration(
        "Khi còn đủ sức bay, chúng đã tha từng viên đá, vun đắp nơi mình chọn. Từ đó, người ta gửi vào ngọn đồi ước nguyện về sự an yên của người đã khuất, sự bình an của con cháu và sự tiếp nối bền lâu của gia đình.",
      ),
      line(
        "thay",
        "Chuyện xưa là vậy. Còn ngày nay, đất đai phải được sử dụng theo quy hoạch. Nơi an nghỉ cũng cần được chọn tại những khu vực phù hợp, có người quản lý và chăm sóc lâu dài.",
        "Ông nhìn ngọn đồi hồi lâu rồi nói",
      ),
      {
        kind: "image",
        src: "/images/hvbd/khu-long-phung.jpg",
        alt: "Khu mộ được quy hoạch giữa thảm cỏ xanh tại Hoa Viên Bình Dương",
        caption: "Các khu mộ tại Hoa Viên Bình Dương được quy hoạch và chăm sóc lâu dài.",
        width: 1448,
        height: 1086,
      },
      { kind: "chapter", text: "Một lựa chọn khi còn khỏe" },
      line("tro", "Sao hôm nay nội lại kể con nghe chuyện này?"),
      line("thay", "Vì nội muốn đi chọn sanh phần.", "Ông nhấp một ngụm trà"),
      line("tro", "Nội còn khỏe mà! Sao lại nghĩ đến chuyện ấy sớm vậy? Nghe không may đâu, nội.", "Đứa cháu thoáng giật mình"),
      {
        kind: "highlight",
        key: "Chính vì còn khỏe nên nội mới muốn tự mình lựa chọn.",
        lines: [{ who: "thay", cue: "Ông bật cười", text: "Chính vì còn khỏe nên nội mới muốn tự mình lựa chọn." }],
      },
      line(
        "thay",
        "Người ta mua bảo hiểm đâu phải vì mong mình đau bệnh. Việc này cũng vậy. Thu xếp trước không làm ngày ấy đến sớm hơn, chỉ giúp nội và cả nhà không bị động khi nó đến.",
        "Rồi ông nói tiếp, giọng chậm lại",
      ),
      narration("Gió chiều lướt nhẹ qua khu vườn."),
      line(
        "thay",
        "Cả đời nội đã tự quyết định chuyện dựng nghiệp, xây nhà và lo cho con cái. Việc sau cùng của mình, nội cũng muốn tự chọn. Nội không muốn đến lúc không còn đủ sức, con cháu vừa đau buồn vừa phải đoán xem nội mong muốn điều gì.",
      ),
      {
        kind: "image",
        src: "/images/hvbd/dai-lo-vinh-hang.jpg",
        alt: "Đại lộ Vĩnh Hằng giữa rừng cây xanh nhìn từ trên cao",
        caption: "Đại lộ Vĩnh Hằng, Hoa Viên Bình Dương.",
        width: 1920,
        height: 1081,
      },
      { kind: "chapter", text: "Cả nhà cứ an lòng mà sống" },
      line("tro", "Nội không sợ sao?", "Đứa cháu im lặng một lúc rồi hỏi"),
      line(
        "thay",
        "Có chứ, ai mà không sợ. Nhưng lo lắng khác với né tránh. Nội thu xếp cho yên lòng rồi về chăm cây, uống trà, chờ bồng chắt. Cuộc sống còn nhiều việc vui phải làm lắm.",
        "Ông nhìn làn khói mỏng bay lên từ chén trà",
      ),
      line("tro", "Vậy ngày mai con chở nội đi. Chọn xong rồi mình về chăm cây. Nội còn phải giữ sức để bồng chắt nữa.", "Ánh mắt đứa cháu đã bớt lo"),
      narration("Tiếng cười của hai ông cháu hòa vào buổi chiều, nhẹ như cơn gió vừa đi qua khu vườn."),
      narration(
        "Đứa cháu lại nhìn về Đồi Phượng Hoàng và chợt hiểu: ngọn đồi không chỉ kể chuyện về nơi một người sẽ trở về, mà còn kể về cách người ta thương những người ở lại.",
      ),
      narration("Một đời ông đã lo cho gia đình. Đến việc sau cùng, ông vẫn nhận phần khó về mình, để con cháu mai sau bớt đi một nỗi nặng lòng."),
      { kind: "verse", cue: "Ông nâng chén trà, nheo mắt cười", lines: ["“Phần của nội, nội đã lo rồi.", "Cả nhà cứ an lòng mà sống.”"] },
      {
        kind: "note",
        text: "Đây là câu chuyện minh họa. Nhân vật và tên Đồi Phượng Hoàng trong bài không đại diện cho một người hay một khu vực có thật. Hình ảnh trong bài được chụp tại Hoa Viên Bình Dương.",
      },
    ],
  },
  "chuyen-thay-tro-khi-nao-chuan-bi-chuyen-tram-nam": {
    speakers: { thay: "Thầy", tro: "Học trò" },
    parts: [
      { kind: "lead", text: "Có những chuyện tưởng nói về cái chết, nhưng lại giúp ta hiểu hơn giá trị của sự sống." },
      narration(
        "Một buổi chiều, nắng vàng trải nhẹ trên mái ngói rêu phong. Dưới gốc bồ đề già, hai thầy trò ngồi thưởng trà, lặng ngắm những chiếc lá vàng lần lượt rơi theo gió.",
      ),
      narration("Trên một nhánh cây khẳng khiu, chỉ còn chiếc lá cuối cùng, vẫn nhẹ nhàng đung đưa trong nắng chiều."),
      line(
        "tro",
        "Thưa thầy, chiếc lá kia đã vàng rồi, sớm muộn cũng rụng. Nhưng biết đâu nó còn ở lại được lâu. Sao phải bận tâm đến ngày nó rơi?",
        "Người học trò nhìn lên, chợt hỏi",
      ),
      line("thay", "Vậy con có biết nó sẽ rơi lúc nào không?", "Thầy mỉm cười"),
      line("tro", "Dạ không. Có thể chiều nay, cũng có thể vài ngày nữa."),
      line("thay", "Đời người cũng vậy. Ai cũng biết có ngày phải chia xa, nhưng chẳng ai biết chắc ngày ấy đến lúc nào."),
      line(
        "tro",
        "Nhưng thưa thầy, đã không biết trước thì cứ sống vui vẻ, trọn vẹn hôm nay. Sao nhiều người đang khỏe mạnh, còn trẻ đã nghĩ đến chuyện hậu sự? Chẳng phải tự mang điều buồn vào lòng sao?",
        "Người học trò không đồng tình",
      ),
      line(
        "thay",
        "Con có nhớ lời Đức Khổng Tử: “Vị tri sinh, yên tri tử?” – Chưa hiểu sự sống, sao đã hiểu cái chết?",
        "Thầy nhấp ngụm trà",
      ),
      line("tro", "Vậy Khổng Tử cũng nghĩ giống con! Cứ lo sống cho tốt, chuyện sau này để sau này tính.", "Người học trò bật cười"),
      line(
        "thay",
        "Con mới nghe một nửa. Khổng Tử còn dạy: “Sinh, sự chi dĩ lễ; tử, táng chi dĩ lễ.” Khi cha mẹ còn sống thì phụng dưỡng đúng lễ, khi mất thì an táng đúng lễ.",
        "Thầy cười theo",
      ),
      line("tro", "Vậy là phải lo cả chuyện sống lẫn chuyện chết, thưa thầy?"),
      line("thay", "Không phải lo sợ, mà là biết chu toàn. Sống trọn tình, mất trọn nghĩa. Hai điều ấy đâu có trái nhau."),
      {
        kind: "image",
        src: "/images/hvbd/thien-phuoc-yellow-blossom.jpg",
        alt: "Mái chùa Thiện Phước bên tán hoa vàng",
        caption: "Chùa Thiện Phước trong khuôn viên Hoa Viên Bình Dương.",
        width: 2400,
        height: 1600,
      },
      line("tro", "Nhưng con còn trẻ, cha mẹ vẫn khỏe. Sao không đợi đến tuổi già rồi chuẩn bị?", "Người học trò suy nghĩ rồi hỏi tiếp"),
      line("thay", "Con có biết ngày mai và cái chết, điều gì đến trước không?", "Thầy hỏi lại"),
      line("tro", "Dạ, không ai biết được."),
      line(
        "thay",
        "Vậy tại sao con biết tiết kiệm cho tương lai, dự phòng khi đau ốm, mà lại ngại nghĩ trước về một việc ai rồi cũng phải đối diện?",
      ),
      line("tro", "Nhưng nếu cứ lo chuyện chưa đến, chẳng phải cuộc sống sẽ thêm nặng nề sao thầy?", "Người học trò phản biện"),
      line(
        "thay",
        "Con nói đúng. Nếu vì nghĩ đến ngày cuối cùng mà quên sống cho hôm nay thì thật đáng tiếc. Nhưng chuẩn bị trước không có nghĩa là sống trong lo sợ. Đó chỉ là chủ động trước những điều có thể xảy ra.",
        "Thầy gật đầu",
      ),
      line("tro", "Vậy có nhất thiết phải chuẩn bị ngay không?"),
      line(
        "thay",
        "Không nhất thiết. Chuẩn bị không có nghĩa là phải quyết định mọi thứ ngay hôm nay. Có thể chỉ bắt đầu bằng việc tìm hiểu, suy nghĩ về nguyện vọng của mình, trò chuyện với người thân để mọi người thấu hiểu nhau hơn.",
      ),
      line(
        "tro",
        "Nhưng thưa thầy, chuyện hậu sự chẳng phải nên để con cháu lo sao? Như vậy cũng là một cách báo hiếu.",
        "Người học trò trầm ngâm",
      ),
      line(
        "thay",
        "Chữ Hiếu trước hết nằm ở sự chăm sóc, yêu thương khi cha mẹ còn sống. Còn việc cha mẹ chủ động thu xếp chuyện mai sau cũng là một cách thương con, để người thân bớt bối rối khi hữu sự.",
        "Thầy nhẹ nhàng đáp",
      ),
      line("tro", "Nhưng nếu mỗi người có một quan niệm khác nhau thì sao?"),
      line(
        "thay",
        "Thì hãy tôn trọng nhau. Có người muốn chuẩn bị từ sớm, có người chỉ muốn sống thuận theo tự nhiên. Không có một thời điểm hay cách chuẩn bị nào phù hợp với tất cả. Điều quan trọng là sự tự nguyện, hiểu biết và hoàn cảnh của mỗi người.",
      ),
      narration("Một làn gió nhẹ thoảng qua. Chiếc lá bồ đề cuối cùng khẽ rung rinh, nhưng vẫn ở lại trên cành."),
      {
        kind: "highlight",
        key: "Không cần đợi đến tuổi già, cũng chẳng cần vội vàng quyết định.",
        lines: [
          { who: "tro", cue: "Người học trò nhìn lên, hỏi", text: "Vậy rốt cuộc, khi nào là thời điểm tốt nhất để chuẩn bị hậu sự, thưa thầy?" },
          {
            who: "thay",
            cue: "Thầy chậm rãi đáp",
            text: "Khi con đã bắt đầu nghĩ đến điều ấy một cách bình thản, thì đó cũng là lúc thích hợp để tìm hiểu và chuẩn bị. Không cần đợi đến tuổi già, cũng chẳng cần vội vàng quyết định.",
          },
        ],
      },
      line("tro", "Nghĩa là càng sớm càng tốt sao thầy?"),
      line("thay", "Sớm để hiểu, để lựa chọn, để an tâm thì tốt. Nhưng không nên vì chuẩn bị cho ngày mai mà làm ảnh hưởng đến cuộc sống hôm nay."),
      {
        kind: "image",
        src: "/images/hvbd/thien-phuoc-courtyard.jpg",
        alt: "Sân chùa Thiện Phước rợp bóng cây",
        caption: "Sân chùa Thiện Phước, Hoa Viên Bình Dương.",
        width: 2000,
        height: 841,
      },
      {
        kind: "highlight",
        key: "Đủ hiểu để không sợ hãi, đủ bình tĩnh để lựa chọn, đủ chu toàn để người thân được an tâm.",
        lines: [
          {
            who: "tro",
            cue: "Người học trò mỉm cười",
            text: "Vậy điều quan trọng không phải là chuẩn bị ở tuổi nào, mà là chuẩn bị với tâm thế nào?",
          },
          {
            who: "thay",
            cue: "Thầy gật đầu",
            text: "Đúng vậy. Đủ hiểu để không sợ hãi, đủ bình tĩnh để lựa chọn, đủ chu toàn để người thân được an tâm.",
          },
        ],
      },
      narration("Nắng chiều dần nhạt. Tiếng chim gọi nhau về tổ vang lên từ những tán cây xa."),
      line("tro", "Hôm nay con đến hỏi chuyện sinh tử, không ngờ lại hiểu thêm một điều về cách sống.", "Người học trò nâng chén trà"),
      line(
        "thay",
        "Con thấy không, chiếc lá ấy chẳng biết ngày mai còn trên cành hay không. Nhưng hôm nay, nó vẫn đón nắng, đón gió, vẫn sống trọn một đời lá.",
        "Thầy nhìn chiếc lá cuối cùng, mỉm cười",
      ),
      {
        kind: "verse",
        cue: "Thầy ngừng một lát rồi nói",
        lines: ["Việc hôm nay, sống cho trọn.", "Việc ngày mai, liệu cho chu toàn.", "Việc trăm năm, chuẩn bị khi có thể."],
      },
      narration("Người học trò lặng im, nhìn chiếc lá bồ đề vẫn nhẹ nhàng lay động trong nắng chiều."),
      narration("Chẳng ai biết ngày mai nó còn ở đó hay không. Nhưng hôm nay, nó vẫn đẹp."),
      narration("Và người học trò chợt hiểu:"),
      {
        kind: "moral",
        text: "Chuẩn bị cho ngày cuối cùng không phải là bớt yêu cuộc sống, mà là để những ngày đang sống được an tâm hơn.",
      },
      {
        kind: "note",
        text: "Không bao giờ là quá sớm để bắt đầu suy nghĩ về chuyện trăm năm. Nhưng mọi sự chuẩn bị đều nên xuất phát từ sự thấu hiểu, tự nguyện và phù hợp với hoàn cảnh của mỗi người.",
      },
    ],
  },
};
