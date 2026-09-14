---
name: qmd-wfb-apc
description: Quy chuẩn chèn Nút Duyệt qc("c") & Nút User Badge uc("xem") Động Cơ Kép DataviewJS (.a21/js/ac.js) cho các mục giá trị, tiêu đề, bảng đặc tả và đầu tệp. Kích hoạt khi chèn nút duyệt hoặc thay đổi trạng thái kiểm duyệt mã ID.
💍 code: QC-MDS-SKILL-WFB-APC
🪞 title: Ghi nút duyệt và copy mã ID
🔰 type: 🧰 AI-SKILL
🚥 status: 🌿 Ready
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-WFB-APC
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr9r", "sh1")` Kỹ năng Ghi Nút Duyệt Mã ID DataviewJS `$= qc("c", "💎 K5jhuvp7vr9s", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vr9j", "gk")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr9k", "gv")` Đảm bảo quy trình chèn, tạo & xử lý lệnh phê duyệt nút bấm DataviewJS chuẩn 100%.
`$= qc("c", "💎 K5jhuvp7vr9l", "ak")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr9m", "av")` Rà soát & tuân thủ 4 quy tắc nhúng nút bấm bên dưới.

---

## 1. Dòng Nạp Alias DataviewJS Bắt Buộc (ALIAS LOADER LINE POSITION)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr9t", "sh2")` Vị trí bắt buộc của dòng nạp Alias DataviewJS `$= qc("c", "💎 K5jhuvp7vr9u", "hd2")`</span>


> [!IMPORTANT]
> **QUY TẮC VỊ TRÍ BẮT BUỘC CỦA DÒNG NẠP ALIAS**:
> 1. **Dòng 1 Cột 1 Bắt Buộc Là Thẻ `---`**: Khối YAML Frontmatter Header bắt buộc nằm ở Dòng 1 Cột 1 của tệp.
> 2. **Dòng Nạp Alias Đặt Ngay Bên Dưới Thẻ Đóng `---`**: Dòng nạp Alias **BẮT BUỘC ĐẶT NẰM NGAY BÊN DƯỚI THẺ ĐÓNG `---` CỦA KHỐI YAML FRONTMATTER**. Dạng chuẩn là Header Guard ```$= (window.qc || (window.qc = () => '⏳'))()``` (mẫu `TPL-HMD` trong `[[QMD-SLOT-SPEC.md#2. 💎 POSITIONS|QMD-SLOT-SPEC.md]]`) vì nó không vỡ cú pháp Dataview khi `qmd.js` chưa nạp xong; dạng rút gọn `` `$= qc("c")` `` chỉ giữ lại cho các tệp cũ.
> 3. **Cấm Tuyệt Đối Đặt Trước `---`**: Đặt trước `---` sẽ làm hỏng bộ đọc Metadata YAML của Obsidian.

---

## 2. Bảng 15 Vị Trí Bắt Buộc Của Nút qc() (MANDATORY 15 POSITIONS CHECKLIST)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtb4yf7c", "sh2")` Danh mục 15 vị trí gọi hàm qc bắt buộc quét đủ khi tạo mới hoặc nâng cấp tệp `$= qc("c", "💎 Kmtb4yf7d", "hd2")`</span>


`$= qc("c", "💎 Kmtb4yf7e", "gok")` **Nguồn chuẩn duy nhất**: `$= qc("c", "💎 Kmtb4yf7f", "gov")` Bảng dưới sao chép nguyên trạng từ mục `## 2. 💎 POSITIONS` của tệp đặc tả `[[QMD-SLOT-SPEC.md#2. 💎 POSITIONS|QMD-SLOT-SPEC.md]]`; mọi thay đổi bắt buộc cập nhật đồng thời cả hai nơi. `$= qc("b", "💎 Kmtb4yf7g", "par")`

