/*
  BLOOM 20.10 — bản thư riêng cho 22 bạn nữ và cô chủ nhiệm

  CHỈNH LỜI THƯ:
  1) Tìm đúng bạn trong mảng `girls` theo stt.
  2) Sửa `title` để đổi tiêu đề; sửa `letter` để viết thư dài.
  3) Giữ dấu ` dưới đây (backtick) ở đầu và cuối `letter`.
  4) Muốn xuống đoạn trong thư, để một dòng trống trong nội dung.

  CHÈN ẢNH:
  - Đặt ảnh vào thư mục photos và đặt tên theo STT, ví dụ photos/17.jpg.
  - Hoặc sửa trường `photo` của người tương ứng.
  - Với cô chủ nhiệm: photos/2010.jpg.
*/

const girls = [
  {
    stt: 1,
    name: 'Lê Thị Kim Anh',
    title: 'Mong Kim Anh luôn rạng rỡ theo cách riêng',
    symbol: '🌷', caption: 'dịu dàng, trong trẻo và đầy sức sống', photo: 'photos/1.jpg',
    letter: `Gửi Kim Anh thân mến,

Nhân ngày 20/10, tụi mình muốn gửi đến bạn một bức thư nhỏ để nhắc rằng bạn xứng đáng nhận được thật nhiều điều dễ thương. Mong những ngày đến lớp của bạn luôn có tiếng cười, những cuộc trò chuyện vui vẻ và những khoảnh khắc bình thường nhưng sau này nhớ lại vẫn thấy quý giá.

Chúc bạn luôn tự tin với điều mình giỏi, kiên nhẫn với điều mình đang học và dịu dàng với chính mình vào những hôm mọi thứ chưa như ý. Đừng quên rằng bạn không cần phải hoàn hảo mới đáng được yêu mến đâu nhé.

Mong tuổi học trò của bạn sẽ có thật nhiều kỷ niệm đẹp, ước mơ ngày càng rõ ràng và mỗi ngày đều có ít nhất một lý do để mỉm cười. Chúc Kim Anh một ngày 20/10 thật ngọt ngào!`
  },
  {
    stt: 5,
    name: 'Trần Hoàng Mỹ Đinh',
    title: 'Gửi Mỹ Đinh một chiếc ôm bằng lời',
    symbol: '🩷', caption: 'một chiếc ôm ấm áp gói trong phong thư', photo: 'photos/5.jpg',
    letter: `Mỹ Đinh ơi,

Có những lời chúc nghe thì giản dị, nhưng tụi mình vẫn muốn nói với bạn bằng tất cả sự chân thành: chúc bạn luôn vui vẻ, khỏe mạnh và được đối xử bằng sự tử tế mà bạn xứng đáng nhận. Mong những ngày bận rộn có thể nhẹ nhàng hơn một chút, còn những ngày vui thì kéo dài thêm thật lâu.

Chúc bạn giữ được sự tự tin để thử điều mới, sự can đảm để nói lên suy nghĩ của mình và sự bình yên để không phải so sánh hành trình của mình với bất kỳ ai. Mỗi người có một nhịp trưởng thành riêng, và nhịp của bạn cũng rất đáng trân trọng.

Cảm ơn vì bạn là một phần của tập thể lớp mình. Mong sau này khi nhìn lại những năm tháng này, bạn sẽ nhớ nhiều đến tiếng cười, những người bạn tốt và những ngày tháng thật đáng yêu. Happy 20/10 nhé!`
  },
  {
    stt: 6,
    name: 'Cao Ngọc Gia Hân',
    title: 'Chúc Gia Hân luôn có thật nhiều điều để vui',
    symbol: '🌼', caption: 'một chút nắng vàng cho ngày đặc biệt', photo: 'photos/6.jpg',
    letter: `Gửi Gia Hân,

Chúc mừng ngày 20/10 nha! Hôm nay là dịp để gửi tới bạn một lời nhắn nho nhỏ: mong bạn luôn tìm thấy niềm vui trong những điều thân quen, từ một buổi học trôi qua thật ổn, một món ăn ngon, đến một cuộc trò chuyện làm mình cười mãi.

Mong bạn luôn có đủ động lực để theo đuổi những mục tiêu của mình, đủ bình tĩnh khi gặp thử thách và đủ yêu thương bản thân để nghỉ ngơi khi mệt. Những cố gắng nhỏ mỗi ngày cũng là tiến bộ, kể cả khi chưa ai nhìn thấy ngay lập tức.

Chúc Gia Hân gặp nhiều may mắn, học được nhiều điều mới, có bạn bè chân thành bên cạnh và lưu giữ thật nhiều kỷ niệm đẹp trong quãng đời học sinh. Hy vọng bức thư này khiến bạn mỉm cười một chút. Chúc bạn ngày nào cũng rạng rỡ!`
  },
  {
    stt: 8,
    name: 'Hoàng Thị Ánh Hồng',
    title: 'Mong Ánh Hồng luôn được nâng niu',
    symbol: '🌸', caption: 'nhẹ nhàng như cánh hoa trong nắng', photo: 'photos/8.jpg',
    letter: `Ánh Hồng thân mến,

Nhân ngày Phụ nữ Việt Nam 20/10, tụi mình gửi đến bạn một lời chúc thật chân thành. Mong bạn luôn có những người sẵn sàng lắng nghe, những người bạn khiến một ngày bình thường trở nên vui hơn và một nơi để bạn có thể thoải mái là chính mình.

Chúc bạn mạnh mẽ khi cần bước qua khó khăn, nhưng cũng đừng ngại nghỉ ngơi hay nhờ người khác giúp đỡ. Bạn không cần lúc nào cũng phải ổn; đôi khi chậm lại, hít thở và chăm sóc bản thân cũng là một cách rất đáng quý để tiếp tục tiến về phía trước.

Mong ước mơ của bạn sẽ dần thành hình, những cố gắng được đền đáp và tương lai mở ra nhiều cơ hội đẹp. Hãy giữ lại những điều làm bạn vui, tin vào khả năng của mình và đừng quên tự hào về những bước tiến nhỏ. Chúc Ánh Hồng một ngày 20/10 đầy thương mến!`
  },
  {
    stt: 10,
    name: 'Phạm Hoàng Xuân Hương',
    title: 'Chúc Xuân Hương có một mùa thật nhiều hoa',
    symbol: '🪻', caption: 'mong những điều tốt đẹp chậm rãi nở hoa', photo: 'photos/10.jpg',
    letter: `Gửi Xuân Hương,

Tụi mình mong bức thư này sẽ giống như một bó hoa nhỏ, không quá cầu kỳ nhưng chứa thật nhiều lời chúc tốt lành. Chúc bạn luôn giữ được sự tò mò với những điều mới, niềm vui khi học được điều mình chưa biết và sự tự tin để thử sức với những mục tiêu đang ấp ủ.

Sẽ có ngày mọi chuyện thuận lợi, cũng sẽ có ngày bạn thấy mệt hoặc nghi ngờ bản thân. Trong cả hai ngày ấy, mong bạn vẫn nhớ rằng giá trị của mình không được quyết định bởi một điểm số hay một lần làm chưa tốt. Bạn luôn có cơ hội để học, sửa, thay đổi và bắt đầu lại.

Chúc Xuân Hương có thật nhiều tiếng cười, những tình bạn trong sáng, sức khỏe tốt và một trái tim bình yên. Mong cuộc sống dành tặng bạn những bất ngờ đáng yêu, còn bạn thì luôn tìm thấy lý do để bước tiếp với hy vọng. Chúc mừng 20/10 nhé!`
  },
  {
    stt: 17,
    name: 'Vũ Trần Minh Khuê',
    title: 'Minh Khuê, cứ tỏa sáng theo cách của bạn nhé',
    symbol: '✨', caption: 'lấp lánh mà vẫn dịu dàng', photo: 'photos/17.jpg',
    letter: `Minh Khuê ơi,

Có một điều tụi mình muốn nhắn bạn trong ngày 20/10: hãy cứ tỏa sáng theo cách khiến bạn cảm thấy thoải mái nhất. Bạn không cần trở thành bản sao của bất kỳ ai, cũng không phải chạy thật nhanh để bắt kịp người khác. Mỗi người đều có con đường và thời điểm nở hoa của riêng mình.

Chúc bạn luôn giữ được lòng can đảm để thử sức, sự kiên trì để theo đuổi điều quan trọng và sự dịu dàng để chăm sóc cảm xúc của chính mình. Nếu có lúc mọi thứ chưa như mong đợi, mong bạn vẫn tin rằng một ngày chưa tốt không thể nói lên toàn bộ câu chuyện của bạn.

Mong những năm tháng học trò đem đến cho Minh Khuê nhiều niềm vui, những kỷ niệm thật đáng nhớ và những người bạn có thể cùng cười, cùng cố gắng. Chúc bạn được yêu thương đúng cách, tự hào về bản thân và luôn có ánh sáng nhỏ dẫn mình đến những điều tốt đẹp. Happy 20/10!`
  },
  {
    stt: 18,
    name: 'Lee Huan Ling',
    title: 'Huan Ling, mong ngày nào cũng có điều đáng nhớ',
    symbol: '🦋', caption: 'một cánh bướm mang theo những ngày vui', photo: 'photos/18.jpg',
    letter: `Dear Huan Ling,

Happy Vietnamese Women's Day! Tụi mình gửi đến bạn một bức thư nhỏ với lời chúc rằng những ngày sắp tới sẽ có thật nhiều điều khiến bạn vui. Mong mỗi buổi đến lớp đều để lại một kỷ niệm xinh xắn, mỗi thử thách giúp bạn hiểu mình hơn và mỗi người bạn gặp đều mang đến một điều tốt lành.

Chúc bạn luôn tự tin thể hiện cá tính, can đảm theo đuổi điều mình yêu thích và không quên cho bản thân thời gian nghỉ ngơi. Đôi khi chỉ cần một bước nhỏ, một lần thử lại hoặc một lời động viên cũng đủ để hành trình trở nên nhẹ nhàng hơn rất nhiều.

Mong bạn có thật nhiều bức ảnh đẹp, những cuộc trò chuyện vui, những ước mơ đáng để mong chờ và thật nhiều người luôn tôn trọng con người thật của bạn. Hy vọng khi đọc bức thư này, bạn cảm nhận được một chút ấm áp từ tập thể lớp. Chúc Huan Ling một ngày 20/10 thật đáng yêu!`
  },
  {
    stt: 19,
    name: 'Trần Thị Ánh Minh',
    title: 'Chúc Ánh Minh luôn tìm thấy sự bình yên',
    symbol: '🤍', caption: 'một khoảng trời dịu êm dành riêng cho bạn', photo: 'photos/19.jpg',
    letter: `Ánh Minh thân mến,

Nhân ngày 20/10, mong bạn nhận được không chỉ lời chúc mà còn cả cảm giác rằng mình luôn xứng đáng được quan tâm. Chúc bạn có những ngày lòng nhẹ tênh, có người nghe bạn kể những chuyện nhỏ nhặt và có đủ khoảng lặng để hiểu bản thân đang cần điều gì.

Mong bạn luôn đối xử tử tế với mọi người nhưng cũng nhớ giữ sự tử tế ấy cho chính mình. Không phải lúc nào bạn cũng cần làm hài lòng tất cả; được nói lên suy nghĩ, đặt giới hạn và chọn điều phù hợp với bản thân cũng là những điều rất đáng trân trọng.

Chúc Ánh Minh có sức khỏe, niềm vui, kết quả học tập như mong muốn và những người bạn chân thành đồng hành trong chặng đường sắp tới. Mong những điều làm bạn lo lắng sẽ dần có lời giải, còn những điều khiến bạn hạnh phúc sẽ ở lại thật lâu. Chúc bạn luôn an yên và rạng rỡ nhé!`
  },
  {
    stt: 20,
    name: 'Trương Hoàng Giang My',
    title: 'Giang My, mong bạn luôn nở hoa đúng mùa',
    symbol: '🌷', caption: 'bông hoa có mùa rực rỡ của riêng mình', photo: 'photos/20.jpg',
    letter: `Gửi Giang My,

Tụi mình muốn dành cho bạn lời chúc thật đẹp trong ngày 20/10: mong bạn luôn đi trên hành trình của riêng mình với sự tự tin và niềm vui. Đừng vội vì người khác đã đi xa hơn, cũng đừng buồn nếu có lúc mình tiến chậm lại. Những điều bền vững thường cần thời gian để lớn lên.

Chúc bạn luôn dám mơ những ước mơ khiến trái tim mình háo hức, đủ chăm chỉ để từng bước tiến gần hơn và đủ bao dung với bản thân khi mắc lỗi. Một lần thất bại không làm bạn kém giá trị; nó chỉ là một trang nhỏ trong câu chuyện còn dài phía trước.

Mong Giang My có thật nhiều ngày vui bên bạn bè, những khoảnh khắc đáng nhớ trong lớp và những cơ hội để khám phá khả năng của mình. Chúc bạn luôn gặp người tốt, làm điều mình yêu và có những lý do giản dị để mỉm cười mỗi sáng. Happy 20/10 nha!`
  },
  {
    stt: 22,
    name: 'Đoàn Trần Bảo Ngọc',
    title: 'Gửi Bảo Ngọc một món quà bằng lời',
    symbol: '💐', caption: 'bó hoa nhỏ gói ghém thật nhiều thương mến', photo: 'photos/22.jpg',
    letter: `Bảo Ngọc thân mến,

Chúc mừng 20/10! Tụi mình hy vọng hôm nay bạn sẽ nhận được thật nhiều lời chúc chân thành, những nụ cười bất ngờ và cảm giác mình được trân trọng. Bức thư này là một món quà nhỏ, nhưng những điều nó muốn gửi gắm thì rất thật: mong bạn luôn hạnh phúc và được là chính mình.

Chúc bạn học được nhiều điều hay, khám phá những sở thích mới và có đủ can đảm để thử những cơ hội đang chờ phía trước. Mong những lúc mệt mỏi sẽ có người động viên, những lúc vui sẽ có người cùng chia sẻ, và những kế hoạch bạn ấp ủ sẽ dần trở thành hiện thực.

Cảm ơn vì bạn là một phần trong tập thể lớp mình. Từng người đều mang một màu sắc riêng, và những sắc màu ấy khiến quãng thời gian đi học trở nên đáng nhớ hơn. Chúc Bảo Ngọc luôn khỏe mạnh, bình an, gặp nhiều điều may và có một ngày 20/10 ngập tràn yêu thương!`
  },
  {
    stt: 23,
    name: 'Đào Nguyễn Ánh Ngọc',
    title: 'Ánh Ngọc, chúc bạn luôn có ánh sáng của riêng mình',
    symbol: '⭐', caption: 'một vì sao nhỏ nhưng luôn có ánh sáng riêng', photo: 'photos/23.jpg',
    letter: `Ánh Ngọc ơi,

Mong bức thư này đến với bạn như một lời nhắc dịu dàng rằng bạn có ánh sáng riêng của mình. Có thể ánh sáng ấy không phải lúc nào cũng rực rỡ nhất, nhưng điều đó chẳng sao cả. Chỉ cần bạn đang lớn lên, học hỏi và sống chân thành với điều mình tin, bạn đã đi được một chặng đường đáng quý.

Chúc bạn gặp nhiều may mắn trong học tập, có sức khỏe để làm những điều mình thích và có những người bạn khiến thanh xuân thêm nhiều tiếng cười. Khi gặp khó khăn, mong bạn đủ bình tĩnh để tìm cách giải quyết; khi đạt được điều gì đó, hãy cho mình một phút để vui và tự hào nhé.

Chúc Ánh Ngọc luôn giữ được sự tò mò, niềm hy vọng và sự tự tin. Mong những cánh cửa tốt đẹp sẽ mở ra đúng lúc, những nỗ lực âm thầm được đền đáp và mỗi ngày đều có một điều dù nhỏ cũng đáng để nhớ. Chúc bạn 20/10 thật vui và thật xinh!`
  },
  {
    stt: 24,
    name: 'Phan Nguyễn Khánh Ngọc',
    title: 'Khánh Ngọc, mong những ước mơ sẽ dần thành hình',
    symbol: '🎀', caption: 'thắt một chiếc nơ cho ngày thật xinh', photo: 'photos/24.jpg',
    letter: `Gửi Khánh Ngọc,

Nhân ngày 20/10, tụi mình chúc bạn có một ngày thật ngọt ngào và những tháng ngày sắp tới thật nhiều điều đáng mong chờ. Mong bạn luôn tìm được niềm vui khi khám phá điều mới, sự hứng khởi khi đặt mục tiêu và cảm giác ấm áp khi ở cạnh những người khiến bạn được là chính mình.

Nếu có ước mơ nào đang được bạn cất giữ, hãy cho nó cơ hội lớn lên nhé. Bạn không nhất thiết phải biết hết mọi câu trả lời ngay từ đầu; đôi khi chỉ cần bắt đầu, thử một bước nhỏ rồi tiếp tục học hỏi là đã rất tuyệt rồi. Chúc bạn tin vào khả năng của mình ngay cả khi con đường chưa thật rõ ràng.

Mong Khánh Ngọc luôn gặp những người biết trân trọng sự chân thành, có nhiều kỷ niệm vui bên lớp và có đủ thời gian để chăm sóc bản thân. Chúc mỗi cố gắng đều đưa bạn đến gần hơn với điều mình mong muốn. Happy 20/10 — gửi bạn thật nhiều thương mến!`
  },
  {
    stt: 25,
    name: 'Nguyễn Hồng Ngọc',
    title: 'Hồng Ngọc, chúc bạn được yêu quý và trân trọng',
    symbol: '🩷', caption: 'một trái tim nhỏ gửi bạn thật nhiều điều lành', photo: 'photos/25.jpg',
    letter: `Hồng Ngọc thân mến,

Có thể một bức thư nhỏ không thể nói hết mọi điều tốt đẹp, nhưng tụi mình vẫn muốn gửi đến bạn lời chúc thật chân thành trong ngày 20/10. Mong bạn luôn được bao quanh bởi sự tử tế, có người nhớ hỏi han khi bạn mệt và có người sẵn sàng chia vui khi bạn đạt được điều mình mong muốn.

Chúc bạn đủ tự tin để bước lên khi có cơ hội, đủ kiên nhẫn khi cần học lại từ đầu và đủ dũng cảm để không bỏ cuộc chỉ vì một ngày chưa tốt. Hãy nhớ dành thời gian cho những điều làm bạn hạnh phúc, cho gia đình, bạn bè và cho chính bản thân mình nữa nhé.

Mong những điều bình dị như một buổi chiều dễ chịu, một bài kiểm tra làm tốt hay một câu nói tử tế cũng có thể khiến ngày của bạn đẹp hơn. Chúc Hồng Ngọc luôn khỏe mạnh, vui vẻ, gặp nhiều may mắn và ngày càng tiến gần đến những điều bạn mơ ước. Chúc mừng 20/10!`
  },
  {
    stt: 32,
    name: 'Nguyễn Thị Phương Thảo',
    title: 'Phương Thảo, chúc bạn luôn vững vàng và vui vẻ',
    symbol: '🌿', caption: 'xanh tươi, bình yên và không ngừng lớn lên', photo: 'photos/32.jpg',
    letter: `Gửi Phương Thảo,

Chúc bạn một ngày 20/10 thật vui, có nhiều tiếng cười và những điều nhỏ xíu khiến mình thấy được quan tâm. Tụi mình mong trong hành trình phía trước, bạn sẽ có đủ sức khỏe, sự bình tĩnh và niềm tin để đi qua cả những ngày thuận lợi lẫn những ngày có chút khó khăn.

Lớn lên không phải lúc nào cũng dễ dàng. Có lúc mình sẽ bối rối, có lúc phải thay đổi kế hoạch, nhưng mỗi trải nghiệm đều có thể giúp mình hiểu bản thân hơn. Mong bạn luôn cho mình cơ hội thử lại, đừng quá khắt khe với những sai sót và nhớ ghi nhận mọi tiến bộ dù nhỏ.

Chúc Phương Thảo gặp được những người bạn tốt, có những kỷ niệm trong trẻo của tuổi học trò và tìm thấy điều khiến mình muốn cố gắng mỗi ngày. Mong những điều tử tế đến với bạn thật nhiều, còn những nỗi buồn chỉ ghé qua rồi nhẹ nhàng rời đi. Chúc bạn luôn bình an và rạng rỡ!`
  },
  {
    stt: 34,
    name: 'Phan Ngọc Anh Thư',
    title: 'Anh Thư, dành cho bạn một ngày thật dịu dàng',
    symbol: '🦋', caption: 'bay về những ngày tháng nhẹ nhàng hơn', photo: 'photos/34.jpg',
    letter: `Anh Thư ơi,

Ngày 20/10 là một cái cớ thật dễ thương để tụi mình nói với bạn rằng: mong bạn luôn được sống trong những ngày có nhiều điều để yêu mến. Một tin vui bất ngờ, một lời khen chân thành hay một khoảnh khắc được cười hết mình đôi khi cũng đủ để trái tim thấy ấm áp hơn.

Chúc bạn luôn tự tin với điểm mạnh của mình và không ngại học hỏi ở những điều còn mới. Hãy cho bản thân quyền thay đổi, quyền chưa biết, quyền mắc lỗi rồi sửa lại. Bạn không cần phải có tất cả mọi thứ ngay lập tức; cứ tiến lên từng bước, theo nhịp của riêng mình.

Mong Anh Thư có những tình bạn thật đẹp, những mục tiêu khiến mình hào hứng và đủ thời gian nghỉ ngơi giữa những ngày bận rộn. Chúc bạn luôn gặp những người tôn trọng mình, giữ được sự hồn nhiên đáng quý và có thật nhiều lý do để tự hào về bản thân. Gửi bạn một ngày 20/10 đầy yêu thương!`
  },
  {
    stt: 35,
    name: 'Trần Võ Anh Thư',
    title: 'Anh Thư, mong nụ cười luôn tìm được đường về',
    symbol: '🍓', caption: 'ngọt ngào như một ngày mùa hè', photo: 'photos/35.jpg',
    letter: `Gửi Anh Thư,

Tụi mình chúc bạn ngày 20/10 thật vui và mong nụ cười sẽ luôn tìm được đường về với bạn, kể cả sau những ngày hơi mệt. Hy vọng bạn gặp nhiều chuyện thú vị, được ăn món mình thích, được trò chuyện với những người hợp cạ và lưu lại nhiều kỷ niệm mà sau này nghĩ đến vẫn bật cười.

Chúc bạn có niềm tin để bước về phía trước, có lòng kiên trì để hoàn thành điều đã bắt đầu và có sự dịu dàng với bản thân trong lúc học hỏi. Không phải mọi ngày đều cần thật hoàn hảo; đôi khi làm hết sức trong khả năng của mình đã là điều rất đáng tự hào.

Mong Anh Thư luôn giữ được sự chân thành, gặp nhiều người tốt và có cơ hội thử những điều khiến mình tò mò. Chúc việc học ngày càng thuận lợi, ước mơ ngày càng rõ ràng và cuộc sống có thêm nhiều khoảnh khắc ấm áp. Bức thư nhỏ này gửi đến bạn với thật nhiều thương mến. Happy 20/10!`
  },
  {
    stt: 36,
    name: 'Lý Minh Thư',
    title: 'Minh Thư, chúc bạn luôn dịu dàng với chính mình',
    symbol: '🤍', caption: 'một lời nhắc nhỏ rằng bạn cũng cần được chăm sóc', photo: 'photos/36.jpg',
    letter: `Minh Thư thân mến,

Nhân ngày 20/10, tụi mình muốn nhắc bạn một điều rất quan trọng: hãy đối xử với bản thân bằng sự dịu dàng mà bạn vẫn dành cho người khác. Bạn có thể cố gắng, đặt mục tiêu và muốn mình tốt hơn, nhưng cũng xứng đáng được nghỉ ngơi, được động viên và được vui ngay cả khi mọi chuyện chưa hoàn toàn như ý.

Mong bạn đừng quên công nhận những nỗ lực thầm lặng của mình. Có những bước tiến người khác không nhìn thấy, nhưng chúng vẫn có ý nghĩa. Nếu đôi khi bạn thấy lo lắng hay mất phương hướng, hãy cho mình một chút thời gian, tìm người tin cậy để chia sẻ và bắt đầu lại từ một việc nhỏ thôi.

Chúc Minh Thư có sức khỏe, niềm vui, những tình bạn chân thành và nhiều cơ hội để làm điều khiến mình hạnh phúc. Mong tương lai sẽ mang đến những trải nghiệm đẹp, còn hiện tại cũng có thật nhiều khoảnh khắc để trân trọng. Chúc bạn 20/10 thật bình yên và ngọt ngào!`
  },
  {
    stt: 40,
    name: 'Đoàn Thị Tường Vy',
    title: 'Tường Vy, mong mọi điều tốt lành ghé thăm',
    symbol: '🌺', caption: 'một bông hoa tràn đầy sức sống', photo: 'photos/40.jpg',
    letter: `Tường Vy ơi,

Chúc mừng ngày 20/10! Mong những điều tốt lành sẽ tìm đến bạn theo cách thật tự nhiên: một buổi học suôn sẻ, một người bạn hỏi thăm đúng lúc, một dự định nhỏ hoàn thành hay chỉ đơn giản là một ngày kết thúc với tâm trạng nhẹ nhàng hơn lúc bắt đầu.

Chúc bạn luôn có đủ can đảm để nắm lấy cơ hội, đủ kiên nhẫn để vượt qua thử thách và đủ niềm tin để tiếp tục khi kết quả chưa xuất hiện ngay. Mỗi lần bạn thử thêm một chút, học thêm một điều hoặc đứng dậy sau một ngày không ổn đều là những điều đáng trân trọng.

Mong Tường Vy có một quãng thời gian học trò thật nhiều kỷ niệm đẹp, có người cùng chia sẻ những câu chuyện ngớ ngẩn lẫn nghiêm túc và có ước mơ khiến mình hào hứng. Chúc bạn luôn khỏe mạnh, vui vẻ, ngày càng tự tin và được cuộc sống đối xử dịu dàng. Gửi bạn nhiều thương mến!`
  },
  {
    stt: 41,
    name: 'Lê Ngọc Tường Vy',
    title: 'Tường Vy, chúc bạn luôn là phiên bản mình yêu quý',
    symbol: '🌸', caption: 'mỗi cánh hoa là một điều đáng tự hào', photo: 'photos/41.jpg',
    letter: `Gửi Tường Vy thân mến,

Trong ngày 20/10, tụi mình mong bạn có thể nhìn lại bản thân với ánh mắt tự hào hơn một chút. Bạn vẫn đang học hỏi, trưởng thành và khám phá xem điều gì phù hợp với mình — như vậy đã là một hành trình rất đáng quý. Bạn không cần phải giống bất kỳ ai để trở nên đặc biệt.

Chúc bạn có đủ tự tin để nói lên ý kiến, đủ kiên định với điều mình tin là đúng và đủ cởi mở để đón nhận những bài học mới. Khi mắc lỗi, hãy xem đó là dịp để hiểu thêm về mình; khi làm tốt điều gì, hãy cho phép bản thân vui và ghi nhận công sức đã bỏ ra.

Mong Tường Vy luôn có người chân thành bên cạnh, những niềm vui giản dị mỗi ngày và nhiều cơ hội để theo đuổi điều khiến trái tim mình rung động. Chúc bạn bình an, học tập thuận lợi, gặp nhiều may mắn và giữ được những nét đáng yêu của riêng mình. Chúc mừng 20/10 nhé!`
  },
  {
    stt: 42,
    name: 'Bùi Thị Thanh Xuân',
    title: 'Thanh Xuân, mong thanh xuân của bạn thật đáng nhớ',
    symbol: '🎐', caption: 'gửi bạn những ngày trong veo và rộn tiếng cười', photo: 'photos/42.jpg',
    letter: `Thanh Xuân thân mến,

Tên bạn khiến tụi mình nghĩ đến những năm tháng nhiều màu sắc, nên trong ngày 20/10 này, mong quãng tuổi trẻ của bạn sẽ có thật nhiều kỷ niệm đẹp. Mong có những buổi học đầy tiếng cười, những người bạn sẵn lòng giúp đỡ, những lần cùng nhau cố gắng và cả những câu chuyện nhỏ sau này kể lại vẫn thấy vui.

Chúc bạn có sức khỏe để khám phá điều mới, lòng can đảm để theo đuổi mục tiêu và sự bình tĩnh để đi qua những ngày bận rộn. Bạn không cần biến mỗi ngày thành điều gì lớn lao; đôi khi sống tử tế, học thêm được một điều và dành thời gian cho người mình quý đã làm nên một ngày rất đáng nhớ rồi.

Mong Thanh Xuân luôn giữ được niềm hy vọng, tìm thấy điều khiến mình say mê và được ở cạnh những người tôn trọng con người thật của bạn. Chúc tương lai có nhiều cánh cửa đẹp mở ra, hiện tại có nhiều niềm vui nhỏ ở lại và trái tim bạn luôn có chỗ cho những điều mình yêu. Happy 20/10!`
  },
  {
    stt: 43,
    name: 'Trần Như Ý',
    title: 'Như Ý, chúc điều tốt đẹp đến gần bạn hơn mỗi ngày',
    symbol: '🍀', caption: 'một chiếc lá may mắn dành riêng cho bạn', photo: 'photos/43.jpg',
    letter: `Gửi Như Ý,

Chúc bạn một ngày 20/10 đúng như tên gọi — có thật nhiều điều khiến lòng vui vẻ và những mong ước tốt đẹp dần trở thành hiện thực. Tụi mình mong bạn luôn tìm được niềm vui trong hành trình của mình, kể cả khi mọi thứ cần thêm thời gian mới có kết quả.

Chúc bạn học tập thật thuận lợi, luôn đủ sức khỏe và có sự tự tin để thử sức với những điều mình còn tò mò. Nếu có hôm nào gặp chuyện không như ý, mong bạn nhớ rằng một trở ngại nhỏ không thể định nghĩa khả năng của bạn. Bạn luôn có thể học hỏi, thay đổi cách làm và bắt đầu lại.

Mong Như Ý có nhiều bạn bè chân thành, những khoảnh khắc vui vẻ ở lớp và một tương lai có thật nhiều lựa chọn tốt. Chúc những nỗ lực của bạn được đền đáp, những người tử tế ở lại bên bạn và những điều khiến bạn lo lắng sẽ dần nhẹ đi. Gửi bạn một chiếc lá may mắn và thật nhiều thương mến!`
  },
  {
    stt: 44,
    name: 'Nguyễn Thụy Hải Yến',
    title: 'Hải Yến, mong bạn bay về phía những ngày đẹp',
    symbol: '🕊️', caption: 'nhẹ nhàng bay về những điều mình mơ ước', photo: 'photos/44.jpg',
    letter: `Hải Yến thân mến,

Nhân ngày 20/10, tụi mình mong bạn có thể bước vào những ngày sắp tới với tâm thế nhẹ nhàng nhưng đầy hy vọng. Cuộc sống sẽ có lúc giống như bầu trời trong xanh, cũng có lúc nhiều mây; mong bạn luôn tin rằng thời tiết không đứng yên mãi và mình có thể học cách đi qua từng chặng đường.

Chúc bạn đủ dũng cảm để theo đuổi ước mơ, đủ bình tĩnh để lựa chọn điều phù hợp và đủ yêu thương bản thân để không ép mình phải làm tốt mọi thứ cùng một lúc. Hãy nhớ rằng những tiến bộ nhỏ vẫn đáng mừng, những lần nghỉ ngơi là cần thiết và bạn luôn có quyền nhờ người khác sẻ chia.

Mong Hải Yến gặp nhiều người tốt, có những tình bạn đẹp và lưu giữ thật nhiều khoảnh khắc đáng quý của tuổi học trò. Chúc mỗi ngày mang đến một điều mới để học, một niềm vui để nhớ và một lý do để tin vào tương lai. Chúc bạn thật hạnh phúc, bình an và rạng rỡ trong ngày 20/10!`
  },
];

