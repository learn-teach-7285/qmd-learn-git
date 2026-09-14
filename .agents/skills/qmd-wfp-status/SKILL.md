---
name: qmd-wfp-status
description: Tự động tính toán, ghi và cập nhật thuộc tính trạng thái cấp tệp (status) trong khối YAML Header cho các tài liệu Markdown. Kích hoạt khi ghi, thay đổi trạng thái tệp hoặc tổng hợp kiểm duyệt.
💍 code: QC-MDS-SKILL-WFP-STATUS
🪞 title: Ghi trạng thái tệp metadata
🔰 type: 🧰 AI-SKILL
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-WFP-STATUS
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrd3", "sh1")` Kỹ năng Ghi Trạng Thái Tệp (qmd-wfp-status) `$= qc("c", "💎 K5jhuvp7vrd4", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vrd5", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vrd6", "💧")` Đảm bảo khối YAML Header sở hữu thuộc tính `🚥 status:` phản ánh đúng trạng thái tự kiểm duyệt phẳng.
`$= qc("c", "💎 K5jhuvp7vrd7", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vrd8", "⛵")` Rà soát & tuân thủ 6 trạng thái phẳng tiêu chuẩn bên dưới.

---

## 1. Quy Trình Định Dạng Trạng Thái Phẳng (FLAT STATUS FORMAT)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrd9", "sh2")` Quy định định dạng trạng thái phẳng cách khoảng trắng `$= qc("c", "💎 K5jhuvp7vrda", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN ĐỊNH DẠNG TRẠNG THÁI PHẲNG (FLAT STATUS)**:
> Thuộc tính `🚥 status:` ghi tên trạng thái chính kèm mảng các thành phần được kiểm duyệt liệt kê phẳng cách khoảng trắng, gắn emoji `🌿` cho thành phần đã duyệt (xem chi tiết tại [[qmd-fpr-status.md]]):
> 
> 1. `🚥 status: ❓ New` (Mới tạo / Đang chờ thiết lập cấu hình)
> 2. `🚥 status: ❓ Pending` (Mới khởi tạo / Đang chờ xem xét)
> 3. `🚥 status: ⏳ Optimizing 🌿 name 🌿 desc` (Đang tối ưu hóa tệp, name & desc đã Pass `🌿`)
> 4. `🚥 status: ⏳ Reviewing 🌿 name 🌿 desc ❓ title` (Đang kiểm duyệt, title còn Pending `❓`)
> 5. `🚥 status: ⏳ Refining 🌿 name 🌿 desc 🌿 title` (Đang tinh chỉnh nâng cấp thân bài)
> 6. `🚥 status: 🌿 Ready` (Đã hoàn thiện 100% tất cả thành phần, sẵn sàng thực thi/vận hành!)
> 7. `🚥 status: 🚫 Rejected` (Từ chối / Cần viết lại)

---

## 2. Nguyên Tắc Bất Biến 🚥 status Master Spec (IMMUTABLE MASTER STATUS)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrdb", "sh2")` Quy định bất biến của status YAML Header `$= qc("c", "💎 K5jhuvp7vrdc", "hd2")`</span>


> [!NOTE]
> **NGUYÊN TẮC BẤT BIẾN STATUS MASTER SPEC & QUY TRÌNH GHI TỆP**:
> 1. Thuộc tính `🚥 status:` trong khối YAML Header bất luận ở bất kỳ chế độ xem nào (`usermode` = 0, 1, 2) hay đang chọn `username` nào thì **LUÔN LUÔN VÀ BẤT BIẾN** phản ánh trạng thái Tĩnh gốc của Master Spec Document. Việc chuyển đổi User hay thực hiện phê duyệt cá nhân chỉ tác động đến Động cơ Nút bấm `qc("c")` (dựa vào `🆔 id:`) và lưu trữ trong `.us/<fileId>/<username>.json`, tuyệt đối không làm biến đổi thuộc tính `🚥 status` trong tệp Markdown.
> 2. **Thao tác Duyệt Master Spec Status (`🚥 status`)**: Khi người dùng yêu cầu AI duyệt hoặc thay đổi `🚥 status` cho Master Spec, AI **BẮT BUỘC PHẢI SỬA TRỰC TIẾP VÀO KHỐI YAML HEADER CỦA TỆP MARKDOWN (.md)** bất kể `username` và `usermode` hiện tại là gì!
> 3. **Cơ chế Khôi phục An toàn (Safe Restore) trong `fullReloadSession`**: Khi nạp session khởi tạo, `ac.js` hiển thị trạng thái nạp tạm thời `⏳ Đang nạp cấu hình session...` để ép Dataview force-refresh nạp đủ môi trường `qc("c")`, tránh lỗi `ReferenceError: ac is not defined`. Sau 1.5s, `ac.js` khôi phục chính xác trạng thái Tĩnh gốc (`🌿 Ready`, `⏳ Optimizing...`, v.v.) từ `_ac_original_status_map` và tuyệt đối không reset nhầm về `❓ New`.

---

## 3. Tự Động Nhận Biết Lệnh Duyệt Cấp Tệp (FILE-LEVEL ID INFERENCE)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrdd", "sh2")` Thuật toán tự động chuyển đổi mã ID tệp sang duyệt 🚥 status `$= qc("c", "💎 K5jhuvp7vrde", "hd2")`</span>


> [!IMPORTANT]
> **QUY TẮC NHẬN BIẾT MÃ ID CẤP TỆP `🆔 id`**:
> Khi nhận lệnh duyệt chứa mã Base-36 ID (Ví dụ: `💎 K5jhuvp7vr3m .` hoặc `💎 K5jhuvp7vr3m status duyệt`), AI Agent **BẮT BUỘC**:
> 1. Kiểm tra mã ID truyền vào với thuộc tính `🆔 id:` trong YAML Header của tệp Markdown.
> 2. Nếu khớp nhau, AI Agent **MẶC ĐỊNH HIỂU VÀ THỰC THI DUYỆT TRẠNG THÁI `🚥 status:` CỦA TỆP CỤ THỂ ĐÓ** (Cập nhật `🚥 status: 🌿 Ready` trong YAML Header và cập nhật nút `qc("c")` cấp tệp tương ứng)!
