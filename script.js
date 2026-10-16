/*
  BLOOM 20.10 — lời chúc 20/10
  CÁCH SỬA SỐ THỨ TỰ:
  - Mỗi mục trong danh sách girls có thuộc tính stt.
  - Đổi stt: 1, stt: 2... thành số thứ tự THẬT của 22 bạn nữ trong lớp.
  - Cô chủ nhiệm dùng mã riêng 2010 (được khai báo bên dưới).
*/

const girls = [
  { stt: 1, title: 'Mong bạn luôn rực rỡ!', message: 'Chúc bạn luôn tự tin, vui vẻ và yêu thương chính mình. Mong mỗi ngày của bạn đều có một điều nhỏ xíu khiến bạn mỉm cười, và mọi nỗ lực đều nở hoa đúng lúc.', symbol: '🌷', caption: 'dịu dàng như một đóa tulip' },
  { stt: 2, title: 'Bạn xứng đáng với điều tuyệt vời!', message: 'Chúc bạn luôn gặp những người tử tế, có đủ dũng khí để theo đuổi điều mình thích và đủ bình yên để tận hưởng những điều giản dị. Hãy luôn là phiên bản khiến bạn tự hào nhất nhé!', symbol: '♡', caption: 'một chiếc ôm thật ấm áp' },
  { stt: 3, title: 'Cứ tỏa sáng theo cách của bạn!', message: 'Mong bạn luôn giữ được nét riêng đáng yêu của mình. Chúc những dự định trong tim bạn dần thành hiện thực, những ngày mệt mỏi có người sẻ chia và những ngày vui kéo dài thật lâu.', symbol: '✨', caption: 'lấp lánh theo cách riêng' },
  { stt: 4, title: 'Chúc bạn luôn được nâng niu!', message: 'Chúc cô gái tuyệt vời này luôn khỏe mạnh, gặp nhiều may mắn và có thật nhiều khoảnh khắc đáng nhớ. Đừng quên rằng bạn không cần hoàn hảo để trở nên đặc biệt đâu nhé.', symbol: '🌸', caption: 'nhẹ nhàng như cánh hoa' },
  { stt: 5, title: 'Mong nụ cười luôn ở lại!', message: 'Chúc bạn có một trái tim bình yên, một tâm hồn nhiều sắc màu và thật nhiều lý do để cười mỗi ngày. Mong mọi điều tốt đẹp sẽ tìm được đường đến với bạn.', symbol: '☀️', caption: 'mang theo một chút nắng' },
  { stt: 6, title: 'Bạn là một điều dễ thương!', message: 'Cảm ơn bạn vì đã góp một màu sắc riêng cho lớp mình. Chúc bạn học tập thật tốt, chơi hết mình, ngủ thật ngon và luôn có những người bạn khiến thanh xuân trở nên đáng nhớ.', symbol: '💗', caption: 'gói ghém nhiều thương mến' },
  { stt: 7, title: 'Chúc mọi điều lành ghé thăm!', message: 'Mong bạn luôn đủ mạnh mẽ trước thử thách, đủ mềm mại với cảm xúc của mình và đủ tin tưởng để bắt đầu lại khi cần. Bạn đang làm tốt hơn bạn nghĩ đó!', symbol: '🦋', caption: 'bay về phía những ngày đẹp' },
  { stt: 8, title: 'Mong bạn gặp toàn chuyện vui!', message: 'Chúc bạn có thật nhiều niềm vui bất ngờ, điểm số như ý, những bữa ăn ngon và những cuộc trò chuyện khiến mình cười mãi. Hy vọng hôm nay sẽ là một kỷ niệm thật xinh của bạn.', symbol: '🌼', caption: 'tươi tắn như hoa cúc nhỏ' },
  { stt: 9, title: 'Hãy luôn tin vào mình nhé!', message: 'Chúc bạn can đảm bước theo ước mơ, kiên trì với điều quan trọng và dịu dàng với chính mình trong những ngày chưa hoàn hảo. Tương lai còn rất nhiều điều hay ho đang chờ bạn.', symbol: '⭐', caption: 'một ngôi sao bé xinh' },
  { stt: 10, title: 'Chúc bạn luôn bình an!', message: 'Mong những lo lắng sẽ nhẹ đi, những niềm vui sẽ nhiều lên và mỗi khi nhìn lại, bạn đều thấy mình đã trưởng thành theo cách thật đẹp. Chúc bạn luôn được yêu thương và trân trọng.', symbol: '🪻', caption: 'một góc trời thật bình yên' },
  { stt: 11, title: 'Hôm nay và mọi ngày đều vui!', message: 'Chúc bạn luôn có năng lượng để làm điều mình thích, có bạn bè để cùng cười và có gia đình để trở về. Mong ước mơ của bạn lớn lên từng ngày, còn trái tim thì luôn ấm áp.', symbol: '🎀', caption: 'thắt nơ cho ngày thật xinh' },
  { stt: 12, title: 'Bạn đặc biệt hơn bạn nghĩ!', message: 'Có thể bạn không nhận ra, nhưng sự hiện diện của bạn làm tập thể mình có thêm một sắc màu. Chúc bạn luôn hạnh phúc với những gì mình đang có và háo hức với những điều sắp tới.', symbol: '🌺', caption: 'một bông hoa đầy sức sống' },
  { stt: 13, title: 'Chúc ước mơ sớm nở hoa!', message: 'Mong những ngày bạn chăm chỉ sẽ được đền đáp, những lần cố gắng không ai thấy vẫn có ý nghĩa và bạn luôn tìm được niềm vui trên hành trình của mình. Cố lên nhé, cô gái!', symbol: '🌹', caption: 'nở hoa sau những ngày cố gắng' },
  { stt: 14, title: 'Gửi bạn thật nhiều năng lượng tốt!', message: 'Chúc bạn luôn tươi tắn, tự tin nói lên suy nghĩ của mình và không ngại thử những điều mới. Mong bạn đi đến đâu cũng mang theo sự chân thành và nhận lại thật nhiều điều tử tế.', symbol: '🍓', caption: 'ngọt ngào như một ngày mùa hè' },
  { stt: 15, title: 'Mong bạn được là chính mình!', message: 'Chúc bạn không phải so sánh mình với bất kỳ ai, bởi hành trình của mỗi người đều có vẻ đẹp riêng. Hãy cứ lớn lên theo nhịp của bạn và tự hào về từng bước nhỏ nhé.', symbol: '🩷', caption: 'một lời nhắc rằng bạn rất tuyệt' },
  { stt: 16, title: 'Chúc ngày nào cũng có phép màu!', message: 'Mong phép màu của bạn là một tin vui bất ngờ, một bài kiểm tra vừa sức, một món ngon yêu thích hay một người nhớ hỏi han bạn. Chúc những điều giản dị làm trái tim bạn đầy ắp.', symbol: '✨', caption: 'rắc một chút phép màu' },
  { stt: 17, title: 'Cứ dịu dàng mà mạnh mẽ nhé!', message: 'Chúc bạn có thể dịu dàng mà không yếu đuối, mạnh mẽ mà vẫn biết nghỉ ngơi, quan tâm mọi người nhưng không quên chăm sóc chính mình. Bạn cũng xứng đáng được yêu thương thật nhiều.', symbol: '🌿', caption: 'xanh tươi và đầy sức sống' },
  { stt: 18, title: 'Mong thanh xuân của bạn thật đẹp!', message: 'Chúc những năm tháng học trò của bạn có tiếng cười, tình bạn đẹp, những kỷ niệm khó quên và thật nhiều bức ảnh nhìn lại vẫn thấy vui. Hãy tận hưởng từng khoảnh khắc nhé!', symbol: '📷', caption: 'lưu lại một ngày đáng nhớ' },
  { stt: 19, title: 'Chúc bạn luôn gặp điều tử tế!', message: 'Mong cuộc sống đối xử dịu dàng với bạn, những cố gắng được ghi nhận và những lúc yếu lòng luôn có người lắng nghe. Chúc bạn vừa có lòng tốt, vừa biết bảo vệ niềm vui của mình.', symbol: '🤍', caption: 'một khoảng trời dịu êm' },
  { stt: 20, title: 'Bạn hãy cứ nở hoa nhé!', message: 'Mỗi người có một mùa nở hoa riêng, nên đừng vội vàng với bản thân. Chúc bạn đủ kiên nhẫn để học hỏi, đủ tự tin để tỏa sáng và đủ niềm vui để tận hưởng hành trình phía trước.', symbol: '🌷', caption: 'đến mùa của bạn, hãy nở hoa' },
  { stt: 21, title: 'Chúc bạn có một ngày thật ngọt!', message: 'Mong hôm nay bạn nhận được nhiều lời khen chân thành, những món quà bất ngờ và những cái ôm thật chặt. Chúc bạn luôn khỏe mạnh, vui vẻ và có thật nhiều chuyện hay để kể.', symbol: '🍰', caption: 'ngọt ngào như chiếc bánh nhỏ' },
  { stt: 22, title: 'Một bông hoa, một lời chúc dành cho bạn!', message: 'Chúc bạn ngày càng trưởng thành nhưng vẫn giữ được sự hồn nhiên, ngày càng giỏi giang nhưng vẫn biết tận hưởng niềm vui. Cảm ơn vì đã là một phần trong tập thể lớp mình nhé!', symbol: '💐', caption: 'bó hoa nhỏ dành riêng cho bạn' }
];

