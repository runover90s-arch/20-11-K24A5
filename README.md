# Bloom 20.10 — Website thiệp chúc mừng

Website tĩnh HTML/CSS/JavaScript, có thể chạy trực tiếp trên trình duyệt và đăng miễn phí bằng GitHub Pages.

## Các file
- `index.html`: cấu trúc trang và hình minh họa bó hoa SVG.
- `style.css`: giao diện pastel, hiệu ứng và bố cục điện thoại.
- `script.js`: danh sách 22 lời chúc, mã riêng `2010` cho cô chủ nhiệm và xử lý nhập số.

## Cần chỉnh trước khi chia sẻ
Mở `script.js`, tìm `const girls = [` rồi đổi các giá trị `stt: 1`, `stt: 2`, ... thành số thứ tự thật của 22 bạn nữ trong danh sách lớp. Mỗi số thứ tự phải là duy nhất. Mã `2010` đang dành riêng cho cô chủ nhiệm; nếu muốn đổi, sửa `code: 2010` trong đối tượng `teacher`.

Không cần thêm họ tên nếu muốn giữ riêng tư. Đây là website tĩnh; số nhập vào chỉ được xử lý trong trình duyệt, không có máy chủ hay cơ sở dữ liệu lưu lại.

## Chạy thử
Mở `index.html` bằng trình duyệt. Nhập các số mẫu từ 1 đến 22; nhập `2010` để xem thiệp của cô.

## Đăng bằng GitHub Pages
1. Tạo repository mới trên GitHub, ví dụ `thiep-20-10`.
2. Tải lên ba file `index.html`, `style.css`, `script.js` ở thư mục gốc của repository.
3. Vào **Settings → Pages**.
4. Trong **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, thư mục `/(root)`, rồi bấm **Save**.
6. Đợi GitHub Pages hoàn tất triển khai; URL sẽ hiện trong phần Pages, thường có dạng `https://TEN-GITHUB.github.io/thiep-20-10/`.

Lưu ý: repository công khai và website GitHub Pages có thể được mọi người xem. Đừng đưa thông tin riêng tư vào mã nguồn.
