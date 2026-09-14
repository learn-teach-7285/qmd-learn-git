---
name: qmd-wfb-lnk
description: Quy chuẩn ghi và chèn liên kết Wikilink (wfb-lnk) trỏ Heading hdc, Mã duyệt apc, Tệp nội bộ, Thư mục Folder và Web URL trong thân bài. Kích hoạt khi chèn hoặc kiểm tra liên kết thân bài.
💍 code: QC-MDS-SKILL-WFB-LNK
🪞 title: Ghi Wikilink thân bài
🔰 type: 🧰 AI-SKILL
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-WFB-LNK
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrbe", "sh1")` Kỹ năng Ghi Liên Kết Thân Bài (qmd-wfb-lnk) `$= qc("c", "💎 K5jhuvp7vrbf", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vrbg", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vrbh", "💧")` Đảm bảo 100% liên kết thân bài tuân thủ 5 loại link hợp lệ và escape pipe `\|` trong ô bảng.
`$= qc("c", "💎 K5jhuvp7vrbi", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vrbj", "⛵")` Rà soát & áp dụng 5 loại liên kết và 4 quy tắc cảnh báo bên dưới.

---

## 1. 5 Loại Liên Kết Hợp Lệ Trong Thân Bài (5 VALID BODY LINK TYPES)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrbk", "sh2")` Quy định 5 loại liên kết hợp lệ trong thân bài `$= qc("c", "💎 K5jhuvp7vrbl", "hd2")`</span>


| STT | Loại Liên Kết | Cú Pháp Mẫu | Mục Đích Sử Dụng |
| :-: | :--- | :--- | :--- |
| 1 | **Link Neo Tiêu Đề (`hdc`)** | `[[TỆP.md#<MÃ_TIÊU_ĐỀ>\|💎 K...]]` | Trỏ thẳng vào Tiêu đề Cấp 2/3 (`##`, `###`) của tệp đặc tả. |
| 2 | **Link Neo Mã Duyệt (`apc`)** | `[[TỆP.md#💎 K...\|💎 K...]]` | Trỏ vào mục sở hữu Nút Duyệt / Copy Mã ID Kép. |
| 3 | **Link Tệp Nội Bộ (File Link)** | `[[TỆP.md\|TÊN_HIỂN_THỊ]]` | Trỏ tới tệp khác trong Vault (100% Địa chỉ Tương đối). |
| 4 | **Link Thư Mục (Folder Link)** | `[📁 TÊN_FOLDER](obsidian://open?vault=...&folder=...)` | Mở thư mục trực tiếp trong Obsidian hoặc File Explorer. |
| 5 | **Link Web / Trang Tính (Web URL)** | `[TÊN_LINK](https://docs.google.com/...)` | Trỏ tới trang tính Google Sheets hoặc tài nguyên Web ngoài. |

---

## 2. Quy Tắc AI Tự Động Phát Cảnh Báo Ngay Lập Tức (`⚠️ AI WARNING RULE`)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrbm", "sh2")` Quy tắc AI tự động phát cảnh báo khi phát hiện lỗi link `$= qc("c", "💎 K5jhuvp7vrbn", "hd2")`</span>


> [!CAUTION]
> **AI AGENT BẮT BUỘC PHÁT CẢNH BÁO `⚠️` NGAY LẬP TỨC NẾU PHÁT HIỆN 4 LỖI SAU**:
> 
> 1. **🔴 Lỗi Đường Dẫn Tuyệt Đối Ổ Đĩa (`C:/...`, `X:/...`)**:
>    - *Cảnh báo*: `⚠️ WARN: Phát hiện đường dẫn tuyệt đối ổ đĩa! Yêu cầu đổi sang Wikilink tương đối tên tệp duy nhất [[TỆP.md]] hoặc Obsidian Folder URI.`
> 2. **🟠 Lỗi Kèm Tên Thư Mục Trong Wikilink (`[[01 SPEC/TỆP.md]]`)**:
>    - *Cảnh báo*: `⚠️ WARN: Phát hiện đường dẫn chứa thư mục trong Wikilink! Yêu cầu loại bỏ đường dẫn thư mục, chỉ dùng tên tệp duy nhất [[TỆP.md]].`
> 3. **🟠 Lỗi Quên Escape Ký Tự Pipe `|` Trong Ô Bảng Markdown**:
>    - *Cảnh báo*: `⚠️ WARN: Phát hiện ký tự pipe '|' chưa được escape '\|' trong ô bảng Markdown! Yêu cầu đổi sang '\|' để tránh làm vỡ cấu trúc cột bảng.`
> 4. **🟡 Lỗi Nhãn Mã ID Không Đúng Chuẩn `💎 K...`**:
>    - *Cảnh báo*: `⚠️ WARN: Nhãn hiển thị ID chưa đúng định dạng kim cương có khoảng trắng '💎 K...'.`

### 4. 💎 Quy Chuẩn Bắt Buộc Escape Ký Tự `\|` Trong Bảng Markdown
- **Nguyên tắc sống còn**: Khi chèn Wikilink có nhãn hiển thị bên trong ô bảng Markdown, ký tự `|` **BẮT BUỘC PHẢI ĐƯỢC ESCAPE THÀNH `\|`** (Ví dụ: `[[Tệp#Mục\|Nhãn]]`).
- **Hậu quả nếu quên escape**: Trình parser Markdown sẽ hiểu lầm ký tự `|` là vạch chia cột, làm xé rách và bể toàn bộ cấu trúc bảng!