| STT | MÃ VỊ TRÍ | VỊ TRÍ XUẤT HIỆN | CÚ PHÁP BẮT BUỘC |
| :-: | :--- | :--- | :--- |
| `01` | `QC-POS-HMD` | Tệp > Đầu tệp | `(window.qc \|\| (window.qc = () => '⏳'))()` |
| `02` | `QC-POS-HSH` | Tiêu đề > Đầu phụ đề | `qc("c", "💎 K...", "sh1")` … `"sh6"` |
| `03` | `QC-POS-TSH` | Tiêu đề > Cuối phụ đề | `qc("c", "💎 K...", "hd1")` … `"hd6"` |
| `04` | `QC-POS-HST` | Câu > Đầu câu | `qc("c", "💎 K...", "🔹")` *(mặc định)* / `"gok"` / `"ack"` / `"📜"` |
| `05` | `QC-POS-MST` | Câu > Giữa câu | `qc("s", "💎 K...", "Cụm từ", "yellow")` |
| `06` | `QC-POS-HPT` | **Cụm vế > Đầu mỗi** | `qc("c", "💎 K...", "gov")` trước từng vế |
| `07` | `QC-POS-TPG` | Đoạn văn > Cuối đoạn | `qc("b", "💎 K...", "par")` |
| `08` | `QC-POS-HLC` | Nhãn tiêu đề > Đầu dòng | `qc("c", "💎 K...", "📊")` / `"📦"` |
| `09` | `QC-POS-TLC` | **Nhãn tiêu đề > Cuối dòng** | `qc("b", "💎 K...", "par")` |
| `10` | `QC-POS-HCL` | Bảng > Đầu tiêu đề cột | `qc("c", "💎 K...", "col")` |
| `11` | `QC-POS-TCL` | **Bảng > Cuối tiêu đề cột** | `qc("b", "💎 K...", "par")` |
| `12` | `QC-POS-HCE` | Bảng > Đầu ô | `qc("c", "💎 K...", "pos")` / `"des"` / `"lnk"` / `"val"` / `"👁️"` |
| `13` | `QC-POS-TNR` | **Bảng > Sau ô STT** | `qc("b", "💎 K...", "par")` |
| `14` | `QC-POS-HSB` | Khối tóm tắt > Đầu khối | `qc("a", "💎 K...", "Tiêu đề 🦯 Tooltip", "ttb")` |
| `15` | `QC-POS-TSB` | Khối tóm tắt > Cuối khối | `🕳️` + `qc("z", "💎 K...")` |
| `16` | `QC-POS-TWT` | Tóm ý & chi tiết > Nội dòng / Ô bảng | `qc("t", ["💎 Kterm", "💎 Ktip"], ["dia", "tip"], ["Tóm ý", "Chi tiết"])` |

> [!IMPORTANT]
> **QUY TẮC QUÉT ĐỦ 16 VỊ TRÍ (ZERO-MISS SWEEP)**:
> 1. **Đối Chiếu Trọn Vẹn 16 Dòng**: Khi tạo mới hoặc nâng cấp bất kỳ tệp `.md` nào, AI Agent **BẮT BUỘC** duyệt lần lượt cả 16 vị trí và xác nhận từng vị trí là *đã đủ nút* hay *không tồn tại trong tệp*. Cấm bỏ qua một vị trí mà không nêu lý do.
> 2. **Năm Vị Trí Dễ Sót Nhất**: `QC-POS-HPT` (06), `QC-POS-TLC` (09), `QC-POS-TCL` (11), `QC-POS-TNR` (13) và `QC-POS-TWT` (16) đều là các vị trí chốt rollup hoặc cặp đôi đặc thù nên rất dễ thiếu khi soạn thảo. Rà soát kỹ các vị trí này sau mỗi lần sửa bảng hoặc cập nhật tài liệu.
> 3. **Báo Cáo Đối Chiếu Bắt Buộc**: Khi thực thi Format (`fmt`), AI Agent **BẮT BUỘC** in bảng đối chiếu 16 vị trí kèm số nút đã có và số nút vừa bổ sung cho từng vị trí.

---

## 3. Quy Chuẩn Nút Duyệt Mã Kép Dòng Key-Value (`🎯 Mục tiêu` & `📌 Hành động`)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr9v", "sh2")` Quy định nút duyệt mã kép dòng Key-Value `$= qc("c", "💎 K5jhuvp7vr9w", "hd2")`</span>


