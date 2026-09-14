---
name: qmd-fpr-name
description: Quy chuẩn thuộc tính tên hiển thị (name) trong khối YAML Header cho các tài liệu Markdown thuộc hệ thống QCD.
💍 code: QC-FPR-NAME
🪞 title: Quy chuẩn tên tệp hiển thị metadata
🔰 type: 🛡️ AI-RULE
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`

# 💎 QCD-FPR-NAME (Rule Quy Chuẩn Tên Tệp Hiển Thị YAML Metadata)

<span style="color:#15803d; font-weight:700;">👉 Quy định Thuộc tính name trong khối YAML Frontmatter Header thuộc hệ thống QCD.</span>

---

## 1. 💎 QC-FPR-NAME-RULS

<a id="1.1. 💎 QC-RU-FPR-NAME-KEY"></a>
### 1.1. 💎 QC-RU-FPR-NAME-KEY
<span style="color:#15803d; font-weight:700;">Thuộc tính name Khớp 100% Với Tên Tệp Basename (Không Bao Gồm .md)</span>

🪪 **Tên**: Thuộc tính name Tên Tệp Basename  
📝 **Nội dung**: Tất cả tệp Markdown **BẮT BUỘC** có thuộc tính `name:` ở vị trí dòng đầu tiên ngay bên dưới thẻ mở `---` trong khối YAML Header:
1. **Quy tắc 1-đối-1 Basename**: Giá trị `name:` **BẮT BUỘC KHỚP 100% VỚI TÊN TỆP (FILE BASENAME)** loại bỏ phần mở rộng `.md`.
2. **Ví dụ**:
   - Tệp `qmd-fbd-apc.md` ➔ `name: qmd-fbd-apc`
   - Tệp `04 ⛵ HH-KQ-XB.md` ➔ `name: 04 ⛵ HH-KQ-XB`
   - Tệp `SKILL.md` trong thư mục `qmd-wfp-name/` ➔ `name: qmd-wfp-name` (Lấy theo tên Kỹ năng thư mục cha).
