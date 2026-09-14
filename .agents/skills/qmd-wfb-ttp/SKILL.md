---
name: qmd-wfb-ttp
description: Kích hoạt khi chèn bong bóng hướng dẫn ẩn (HTML Text Tooltip) gạch chân chấm mờ cho từ khóa kỹ thuật.
💍 code: QC-MDS-SKILL-WFB-TTP
🪞 title: Quy chuẩn chèn bong bóng hướng dẫn ẩn HTML Text Tooltip
🔰 type: 🧰 AI-SKILL
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-WFB-TTP
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrc0", "sh1")` Kỹ năng chèn bong bóng hướng dẫn ẩn HTML Text Tooltip `$= qc("c", "💎 K5jhuvp7vrc1", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vrbo", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vrbp", "💧")` Đảm bảo các từ khóa kỹ thuật sở hữu bong bóng hướng dẫn ẩn (Tooltip) chuẩn cú pháp HTML dịu mắt.
`$= qc("c", "💎 K5jhuvp7vrbq", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vrbr", "⛵")` Rà soát & bọc từ khóa kỹ thuật trong thẻ `<span title="...">` theo đúng 2 quy tắc bên dưới.

---

## 1. 💎 QC-MDS-SKILL-WFB-TTP-STX
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrc2", "sh2")` Cú pháp HTML Tooltip gạch chân chấm mờ dịu mắt `$= qc("c", "💎 K5jhuvp7vrc3", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vrbs", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vrbt", "💧")` Đảm bảo bong bóng hướng dẫn sở hữu style gạch chân chấm mờ dịu mắt (`border-bottom: 1px dotted #9ca3af`).
`$= qc("c", "💎 K5jhuvp7vrbu", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vrbv", "⛵")` Sử dụng chính xác cấu trúc mẫu HTML bên dưới:

```html
<span title="Nội dung hướng dẫn chi tiết kỹ thuật" style="border-bottom:1px dotted #9ca3af; cursor:help;">cụm từ hiển thị</span>
```

---

## 2. 💎 QC-MDS-SKILL-WFB-TTP-SAF
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrc4", "sh2")` Quy tắc an toàn vị trí bọc Tooltip tuyệt đối `$= qc("c", "💎 K5jhuvp7vrc5", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vrbw", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vrbx", "💧")` Đảm bảo không bị vỡ cú pháp vạch đứng Wikilink Obsidian (`[[link|display]]`).
`$= qc("c", "💎 K5jhuvp7vrby", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vrbz", "⛵")` **NGHIÊM CẤM** chèn thẻ `<span title="...">` vào bên trong pipe `|` của Wikilink (`[[link|<span...]]`). Bắt buộc bọc Tooltip ở cụm từ Tiếng Việt đứng trước hoặc sau liên kết Wikilink.

---

## 3. 💎 QC-MDS-SKILL-WFB-TTP-TBL
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmt0aknut", "sh2")` Quy tắc an toàn dấu pipe khi đặt Tooltip trong bảng Markdown `$= qc("c", "💎 Kmt0aknuu", "hd2")`</span>

`$= qc("c", "💎 Kmt0aknuv", "🪄")` **Mục tiêu**: `$= qc("c", "💎 Kmt0aknuw", "💧")` Đảm bảo không làm vỡ / chia tách cột bảng Markdown khi nội dung thuộc tính `title="..."` chứa ký tự phân cách.
`$= qc("c", "💎 Kmt0aknux", "🪄")` **Hành động**: `$= qc("c", "💎 Kmt0aknuy", "⛵")` Khi đặt thẻ `<span title="...">` bên trong bất kỳ ô bảng Markdown nào, nếu trong chuỗi `title` có dấu gạch đứng ngăn cách, **BẮT BUỘC** mã hóa thành thực thể HTML `&#124;` hoặc escape `\|`. **TUYỆT ĐỐI KHÔNG** để ký tự `|` thô vì trình phân tích Markdown sẽ nhận diện nhầm thành dấu chia cột và làm vỡ cấu trúc bảng.

---

## 4. 💎 QC-MDS-SKILL-WFB-TTP-BLK
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmt1d1lct", "sh2")` Quy chuẩn Tooltip cho Tiêu đề Khối Card Block qua ký tự 🦯 `$= qc("c", "💎 Kmt1d1m4l", "hd2")`</span>

`$= qc("c", "💎 Kmt1d1mwd", "🪄")` **Mục tiêu**: `$= qc("c", "💎 Kmt1d1no5", "💧")` Đảm bảo tiêu đề Khối Card Block `qc("a")` giữ được sự tinh gọn, không bị rối bởi dấu ngoặc đơn `()`, trong khi vẫn cung cấp Tooltip giải nghĩa/thuật ngữ kỹ thuật đầy đủ.
`$= qc("c", "💎 Kmt1d1ofx", "🪄")` **Hành động**: `$= qc("c", "💎 Kmt1d1p7p", "⛵")` Sử dụng cặp mảng tiêu đề trong lệnh `qc("a", "💎 K...", "ttb", ["Text Hiển Thị", "Tooltip Giải Nghĩa"])`. Động cơ `ac.js` sẽ tự động tách cặp và gắn `title="..."` kèm style `border-bottom:1px dotted #9ca3af; cursor:help;` lên thanh tiêu đề Card.

---

## 5. 💎 QC-MDS-SKILL-WFB-TTP-TWN
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtsgi883", "sh2")` Duyệt kép tóm ý & chi tiết qua qc("t") `$= qc("c", "💎 Kmtsgi884", "hd2")`</span>

`$= qc("c", "💎 Kmtsgi885", "🪄")` **Mục tiêu**: `$= qc("c", "💎 Kmtsgi886", "💧")` Cung cấp cơ chế duyệt kép đối xứng cho cấu trúc Tóm ý & Chi tiết (Master-Detail, Thuật ngữ-Định nghĩa, Tên trường & Diễn giải) và hiển thị Tooltip Flyout tương tác trực tiếp với các nút sao chép `[📋 Copy Text]` và `[📋 Copy Tip]`.
`$= qc("c", "💎 Kmtsgi887", "🪄")` **Hành động**: `$= qc("c", "💎 Kmtsgi888", "⛵")` Khi khai báo các ô mô tả nghiệp vụ trong bảng đặc tả (Schema/API/JSON) hoặc cấu trúc tóm ý có chi tiết trong câu, sử dụng `$= qc("t", ["💎 Kterm", "💎 Ktip"], ["dia", "tip"], ["Tóm ý / Nhãn", "Chi tiết / Diễn giải"])`. Hệ thống sẽ phân giải vế trước thành văn bản hiển thị (Tóm ý) và vế sau thành Tooltip tương tác hai chiều (Chi tiết).