const teacher = {
  code: 2010,
  name: 'Cô chủ nhiệm thân yêu',
  title: 'Kính chúc cô luôn hạnh phúc và rạng rỡ',
  symbol: '💐', caption: 'bó hoa nhỏ thay lời cảm ơn cô', photo: 'photos/2010.jpg',
  letter: `Kính gửi cô,

Nhân ngày Phụ nữ Việt Nam 20/10, tập thể lớp chúng em kính chúc cô luôn mạnh khỏe, bình an, hạnh phúc và có thật nhiều niềm vui trong cuộc sống. Mong mỗi ngày đến trường của cô đều bắt đầu bằng một nụ cười, mỗi giờ lên lớp đều có những khoảnh khắc đáng nhớ và những nỗ lực của cô luôn được trân trọng.

Chúng em cảm ơn cô vì đã tận tình hướng dẫn, kiên nhẫn nhắc nhở và đồng hành cùng lớp trong những lúc vui cũng như khi chúng em còn thiếu sót. Có những bài học không chỉ nằm trong trang vở, mà còn là cách sống có trách nhiệm, biết cố gắng và biết quan tâm đến mọi người — những điều chúng em sẽ còn nhớ lâu dài.

Kính chúc cô luôn giữ được sự nhiệt huyết với nghề, gặp nhiều điều thuận lợi và có thật nhiều thời gian dành cho bản thân cùng những người cô yêu quý. Chúng em mong có thể mang đến cho cô niềm tự hào bằng sự trưởng thành từng ngày của cả lớp. Chúc cô một ngày 20/10 thật ấm áp, thật nhiều hoa và ngập tràn yêu thương ạ!`
};

