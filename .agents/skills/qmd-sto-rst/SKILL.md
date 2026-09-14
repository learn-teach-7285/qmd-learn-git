---
name: qmd-sto-rst
description: Quy trình Storage-First kiểm soát lưu vết lịch sử Cold Audit his.json, soft-reset trạng thái duyệt khi sửa đổi văn bản Markdown, và nguyên tắc miễn trừ đối với mục chưa duyệt.
🆔 id: 💎 Kmtnw9qet
💍 code: QC-MDS-SKILL-STO-RST
🪞 title: Kỹ năng quản trị vòng đời Storage-First, lịch sử his.json & soft-reset vi hạt
🏷️ version: 1.0.0
🔰 type: 🧰 AI-SKILL
🚥 status: ❓ Pending
---
`$= (window.qc || (window.qc = () => '⏳'))()`

# 💎 QC-MDS-SKILL-STO-RST

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtnw9qeu", "sh1")` Kỹ năng quản trị vòng đời Storage-First, lịch sử his.json & soft-reset vi hạt `$= qc("c", "💎 Kmtnw9qev", "hd1")`</span>


`$= qc("c", "💎 Kmtnw9qew", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtnw9qex", "gov")` Chuẩn hóa 100% quy trình đọc tươi đĩa (Storage-First), kiểm soát điều kiện lưu vết lịch sử vào Cold Audit `.qmd/shr/<fileId>/his.json`, cơ chế soft-reset trạng thái duyệt trên Hot State `.qmd/usa/<fileId>/a2u.json`, và nguyên tắc miễn trừ đối với các mục chưa từng được phê duyệt. `$= qc("b", "💎 Kmtnw9qey", "par")`
`$= qc("c", "💎 Kmtnw9qez", "ack")` **Hành động**: `$= qc("c", "💎 Kmtnw9qf0", "acv")` Tự động phân luồng xử lý trước khi sửa đổi tệp Markdown, áp dụng bộ lọc Previously Approved Check, ghi bản chụp đối soát $O(1)$ và báo cáo bảng Storage Audit Table sau mỗi lượt chỉnh sửa. `$= qc("b", "💎 Kmtnw9qf1", "par")`

---

## 1. 💎 QC-STO-PRE-CHECK

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtnw9qf2", "sh2")` Kiểm tra trạng thái duyệt trước và điều kiện kích hoạt `$= qc("c", "💎 Kmtnw9qf3", "hd2")`</span>


`$= qc("c", "💎 Kmtnw9qf4", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtnw9qf5", "gov")` Phân định rạch ròi giữa mục đang soạn nháp (Drafting WIP) và mục đã đóng dấu cam kết (Certified Baseline). `$= qc("b", "💎 Kmtnw9qf6", "par")`
`$= qc("c", "💎 Kmtnw9qf7", "ack")` **Hành động**: `$= qc("c", "💎 Kmtnw9qf8", "acv")` Trước khi sửa văn bản của một mục `💎 K...`, Agent bắt buộc đọc đĩa `a2u.json` và kiểm tra mảng `Array<ScopeItem>`: (1) Nếu mục ĐÃ TỪNG DUYỆT (tồn tại ít nhất 1 bản ghi `item.x === "y"` hoặc `item.x === true`), kích hoạt quy trình Cold Audit & Soft-Reset; (2) Nếu mục CHƯA TỪNG DUYỆT (hoàn toàn vắng mặt trên đĩa hoặc chưa từng có `x: "y"`), kích hoạt chế độ Miễn trừ Soạn nháp (Unapproved Exemption). `$= qc("b", "💎 Kmtnw9qf9", "par")`

---

## 2. 💎 QC-STO-UNAPPROVED-EXEMPT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtnw9qfa", "sh2")` Quy chế miễn trừ đối với mục chưa từng phê duyệt `$= qc("c", "💎 Kmtnw9qfb", "hd2")`</span>


`$= qc("c", "💎 Kmtnw9qfc", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtnw9qfd", "gov")` Triệt tiêu 100% rác dữ liệu trong `his.json` và ngăn chặn kích hoạt Sao Chổi giả mạo `☄️`. `$= qc("b", "💎 Kmtnw9qfe", "par")`
`$= qc("c", "💎 Kmtnw9qff", "ack")` **Hành động**: `$= qc("c", "💎 Kmtnw9qfg", "acv")` Khi sửa câu chữ của mục chưa từng duyệt: (1) Cập nhật trực tiếp nội dung vào tệp Markdown (`.md`); (2) TUYỆT ĐỐI KHÔNG ghi snapshot vào `his.json`; (3) TUYỆT ĐỐI KHÔNG bump mã phiên bản `v`; (4) TUYỆT ĐỐI KHÔNG ghi `x: null` hoặc `x: false` vào `a2u.json`; (5) Giữ nguyên trạng thái vắng mặt trên đĩa để Obsidian UI hiển thị dấu chấm hỏi thuần khiết `❓`. `$= qc("b", "💎 Kmtnw9qfh", "par")`

