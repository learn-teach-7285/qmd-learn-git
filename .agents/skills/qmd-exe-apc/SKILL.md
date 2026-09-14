---
name: qmd-exe-apc
description: Kích hoạt khi thực hiện phê duyệt, hủy duyệt, duyệt dải mã ID Base-36 và sinh mã phiên bản Base-36 V...
🆔 id: 💎 K5jhuvp7vr7x
💍 code: QC-MDS-SKILL-EXE-APC
🪞 title: Kỹ năng thực thi phê duyệt & quản trị phiên bản mã ID qc("c")
🔰 type: 🧰 AI-SKILL
🚥 status: ❓ Pending
---
`$= qc("c")`

# 💎 QC-MDS-SKILL-EXE-APC

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr7k", "sh1")` Kỹ năng thực thi phê duyệt & quản trị phiên bản mã ID DataviewJS `$= qc("c", "💎 K5jhuvp7vr7l", "hd1")`</span>


`$= qc("a", "💎 K5jhuxit4yka", "Khối tóm tắt", "blk")`

`$= qc("c", "💎 K5jhuvp7vr7t", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr7u", "💧")` Tiêu chuẩn hóa 100% quy trình xử lý câu lệnh phê duyệt, hủy duyệt, duyệt dải mã ID Base-36 và tự động cập nhật mã phiên bản `💎 V...`.
`$= qc("c", "💎 K5jhuvp7vr7v", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr7w", "⛵")` Tự động nhận diện cú pháp câu lệnh chat và thực thi cập nhật trạng thái tệp `.md` hoặc tệp `.us/<fileId>/<username>.json`.

🕳️`$= qc("z", "💎 K5jhuxit4yka")`

---

## 1. 💎 QC-MDS-SKILL-EXE-APC-SINGLE-PASS

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr7m", "sh2")` Quy trình thực thi Phê Duyệt Đơn `$= qc("c", "💎 K5jhuvp7vr6l", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr6m", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr6n", "💧")` Phê duyệt chính xác 1 mục giá trị mã ID được chỉ định.
`$= qc("c", "💎 K5jhuvp7vr6o", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr6p", "⛵")` Nhận diện câu lệnh `duyệt 💎 K...` hoặc `💎 K... .` (có dấu chấm ở cuối), ghi nhận trạng thái `x: "y"` trong kho lưu trữ `.us/<fileId>/a2u.json` (hoặc `{username}.json`). Không sửa đổi cú pháp 3 tham số `qc("c", "💎 K...", "type")` trong tệp `.md`.

---

## 2. 💎 QC-MDS-SKILL-EXE-APC-SINGLE-REVOKE

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr7n", "sh2")` Quy trình thực thi Hủy Duyệt Đơn `$= qc("c", "💎 K5jhuvp7vr6q", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr6r", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr6s", "💧")` Hủy duyệt 1 mục giá trị mã ID để quay về trạng thái chờ rà soát.
`$= qc("c", "💎 K5jhuvp7vr6t", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr6u", "⛵")` Nhận diện câu lệnh `hủy duyệt 💎 K...`, cập nhật trạng thái `x: false` (hoặc xóa key) trong kho `.us/.../a2u.json` (hoặc `{username}.json`), triệt tiêu hoàn toàn state deadlock. Không sửa tệp `.md`.

---

## 3. 💎 QC-MDS-SKILL-EXE-APC-RANGE-PASS

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr7o", "sh2")` Quy trình thực thi Phê Duyệt Hàng Loạt Theo Dải `$= qc("c", "💎 K5jhuvp7vr6v", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr6w", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr6x", "💧")` Duyệt nhanh toàn bộ các nút bấm nằm trong phạm vi từ nút bắt đầu đến nút kết thúc.
`$= qc("c", "💎 K5jhuvp7vr6y", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr6z", "⛵")` Nhận diện câu lệnh `💎 Kstart ... 💎 Kend`, xác định tất cả các nút `qc("c")` và `qc("b")` trong phạm vi dòng và ghi nhận phê duyệt `x: "y"` đồng loạt vào kho `.us/<fileId>/a2u.json` (hoặc `{username}.json`).

---

## 4. 💎 QC-MDS-SKILL-EXE-APC-MODE-ROUTING

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr7p", "sh2")` Quy định phân luồng lưu trữ theo Usermode `$= qc("c", "💎 K5jhuvp7vr70", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr71", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr72", "gov")` Đảm bảo lưu trữ đúng mục tiêu (kho Master `a2u.json` hay kho User `{username}.json`) tránh sửa nhầm.
`$= qc("c", "💎 K5jhuvp7vr73", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr74", "acv")` Trước mọi thao tác duyệt, AI **BẮT BUỘC đọc tệp `.a21/jv/ses.json` của Vault**: Khi `usermode === 0` (Master Spec Mode) ghi vào kho `.us/<fileId>/a2u.json`. Khi `usermode === 1/2` (User Spec Mode), AI ghi vào `.us/<fileId>/<username>.json`. Tuyệt đối không sửa đè file `.md`.

