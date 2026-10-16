# Bloom 20.10 — những bức thư riêng

Website thiệp 20/10 tĩnh, chạy bằng HTML/CSS/JavaScript và có thể xuất bản qua GitHub Pages (GitHub Actions). Không cần backend, không gửi số thứ tự hay lời thư lên máy chủ.

## Có gì trong phiên bản này?

- Đúng danh sách 22 bạn nữ với STT: 1, 5, 6, 8, 10, 17, 18, 19, 20, 22, 23, 24, 25, 32, 34, 35, 36, 40, 41, 42, 43, 44.
- Mã `2010` mở thư dành riêng cho cô chủ nhiệm.
- Mỗi người có tiêu đề, lời thư dài nhiều đoạn, sticker và đường dẫn ảnh riêng.
- Chuyển động phong thư, hình khối morph, khung ảnh morph nhẹ, hiệu ứng xuất hiện nội dung, hoa/trái tim bay.
- Nếu chưa thêm ảnh, website vẫn hiện khung ảnh minh họa dễ thương.
- Thiết kế co giãn cho điện thoại và máy tính, có hỗ trợ giảm chuyển động nếu người xem bật Reduce Motion.

## Chỉnh nội dung thư

Mở `script.js`, tìm `const girls = [` rồi tìm bạn theo `stt` hoặc `name`.

Ví dụ:

```js
{
  stt: 17,
  name: 'Vũ Trần Minh Khuê',
  title: 'Minh Khuê, cứ tỏa sáng theo cách của bạn nhé',
  symbol: '✨',
  caption: 'lấp lánh mà vẫn dịu dàng',
  photo: 'photos/17.jpg',
  letter: `Gửi Minh Khuê,\n\nĐoạn thư thứ nhất.\n\nĐoạn thư thứ hai.`
}
```

- Đổi `title` để đổi tiêu đề bức thư.
- Viết nội dung dài trong trường `letter` giữa hai dấu backtick: `` `...` ``.
- Để cách một dòng trong nội dung để tạo đoạn mới.
- Dấu backtick trong nội dung thư cần được tránh hoặc escape; cách dễ nhất là dùng dấu nháy đơn thay thế.
- Đổi `symbol` để đổi sticker và `caption` để đổi dòng chú thích.
- Cô chủ nhiệm được khai báo riêng trong `const teacher = { ... }`.

## Thêm ảnh từng bạn

Đặt ảnh đã được bạn ấy đồng ý cho sử dụng vào `photos/`, theo tên file:

- `photos/1.jpg` — Lê Thị Kim Anh
- `photos/5.jpg` — Trần Hoàng Mỹ Đinh
- `photos/6.jpg` — Cao Ngọc Gia Hân
- `photos/8.jpg` — Hoàng Thị Ánh Hồng
- `photos/10.jpg` — Phạm Hoàng Xuân Hương
- `photos/17.jpg` — Vũ Trần Minh Khuê
- `photos/18.jpg` — Lee Huan Ling
- `photos/19.jpg` — Trần Thị Ánh Minh
- `photos/20.jpg` — Trương Hoàng Giang My
- `photos/22.jpg` — Đoàn Trần Bảo Ngọc
- `photos/23.jpg` — Đào Nguyễn Ánh Ngọc
- `photos/24.jpg` — Phan Nguyễn Khánh Ngọc
- `photos/25.jpg` — Nguyễn Hồng Ngọc
- `photos/32.jpg` — Nguyễn Thị Phương Thảo
- `photos/34.jpg` — Phan Ngọc Anh Thư
- `photos/35.jpg` — Trần Võ Anh Thư
- `photos/36.jpg` — Lý Minh Thư
- `photos/40.jpg` — Đoàn Thị Tường Vy
- `photos/41.jpg` — Lê Ngọc Tường Vy
- `photos/42.jpg` — Bùi Thị Thanh Xuân
- `photos/43.jpg` — Trần Như Ý
- `photos/44.jpg` — Nguyễn Thụy Hải Yến
- `photos/2010.jpg` — ảnh cô chủ nhiệm (không bắt buộc)

Mặc định code dùng đuôi `.jpg`. Nếu ảnh là `.png` hoặc `.webp`, sửa đường dẫn `photo` tương ứng trong `script.js` cho khớp chính xác chữ hoa/chữ thường.

**Riêng tư:** repository Public khiến ảnh được push lên GitHub có thể truy cập công khai. Chỉ dùng ảnh người trong ảnh đồng ý chia sẻ. Có thể thay bằng ảnh chibi, avatar tự vẽ hoặc hình minh họa nếu không muốn đăng ảnh thật. Không dùng ảnh nhạy cảm.

## Chạy thử trên Termux

Trong thư mục project:

```bash
python -m http.server 8080 --bind 127.0.0.1
```

Mở `http://127.0.0.1:8080` trên trình duyệt cùng điện thoại. Nhấn `Ctrl+C` trong Termux để dừng.

## Đăng lên GitHub Pages

Workflow `.github/workflows/pages.yml` sẽ chạy sau khi push lên nhánh `main`.

1. Trong GitHub, mở **Settings → Pages** và giữ nguồn xuất bản là **GitHub Actions**.
2. Commit/push các file lên nhánh `main`.
3. Mở tab **Actions**, chờ `Deploy Bloom 20.10` hoàn tất với dấu tích xanh.
4. Lấy URL tại **Settings → Pages**.

Nếu workflow cũ đã tồn tại và có cùng chức năng, hãy tránh giữ hai workflow deploy Pages chạy cạnh tranh nhau; chỉ cần một workflow triển khai.
