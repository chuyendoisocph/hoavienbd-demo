// Hai bài thương hiệu (sếp đã duyệt) dùng ở trang chủ. Tách khỏi content.ts vì content.ts
// được các thành phần chạy trên trình duyệt (menu…) dùng, mọi trang sẽ phải tải kèm ~25 KB chữ.
// File này chỉ được đọc lúc dựng trang trên máy chủ.

/** Một khối trong bài "Câu chuyện thương hiệu": đoạn văn, tiêu đề phần, hoặc câu thơ trích. */
export type StoryBlock =
  | string
  | { heading: string }
  | { quote: string[]; cite?: string }
  | { lead: string; text: string };

export const CULTURE: { eyebrow: string; title: string; body: string; details: StoryBlock[] } = {
  eyebrow: "HOA VIÊN BÌNH DƯƠNG",
  title: "Câu Chuyện Thương Hiệu",
  // Nguyên văn bài "Câu chuyện thương hiệu Hoa viên Nghĩa trang Bình Dương" (sếp đã duyệt).
  // Chỉ đổi tên riêng thành "Hoa Viên Bình Dương"/"Hoa Viên"; câu thơ giữ nguyên chữ "Hoa viên".
  // **…** là chữ in đậm khi hiển thị trong cửa sổ "Đọc thêm".
  // body: phần tóm hiện sẵn (đoạn mở đầu của bài); details: toàn bài, hiện khi bấm "Xem thêm".
  body: "Mỗi vùng đất trên hành trình phát triển đều cần những nơi để con người bắt đầu một cuộc sống mới, và cũng cần một nơi trang nghiêm để những người đã hoàn thành hành trình của mình được trở về an nghỉ. Hoa Viên Bình Dương ra đời từ nhiệm vụ ấy – và từ ngày đón người đầu tiên về an nghỉ, trách nhiệm của chúng tôi mới thực sự bắt đầu.",
  details: [
    "Đầu những năm 2000, Bình Dương và Thành phố Hồ Chí Minh bước vào thời kỳ công nghiệp hóa, đô thị hóa nhanh chóng. Những khu công nghiệp, khu dân cư mới hình thành; người dân từ nhiều tỉnh thành đến làm việc, lập nghiệp và gắn bó lâu dài. Cùng với sự phát triển ấy là yêu cầu chỉnh trang, di dời các nghĩa trang cũ, tạo quỹ đất cho đô thị và đáp ứng nhu cầu an táng, hỏa táng ngày càng lớn của xã hội.",
    "Trong bối cảnh đó, với sự tin tưởng của lãnh đạo tỉnh Bình Dương, ông Nguyễn Văn Thiền – Chủ tịch Hội đồng Quản trị Công ty Cổ phần Đầu tư Xây dựng Chánh Phú Hòa, cùng Công ty đã nghiên cứu, lập dự án và từng bước xây dựng Hoa Viên Bình Dương.",
    "**Đó không chỉ là cơ hội của một doanh nghiệp, mà trước hết là một nhiệm vụ đối với Nhà nước và cộng đồng.**",
    "Từ khi nhận lấy nhiệm vụ ấy, Công ty hiểu rằng Hoa Viên phải được xây dựng không chỉ để đáp ứng nhu cầu của hôm nay, mà còn để gìn giữ một trách nhiệm lâu dài với nhiều thế hệ mai sau.",
    { heading: "Từ một dự án đến một không gian văn hóa – tâm linh" },
    "Ngay từ những năm đầu, cùng với hệ thống hạ tầng, cây xanh và cảnh quan, nhiều công trình kiến trúc tâm linh quy mô lớn nhanh chóng được hình thành, tạo nên một không gian có trật tự, chiều sâu và bản sắc riêng cho Hoa Viên.",
    "Vĩnh Hằng Môn – cánh cửa mở vào miền an nghỉ bình yên.",
    "Từ Vĩnh Hằng Môn là Đại lộ Vĩnh Hằng – trục Thần đạo của Hoa Viên, con đường trung tâm kết nối cảnh quan và những công trình tâm linh quan trọng, như một hành trình từ không gian đời thường bước vào miền tưởng niệm.",
    "Trên hành trình ấy, Vĩnh Hằng Đài trở thành biểu tượng trung tâm của Hoa Viên; Linh Hoa Tuệ Đàn là nơi gửi những lời cầu siêu, cầu an; Đồi Tâm Linh mang ý nghĩa giao hòa Thiên – Địa – Nhân; và Đài Hóa Thân Hoàn Vũ phục vụ nhu cầu hỏa táng theo hướng văn minh, trang nghiêm.",
    "Những công trình ấy không tồn tại riêng lẻ, mà cùng cây xanh, cảnh quan và con người tạo nên một tổng thể văn hóa – tâm linh có sinh khí: nơi người đã khuất được trân trọng và người đang sống tìm thấy sự an lòng.",
    { heading: "Từ nhiệm vụ của Nhà nước đến trách nhiệm của doanh nghiệp" },
    "Một dự án có thể hoàn thành khi công trình được xây xong.",
    "**Nhưng một hoa viên nghĩa trang thì không.**",
    "Bởi từ ngày đón người đầu tiên về an nghỉ, trách nhiệm của doanh nghiệp mới thực sự bắt đầu.",
    "Qua năm tháng, chúng tôi càng hiểu rằng khách hàng không đơn thuần đến Hoa Viên để lựa chọn một phần đất.",
    "Họ đang trao gửi cha mẹ, ông bà, người bạn đời và những người mà họ yêu thương.",
    "Một sự trao gửi như vậy không thể chỉ được đáp lại bằng một hợp đồng. Nó cần được đáp lại bằng **trách nhiệm và sự tử tế**.",
    "Đó cũng là điều lãnh đạo Công ty mong muốn truyền lại cho nhiều thế hệ cán bộ, nhân viên Hoa Viên: từ người tư vấn khách hàng, người xây dựng công trình, người chăm sóc cây xanh, người quản trang, người làm vệ sinh, bảo trì đến những con người âm thầm làm việc mỗi ngày.",
    "Bởi sự tử tế của một thương hiệu không nằm trong những lời giới thiệu.",
    "Nó được thể hiện qua cách mỗi người chăm một phần mộ, giữ một con đường sạch, trồng một cái cây, đón một gia đình đến viếng và chu đáo với từng công việc mình đã nhận.",
    "Việc chúng ta làm hôm nay có thể rất nhỏ, nhưng giá trị của nó có thể được gìn giữ cho một thế hệ rất xa sau này.",
    { heading: "Với người đã khuất – một nơi an nghỉ bình yên" },
    "Đối với người đã khuất, Hoa Viên mong tạo dựng một nơi an nghỉ trang nghiêm, thanh tịnh, được chăm sóc và che chở giữa thiên nhiên.",
    "Theo niềm tin tâm linh của mỗi gia đình, nơi đây còn là nơi gửi gắm ước nguyện người thân được trợ duyên, được thanh thản và hướng về một cảnh giới an lành.",
    "Hoa Viên không thể thay thế tín ngưỡng, cũng không thể thay thế tình thương của con cháu. Điều Hoa Viên có thể làm là tạo dựng một môi trường tốt đẹp, thực hiện những việc thiết thực và gìn giữ một không gian trang nghiêm để những tình cảm, lời cầu nguyện và ước nguyện của gia đình có một nơi để gửi vào.",
    "Người ra đi có một nơi bình yên để an nghỉ.",
    "Đó là phần trách nhiệm Hoa Viên dành cho người đã khuất.",
    { heading: "Với người đang sống – một sự an tâm để trao gửi" },
    "Với người ở lại, điều quý giá nhất Hoa Viên muốn mang lại là **sự an tâm**.",
    "Con cháu có thể sống xa, có người ở một tỉnh thành khác, có người ở nước ngoài. Thời gian trôi qua, chính những người con hôm nay rồi cũng sẽ già đi.",
    "Không gia đình nào có thể tự mình chăm sóc phần mộ người thân mỗi ngày và mãi mãi. Có những việc họ rất muốn làm nhưng vì thời gian, khoảng cách và hoàn cảnh không thể thường xuyên thực hiện.",
    "Hoa Viên nhận lấy một phần công việc ấy để gia đình được an lòng.",
    "Vì vậy, chúng tôi không muốn nơi đây mang cảm giác chết chóc, chia lìa hay sợ hãi.",
    "**Hoa Viên phải có sinh khí của cuộc sống.**",
    "Cây vẫn lớn. Hoa vẫn nở. Chim vẫn về.",
    "Những con đường vẫn có bước chân của người con về thăm cha mẹ, của những đứa cháu theo gia đình đến thắp hương ông bà.",
    "Người sống đến đây không chỉ để nhớ về một sự mất mát.",
    "Họ đến để gặp lại một phần ký ức của gia đình mình.",
    { heading: "Một câu thơ – một câu chuyện về sự tiếp nối" },
    "Trong một lần đến Hoa Viên thăm người bạn đã an nghỉ, nhà thơ Kiên Giang từng để lại hai câu:",
    { quote: ["Hoa viên mở chốn thiên đường", "Nghệ nhân vào giấc miên trường ngàn thu."], cite: "Nhà thơ Kiên Giang" },
    "Nhiều năm sau, chính ông cũng về an nghỉ tại Hoa Viên.",
    "Một người từng đến thăm bạn, rồi một ngày cũng trở thành người được những thế hệ sau tìm về thăm viếng.",
    "Câu chuyện giản dị ấy gợi lên một điều mà Hoa Viên luôn trân trọng:",
    "**Đời người hữu hạn, nhưng tình thân và ký ức có thể được tiếp nối từ thế hệ này sang thế hệ khác.**",
    { heading: "Uy tín được bồi đắp bằng thời gian" },
    "Một hoa viên đẹp hôm nay chưa đủ để tạo nên một thương hiệu.",
    "Uy tín của một nơi nhận sự trao gửi của nhiều gia đình chỉ thực sự được chứng minh **bằng thời gian**.",
    "20 năm sau. 30 năm sau. 50 năm sau. Và cả 100 năm sau.",
    "Khi những người xây dựng Hoa Viên hôm nay có thể không còn nữa, những hàng cây vẫn cần được chăm sóc, cảnh quan vẫn phải được gìn giữ, dịch vụ phải ngày càng văn minh hơn và những thế hệ nhân viên tiếp nối vẫn phải hiểu trách nhiệm mà thế hệ trước đã nhận.",
    "Chúng tôi mong mỗi lần một gia đình trở lại, họ đều thấy Hoa Viên tốt hơn lần trước: cây xanh hơn, cảnh quan đẹp hơn, phần mộ được chăm sóc chu đáo hơn, dịch vụ thuận tiện hơn và công nghệ giúp những người ở xa vẫn có thể quan tâm đến nơi an nghỉ của người thân.",
    "Uy tín của Hoa Viên vì thế không chỉ nằm ở những gì đã xây dựng, mà còn ở những gì được kiên trì gìn giữ và làm tốt hơn qua năm tháng.",
    { heading: "Một niềm tin được trao gửi" },
    "Từ một nhiệm vụ phục vụ nhu cầu phát triển của xã hội, Hoa Viên Bình Dương đã trở thành nơi nhiều gia đình tin tưởng trao gửi người thân.",
    "Chúng tôi hiểu rằng phía sau mỗi phần mộ là một con người, một gia đình và một tình thương còn ở lại. Vì thế, trách nhiệm của Hoa Viên không kết thúc sau một lễ an táng, mà bắt đầu từ chính ngày người thân được trao gửi nơi đây.",
    "Bằng sự tử tế của người lãnh đạo và sự tận tâm của từng cán bộ, nhân viên, chúng tôi mong mỗi ngày đều làm tốt hơn một điều: **chăm lo chu đáo cho người đã khuất để người đang sống được an lòng.**",
    "Hoa Viên trân trọng cảm ơn những gia đình đã tin tưởng lựa chọn và đồng hành trong suốt những năm qua. Chính sự tin tưởng ấy đã tiếp thêm nguồn lực để Hoa Viên được gìn giữ, đầu tư và ngày một tốt đẹp hơn.",
    "Chúng tôi cũng trân trọng cảm ơn chính quyền tỉnh Bình Dương qua các thời kỳ đã quan tâm, tạo điều kiện và cho phép mở rộng quy hoạch, để Hoa Viên có điều kiện tiếp tục phục vụ nhu cầu của cộng đồng và thực hiện trách nhiệm lâu dài với những gia đình đã trao gửi người thân nơi đây.",
    "**Mỗi sự tin tưởng là thêm một trách nhiệm. Mỗi điều kiện để phát triển hôm nay là thêm một cam kết cho tương lai.**",
    "Để 20 năm, 50 năm hay cả 100 năm sau, khi con cháu trở về, nơi an nghỉ của tổ tiên vẫn được trân trọng, cảnh quan vẫn được gìn giữ và Hoa Viên vẫn ngày một tốt đẹp hơn.",
    "Đó là uy tín chúng tôi muốn xây dựng và trao lại cho những thế hệ tiếp nối:",
    { quote: ["Người đã khuất được bình an.", "Người ở lại được an lòng.", "Con cháu mai sau còn một nơi để tìm về."] },
    { quote: ["Một đời người khép lại –", "Một lời ủy thác bắt đầu."] },
  ],
};

