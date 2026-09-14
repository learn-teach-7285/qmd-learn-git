---
name: qmd-wfp-id
description: Tự động phân loại, ghi và cập nhật thuộc tính mã định danh kim cương cấp tệp (id) trong khối YAML Header cho các tài liệu Markdown. Kích hoạt khi ghi mã ID tệp hoặc khởi tạo tài liệu mới.
🆔 id: 💎 K5jhuvp7vrcm
💍 code: QC-MDS-SKILL-WFP-ID
🪞 title: Ghi mã định danh ID tệp metadata
🔰 type: 🧰 AI-SKILL
🚥 status: 🌿 Ready
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-WFP-ID
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrcn", "sh1")` Kỹ năng Ghi Mã Định Danh ID Tệp (qmd-wfp-id) `$= qc("c", "💎 K5jhuvp7vrco", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vrcp", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vrcq", "💧")` Đảm bảo khối YAML Header sở hữu thuộc tính `🆔 id:` chứa mã kim cương Base-36 định danh duy nhất cho toàn bộ tài liệu tệp Markdown.
`$= qc("c", "💎 K5jhuvp7vrcr", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vrcs", "⛵")` Rà soát & tuân thủ 3 quy định vị trí và định dạng thuộc tính `🆔 id` bên dưới.

---

## 1. Quy Tắc Ghi Thuộc Tính ID Tệp (PROPERTY ID RULES)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrct", "sh2")` Quy định quy tắc ghi thuộc tính ID trong YAML Frontmatter `$= qc("c", "💎 K5jhuvp7vrcu", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN GHI THUỘC TÍNH `🆔 id`**:
> 1. **Vị Trí**: `🆔 id:` đứng ở vị trí ngay bên dưới `description:` và NẰM PHÍA TRÊN `💍 code:` trong khối YAML Header (trước `💍 code:`, `🪞 title:` và `🚥 status:`).
> 2. **Bắt Buộc Mã Kim Cương Base-36**: Giá trị `🆔 id:` bắt buộc có dạng mã kim cương duy nhất 100% toàn Vault (Ví dụ: `🆔 id: 💎 K5jhuvp7vr3m`).
> 3. **Phê Duyệt Trạng Thái Cấp Tệp**: Mã ID này liên kết trực tiếp với trạng thái phê duyệt cá nhân của từng User trong tệp cấu hình `.us/<fileId>/<username>.json`, cho phép hiển thị chính xác trạng thái `🚥 status` theo 3 Chế độ (Mode 0: Master Spec, Mode 1: User Approval Mode, Mode 2: Comparison Mode ⚖️).
