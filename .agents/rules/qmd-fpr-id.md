---
name: qmd-fpr-id
description: Quy chuẩn thuộc tính mã định danh kim cương cấp tệp (id) trong khối YAML Header cho các tài liệu Markdown thuộc hệ thống QCD.
🆔 id: 💎 K5jhuvp7vr3l
💍 code: QC-FPR-ID
🪞 title: Quy chuẩn mã định danh ID metadata
🔰 type: 🛡️ AI-RULE
🚥 status: 🌿 Ready
---
`$= qc("c")`

# 💎 QCD-FPR-ID (Rule Quy Chuẩn Mã Định Danh ID YAML Metadata)

<span style="color:#15803d; font-weight:700;">👉 Quy định Thuộc tính 🆔 id trong khối YAML Frontmatter Header thuộc hệ thống QCD.</span>

---

## 1. 💎 QC-FPR-ID-RULS

<a id="1.1. 💎 QC-RU-FPR-ID-KEY"></a>
### 1.1. 💎 QC-RU-FPR-ID-KEY
<span style="color:#15803d; font-weight:700;">Thuộc tính 🆔 id Mã Định Danh Kim Cương Cấp Tệp</span>

🪪 **Tên**: Thuộc tính 🆔 id Mã Định Danh Cấp Tệp  
📝 **Nội dung**: Tất cả tệp Markdown **BẮT BUỘC** có thuộc tính `🆔 id:` trong khối YAML Header:
1. **Vị Trí**: `🆔 id:` đứng ngay bên dưới `description:` và NẰM PHÍA TRÊN `💍 code:` (trước `💍 code:`, `🪞 title:` và `🚥 status:`).
2. **Mã Kim Cương Base-36 Duy Nhất**: Giá trị `🆔 id:` bắt buộc có dạng mã kim cương duy nhất 100% toàn Vault (Ví dụ: `🆔 id: 💎 K5jhuvp7vr3m`).
3. **Phân Định Trách Nhiệm Tĩnh & Động**:
   - `🚥 status:` trong YAML Header **LUÔN LUÔN VÀ CHỈ DÀNH RIÊNG** cho trạng thái Tĩnh chính thức của Master Spec Document.
   - Nút `qc("c")` đầu tiên ở Dòng Phụ Đề `hdn` Cấp 1 (dưới `# 💎 QC-...`) liên kết với mã `🆔 id:` trong `.cfgs/users/<username>.json` để quản lý & hiển thị trạng thái phê duyệt ĐỘNG của Master Spec & từng User theo 3 Mode (`usermode` = 0, 1, 2).
