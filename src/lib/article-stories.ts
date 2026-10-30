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
  | { kind: "verse"; cue: string; lines: string[] }
  | { kind: "moral"; text: string }
  | { kind: "note"; text: string };

export interface ArticleStory {
  speakers: Record<Speaker, string>;
  parts: StoryPart[];
}

const line = (who: Speaker, text: string, cue?: string): StoryPart => ({ kind: "line", line: { who, cue, text } });
const narration = (text: string): StoryPart => ({ kind: "narration", text });

export const ARTICLE_STORIES: Record<string, ArticleStory> = {
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
        src: "/images/hvbd/chuyen-thay-tro-chen-tra-chiec-la.webp",
        alt: "Hai chén trà dưới tán cây và chiếc lá vàng còn trên cành",
        caption: "Ảnh minh họa: chiếc lá và chén trà trong câu chuyện thầy trò.",
        width: 1536,
        height: 1024,
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
        src: "/images/hvbd/chuyen-thay-tro-hoc-tro-nhin-chiec-la.webp",
        alt: "Người học trò nhìn chiếc lá vàng trên cành, người thầy ngồi bên bàn trà",
        caption: "Ảnh minh họa: người học trò suy ngẫm về chiếc lá vẫn còn trên cành.",
        width: 1536,
        height: 1024,
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