> [!IMPORTANT]
> 1. **Mã Base-36 Thuần Độc Lập**: Mỗi nút bấm sở hữu 1 mã Base-36 duy nhất độc lập (`qc("c", "💎 K...", "type")`), không ghép các suffix đuôi `_gk`, `_gv`, `_ak`, `_av`.
> 2. **Bộ 3 Trạng Thái Siêu Tinh Khiết (`"y"`, `false`, `"?"`)**: Trạng thái duyệt được lưu trữ 100% trong kho `.us/<fileId>/a2u.json` (`x: "y"` khi duyệt, `x: false` khi soft-reset/hủy duyệt hiển thị Sao Chổi **`☄️`**). Trong file Markdown (`.md`), trạng thái mặc định luôn là Pending và không cần ghi dấu hỏi `"❓"`.
> 3. **Nguyên Tắc Vàng Hiển Thị Emoji**: Mặc định khi chưa duyệt, TẤT CẢ các nút đều hiển thị Dấu Hỏi **`❓`**. Chỉ khi Đã duyệt (`"y"` trong storage), nút mới hiển thị Emoji theo loại Semantic Type.
> 4. **Biểu Tượng Mặc Định Cho Sub-Heading (`sh1`–`sh6`)**: Nút đầu dòng phụ đề tiêu đề `QC-POS-HSH` (`sh1` đến `sh6`) **BẮT BUỘC MẶC ĐỊNH HIỂN THỊ MẦM XANH `🌿`** khi đã duyệt (tượng trưng cho Cụm chủ đề đã thông qua / Green-lit Section).
> 5. **Biểu Tượng Mặc Định Cho Câu Thân Bài (`QC-POS-HST`)**: Nút đầu câu văn vi hạt `QC-POS-HST` **BẮT BUỘC MẶC ĐỊNH SỬ DỤNG KIM CƯƠNG VI HẠT `🔹` (`"dia"`)** (tượng trưng cho Vi hạt tri thức chuẩn mực).
> 6. **Nút Khóa Nhãn (Key Button)**: Dùng type `"gok"` (chưa duyệt: **`❓`** | đã duyệt: Chìa Khóa Mục Tiêu **`🔑`**) hoặc `"ack"` (chưa duyệt: **`❓`** | đã duyệt: Gậy Phép Magic **`🪄`**). Hai mã này **không dùng chung icon**.
> 7. **Nút Giá Trị Mục Tiêu Spec (Goal Value)**: Dùng type `"gov"` (chưa duyệt: **`❓`** | đã duyệt: Giọt Nước Nguồn **`💧`**).
> 8. **Nút Giá Trị Hành Động Thi Công (Action Value)**: Dùng type `"acv"` (chưa duyệt: **`❓`** | đã duyệt: Con Tàu Ra Khơi **`⛵`**).
> 9. **Quy Chuẩn 3 Tham Số Tinh Gọn & Cấm Dấu Hỏi Thừa**: Mọi nút `qc("c")` và `qc("b")` trong Markdown BẮT BUỘC dùng đúng 3 tham số: `qc("c", "💎 K...", "<type>")` và `qc("b", "💎 K...", "par")`. TUYỆT ĐỐI CẤM chèn `"❓"` làm tham số thứ 3 và TUYỆT ĐỐI KHÔNG hardcode `"y"` vào file Markdown.
> 10. **Quy Chuẩn Độc Quyền Nút Đuôi `"par"` & Cấm Kỵ Đầu Câu**: Tham số phân loại `"par"` (Paragraph Rollup) **CHỈ DÙNG DUY NHẤT CHO NÚT CHỐT ĐUÔI** `qc("b", "💎 K...", "par")` tại cuối đoạn (`QC-POS-TPG`), cuối dòng nhãn (`QC-POS-TLC`) hoặc cuối dòng bảng (`QC-POS-TNR`). **TUYỆT ĐỐI CẤM** gán `"par"` cho nút đầu câu/đầu dòng `qc("c")` (`QC-POS-HST`, `QC-POS-HPT`, `QC-POS-HLC`). Nút đầu câu `qc("c")` bắt buộc chỉ sử dụng `qc("c", "💎 K...", "🔹")` (hoặc `"dia"`, `"gov"`, `"⛵"`, `"📊"`, `"📜"`).

---

## 4. Lệnh Chat Duyệt Dải Mã ID Siêu Ngắn (`START_ID ... END_ID`)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr9x", "sh2")` Cú pháp duyệt dải mã ID siêu ngắn trong chat `$= qc("c", "💎 K5jhuvp7vr9y", "hd2")`</span>


