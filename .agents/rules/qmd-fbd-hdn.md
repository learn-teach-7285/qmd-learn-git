---
name: qmd-fbd-hdn
description: Quy chuẩn dòng phụ đề (Heading Description - hdn) màu xám mờ dịu mắt (#6b7280) sở hữu mã kép cho các cấp tiêu đề Markdown.
💍 code: QC-FBD-HDN
🪞 title: Quy chuẩn phụ đề mã kép Markdown
🔰 type: 🛡️ AI-RULE
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`

# 💎 QCD-FBD-HDN (Rule Quy Chuẩn Phụ Đề Mã Kép Markdown)

<span style="color:#15803d; font-weight:700;">👉 Quy định Chuẩn hóa Dòng Phụ Đề (Heading Description - hdn) màu xám mờ dịu mắt thuộc hệ thống QCD.</span>

---

## 1. 💎 QC-FBD-HDN-RULS

<a id="1.1. 💎 QC-RU-HDN-DUAL-BUTTON"></a>
### 1.1. 💎 QC-RU-HDN-DUAL-BUTTON
<span style="color:#15803d; font-weight:700;">Phụ Đề Sở Hữu Mã Kép (Biểu Tượng 🌿 / 📋) & Dòng Trống Bắt Buộc Phía Sau</span>

🪪 **Tên**: Dòng Phụ Đề Xám Mờ Dịu Mắt Mã Kép  
📝 **Nội dung**: Ngay bên dưới mỗi Tiêu đề (`#`, `##`, `###`), **BẮT BUỘC CÓ DÒNG PHỤ ĐỀ MÀU XÁM MỜ DỊU MẮT** `<span style="color:#6b7280; font-weight:700;">...</span>` sở hữu 2 Nút Duyệt / Copy Mã Kép:
- **Nút 1 (Đầu dòng Phụ đề `hdn` Key)**: `qc("c", "💎 K...", "🌿")` khi Pass (hoặc `"📋"` khi chờ duyệt `❓`) đại diện cho Dòng Phụ Đề (`hdn`).
- **Nút 2 (Cuối dòng Phụ đề trước `</span>`)**: `qc("c", "💎 K...")` đại diện kiểm duyệt cho Tiêu đề (`hdc`) phía trên.
- **Bắt buộc dòng trống phân cách**:
  1. Phải có **đúng 1 dòng trống** giữa Dòng Tiêu đề (`#`, `##`, `###`) và Dòng Phụ đề `<span ...>` ngay bên dưới để tránh lỗi gộp Markdown Header làm ẩn/hỏng nút.
  2. Phải có **đúng 2 dòng trống** ngay sau thẻ đóng `</span>` của dòng phụ đề trước khi bắt đầu nội dung tiếp theo.

---

<a id="1.2. 💎 QC-RU-HDN-NO-REDUNDANT-STT"></a>
### 1.2. 💎 QC-RU-HDN-NO-REDUNDANT-STT
<span style="color:#15803d; font-weight:700;">Không Lặp Lại Số Thứ Tự Trong Dòng Phụ Đề (No Redundant STT)</span>

🪪 **Tên**: Cắt Bỏ Số Thứ Tự Trùng Lặp Trong Phụ Đề  
📝 **Nội dung**: Nếu Tiêu đề chính (`#`, `##`, `###`) phía trên đã sở hữu Số thứ tự (ví dụ `## 1. 💎 QC-...`), dòng Phụ đề `hdn` bên dưới **TUYỆT ĐỐI KHÔNG LẶP LẠI SỐ THỨ TỰ** `1.`, `2.`, `3.`. Phụ đề viết trực tiếp tên tiêu đề nghiệp vụ để loại bỏ dư thừa.

---

<a id="1.3. 💎 QC-RU-HDN-SENTENCE-CASE"></a>
### 1.3. 💎 QC-RU-HDN-SENTENCE-CASE
<span style="color:#15803d; font-weight:700;">Quy Chuẩn Viết Hoa Đầu Câu Cho Dòng Phụ Đề (Sentence Case Standard)</span>

🪪 **Tên**: Chuẩn Viết Hoa Sentence Case Cho Dòng Phụ Đề  
📝 **Nội dung**: Dòng phụ đề `hdn` **BẮT BUỘC** tuân thủ quy chuẩn viết hoa đầu câu (Sentence Case):
- **Chỉ viết hoa chữ cái đầu câu**: Toàn bộ các từ còn lại trong câu đều viết thường để mắt người đọc lướt mượt mà, tự nhiên và thanh thoát.
- **Tuyệt đối cấm Title Case**: Không viết hoa chữ cái đầu của từng từ (như `Kiến Trúc Đa Người Dùng & Vai Trò Master a2u`).
- **Ngoại lệ danh từ kỹ thuật**: Chỉ được phép viết hoa các danh từ riêng, thuật ngữ viết tắt hoặc định danh kỹ thuật hệ thống (ví dụ: `a2u`, `Vault`, `QMD`, `API`, `DB`, `JSON`, `QC_ID`).