const form = document.getElementById('wishForm');
const numberInput = document.getElementById('studentNumber');
const statusBox = document.getElementById('formStatus');
const result = document.getElementById('wishResult');
const recipientLabel = document.getElementById('recipientLabel');
const wishTitle = document.getElementById('wishTitle');
const wishMessage = document.getElementById('wishMessage');
const wishSignature = document.getElementById('wishSignature');
const portraitName = document.getElementById('portraitName');
const portraitCaption = document.getElementById('portraitCaption');
const portraitSticker = document.getElementById('portraitSticker');
const personPhoto = document.getElementById('personPhoto');
const photoEmpty = document.getElementById('photoEmpty');
const resetButton = document.getElementById('resetButton');
const celebrationLayer = document.getElementById('celebrationLayer');
const liveRegion = document.getElementById('liveRegion');

function showStatus(message) {
  statusBox.textContent = message;
}

function makeCelebration() {
  const decorations = ['✿', '♡', '✦', '❀', '♥', '✧', '🌸'];
  const colors = ['#e88ba7', '#d5b6e8', '#f2bf75', '#f4a9bd', '#c8b3e6', '#b9d8ba'];
  for (let i = 0; i < 42; i += 1) {
    const bit = document.createElement('span');
    bit.className = 'celebration';
    bit.textContent = decorations[Math.floor(Math.random() * decorations.length)];
    bit.style.setProperty('--left', `${Math.random() * 100}%`);
    bit.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    bit.style.setProperty('--size', `${11 + Math.random() * 15}px`);
    bit.style.setProperty('--duration', `${3 + Math.random() * 2.5}s`);
    bit.style.setProperty('--delay', `${Math.random() * 0.55}s`);
    bit.style.setProperty('--drift', `${Math.round((Math.random() - 0.5) * 180)}px`);
    bit.style.setProperty('--spin', `${Math.round((Math.random() - 0.5) * 600)}deg`);
    celebrationLayer.appendChild(bit);
    window.setTimeout(() => bit.remove(), 6200);
  }
}