> [!IMPORTANT]
> **THUẬT TOÁN XỬ LÝ LỆNH DUYỆT DẢI TRONG CHAT**:
> Khi người dùng nhắn lệnh duyệt dạng `💎 K... .` hoặc dải `💎 Kstart ... 💎 Kend`, AI Agent **BẮT BUỘC**:
> 1. `$= qc("c", "💎 K5jhuvp7vr9n", "gk")` **Rà soát Live Tệp Session (`.a21/jv/ses.json`)**: `$= qc("c", "💎 K5jhuvp7vr9o", "gv")` AI Agent **BẮT BUỘC ĐỌC TRỰC TIẾP** `.a21/jv/ses.json` ngay trước khi thực thi để lấy đúng `username` (`qtu`, `nhan7285`, v.v.) và `usermode` thời điểm hiện tại:
>    - **Nếu `usermode === 0` (Master Spec Mode)**: AI Agent cập nhật trực tiếp nút bấm `qc("c")` từ `"❓"` sang `"y"` trong tệp Markdown (`.md`) gốc và tự động tạo mã phiên bản timestamp `💎 V...` ở tham số 5.
>    - **Nếu `usermode === 1` hoặc `usermode === 2` (User Mode - `{username}`)**: AI Agent ghi nhận các mã ID được duyệt thành `true` trong tệp cá nhân `.us/<fileId>/{username}.json`. Để ép giao diện Obsidian tự động re-render hiển thị các nút `pass` ngay lập tức mà không thay đổi nội dung gốc Master Spec, AI Agent thực hiện **Quy trình Chạm Tệp Tạm Thời 3 Bước**:
>      1. *Ghi Emoji Loading Tạm Thời*: Thêm tạm emoji `⏳` vào thuộc tính `🚥 status` trong YAML Header của tệp Markdown mục tiêu (ví dụ `🚥 status: ... ⏳`).
>      2. *Ghi Nhận Dữ Liệu Duyệt*: Cập nhật danh sách mã ID được duyệt vào `.us/<fileId>/{username}.json`.
>      3. *Khôi Phục Trạng Thái Tệp*: Xóa emoji `⏳` trong `🚥 status` để trả tệp Markdown về đúng trạng thái gốc. Thao tác chạm tệp 2 lần này ép Dataview làm tươi giao diện và tự động chuyển các nút sang trạng thái `pass`.
> 2. `$= qc("c", "💎 K5jhuvp7vr9p", "ak")` **Phạm vị quét**: `$= qc("c", "💎 K5jhuvp7vr9q", "av")` Quét tệp Markdown mục tiêu từ mã `Kstart` tới mã `Kend` để lấy đủ danh sách các mã ID cần ghi nhận phê duyệt.

---

## 5. Quản Trị Phiên Bản Nút Duyệt Trong Kho Storage (Storage-First Versioning)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr9z", "sh2")` Quản trị phiên bản nút duyệt trong storage `$= qc("c", "💎 K5jhuvp7vra0", "hd2")`</span>


> [!IMPORTANT]
> **QUY TẮC QUẢN TRỊ PHIÊN BẢN VERSIONING BẮT BUỘC**:
> 1. **Lưu Trữ Version Tập Trung Trong Storage**: Phiên bản `v` được lưu trong kho `.qmd/us/<fileId>/a2u.json`, sinh từ mốc thời gian Unix ms `BigInt(Date.now()).toString(36)`. Toàn bộ snapshot lịch sử được lưu tại `.qmd/gb/<fileId>/h.json`. Tệp Markdown giữ nguyên 3 tham số `qc("c", "💎 K...", "type")`.
> 2. **Tự Động Bump Version & Snapshot (Rule 5)**: Mỗi khi sửa đổi nội dung tệp spec `💎 K...`, AI Agent cập nhật `item.v = newVer` và soft-reset `item.x = false` trong `a2u.json` (chuẩn Zero-Text tuyệt đối, không lưu `t`, `lh`, `u`), đồng thời ghi snapshot `{ t: oldText, ts, u }` và `{ t: newText, ts, u }` vào `.qmd/gb/<fileId>/h.json`.
> 3. **Giải Mã Thẻ Popover Hover Card**: Động cơ `.a21/js/ac.js` tự động giải mã timestamp `v` ra Ngày Giờ Việt Nam (`DD/MM/YYYY HH:mm:ss`) hiển thị trực quan ngay trên Thẻ Spec Hover Popover Card.

---

