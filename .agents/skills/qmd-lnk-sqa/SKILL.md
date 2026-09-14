---
name: qmd-lnk-sqa
description: Quy chuẩn liên kết đối soát hai chiều giữa Tệp Đặc Tả Spec (📖 AD-SP) và Bảng Nghiệm Thu QA (🌿 AI-NT). Định dạng ô bảng nghiệm thu trỏ Wikilink kèm nhãn ID Base-36 (💎 K...). Kích hoạt khi lập bảng nghiệm thu hoặc đối soát Spec-QA.
💍 code: QC-MDS-SKILL-LNK-SQA
🪞 title: Liên kết đối soát Spec và QA
🔰 type: 🧰 AI-SKILL
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-LNK-SQA
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr8i", "sh1")` Kỹ năng Liên Kết Đối Soát Spec & QA (qmd-lnk-sqa) `$= qc("c", "💎 K5jhuvp7vr8j", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vr8k", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr8l", "💧")` Đảm bảo quy trình tạo & chuẩn hóa liên kết đối soát hai chiều giữa Spec (`📖 AD-SP`) và QA (`🌿 AI-NT`).
`$= qc("c", "💎 K5jhuvp7vr8m", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr8n", "⛵")` Rà soát & tuân thủ 4 quy định định dạng Wikilink bên dưới.

---

## 1. Cấu Trúc Bảng Nghiệm Thu QA (`🌿 AI-NT`) Standard
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr8o", "sh2")` Quy định cấu trúc Bảng Nghiệm Thu QA standard `$= qc("c", "💎 K5jhuvp7vr8p", "hd2")`</span>


Trong tệp QA / Bảng Nghiệm thu (`🌿 AI-NT`), ô liên kết tại Cột 2 trỏ thẳng tới Tiêu đề Mục Đặc tả bằng Wikilink kèm **Nhãn hiển thị Mã ID Base-36 (`💎 K...`)**:

```markdown
| STT | ĐẶC TẢ | 🤖 LẦN | 🤖 KẾT QUẢ | 🤖 NGÀY | 🤖 GIỜ | 🤖 GHI CHÚ |
| :-: | :--- | :-: | :-: | :-: | :-: | :--- |
| 36 | [[04 ⛵ HH-KQ-XB.md#6.14. 💎 GS-HH-KQ-XB-COT-HH-KQ-TC\|💎 K5jhuvp7vr8q]] | 4 | 🌿 Pass | 05/08/2026 | 01:08:00 | Công thức Thu nhập Thực lĩnh Tổng cộng |
```

---

## 2. Quy Tắc Định Dạng Link Spec-to-QA (SPEC-TO-QA LINK RULES)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr8r", "sh2")` Quy tắc định dạng link Spec-to-QA `$= qc("c", "💎 K5jhuvp7vr8s", "hd2")`</span>


> [!IMPORTANT]
> **QUY TẮC BẮT BUỘC KHI NỐI LINK BẢNG NGHIỆM THU QA**:
> 1. `$= qc("c", "💎 K5jhuvp7vr8t", "gok")` **Cú pháp Wikilink Neo Tiêu Đề**: `[[<TỆP_ĐẶC_TẢ.md>#<MÃ_TIÊU_ĐỀ>|<MÃ_ID_BASE36>]]`.
> 2. `$= qc("c", "💎 K5jhuvp7vr8u", "gok")` **Escape ký tự Pipe `\|` nếu ô nằm trong Bảng Markdown**: Nếu link nằm trong ô bảng Markdown, ký tự pipe ngăn cách nhãn bắt buộc phải được escape dạng `\|`.
> 3. `$= qc("c", "💎 K5jhuvp7vr8v", "gok")` **Nhãn hiển thị Mã ID Base-36 (`💎 K...`)**: Nhãn hiển thị của link bắt buộc dùng mã kim khoảng trắng (`💎 K...`) đồng bộ 100% với mã ID tại dòng đích.

---

## 3. Ma Trận Trạng Thái Đối Soát Live (QA LIVE STATUS MATRIX)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr8w", "sh2")` Ma trận trạng thái đối soát live `$= qc("c", "💎 K5jhuvp7vr8x", "hd2")`</span>


| Symbol | Cú pháp Bảng QA | Ý nghĩa Nghiệp vụ đối soát |
| :-: | :--- | :--- |
| ❓ | `❓ Pending` | Mục mới tạo, chưa tiến hành chạy kịch bản kiểm thử. |
| ⏳ | `⏳ In-Progress` | Đang trong quá trình chạy test đối soát live. |
| 🌿 | `🌿 Pass` | Đã kiểm thử thành công, kết quả đối soát khớp 100% đặc tả. |
| 🚫 | `🚫 Fail` | Kết quả không khớp đặc tả, phát hiện bug cần sửa. |

---

## 4. Tự Động Rút Trích Theo Cờ `🎯 Mục tiêu` & `📌 Hành động`
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr8y", "sh2")` Quy định thuật toán rút trích cờ mục tiêu `🎯` và cờ hành động `📌` `$= qc("c", "💎 K5jhuvp7vr8z", "hd2")`</span>


- **Cờ `🎯 Mục tiêu:`**: AI Agent tự động bốc tất cả các mục sở hữu cờ `🎯` kèm mã `qc("c")` Code tương ứng để sinh ra **Bảng Nghiệm Thu QA (`🌿 AI-NT`)**.
- **Cờ `📌 Hành động:`**: AI Agent tự động bốc tất cả các mục sở hữu cờ `📌` kèm mã `qc("c")` Code tương ứng để sinh ra **Kế Hoạch Thi Công (`📌 AI-TASK`)**.
