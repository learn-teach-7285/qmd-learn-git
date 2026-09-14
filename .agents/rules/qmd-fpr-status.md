---
name: qmd-fpr-status
description: Quy chuẩn thuộc tính trạng thái cấp tệp (status) trong khối YAML Header cho các tài liệu Markdown thuộc hệ thống QCD.
💍 code: QC-FPR-STATUS
🪞 title: Quy chuẩn trạng thái tệp metadata
🔰 type: 🛡️ AI-RULE
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`

# 💎 QCD-FPR-STATUS (Rule Quy Chuẩn Trạng Thái Tệp YAML Metadata)

<span style="color:#15803d; font-weight:700;">👉 Quy định Thuộc tính 🚥 status trong khối YAML Frontmatter Header thuộc hệ thống QCD.</span>

---

## 1. 💎 QC-FPR-STATUS-RULS

<a id="1.1. 💎 QC-RU-FPR-STATUS-VAL"></a>
### 1.1. 💎 QC-RU-FPR-STATUS-VAL
<span style="color:#15803d; font-weight:700;">Bộ Trạng Thái Tiêu Chuẩn & Cấu Trúc Trực Quan Cho 🚥 status</span>

🪪 **Tên**: Thuộc tính 🚥 status Trạng thái Cấp Tệp  
📝 **Nội dung**: Thuộc tính `🚥 status:` trong khối YAML Header **BẮT BUỘC** sử dụng mảng trạng thái phẳng trực quan kèm emoji:

- `🚥 status: ❓ New` (Mới tạo / Đang chờ thiết lập cấu hình)
- `🚥 status: ❓ Pending` (Mới khởi tạo / Đang chờ xem xét)
- `🚥 status: ⏳ Optimizing 🌿 name 🌿 desc` (Đang tối ưu hóa tệp, name & desc đã Pass `🌿`)
- `🚥 status: ⏳ Reviewing 🌿 name 🌿 desc ❓ title` (Đang kiểm duyệt, title còn Pending `❓`)
- `🚥 status: ⏳ Refining 🌿 name 🌿 desc 🌿 title` (Đang tinh chỉnh nâng cấp thân bài)
- `🚥 status: 🌿 Ready` (Đã hoàn thiện 100% tất cả thành phần, sẵn sàng thực thi/vận hành!)
- `🚥 status: 🚫 Rejected` (Từ chối / Cần viết lại)

---

<a id="1.2. 💎 QC-RU-FPR-STATUS-COMPONENTS"></a>
### 1.2. 💎 QC-RU-FPR-STATUS-COMPONENTS
<span style="color:#15803d; font-weight:700;">Danh Mục Ký Hiệu Emoji Thành Phần Đã Duyệt Trong Giai Đoạn ⏳</span>

🪪 **Tên**: Gắn Emoji Trạng Thái Phẳng Trực Quan  
📝 **Nội dung**: Trong giai đoạn đang tối ưu/tinh chỉnh (`⏳`), các thành phần đã hoàn thiện được gắn emoji `🌿` phía trước:
- **`🌿 name`**: Đã duyệt thuộc tính Tên Định Danh `name:`
- **`🌿 desc`**: Đã duyệt thuộc tính Mô tả Routing `description:`
- **`🌿 title`**: Đã duyệt thuộc tính Tiêu đề `🪞 title:`
- **`🌿 code`**: Đã kiểm duyệt thuộc tính Mã Định Danh `💍 code:`
- **`🌿 body`**: Đã kiểm duyệt toàn bộ Thân bài

---

<a id="1.3. 💎 QC-RU-FPR-STATUS-SEPARATION"></a>
### 1.3. 💎 QC-RU-FPR-STATUS-SEPARATION
<span style="color:#15803d; font-weight:700;">Phân Định Trách Nhiệm Giữa YAML 🚥 status Tĩnh Và Nút Duyệt Cấp Tệp qc("c") Động</span>

🪪 **Tên**: Nguyên Tắc Phân Định Trạng Thái Tĩnh & Động Cấp Tệp  
📝 **Nội dung**:
1. **YAML Frontmatter `🚥 status:` (Dữ Liệu Tĩnh Master Spec)**: Thuộc tính `🚥 status:` trong khối YAML Header **LUÔN LUÔN VÀ CHỈ DÀNH RIÊNG** để phản ánh trạng thái chính thức của Master Spec Document (Ví dụ: `🚥 status: 🌿 Ready` hoặc `🚥 status: ❓ New`). Không bao giờ bị sửa hay ghi đè bởi User Approval.
2. **YAML Frontmatter `🆔 id:` (Mã ID Cấp Tệp Duy Nhất)**: Thuộc tính `🆔 id:` đứng ngay trên `💍 code:` trong YAML Header chứa mã Base-36 cấp tệp (Ví dụ: `🆔 id: 💎 K5jhuvp7vr3m`).
3. **Nút Sub-heading `hdn` Cấp 1 (`qc("c")`) (Động Cơ Duyệt Động 3 Mode)**: Nút DataviewJS `qc("c", "💎 K...")` đầu tiên ở Dòng Phụ Đề dưới Tiêu đề Cấp 1 (`# 💎 QC-...`) liên kết với mã `🆔 id:` để quản lý & hiển thị trạng thái phê duyệt ĐỘNG của Master Spec & từng User theo 3 Mode (`usermode` = 0, 1, 2).
4. **Cơ Chế Hiển Thị Trạng Thái Nạp Tạm Thời (`⏳ Đang nạp cấu hình session...`) & Khôi Phục An Toàn (Safe Restore)**: Khi nạp hoặc chuyển đổi session, script `ac.js` tạm thời gán `🚥 status: ⏳ Đang nạp cấu hình session...` để ép Dataview force-refresh bind đủ hàm `qc("c")`, tránh lỗi `ReferenceError: ac is not defined`. Sau 1.5s, script **BẮT BUỘC KHÔI PHỤC CHÍNH XÁC** trạng thái Tĩnh gốc (`🌿 Ready`, `⏳ Optimizing...`, v.v.) từ RAM đệm `_ac_original_status_map`. Tuyệt đối **KHÔNG ĐƯỢC RESET VỀ `❓ New`** nếu lỡ thiếu đệm RAM.

---

<a id="1.4. 💎 QC-RU-FPR-STATUS-INFERENCE"></a>
### 1.4. 💎 QC-RU-FPR-STATUS-INFERENCE
<span style="color:#15803d; font-weight:700;">Tự Động Nhận Biết Lệnh Duyệt Status Cho Mã ID Cấp Tệp (🆔 id)</span>

🪪 **Tên**: Thuật Toán Suy Luận Duyệt Status Cấp Tệp  
📝 **Nội dung**: Khi nhận lệnh duyệt trong chat chứa mã Base-36 ID (Ví dụ: `💎 K5jhuvp7vr3m .` hoặc `💎 K5jhuvp7vr3m status duyệt`), AI Agent **BẮT BUỘC KHÓA VÀO THUẬT TOÁN**:
1. Nếu mã ID truyền vào trùng khớp với mã ID tại thuộc tính `🆔 id:` trong YAML Header của tệp Markdown mục tiêu:
2. AI Agent **MẶC ĐỊNH HIỂU VÀ THỰC THI DUYỆT TRẠNG THÁI `🚥 status:` CỦA TỆP DÓ** (cập nhật `🚥 status: 🌿 Ready` trong khối YAML Header), đồng thời cập nhật nút duyệt `qc("c", "💎 K...")` tương ứng!