## 6. Quy Chuẩn 2 Chế Độ Thao Tác Chuột Trái (APPROVAL INTERACTION MODES)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra1", "sh2")` Quy định 2 chế độ thao tác chuột trái cho nút duyệt qc("c") `$= qc("c", "💎 K5jhuvp7vra2", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN 2 CHẾ ĐỘ THAO TÁC CHUỘT TRÁI (apprmode trong ses.json)**:
> 1. `$= qc("c", "💎 K5jhuvp7vra3", "gk")` **Chế độ 0: Click copy ID (ApprMode 0)**: `$= qc("c", "💎 K5jhuvp7vra4", "gv")` Icon 🆔. Click chuột trái vào nút `qc("c")` thực hiện **Copy nhanh mã ID** (phục vụ thảo luận với AI Agent). Mặc định kích hoạt khi `usermode === 0` (Master Spec Mode).
> 2. `$= qc("c", "💎 K5jhuvp7vra5", "ak")` **Chế độ 1: Click đổi trạng thái (ApprMode 1)**: `$= qc("c", "💎 K5jhuvp7vra6", "av")` Icon 🔰. Click chuột trái vào nút `qc("c")` thực hiện **Toggle trạng thái Phê duyệt / Hủy duyệt tức thì** theo chiều `"y"` ⇄ `false` (không bao giờ xóa bản ghi). Đích ghi là kho JSON, **KHÔNG sửa tệp `.md`**: `.us/<fileId>/a2u.json` khi `usermode === 0` (Master) hoặc `.us/<fileId>/<username>.json` khi `usermode === 1/2` (User). Mặc định kích hoạt khi `usermode === 1` hoặc `2` (User Mode).
> 3. `$= qc("c", "💎 K5jhuvp7vra7", "gk")` **Chuyển đổi Linh hoạt**: Người dùng có thể chuyển đổi qua lại giữa 2 chế độ chuột trái bất kỳ lúc nào thông qua Menu chuột phải trên Badge User trôi góc màn hình (`uc()`) hoặc Menu chuột phải trực tiếp trên nút badge `qc("c")`.

---

## 7. Quy Chuẩn Nút Duyệt Khối Đoạn Văn DataviewJS `qc("b")` (APPROVE BLOCK / PARAGRAPH LEVEL)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra8", "sh2")` Quy chuẩn chèn nút duyệt qc("b") ở cuối khối đoạn văn `$= qc("c", "💎 K5jhuvp7vra9", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN NÚT DUYỆT KHỐI ĐOẠN VĂN `qc("b")`**:
> 1. **Ý Nghĩa & Tên Gọi**: `qc("b", ...)` = **Approve Block** (Dành riêng cho Khối Đoạn Văn / Paragraph).
> 2. **Vị Trí Chèn Bắt Buộc**: Đặt ở **cuối đoạn văn (Paragraph)** ngay sau các dấu kết thúc câu như dấu chấm `.`, dấu chấm cảm `!`, hoặc dấu hai chấm `:`.
> 3. **Cú Pháp Tối Giản**: `$= qc("b", "💎 K...", "par")`. Nút khi chưa duyệt hiển thị `❓`, khi đã duyệt hiển thị Dấu Tích **`✓`** (đúng mã `par` trong bảng `AC_SEMANTIC_ICONS` của `ac.js`).
> 4. **Dòng Loader**: Chỉ cần duy nhất 1 dòng loader gốc `` `$= (window.qc || (window.qc = () => '⏳'))()` `` ở đầu tệp (bên dưới `---` YAML Header) là tự động nạp sẵn cả `qc("c")` VÀ `qc("b")`.
> 5. **Bắt Buộc 100% Cho Mọi Đoạn Văn**: TẤT CẢ các khối đoạn văn (Paragraphs) trong tệp Markdown BẮT BUỘC sở hữu nút `qc("b", "💎 K...", "par")` ở cuối câu kết thúc (`.`, `!`, `:`). Khi thực thi Format (`fmt`), AI Agent có trách nhiệm rà soát 100% các đoạn văn và bổ sung mã ID `qc("b")` bị thiếu mà không được bỏ sót bất kỳ đoạn văn nào.

---

## 8. Quy Chuẩn Lọc Ẩn/Hiện Loại Nút Kế Thừa 4 Cấp (TYPE FILTER CASCADE)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra34", "sh2")` Quy chuẩn lọc ẩn/hiện nút qc("c") và qc("b") theo 4 cấp Scope > Context > User > Session `$= qc("c", "💎 K5jhuvp7vra35", "hd2")`</span>


> 3. **Modal Quản Lý Tương Tác**: Mở từ Menu chuột phải trên Badge User (`👁️ Lọc ẩn/hiện loại nút (Type Filter)...`). Cho phép chọn nhanh cấp độ muốn sửa, hiển thị rõ nguồn gốc ghi đè của từng loại nút và lưu tức thì vào Session Config.

---

