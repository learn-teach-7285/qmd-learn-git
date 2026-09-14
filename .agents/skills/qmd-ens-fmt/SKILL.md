---
name: qmd-ens-fmt
description: Tự động kiểm tra, rà soát và chuẩn hóa định dạng (Format & Standardize) cho các tệp Markdown (.md) thuộc hệ thống QCD. Kích hoạt khi được yêu cầu format, chuẩn hóa file đặc tả hoặc kiểm tra định dạng.
💍 code: QC-MDS-SKILL-ENS-FMT
🪞 title: Kỹ năng đảm bảo chuẩn hóa định dạng Markdown
🔰 type: 🧰 AI-SKILL
🚥 status: ❓ New
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-ENS-FMT
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4b", "sh1")` Kỹ năng đảm bảo chuẩn hóa định dạng Markdown `$= qc("c", "💎 K5jhuvp7vr4c", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vr3n", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr3o", "gov")` Đảm bảo các tệp Markdown trong Vault tuân thủ 100% Quy chuẩn định dạng tại **[[qmd-fbd.md]]**.
`$= qc("c", "💎 K5jhuvp7vr3p", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr3q", "acv")` Rà soát & điều phối thực thi toàn bộ các sub-skill chuẩn hóa bên dưới.

---

### 🗺️ BẢN ĐỒ THAM CHIẾU CÁC SUB-SKILLS ĐƯỢC ĐIỀU PHỐI:
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4d", "sh3")` Bản đồ tham chiếu các sub-skills được điều phối `$= qc("c", "💎 K5jhuvp7vr4e", "hd3")`</span>


| Tầng Hệ Thống | Skill Liên Quan | Nhiệm Vụ Được Điều Phối |
| :--- | :--- | :--- |
| **🛡️ Quy Tắc Gốc** | [[qmd-fbd.md]]<br>[[.agents/rules/qmd-fbd-word.md\|qmd-fbd-word]]<br>[[.agents/rules/qmd-fbd-abbr.md\|qmd-fbd-abbr]] | Quy chuẩn gốc về Emoji, Văn Phong Kỹ Thuật (WORD - Độc quyền sắc đỏ ❓) và Từ Điển Viết Tắt (ABBR). |
| **🧱 Header Metadata** | [[qmd-wfp-name]]<br>[[qmd-wfp-desc]]<br>[[qmd-wfp-id]]<br>[[qmd-wfp-code]]<br>[[qmd-wfp-title]]<br>[[qmd-wfp-type]]<br>[[qmd-wfp-status]] | Ghi & Chuẩn hóa 7 thuộc tính `name`, `description`, `🆔 id`, `💍 code`, `🪞 title`, `🔰 type` và `🚥 status`. |
| **📄 Content Body** | [[qmd-wfb-hdc]]<br>[[qmd-wfb-hdn]]<br>[[qmd-wfb-apc]]<br>[[qmd-wfb-lnk]]<br>[[qmd-wfb-ttp]] | Chuẩn hóa Dòng Tiêu đề Mã, Dòng Phụ đề Mã Kép, Cú pháp Nút Duyệt `qc("c")`, Wikilink Thân bài & HTML Text Tooltip. |
| **🛠️ Core Processing** | [[.agents/skills/qmd-ens-plg/SKILL.md\|qmd-ens-plg]]<br>[[.agents/skills/qmd-gvl-apc/SKILL.md\|qmd-gvl-apc]]<br>[[.agents/skills/qmd-ens-lnk/SKILL.md\|qmd-ens-lnk]]<br>[[.agents/skills/qmd-lnk-sqa/SKILL.md\|qmd-lnk-sqa]] | Rà soát & Cài đặt Plugins/Scripts Vault, Động cơ Sinh Mã ID Base-36, Chuẩn hóa Đường dẫn An toàn và Liên kết Đối soát Spec-QA. |

`$= qc("c", "💎 Kmtb4yf7h", "ptr")` **Danh mục quét bắt buộc**: `$= qc("c", "💎 Kmtb4yf7i", "gov")` Trước khi kết thúc mọi lượt Format, AI Agent **BẮT BUỘC** đối chiếu đủ 15 vị trí gọi hàm `qc()` tại mục `## 2. Bảng 15 Vị Trí Bắt Buộc` của skill `qmd-wfb-apc`, và in bảng đối chiếu kết quả. `$= qc("b", "💎 Kmtb4yf7j", "par")`

---

## 1. 💎 QC-MDS-SKILL-ENS-FMT-HDR
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4f", "sh2")` Khởi tạo alias siêu ngắn & khối YAML Metadata Header `$= qc("c", "💎 K5jhuvp7vr4g", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr3r", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr3s", "gov")` Đảm bảo khối YAML Header sở hữu đủ 7 thuộc tính chuẩn (`name`, `description`, `🆔 id`, `💍 code`, `🪞 title`, `🔰 type`, `🚥 status`).
`$= qc("c", "💎 K5jhuvp7vr3t", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr3u", "acv")` Rà soát & ủy quyền thực thi bộ skill `qmd-wfp-*` (bao gồm `qmd-wfp-id`) để nạp đủ 7 thuộc tính.