---

## 3. 💎 QC-STO-COLD-AUDIT-RECORD

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtnw9qfi", "sh2")` Quy trình lưu bản chụp cold audit vào his.json `$= qc("c", "💎 Kmtnw9qfj", "hd2")`</span>


`$= qc("c", "💎 Kmtnw9qfk", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtnw9qfl", "gov")` Bảo toàn bản chụp văn bản cũ đã duyệt phục vụ hiển thị Visual Diff tức thì trên Obsidian UI. `$= qc("b", "💎 Kmtnw9qfm", "par")`
`$= qc("c", "💎 Kmtnw9qfn", "ack")` **Hành động**: `$= qc("c", "💎 Kmtnw9qfo", "acv")` Khi mục đã duyệt bị sửa nội dung: (1) Trích xuất chuỗi văn bản cũ đã làm sạch (Stripped Clean Text); (2) Lưu vào `.qmd/shr/<fileId>/his.json` dưới dạng `his[kid][oldVer] = { t: oldText, ts: timestamp, u: user, r?: reason }`; (3) Sinh mã phiên bản Base-36 mới `newVer = "V" + Date.now().toString(36)`; (4) Lưu bản mới `his[kid][newVer] = { t: newText, ts: timestamp, u: user, r?: reason }`. `$= qc("b", "💎 Kmtnw9qfp", "par")`

---

## 4. 💎 QC-STO-HOT-SOFT-RESET

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtnw9qfq", "sh2")` Quy trình soft-reset trạng thái duyệt trên a2u.json `$= qc("c", "💎 Kmtnw9qfr", "hd2")`</span>


`$= qc("c", "💎 Kmtnw9qfs", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtnw9qft", "gov")` Kích hoạt biểu tượng Sao Chổi `☄️` để người dùng thẩm định lại sau khi văn bản bị thay đổi. `$= qc("b", "💎 Kmtnw9qfu", "par")`
`$= qc("c", "💎 Kmtnw9qfv", "ack")` **Hành động**: `$= qc("c", "💎 Kmtnw9qfw", "acv")` Trong tệp `.qmd/usa/<fileId>/a2u.json`: (1) Cập nhật mã con dấu phiên bản `item.v = newVer`; (2) Cập nhật dấu thời gian `item.w = Date.now().toString(36)`; (3) Gán trạng thái `item.x = null` (hoặc `"!"`) để kích hoạt Sao Chổi `☄️`; (4) Tuyệt đối không gán `x: "?"` cho mục đã từng duyệt; (5) Tuyệt đối không soft-reset các khóa không bị sửa nội dung trong phiên. `$= qc("b", "💎 Kmtnw9qfx", "par")`

---

## 5. 💎 QC-STO-ORPHAN-PURGE

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtnw9qfy", "sh2")` Quy trình dọn dẹp khóa mồ côi khi xóa nội dung `$= qc("c", "💎 Kmtnw9qfz", "hd2")`</span>


`$= qc("c", "💎 Kmtnw9qg0", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtnw9qg1", "gov")` Duy trì tính toàn vẹn 1:1 giữa tài liệu Markdown và kho lưu trữ, chống tích lũy khóa rác. `$= qc("b", "💎 Kmtnw9qg2", "par")`
`$= qc("c", "💎 Kmtnw9qg3", "ack")` **Hành động**: `$= qc("c", "💎 Kmtnw9qg4", "acv")` Khi xóa một câu văn hoặc khối khỏi tài liệu Markdown, lập tức xóa bỏ khóa Canonical Base-36 ID `kid` tương ứng khỏi cả `.qmd/usa/<fileId>/a2u.json` và `.qmd/shr/<fileId>/his.json`. `$= qc("b", "💎 Kmtnw9qg5", "par")`

---

## 6. 💎 QC-STO-AUDIT-REPORT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtnw9qg6", "sh2")` Quy chuẩn bảng báo cáo storage & soft-reset audit `$= qc("c", "💎 Kmtnw9qg7", "hd2")`</span>


`$= qc("c", "💎 Kmtnw9qg8", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmtnw9qg9", "gov")` Minh bạch hóa 100% các biến động lưu trữ ở cuối mỗi phản hồi của Agent. `$= qc("b", "💎 Kmtnw9qga", "par")`
`$= qc("c", "💎 Kmtnw9qgb", "ack")` **Hành động**: `$= qc("c", "💎 Kmtnw9qgc", "acv")` Trong mọi lượt chat có sửa đổi nội dung `💎 K...`, Agent bắt buộc xuất bảng đối soát gồm 6 cột: `ID Phê duyệt | Trạng thái trước | Bản chụp bảo lưu trong his.json (v & t) | Trạng thái lưu trữ mới | Hiển thị UI | Mã phiên bản mới`. `$= qc("b", "💎 Kmtnw9qgd", "par")`