## 9. Quy Chuẩn Phân Đoạn & Bao Duyệt Cụm Từ `qc("s")` (APPROVE SPAN / SELECTION HIGHLIGHTER)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra36", "sh2")` Phân đoạn & bao duyệt cụm từ qua qc("s") `$= qc("c", "💎 K5jhuvp7vra37", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN BỌC MÃ PHÊ DUYỆT & TÔ MÀU CỤM TỪ `qc("s")`**:
> 1. **Ý Nghĩa & Tên Gọi**: `qc("s", ...)` = **Approve Span / Selection** (Phân đoạn, bao duyệt cụm từ & tô màu highlight). Thiết lập một vùng biên thẩm định (Approval Boundary) cho cụm từ nội dòng có trạng thái và phiên bản riêng biệt.
> 2. **Cú Pháp Chuẩn**: `` `$= qc("s", "💎 K...", "Nội dung cụm từ")` ``.
> 3. **Tự Động Bọc Chuột Phải**: Khi bôi đen văn bản trong Obsidian Editor, click chuột phải chọn **`💎 Bọc mã Phê duyệt & Ghi chú qc("s")...`** (hoặc nút nổi) để sinh mã kim cương `💎 K...` và bọc kín cụm từ.
> 4. **Tông Màu Hiển Thị (Color Themes)**: Hỗ trợ 5 tông màu tô dịu mắt: `yellow` (`🟨`), `blue` (`🟦`), `green` (`🟩`), `pink` (`🟥`), `purple` (`🟪`).
> 5. **Kế Thừa 4 Cấp (Cascade Compatible)**: Nút `qc("s")` được tích hợp đầy đủ trong Type Filter Modal (Icon `🟨 Cụm từ tô màu qc("s")`). Khi ẩn, cụm từ trả về văn bản thường không kèm khung tô.

---

## 10. Quy Chuẩn Nút Duyệt Cho Tất Cả Các Ô Trong Bảng Spec (TABLE CELL APPROVAL RULE)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra38", "sh2")` Quy chuẩn chèn nút duyệt qc("c") cho 100% các ô trong bảng đặc tả `$= qc("c", "💎 K5jhuvp7vra39", "hd2")`</span>

> [!IMPORTANT]
> **QUY CHUẨN NÚT DUYỆT CHO TẤT CẢ CÁC Ô BẢNG MARKDOWN SPEC**:
> 1. **Bắt Buộc 100% Cho TẤT CẢ Ô Bảng**: Trong tất cả các Bảng đặc tả Markdown (`📖 AD-SP`), **MỖI Ô (CELL)** — bao gồm CẢ các ô tiêu đề cột Header (`Key`, `Tên Khối`, `Kiểu`, `Mặc Định`, `Mô Tả`...) VÀ các ô dữ liệu Data — **BẮT BUỘC 100% ĐỀU PHẢI CHÈN NÚT DUYỆT `$= qc("c", "💎 K...", "col")`** ngay đầu tiên trong ô.
> 2. **Chế Độ Ngữ Nghĩa Dành Cho Ô Bảng**:
>    - `col`: `🏝️` — Ô tiêu đề cột (Header Cell)
>    - `idx`: `🔹` — Ô số thứ tự (STT Index)
>    - `nam` / `name`: `🪪` — Ô tên trường / tên tham số (Name / Parameter)
>    - `des` / `desc`: `📝` — Ô mô tả / diễn giải nghiệp vụ (Description)
>    - `typ` / `type`: `🌈` — Ô kiểu dữ liệu (Data Type)
>    - `lnk` / `link`: `🔗` — Ô liên kết Wikilink (Wikilink)
>    - `val`: `🌿` — Ô giá trị dữ liệu / nhãn thông thường (Value)
> 3. **Ví Dụ Dòng Tiêu Đề Cột Header Bảng**:
>    `| `$= qc("c", "💎 Kmsve0016", "col")` Key | `$= qc("c", "💎 Kmsve0017", "col")` Tên Khối | `$= qc("c", "💎 Kmsve0018", "col")` Kiểu | ... |`

---

## 11. Bảo Toàn Ánh Xạ Khóa Chính QC & Sinh Mã Tăng Dần (IMMUTABLE QC-KEY INTEGRITY)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vra40", "sh2")` Quy tắc bảo toàn khóa chính qc và sinh mã tăng dần `$= qc("c", "💎 K5jhuvp7vra41", "hd2")`</span>

