---
name: qmd-fbd-word
description: Quy chuẩn văn phong kỹ thuật, ngôn ngữ đặc tả và quy tắc viết cấu trúc nội dung thuộc hệ thống QCD.
💍 code: QC-FBD-WORD
🪞 title: Quy chuẩn văn phong & ngôn ngữ đặc tả
🔰 type: 🛡️ AI-RULE
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`

# 💎 QCD-FBD-WORD (Rule Quy Chuẩn Văn Phong & Ngôn Ngữ Đặc Tả)

<span style="color:#15803d; font-weight:700;">👉 Quy định Chuẩn hóa Văn Phong Kỹ Thật, Ngôn Ngữ Đặc Tả & Quy Tắc Viết Cầu Trúc Nội Dung thuộc hệ thống QCD.</span>

---

## 1. 💎 QC-FBD-WORD-RULS

<a id="1.1. 💎 QC-RU-WORD-DECOUPLED"></a>
### 1.1. 💎 QC-RU-WORD-DECOUPLED
<span style="color:#15803d; font-weight:700;">Khử Phụ Thuộc Tên Skill & Tệp Trong Thân Bài (Self-Decoupled Reference)</span>

🪪 **Tên**: Quy tắc Khử Phụ Thuộc Tên Skill & Tệp  
📝 **Nội dung**: Trong đoạn văn bản mở đầu giới thiệu của các tệp Kỹ năng (`SKILL.md`), **NGHIÊM CẤM** viết cứng tên kỹ năng (ví dụ: `Kỹ năng qmd-ens-plg...`). **BẮT BUỘC** sử dụng cụm từ trung tính **`Kỹ năng này`** hoặc **`Tài liệu này`** để đảm bảo tính an toàn 100% khi tái cấu trúc (refactor) hoặc đổi tên thư mục/tệp.

---

<a id="1.2. 💎 QC-RU-WORD-CONCISE"></a>
### 1.2. 💎 QC-RU-WORD-CONCISE
<span style="color:#15803d; font-weight:700;">Ngắn Gọn, Súc Tích & Không Trùng Lặp Từ Ngữ (Concise Wording)</span>

🪪 **Tên**: Quy tắc Ngắn Gọn & Tránh Trùng Lặp Từ Mượn  
📝 **Nội dung**: 
- Loại bỏ triệt để các từ ngữ thừa thãi (ví dụ: ưu tiên dùng "cài" thay cho "cài đặt", dùng "chuẩn bị Vault" thay cho "setup Vault").
- Tuyệt đối không lặp lại 2 từ có cùng ngữ nghĩa trong một câu (ví dụ: cấm viết "cài đặt và setup").

---

<a id="1.3. 💎 QC-RU-WORD-SENTENCE-CASE"></a>
### 1.3. 💎 QC-RU-WORD-SENTENCE-CASE
<span style="color:#15803d; font-weight:700;">Viết Hoa Tiêu Đề Tiếng Việt Dạng Sentence Case</span>

🪪 **Tên**: Quy tắc Viết Hoa Tiêu Đề Dạng Sentence Case  
📝 **Nội dung**: Thuộc tính `🪞 title:` trong khối YAML Header **BẮT BUỘC** viết bằng Tiếng Việt thuần túy dạng **Sentence case** (chỉ viết hoa chữ cái đầu câu, giữ nguyên hoa chữ đầu cho Tên riêng/Thuật ngữ kỹ thuật như `Obsidian Plugin`, `AI-SESS`, `Dataview`, `Markdown`, `Vault`).

---

<a id="1.4. 💎 QC-RU-WORD-DELEGATION"></a>
### 1.4. 💎 QC-RU-WORD-DELEGATION
<span style="color:#15803d; font-weight:700;">Ủy Quyền Thực Thi & Tránh Lặp Chi Tiết Kỹ Thuật (Delegation & DRY)</span>

🪪 **Tên**: Quy tắc Ủy Quyền Thực Thi & Không Lặp Chi Tiết  
📝 **Nội dung**: Tệp Kỹ năng Master khi nhắc tới công việc của Sub-skill chuyên trách **NGHIÊM CẤM** lặp lại chi tiết các tham số JSON/Settings kỹ thuật. Bắt buộc dùng câu lệnh **Ủy quyền thực thi** trỏ Wikilink sang Sub-skill con xử lý.

---

<a id="1.5. 💎 QC-RU-WORD-GOAL-VS-TASK"></a>
### 1.5. 💎 QC-RU-WORD-GOAL-VS-TASK
<span style="color:#15803d; font-weight:700;">Phân Tách Cờ Cụm Văn Phong Mục Tiêu (`🎯`) vs Hành Động (`📌`)</span>

🪪 **Tên**: Quy Tắc Phân Tách Cờ Mục Tiêu (Spec Goal) & Hành Động (Task Action)  
📝 **Nội dung**: 
- **Mục tiêu (`🎯 Mục tiêu:`)**: Dùng động từ *"Đảm bảo..."* hoặc *"Yêu cầu..."* để định nghĩa Trạng thái mong muốn (Desired State). Đây là cờ dữ liệu được trích xuất tự động sang **Bảng Nghiệm Thu QA (`🌿 AI-NT`)**.
- **Hành động (`📌 Hành động:`)**: Dùng động từ *"Kiểm tra..."*, *"Cài..."*, *"Khởi tạo..."* để định nghĩa Thao tác thực thi. Đây là cờ dữ liệu được trích xuất tự động sang **Kế Hoạch Thi Công (`📌 AI-TASK`)**.

---

<a id="1.6. 💎 QC-RU-WORD-TEXT-TOOLTIP"></a>
### 1.6. 💎 QC-RU-WORD-TEXT-TOOLTIP
<span style="color:#15803d; font-weight:700;">Chèn Bong Bóng Hướng Dẫn Kỹ Thuật Ẩn (HTML Text Tooltip)</span>

🪪 **Tên**: Bong Bóng Hướng Dẫn Gạch Chân Chấm Mờ Dịu Mắt  
📝 **Nội dung**: Để giữ cho câu văn Markdown siêu ngắn gọn mà vẫn cung cấp 100% đường dẫn file và key JSON kỹ thuật cho AI Agent / Người đọc, **BẮT BUỘC** bọc các thuật ngữ kỹ thuật trong thẻ `<span title="..." style="border-bottom:1px dotted #9ca3af; cursor:help;">...</span>`.

---

<a id="1.7. 💎 QC-RU-WORD-RED-FOCUS"></a>
### 1.7. 💎 QC-RU-WORD-RED-FOCUS
<span style="color:#15803d; font-weight:700;">Hạn Chế Emoji Sắc Đỏ & Giữ Độc Quyền Sắc Đỏ Cho Nút Chờ Duyệt (`❓`)</span>

🪪 **Tên**: Quy Tắc Độc Quyền Sắc Đỏ Cho Tín Hiệu Chờ Duyệt  
📝 **Nội dung**: Hạn chế tối đa việc sử dụng các Emoji mang sắc đỏ ngẫu nhiên (ví dụ: `🚨`, `❌`, `🔴`, `🛑`...) trong thân bài. **GIỮ MÀU ĐỎ ĐỘC QUYỀN DUY NHẤT CHO NÚT BẤM CHỜ DUYỆT (`❓`)** để đảm bảo 100% năng lượng thị giác của người đọc tập trung tuyệt đối vào các mục chưa duyệt!

---

<a id="1.8. 💎 QC-RU-WORD-HIERARCHICAL-DEDUP"></a>
### 1.8. 💎 QC-RU-WORD-HIERARCHICAL-DEDUP
<span style="color:#15803d; font-weight:700;">Khử Trùng Lặp Danh Từ Trong Chuỗi Phân Cấp (Hierarchical Deduplication: A > B)</span>

🪪 **Tên**: Quy tắc Khử Trùng Lặp Phân Cấp  
📝 **Nội dung**: Trong các chuỗi phân cấp dạng `[Phạm vi / Ngữ cảnh] > [Vị trí chi tiết]`, **TUYỆT ĐỐI KHÔNG lặp lại cùng một danh từ** ở cả hai vế (Ví dụ: CẤM viết `Cụm nhiều phần > Đầu mỗi phần`, BẮT BUỘC viết `Cụm vế > Đầu mỗi` hoặc `Cụm từ > Đầu mỗi phần`).

---

<a id="1.9. 💎 QC-RU-WORD-CROSS-COLUMN-DRY"></a>
### 1.9. 💎 QC-RU-WORD-CROSS-COLUMN-DRY
<span style="color:#15803d; font-weight:700;">Đơn Nhiệm Cột Bảng & Khử Thừa Chéo (Cross-Column Zero-Redundancy in Tables)</span>

🪪 **Tên**: Quy tắc Đơn Nhiệm Cột Bảng & Khử Thừa Chéo  
📝 **Nội dung**: Mỗi cột trong bảng Markdown chịu một trách nhiệm thông tin duy nhất (Single Responsibility). Cột sau **NGHIÊM CẤM lặp lại** chủ thể, vị trí hoặc hành động đã được định nghĩa ở các cột phía trước. Cột `GHI CHÚ` chỉ tập trung vào **điều kiện đặc thù, quy ước phân tách hoặc ngoại lệ** (Ví dụ: Khi cột Vị trí đã ghi `Cụm vế > Đầu mỗi`, cột Ghi chú chỉ ghi `Các vế phân tách bởi (':', '!', '->')`, CẤM lặp lại `Trước mỗi...` hay `Đầu mỗi...`).

---

<a id="1.10. 💎 QC-RU-WORD-CONCISE-LEXICON"></a>
### 1.10. 💎 QC-RU-WORD-CONCISE-LEXICON
<span style="color:#15803d; font-weight:700;">Từ Điển Rút Gọn Văn Phong Kỹ Thuật Tinh Gọn (Concise Technical Lexicon)</span>

🪪 **Tên**: Quy tắc Tối Giản Hóa Cụm Từ Kỹ Thuật  
📝 **Nội dung**: Bắt buộc chuyển đổi các cụm từ hành chính/mô tả dài dòng sang cụm từ kỹ thuật cô đọng:
- Thay `ngăn cách bởi dấu phân tách` $\rightarrow$ `phân tách bởi`.
- Thay `ở vị trí đầu của mỗi` / `trước mỗi` $\rightarrow$ `đầu mỗi` / `trước từng`.
- Thay `dùng để làm điểm kiểm duyệt cho` $\rightarrow$ `điểm kiểm duyệt`.
- Thay `cài đặt và cấu hình` $\rightarrow$ `cài & cấu hình`.
- Thay `thực hiện kiểm tra tính hợp lệ của` $\rightarrow$ `kiểm tra hợp lệ`.

