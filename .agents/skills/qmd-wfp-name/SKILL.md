---
name: qmd-wfp-name
description: Tự động phân loại, ghi và cập nhật thuộc tính tên hiển thị (name) trong khối YAML Header cho các tài liệu Markdown. Kích hoạt khi phân loại tệp hoặc khởi tạo tài liệu mới.
💍 code: QC-MDS-SKILL-WFP-NAME
🪞 title: Ghi tên tệp hiển thị metadata
🔰 type: 🧰 AI-SKILL
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-WFP-NAME
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrcv", "sh1")` Kỹ năng Ghi Tên Tệp Hiển Thị (qmd-wfp-name) `$= qc("c", "💎 K5jhuvp7vrcw", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vrcx", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vrcy", "💧")` Đảm bảo khối YAML Header sở hữu thuộc tính `name:` trùng khớp 100% tên tệp Basename hoặc tên thư mục Skill.
`$= qc("c", "💎 K5jhuvp7vrcz", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vrd0", "⛵")` Rà soát & tuân thủ 3 quy định vị trí và định dạng thuộc tính `name` bên dưới.

---

## 1. Quy Trắc Ghi Thuộc Tính Name (PROPERTY NAME RULES)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrd1", "sh2")` Quy định quy tắc ghi thuộc tính name trong YAML Frontmatter `$= qc("c", "💎 K5jhuvp7vrd2", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN GHI THUỘC TÍNH `name`**:
> 1. **Vị Trí Dòng Đầu**: `name:` bắt buộc đứng ở vị trí dòng đầu tiên ngay dưới thẻ mở `---` của YAML Header.
> 2. **Khớp 100% Tên Tệp Basename**: Giá trị `name:` bắt buộc lấy nguyên văn tên tệp (File Basename) bỏ phần mở rộng `.md`.
> 3. **Đối với Tệp SKILL (`SKILL.md`)**: Lấy tên thư mục cha chứa file (Ví dụ: `name: qmd-wfp-name`).