---

## 5. 💎 QC-MDS-SKILL-EXE-APC-SUMMARY-OUTPUT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr7q", "sh2")` Quy chuẩn báo cáo chi tiết phê duyệt `$= qc("c", "💎 K5jhuvp7vr75", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr76", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr77", "💧")` Hiển thị đầy đủ chế độ duyệt usermode và tên người duyệt username trong kết quả chat.
`$= qc("c", "💎 K5jhuvp7vr78", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr79", "⛵")` Khi phản hồi kết quả phê duyệt, AI **BẮT BUỘC** hiển thị rõ ràng: `Chế Độ Duyệt (Usermode)` (`Mode 0 (Master Spec)` hoặc `Mode 1/2 (User Spec)`) và `Người Duyệt (Username)` (`Master` nếu usermode === 0, hoặc tên username cụ thể nếu usermode === 1/2).

---

## 6. 💎 QC-MDS-SKILL-EXE-APC-WORDING-ANALYSIS

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr7s", "sh2")` Quy định xử lý prompt dán mã thuần Rà soát & Tối ưu câu từ `$= qc("c", "💎 K5jhuvp7vr7f", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr7g", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr7h", "💧")` Phân biệt rõ ràng giữa câu lệnh phê duyệt thực thi và yêu cầu rà soát tối ưu diễn đạt.
`$= qc("c", "💎 K5jhuvp7vr7i", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr7j", "⛵")` Khi nhận prompt dán mã thuần `💎 K...` (không có dấu chấm `.`, không có từ `duyệt`), AI **TUYỆT ĐỐI KHÔNG DUYỆT** mà tự động kích hoạt quy trình Rà soát câu từ, đánh giá chuẩn hóa theo `qmd-wfb` và gợi ý cú pháp phê duyệt cho người dùng.

---

## 7. 💎 QC-MDS-SKILL-EXE-APC-AB-DUAL-EXEC

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra16", "sh2")` Quy định thực thi đồng bộ hàm qc("b") cấp khối đoạn văn `$= qc("c", "💎 K5jhuvp7vra17", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vra18", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vra19", "gov")` Đảm bảo quy trình phê duyệt, hủy duyệt, duyệt dải chat xử lý đồng bộ 100% đối với cả 2 hàm `qc("c")` (Approve Code) VÀ `qc("b")` (Approve Block).
`$= qc("c", "💎 K5jhuvp7vra20", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vra21", "acv")` Khi quét lệnh chat `💎 K... .` hoặc dải `💎 Kstart ... 💎 Kend`, AI Agent nhận diện và cập nhật trạng thái phê duyệt trong kho JSON bình đẳng cho cả nút `qc("c")` và nút `qc("b")`.

---

## 8. 💎 QC-MDS-SKILL-EXE-APC-SOFT-RESET-ON-EDIT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhv1nniz03", "sh2")` Quy trình tự động Cập nhật Phiên bản, Lưu Lịch sử Duyệt Cuối & Soft Reset Trạng thái Duyệt Đa Người Dùng `$= qc("c", "💎 K5jhv1nniz0h", "hd2")`</span>