---

## 2. 💎 QC-MDS-SKILL-ENS-FMT-HDN
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4h", "sh2")` Chuẩn hóa dòng Tiêu đề & Phụ đề mã kép xám mờ `$= qc("c", "💎 K5jhuvp7vr4i", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr3v", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr3w", "gov")` Đảm bảo mọi Tiêu đề (`#`, `##`, `###`) đều sở hữu Phụ đề mã kép `<span style="color:#6b7280...">` chuẩn theo [[.agents/rules/qmd-fbd-hdn.md|qmd-fbd-hdn]].
`$= qc("c", "💎 K5jhuvp7vr3x", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr3y", "acv")` Rà soát & ủy quyền thực thi bộ skill `qmd-wfb-hdc` và `qmd-wfb-hdn`.

---

## 3. 💎 QC-MDS-SKILL-ENS-FMT-TBL
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4j", "sh2")` Chèn nút copy ID cho tất cả tiêu đề cột trong bảng `$= qc("c", "💎 K5jhuvp7vr4k", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr3z", "col")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr40", "gov")` Đảm bảo 100% cột trong Bảng sở hữu nút `qc("c", "💎 K...", "col")` tại vị trí tiêu đề cột.
`$= qc("c", "💎 K5jhuvp7vr41", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr42", "acv")` Rà soát & bổ sung nút copy ID `qc("c")` cho mọi cột bảng.

---

## 4. 💎 QC-MDS-SKILL-ENS-FMT-KVL
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4l", "sh2")` Chuẩn hóa nút bấm mã kép cho các dòng Key-Value `$= qc("c", "💎 K5jhuvp7vr4m", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr43", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr44", "gov")` Đảm bảo dòng Key-Value sở hữu nút `gok` cho Key và `gov`/`acv` cho Value.
`$= qc("c", "💎 K5jhuvp7vr45", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr46", "acv")` Rà soát & ủy quyền thực thi Skill [[qmd-wfb-apc/SKILL.md|qmd-wfb-apc]].

---

## 5. 💎 QC-MDS-SKILL-ENS-FMT-UNI
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4n", "sh2")` Kiểm tra tính duy nhất 100% của mã ID toàn Vault `$= qc("c", "💎 K5jhuvp7vr4o", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr47", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr48", "gov")` Đảm bảo không trùng lặp bất kỳ mã ID Base-36 nào toàn Vault.
`$= qc("c", "💎 K5jhuvp7vr49", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr4a", "acv")` Chạy đối soát pre-check mã ID qua Skill [[.agents/skills/qmd-gvl-apc/SKILL.md|qmd-gvl-apc]].

---

## 6. 💎 QC-MDS-SKILL-ENS-FMT-PAR
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra10", "sh2")` Chuẩn hóa định dạng nút duyệt khối đoạn văn qc("b") `$= qc("c", "💎 K5jhuvp7vra11", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vra12", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vra13", "gov")` Đảm bảo 100% các khối đoạn văn (Paragraphs) trong tệp sở hữu nút `qc("b", "💎 K...", "par")` ở vị trí cuối câu `.`, `!`, `:` chuẩn theo [[qmd-wfb-apc/SKILL.md|qmd-wfb-apc]].
`$= qc("c", "💎 K5jhuvp7vra14", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vra15", "acv")` Rà soát 100% các đoạn văn trong tệp, tự động chèn bổ sung mã ID Base-36 mới `qc("b", "💎 K...", "par")` cho bất kỳ đoạn văn nào còn thiếu mà không được bỏ sót.

---

## 7. 💎 QC-MDS-SKILL-ENS-FMT-HPT
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtb4yf7k", "sh2")` Chuẩn hóa nút duyệt đầu mỗi vế trong cụm phân tách `$= qc("c", "💎 Kmtb4yf7l", "hd2")`</span>


`$= qc("c", "💎 Kmtb4yf7m", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtb4yf7n", "gov")` Đảm bảo 100% các vế trong cụm phân tách bởi `:`, `!`, `->` đều sở hữu nút `qc("c", "💎 K...", "gov")` đứng trước từng vế, đúng vị trí `QC-POS-HPT` (06). `$= qc("b", "💎 Kmtb4yf7o", "par")`
`$= qc("c", "💎 Kmtb4yf7p", "ack")` **Hành động**: `$= qc("c", "💎 Kmtb4yf7q", "acv")` Rà soát mọi dòng chứa dấu phân tách vế, sinh mã ID Base-36 mới bổ sung cho từng vế còn thiếu; tuyệt đối không gộp nhiều vế vào chung một nút. `$= qc("b", "💎 Kmtb4yf7r", "par")`