> [!IMPORTANT]
> **QUY TẮC BẢO TOÀN ÁNH XẠ KHÓA CHÍNH `qc()` GIỮA MD VÀ JSON**:
> 1. **Khóa Chính Bất Biến**: Mọi mã `💎 K...` đã từng gắn cho nút `qc("c")` hay `qc("b")` trong bảng là Primary Key liên kết 1-1 với `.us/.../a2u.json`. **TUYỆT ĐỐI KHÔNG ĐƯỢC sinh lại mã mới hay làm thay đổi mã ID cũ** khi cập nhật bảng.
> 2. **Sinh Mã Tăng Dần (Additive-Only)**: Khi chèn thêm cột mới hoặc dòng mới vào bảng, Agent **CHỈ ĐƯỢC sinh ID mới cho đúng các ô mới thêm**, và **BẮT BUỘC giữ nguyên 100% mã ID cũ** của các ô đã tồn tại.
> 3. **Escape Ký Tự Pipe `\|` Trong Ô Bảng**: Mọi Wikilink có alias đặt bên trong ô bảng Markdown bắt buộc phải escape dấu `|` thành `\|` (ví dụ `[[File#Heading\|alias]]`) để không bị vỡ cột bảng.

---

## 12. Quy Chuẩn Biểu Tượng Khối Mã, Bảng & Ô Chi Tiết Thu Gọn
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrb4", "sh2")` Quy chuẩn biểu tượng cho khối mã JSON, bảng dữ liệu và ô chi tiết `$= qc("c", "💎 K5jhuvp7vrb5", "hd2")`</span>

> [!IMPORTANT]
> **QUY CHUẨN BIỂU TƯỢNG NGỮ NGHĨA**:
> 1. **Ô Chi Tiết Thu Gọn (`<details><summary>`)**: Nút duyệt trong thẻ summary của cột CHI TIẾT bắt buộc dùng biểu tượng Con Mắt Soi Xét (`"👁️"`): `$= qc("c", "💎 K...", "👁️") [Xem ⯆]`.
> 2. **Dòng Chú Thích Khối Mã Mẫu JSON**: Bắt buộc dùng biểu tượng Kiện hàng Payload (`"📦"`): `$= qc("c", "💎 K...", "📦") *Mẫu Payload...*`.
> 3. **Dòng Chú Thích Bảng Dữ Liệu**: Bắt buộc dùng biểu tượng Biểu đồ Bảng (`"📊"`): `$= qc("c", "💎 K...", "📊") *Bảng X.Y...*`.
> 4. **Tiêu Đề Khung Mã Code Block**: Tất cả các khối mã (`json`, `sql`, `js`) bắt buộc có emoji nhận diện cố định ở thuộc tính title: ```json title="📄 filename.json"```.

---

## 13. Quy Chuẩn Khối Tóm Tắt & Khối Có Tooltip `qc("a")` (BLOCK & TOOLTIP BLOCK - blk / ttb)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmt1d1cvn", "sh2")` Quy chuẩn chèn khối tóm tắt và khối tooltip qc("a") `$= qc("c", "💎 Kmt1d1dnf", "hd2")`</span>

> [!IMPORTANT]
> **QUY CHUẨN KHỐI TÓM TẮT & TOOLTIP BLOCK `qc("a")`**:
> 1. **Ý Nghĩa & Tên Gọi**: `qc("a", ...)` = **Approve Block Container** (Khối bao bọc nhiều dòng quy chuẩn).
> 2. **Quy Tắc Thẻ Đóng Bắt Buộc (`🕳️`)**: Kết thúc khối **BẮT BUỘC** phải có emoji cái lỗ đen `🕳️` (Hole) đứng trước dấu backtick và lặp lại đúng mã ID của khối: `🕳️`$= qc("z", "💎 K...")``. Tuyệt đối cấm viết `qc("z")` thiếu emoji `🕳️` hoặc thiếu mã ID.
> 3. **Chế Độ Khối Thường (`blk`)**: `$= qc("a", "💎 K...", "Tiêu đề khối", "blk")`.
> 4. **Chế Độ Tooltip Block (`ttb`) & Ký Tự Phân Tách `🦯`**:
>    - Khi cần hiển thị tiêu đề ngắn gọn nhưng có Tooltip giải nghĩa/thuật ngữ kỹ thuật (như tiếng Anh), sử dụng ký tự `🦯` (Cây gậy dẫn đường / Tooltip Delimiter):
>      `$= qc("a", "💎 K...", "Xác thực 🦯 Validation", "ttb")`
>    - Phần trước `🦯` là Text hiển thị trên thanh tiêu đề Card.
>    - Phần sau `🦯` là Tooltip giải nghĩa ẩn khi rê chuột vào (gạch chân chấm mờ `1px dotted #9ca3af; cursor:help;`).
> 5. **Quy Chuẩn Nội Dung Trong Khối**: Bên trong khối `qc("a")`, các dòng nội dung là **các câu văn tự nhiên trọn vẹn**, không lặp lại cấu trúc `**Key**: Value` gây trùng lặp với tiêu đề Card.