`$= qc("c", "💎 K5jhv1nniz0r", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhv1nniz11", "gov")` Đảm bảo mọi thay đổi nội dung đặc tả đều tự động đọc lại storage từ đĩa để bắt kịp click duyệt của người dùng, lưu lại snapshot phiên bản vào `.qmd/gb/<fileId>/h.json`, chuyển `item.x = false` trong `.qmd/us/<fileId>/a2u.json` để kích hoạt biểu tượng sao chổi `☄️` Outdated an toàn cho 100% người dùng, chỉ nhắm đúng các mã bị sửa và bảo toàn nguyên vẹn phê duyệt của các mã khác.
`$= qc("c", "💎 K5jhv1nniz1b", "ack")` **Hành động**: `$= qc("c", "💎 K5jhv1nniz1l", "acv")` Khi chỉnh sửa nội dung mục `💎 K...`, AI Agent BẮT BUỘC thực thi theo đúng Trình tự Storage-First: **(1) Re-Read Kho Storage từ Ổ Đĩa Trước**: Trước khi chỉnh sửa `.md`, Agent BẮT BUỘC dùng `view_file` đọc tệp `.qmd/us/<fileId>/a2u.json` trực tiếp từ ổ đĩa để nạp trạng thái duyệt thời gian thực mới nhất mà User vừa click; **(2) Ghi Kho Storage Trước (Chỉ Định Danh, Đa Người Dùng, Lưu Snapshot vào `h.json` & Đặt `x = false` trong `a2u.json`)**: Agent CHỈ ĐƯỢC PHÉP tác động lên đúng các mã `💎 K...` vừa có nội dung bị chỉnh sửa trong phiên chat (tuyệt đối không reset các mã khác). Trong `.qmd/us/.../a2u.json`, mỗi khóa là một mảng `Array<ScopeItem>` `[ { c, s, x, v } ]`. Với mỗi phần tử User/Scope đã từng duyệt (`item.x === "y"` hoặc `item.x === true`), Agent BẮT BUỘC lưu snapshot lịch sử vào `.qmd/gb/<fileId>/h.json` dưới dạng `h[kid][oldVer] = { t: oldText, ts: timestamp, u: user }` và ghi nhận phiên bản mới `h[kid][newVer] = { t: newText, ts: timestamp, u: user }` trước khi gán `item.v = "<new_ver>"` và soft-reset `item.x = false` trong `a2u.json` (giá trị boolean `false` hoặc `"!"` để kích hoạt biểu tượng Sao Chổi `☄️` Outdated trên Obsidian UI; TUYỆT ĐỐI không lưu `t`, `lh`, `u` trong `ScopeItem`), tuyệt đối không gán thuộc tính ra ngoài vỏ mảng; **(3) Ghi File Markdown Sau**: Cập nhật nội dung câu chữ trong file `.md`, giữ nguyên cấu trúc chuẩn 3 tham số `qc("c", "💎 K...", "type")` (hoặc `qc("b", "💎 K...", "par")`) mà không chèn thêm mã phiên bản hay dấu hỏi vào Markdown.

---

## 9. 💎 QC-MDS-SKILL-EXE-APC-AUDIT-REPORT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmt6qcqat", "sh2")` Quy định bắt buộc xuất Bảng Kiểm Toán Soft-Reset trong Phản Hồi Chat `$= qc("c", "💎 Kmt6qcr2l", "hd2")`</span>


`$= qc("c", "💎 Kmt6qcrud", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmt6qcsm5", "gov")` Đảm bảo tính minh bạch 100%, chống bỏ sót bước soft-reset kho lưu trữ và cung cấp bằng chứng kiểm toán cho người dùng & QA.
`$= qc("c", "💎 Kmt6qctdx", "ack")` **Hành động**: `$= qc("c", "💎 Kmt6qcu5p", "acv")` Ở mọi lượt chat có sửa đổi nội dung của bất kỳ mục `💎 K...` nào, AI Agent **BẮT BUỘC** phải in ra một bảng **Kiểm toán Soft-Reset Trạng thái Phê duyệt** ở cuối phản hồi, chi tiết cho từng mã bị tác động: Mã ID, Trạng thái trước khi sửa, Thông tin snapshot lịch sử trong `h.json` đã lưu (`v` & `t`), Trạng thái sau khi sửa (`"?"` / `false`), và Mã phiên bản mới (`💎 V...`).

---

## 10. 💎 QC-MDS-SKILL-EXE-APC-NEW-ENTRY-CLEAN-SLATE

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtft7raw", "sh2")` Quy định khởi tạo Kho Rỗng Mặc Định khi Tạo Mới Tài Liệu / Thêm Mục Mới `$= qc("c", "💎 Kmtft7raz", "hd2")`</span>


`$= qc("c", "💎 Kmtft7rb0", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtft7rb2", "gov")` Đảm bảo 100% bản thảo mới và mục mới sinh ra đều ở trạng thái chờ duyệt sạch sẽ (hiển thị dấu hỏi ❓ thuần túy trên Obsidian UI), chống tự ý duyệt sẵn (x: "y") và chống gán sớm x: false gây kích hoạt nhầm biểu tượng Sao chổi ☄️ Outdated.
`$= qc("c", "💎 Kmtft7rb3", "ack")` **Hành động**: `$= qc("c", "💎 Kmtft7rb4", "acv")` Khi tạo mới tệp `.md`, AI Agent BẮT BUỘC khởi tạo tệp kho `.us/<fileId>/a2u.json` hoàn toàn rỗng `{ "a": {} }`. Khi thêm mới mục `💎 K...` vào tệp cũ, AI Agent TUYỆT ĐỐI KHÔNG ghi entry vào `a2u.json` trước khi có phê duyệt. Động cơ qmd.js khi không tìm thấy key sẽ tự động render dấu hỏi `❓` sạch 100% cho đến khi Người dùng click phê duyệt trên UI hoặc gửi lệnh chat `💎 K... .` / `💎 Kstart ... 💎 Kend`.