---

## 8. 💎 QC-MDS-SKILL-ENS-FMT-TLC
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtb4yf7s", "sh2")` Chuẩn hóa nút chốt cuối dòng nhãn tiêu đề khối `$= qc("c", "💎 Kmtb4yf7t", "hd2")`</span>


`$= qc("c", "💎 Kmtb4yf7u", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtb4yf7v", "gov")` Đảm bảo 100% dòng nhãn tiêu đề khối độc lập (bảng `📊`, payload `📦`, ảnh minh họa) sở hữu nút chốt rollup `qc("b", "💎 K...", "par")` ở CUỐI dòng, đúng vị trí `QC-POS-TLC` (09). `$= qc("b", "💎 Kmtb4yf7w", "par")`
`$= qc("c", "💎 Kmtb4yf7x", "ack")` **Hành động**: `$= qc("c", "💎 Kmtb4yf7y", "acv")` Rà soát mọi dòng nhãn đứng ngay trên khối mã hoặc bảng, bổ sung nút chốt cuối dòng còn thiếu; nút `📊` / `📦` ở đầu dòng **không thay thế được** nút chốt này vì hai nút gánh hai phạm vi khác nhau. `$= qc("b", "💎 Kmtb4yf7z", "par")`

---

## 9. 💎 QC-MDS-SKILL-ENS-FMT-TCL
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtb4yf80", "sh2")` Chuẩn hóa nút chốt cuối ô tiêu đề cột của bảng `$= qc("c", "💎 Kmtb4yf81", "hd2")`</span>


`$= qc("c", "💎 Kmtb4yf82", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtb4yf83", "gov")` Đảm bảo 100% ô tiêu đề cột trong mọi bảng sở hữu nút chốt rollup `qc("b", "💎 K...", "par")` ở CUỐI ô, đứng cạnh nút `col` ở đầu ô, đúng vị trí `QC-POS-TCL` (11). `$= qc("b", "💎 Kmtb4yf84", "par")`
`$= qc("c", "💎 Kmtb4yf85", "ack")` **Hành động**: `$= qc("c", "💎 Kmtb4yf86", "acv")` Rà soát từng ô header của mọi bảng Markdown, bổ sung nút chốt cuối ô còn thiếu và giữ nguyên 100% mã ID của nút `col` đã tồn tại theo quy tắc Sinh Mã Tăng Dần. `$= qc("b", "💎 Kmtb4yf87", "par")`

---

## 10. 💎 QC-MDS-SKILL-ENS-FMT-TNR
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtb4yf88", "sh2")` Chuẩn hóa nút chốt sau ô số thứ tự mỗi dòng bảng `$= qc("c", "💎 Kmtb4yf89", "hd2")`</span>


`$= qc("c", "💎 Kmtb4yf8a", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtb4yf8b", "gov")` Đảm bảo 100% ô số thứ tự của mọi dòng dữ liệu sở hữu nút chốt rollup `qc("b", "💎 K...", "par")` đặt ngay sau số thứ tự, đúng vị trí `QC-POS-TNR` (13). `$= qc("b", "💎 Kmtb4yf8c", "par")`
`$= qc("c", "💎 Kmtb4yf8d", "ack")` **Hành động**: `$= qc("c", "💎 Kmtb4yf8e", "acv")` Rà soát từng dòng dữ liệu của mọi bảng, bổ sung nút chốt sau số thứ tự còn thiếu; ô đầu dòng có thể mang tiêu đề `STT`, `#`, `No.` hay `Mã` nhưng vị trí nút không đổi. `$= qc("b", "💎 Kmtb4yf8f", "par")`

---

## 11. 💎 QC-MDS-SKILL-ENS-FMT-TSB
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtd9okbe", "sh2")` Chuẩn hóa mốc đóng khối tóm tắt lỗ đen và lặp lại ID `$= qc("c", "💎 Kmtd9okbx", "hd2")`</span>


`$= qc("c", "💎 Kmtd9okce", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtd9okcv", "gov")` Đảm bảo 100% các khối tóm tắt `qc("a")` đều sở hữu mốc kết thúc bằng emoji cái lỗ đen `🕳️` đứng trước dấu backtick và lặp lại đúng mã ID của khối: `🕳️`$= qc("z", "💎 K...")``, đúng vị trí `QC-POS-TSB` (15). `$= qc("b", "💎 Kmtd9okdc", "par")`
`$= qc("c", "💎 Kmtd9okdt", "ack")` **Hành động**: `$= qc("c", "💎 Kmtd9okea", "acv")` Rà soát mọi khối `qc("a")` trong tệp, tự động chèn bổ sung emoji `🕳️` và mã ID vào thẻ đóng `qc("z")` nếu bị thiếu; tuyệt đối cấm để `qc("z")` đứng đơn độc mà không có `🕳️` hoặc thiếu ID. `$= qc("b", "💎 Kmtd9oker", "par")`