function updatePortrait(person) {
  personPhoto.hidden = true;
  personPhoto.removeAttribute('src');
  personPhoto.alt = `Ảnh của ${person.name}`;
  photoEmpty.hidden = false;

  personPhoto.onload = () => {
    personPhoto.hidden = false;
    photoEmpty.hidden = true;
  };
  personPhoto.onerror = () => {
    personPhoto.hidden = true;
    photoEmpty.hidden = false;
  };
  personPhoto.src = person.photo;
}

function displayWish(person, enteredNumber, isTeacher = false) {
  const displayName = isTeacher ? 'Cô chủ nhiệm thân yêu' : person.name;
  recipientLabel.textContent = isTeacher
    ? 'Một bức thư đặc biệt gửi đến cô'
    : `Bức thư riêng dành cho ${displayName} · STT ${enteredNumber}`;
  wishTitle.textContent = person.title;
  wishMessage.textContent = person.letter;
  wishSignature.textContent = isTeacher ? 'Với lòng biết ơn, tập thể lớp K24A5 ♡' : 'Thương mến, tập thể lớp K24A5 ♡';
  portraitName.textContent = displayName;
  portraitCaption.textContent = person.caption || 'hôm nay là ngày dành cho bạn';
  portraitSticker.textContent = person.symbol || '♡';
  updatePortrait(person);
  result.hidden = false;
  showStatus('');
  liveRegion.textContent = `Đã mở thư dành cho ${displayName}`;
  makeCelebration();
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const rawValue = numberInput.value.trim();

  if (!rawValue) {
    showStatus('Bạn hãy nhập số thứ tự để mở chiếc thư của mình nhé! 💗');
    numberInput.focus();
    return;
  }

  const enteredNumber = Number(rawValue);
  if (!Number.isInteger(enteredNumber) || enteredNumber < 1) {
    showStatus('Số thứ tự phải là số nguyên dương nha.');
    numberInput.focus();
    return;
  }

  if (enteredNumber === teacher.code) {
    displayWish(teacher, enteredNumber, true);
    return;
  }

  const person = girls.find((girl) => girl.stt === enteredNumber);
  if (!person) {
    showStatus('Số này chưa có trong danh sách thư. Bạn kiểm tra lại STT nhé! 🌷');
    result.hidden = true;
    numberInput.focus();
    return;
  }

  displayWish(person, enteredNumber);
});

resetButton.addEventListener('click', () => {
  result.hidden = true;
  numberInput.value = '';
  showStatus('');
  numberInput.focus();
  document.getElementById('top').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