export const CARING: { title: string; body: string; details: StoryBlock[]; background: string } = {
  title: "Hệ Tư Tưởng Thương Hiệu",
  // Nguyên văn "Hệ tư tưởng thương hiệu" (bản rà soát cuối, sếp đã duyệt). Chỉ đổi tên thành
  // "Hoa Viên Bình Dương"/"Hoa Viên" và bỏ số thứ tự mục; body là phần mở đầu, details là toàn văn.
  body: "Hoa Viên Bình Dương được xây dựng từ một niềm tin giản dị: mỗi cuộc đời đều xứng đáng được trân trọng, mỗi ký ức đều xứng đáng được gìn giữ. Nơi an nghỉ vì thế không chỉ là điểm khép lại một hành trình, mà còn là nơi tình thân được lưu giữ, lòng biết ơn được trao truyền và các thế hệ tìm thấy sự kết nối với cội nguồn.",
  details: [
    { heading: "Triết lý thương hiệu" },
    { quote: ["Sự sống tiếp nối trong tĩnh lặng"] },
    "Một cuộc đời có thể khép lại, nhưng những giá trị tốt đẹp vẫn tiếp tục sống trong ký ức gia đình và các thế hệ mai sau.",
    "Hoa Viên kiến tạo một không gian trang nghiêm, thanh tịnh và bền vững, nơi người đã khuất được trân trọng, người ở lại tìm thấy sự an yên và con cháu luôn có một nơi để trở về tưởng nhớ.",
    { heading: "Tầm nhìn" },
    "Trở thành hoa viên nghĩa trang **nhân văn và đáng tin cậy** hàng đầu Việt Nam, nơi gìn giữ ký ức, kết nối các thế hệ và kiến tạo những giá trị trường tồn.",
    "Hoa Viên Bình Dương hướng đến hình mẫu hoa viên hiện đại mang chiều sâu văn hóa Việt Nam, hài hòa giữa thiên nhiên, kiến trúc, văn hóa tâm linh, chất lượng công trình, công nghệ quản lý và dịch vụ chuyên nghiệp.",
    { heading: "Sứ mệnh" },
    "Kiến tạo nơi an nghỉ trang nghiêm, an yên và bền vững; đồng hành cùng mỗi gia đình chu toàn đạo hiếu, gìn giữ ký ức và trao truyền lòng biết ơn cho các thế hệ mai sau.",
    "Hoa Viên cung cấp các dịch vụ an táng, hỏa táng, lưu tro cốt, xây dựng và chăm sóc mộ phần, tưởng niệm cùng các dịch vụ liên quan trên tinh thần **chuyên nghiệp – tận tâm – minh bạch – tôn trọng**.",
    "Trách nhiệm của Hoa Viên không dừng lại khi một dịch vụ hay công trình hoàn thành, mà được tiếp nối bằng **sự chăm sóc lâu dài** đối với cảnh quan, công trình và những giá trị gia đình đã tin tưởng trao gửi.",
    { heading: "Giá trị cốt lõi" },
    { quote: ["Tâm – Nghĩa – Tín – Mỹ – Bền"] },
    { lead: "TÂM – Thấu hiểu và tận tâm.", text: "Thấu hiểu người sống – Trân trọng người đã khuất. Lắng nghe, thấu hiểu và phục vụ bằng sự chân thành, cẩn trọng và tôn trọng trong từng công việc." },
    { lead: "NGHĨA – Trọn nghĩa với gia đình và cội nguồn.", text: "Gìn giữ đạo hiếu – Tình thân – Lòng biết ơn. Trân trọng những giá trị gia đình và văn hóa Việt Nam, để nơi an nghỉ trở thành điểm kết nối giữa các thế hệ." },
    { lead: "TÍN – Trách nhiệm và giữ trọn cam kết.", text: "Nói đúng – Làm đúng – Giữ đúng điều đã cam kết. Minh bạch, trách nhiệm và nhất quán trong chất lượng công trình, dịch vụ và mọi cam kết với khách hàng." },
    { lead: "MỸ – Kiến tạo vẻ đẹp trang nghiêm.", text: "Đẹp trong cảnh quan – Đẹp trong công trình – Đẹp trong cách phục vụ. Chăm chút từ cảnh quan, kiến trúc, nghệ thuật đá đến phong cách phục vụ, tạo nên một không gian hài hòa, thanh tịnh và phù hợp với văn hóa." },
    { lead: "BỀN – Gìn giữ những giá trị trường tồn.", text: "Bền công trình – Bền dịch vụ – Bền ký ức – Bền niềm tin. Hướng đến sự bền vững trong quy hoạch, công trình, cảnh quan, quản lý và chất lượng phục vụ lâu dài." },
    { heading: "Lời hứa thương hiệu" },
    { quote: ["Mỗi nơi an nghỉ – Một ký ức được gìn giữ"] },
    "Gia đình trao gửi cho Hoa Viên không chỉ một nơi an nghỉ, mà còn trao gửi **niềm tin**.",
    "Hoa Viên trân trọng niềm tin ấy bằng chất lượng công trình, cảnh quan, dịch vụ và trách nhiệm lâu dài, để hôm nay và nhiều năm sau, nơi an nghỉ của người thân vẫn được chăm sóc chu toàn.",
    { heading: "Tinh thần thương hiệu" },
    { quote: ["Người đã khuất cần một nơi an nghỉ.", "Người ở lại cần một nơi để nhớ.", "Các thế hệ mai sau cần một nơi để trở về."] },
    "Hoa Viên Bình Dương mong muốn trở thành nơi trở về ấy – nơi ký ức được trân trọng, lòng biết ơn được nuôi dưỡng và đạo hiếu được tiếp nối qua các thế hệ.",
    { heading: "Slogan" },
    { quote: ["Nơi cuộc sống vĩnh hằng"] },
  ],
  background: "/images/hvbd/tran-trong-tung-cuoc-doi-hoa-vien-v3.png",
};