const teacher = {
  code: 2010,
  title: 'Chúc cô luôn rạng rỡ và hạnh phúc!',
  message: 'Nhân ngày Phụ nữ Việt Nam 20/10, chúng em kính chúc cô luôn mạnh khỏe, bình an, nhiều niềm vui và luôn giữ được ngọn lửa nhiệt huyết với nghề. Cảm ơn cô vì đã tận tình chỉ bảo, kiên nhẫn đồng hành và dành cho tập thể lớp thật nhiều yêu thương. Mong mỗi ngày đến lớp của cô đều có thật nhiều nụ cười ạ!',
  symbol: '💐',
  caption: 'bó hoa thay lời cảm ơn cô'
};

const form = document.getElementById('wishForm');
const numberInput = document.getElementById('studentNumber');
const statusBox = document.getElementById('formStatus');
const result = document.getElementById('wishResult');
const recipientLabel = document.getElementById('recipientLabel');
const wishTitle = document.getElementById('wishTitle');
const wishMessage = document.getElementById('wishMessage');
const resultSticker = document.getElementById('resultSticker');
const resetButton = document.getElementById('resetButton');
const celebrationLayer = document.getElementById('celebrationLayer');
const resultArt = document.getElementById('resultArt');
const artGround = document.getElementById('artGround');