---

## 14. Quy Chuẩn Duyệt Kép Tóm Ý & Chi Tiết `qc("t")` (TWIN TERM + TOOLTIP ANCHOR)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmtsgi87y", "sh2")` Duyệt kép tóm ý & chi tiết qua qc("t") `$= qc("c", "💎 Kmtsgi882", "hd2")`</span>

> [!IMPORTANT]
> **QUY CHUẨN DUYỆT KÉP TÓM Ý & CHI TIẾT `qc("t")`**:
> 1. **Ý Nghĩa & Tên Gọi**: `qc("t", ...)` = **Twin Term + Tooltip Anchor** (Phê duyệt đối xứng 2 đầu cho cặp cấu trúc Tóm ý & Chi tiết / Master-Detail trên cùng một dòng).
> 2. **Khi Nào Bắt Buộc / Khuyến Nghị Viết Theo Kiểu `qc("t")`**:
>    - **Trong Bảng Dữ Liệu Đặc Tả (Cột Ý Nghĩa Nghiệp Vụ / Mô Tả)**: Khi ô chứa **[Tên nhãn nghiệp vụ ngắn gọn]** đi kèm **[Nội dung diễn giải chi tiết / Các giá trị hợp lệ]** (như trong bảng Schema DTO, JSON Payload/Response, bảng tham số cấu hình hệ thống). Bắt buộc dùng `qc("t")` thay vì viết văn bản thuần dài dòng, giúp bảng gọn gàng và phân tách rõ ràng.
>    - **Thuật Ngữ Chuyên Môn / Khái Niệm Miền (Domain Glossary)**: Khi câu văn nhắc đến thuật ngữ kỹ thuật hoặc từ khóa tiếng Anh cần định nghĩa ẩn tooltip, tránh mở ngoặc đơn `(...)` làm loãng câu văn.
>    - **Nhu Cầu Thẩm Định Kép Phân Quyền (Dual Persona Approval)**: Khi thuật ngữ do Kỹ thuật thẩm định (`Tech Lead`), còn nội dung chú giải do Nghiệp vụ thẩm định (`BA / QA / PO`).
> 3. **Cú Pháp Chuẩn 4 Tham Số Đối Xứng Qua Cặp Mảng**:
>    `$= qc("t", ["💎 Kterm", "💎 Ktip"], ["<termType>", "<tipType>"], ["Tóm Ý / Nhãn", "Nội Dung Chi Tiết"][, ["<termStyle>", "<tipStyle>"]])`
>    - Tham số 2 (Smart ID): Cặp mã Base-36 ID `["💎 Kterm", "💎 Ktip"]` độc lập cho từng vế.
>    - Tham số 3 (Smart Type): Cặp icon ngữ nghĩa (mặc định `["dia", "tip"]` cho `🔹` và `💡`, hoặc `["nam", "tip"]` cho `🪪` và `💡`).
>    - Tham số 4 (Smart Text): Cặp mảng 2 vế. Vế trước là Text ngoài hiển thị, vế sau là Tooltip giải nghĩa ẩn.
>    - Tham số 5 (Smart Style - Tùy chọn): Tông màu highlight hoặc style CSS cho cụm từ. Mặc định nền trong suốt và không gạch dưới.
> 4. **Trải Nghiệm Tương Tác UI Obsidian Phân Lớp Tối Ưu**:
>    - **Rê chuột vào Cụm Chữ ngoài**: Hiển thị **Tooltip Flyout** tương tác độc quyền (`#qmd-twin-tooltip-flyout`) có 2 nút bấm tiện dụng `[📋 Copy Text]` (chép văn bản ngoài) và `[📋 Copy Tip]` (chép nội dung chú giải) kèm phản hồi thị giác `✔ Đã chép!`.
>    - **Rê chuột vào 2 Nút Emoji đầu cuối**: Hiển thị **Spec Flyout Card** kỹ thuật chuẩn hóa (`💎 ID`, `🏷️ Loại`, `🚩 Giai đoạn`, `💍 Tầng nghĩa`, `👑 Trạng thái`, `📜 Phiên bản`) hoàn toàn thanh thoát, triệt tiêu việc lặp lại câu văn giải nghĩa gây rối mắt.