function showStatus(message) {
  statusBox.textContent = message;
}

function makeCelebration() {
  const decorations = ['✿', '♡', '✦', '❀', '♥', '✧'];
  const colors = ['#e88ba7', '#d5b6e8', '#f2bf75', '#f4a9bd', '#c8b3e6'];
  for (let i = 0; i < 24; i += 1) {
    const bit = document.createElement('span');
    bit.className = 'confetti';
    bit.textContent = decorations[Math.floor(Math.random() * decorations.length)];
    bit.style.setProperty('--left', `${Math.random() * 100}%`);
    bit.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    bit.style.setProperty('--size', `${12 + Math.random() * 14}px`);
    bit.style.setProperty('--duration', `${2.2 + Math.random() * 1.8}s`);
    bit.style.setProperty('--delay', `${Math.random() * 0.45}s`);
    celebrationLayer.appendChild(bit);
    window.setTimeout(() => bit.remove(), 4700);
  }
}

function displayWish(person, enteredNumber, isTeacher = false) {
  recipientLabel.textContent = isTeacher
    ? 'Dành tặng cô chủ nhiệm thân yêu'
    : `Gửi cô gái mang số thứ tự #${enteredNumber}`;
  wishTitle.textContent = person.title;
  wishMessage.textContent = person.message;
  resultSticker.textContent = person.symbol;
  resultArt.setAttribute('aria-label', person.caption || 'Một bó hoa dành tặng bạn');
  resultArt.dataset.theme = isTeacher ? 'teacher' : String((enteredNumber % 4) + 1);
  artGround.textContent = person.caption || 'một bó hoa dành riêng cho bạn';
  result.classList.remove('hidden');
  statusBox.textContent = '';
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  makeCelebration();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const rawValue = numberInput.value.trim();

  if (!rawValue) {
    showStatus('Bạn hãy nhập số thứ tự trước khi mở thiệp nhé! 💗');
    numberInput.focus();
    return;
  }

  const enteredNumber = Number(rawValue);
  if (!Number.isInteger(enteredNumber) || enteredNumber < 0) {
    showStatus('Số thứ tự cần là một số nguyên không âm nha.');
    numberInput.focus();
    return;
  }

  if (enteredNumber === teacher.code) {
    displayWish(teacher, enteredNumber, true);
    return;
  }

  const person = girls.find((girl) => girl.stt === enteredNumber);
  if (!person) {
    showStatus('Số này chưa có trong danh sách thiệp. Bạn kiểm tra lại số thứ tự nhé! Nếu đây là số thật của bạn, hãy nhờ người tạo thiệp cập nhật danh sách. 🌷');
    result.classList.add('hidden');
    numberInput.focus();
    return;
  }

  displayWish(person, enteredNumber);
});

resetButton.addEventListener('click', () => {
  result.classList.add('hidden');
  numberInput.value = '';
  showStatus('');
  numberInput.focus();
});
