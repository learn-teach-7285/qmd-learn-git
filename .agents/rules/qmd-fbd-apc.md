---
name: qmd-fbd-apc
💍 code: QC-FBD-APC
🪞 title: Quy chuẩn nút bấm mã duyệt DataviewJS
🔰 type: 🛡️ AI-RULE
🚥 status: 🌿 Ready
---
`$= qc("c")`

# 💎 QCD-FBD-APC (Rule Quy Chuẩn Nút Bấm Mã Duyệt DataviewJS)

<span style="color:#15803d; font-weight:700;">👉 Quy định Cú pháp, Vị trí, Icon & Quản trị Phiên bản cho các Nút Bấm Kiểm Duyệt Mã ID DataviewJS thuộc hệ thống QCD.</span>

---

## 1. 💎 QC-FBD-APC-RULS

<a id="1.1. 💎 QC-RU-APC-LOADER-POSITION"></a>
### 1.1. 💎 QC-RU-APC-LOADER-POSITION
<span style="color:#15803d; font-weight:700;">Dòng Khởi Tạo Alias Nút Bấm Ở ĐẦU TỆP</span>

🪪 **Tên**: Vị Trí Nhúng Alias Nút Bấm DataviewJS  
📝 **Nội dung**: Ngay sau khối YAML Header `---`, **BẮT BUỘC** nhúng duy nhất 1 dòng nạp alias:
```markdown
`$= qc("c")`
```

---

<a id="1.2. 💎 QC-RU-APC-DUAL-KEYVALUE"></a>
### 1.2. 💎 QC-RU-APC-DUAL-KEYVALUE
<span style="color:#15803d; font-weight:700;">Bộ Biểu Tượng Mã Kép Cho Dòng Key-Value (🪄, 💧, ⛵) & Quy Chuẩn Mã ID Tinh Khiết</span>

🪪 **Tên**: Quy Tắc Phân Tầng Icon Nút Bấm Key-Value & Độc Lập Mã ID  
📝 **Nội dung**:
- **Nguyên Tắc Mã ID Tinh Khiết (Pure Base-36 ID)**:
  - Mã ID (`💎 K...`) là chuỗi Base-36 thuần túy đại diện cho Thời gian Khởi tạo, **tuyệt đối KHÔNG ghép các suffix đuôi `_gk`, `_gv`, `_ak`, `_av`**.
  - Mỗi nút bấm trên dòng sở hữu 1 Mã ID duy nhất 100% toàn Vault để đảm bảo tính phê duyệt độc lập.
- **Nguyên Tắc Vàng Về Hiển Thị Emoji Nút Bấm**:
  - **Mặc định khi Chưa duyệt (`state !== "y"`)**: TẤT CẢ các nút bấm trên màn hình đều hiển thị Dấu Hỏi **`❓`** (chờ rà soát).
  - **Chỉ khi Đã duyệt (`state === "y"`)**: Nút bấm mới được phép hiển thị Biểu Tượng Emoji Quy Định Theo Tham Số 4 (`Param 4`).
- **Bộ Từ Khóa Mã Loại Key-Value 3 Ký Tự Chuẩn (Tham số 4)**:
  - **Nút Nhãn Mục Tiêu (Goal Key)**: Đặt ở ĐẦU DÒNG trước nhãn `🎯 Mục tiêu`, sở hữu mã loại `"gok"` (chưa duyệt: **`❓`** | đã duyệt: **`🪄`** Gậy Phép).
  - **Nút Giá Trị Mục Tiêu (Goal Value)**: Đặt ở TRƯỚC NỘI DUNG của `🎯 Mục tiêu:`, sở hữu mã loại `"gov"` (chưa duyệt: **`❓`** | đã duyệt: **`💧`** Giọt Nước).
  - **Nút Nhãn Hành Động (Action Key)**: Đặt ở ĐẦU DÒNG trước nhãn `📌 Hành động`, sở hữu mã loại `"ack"` (chưa duyệt: **`❓`** | đã duyệt: **`🪄`** Gậy Phép).
  - **Nút Giá Trị Hành Động (Action Value)**: Đặt ở TRƯỚC NỘI DUNG của `📌 Hành động:`, sở hữu mã loại `"acv"` (chưa duyệt: **`❓`** | đã duyệt: **`⛵`** Con Tàu).
- **Các Mã Loại Mở Rộng 3 Ký Tự Khác (Tham số 4 khi `state === "y"`)**:
  - `"rul"`: Quy tắc Rule (**`🛡️`**) | `"skl"`: Kỹ năng Skill (**`🧰`**) | `"col"`: Tiêu đề Cột Bảng (**`📊`**) | `"tes"`: Kịch bản QA Test (**`🧪`**) | `"tsk"`: Kịch bản Task (**`📌`**).

---

<a id="1.3. 💎 QC-RU-APC-NO-AUTO-PASS"></a>
### 1.3. 💎 QC-RU-APC-NO-AUTO-PASS
<span style="color:#15803d; font-weight:700;">Nghiêm Cấm AI Tự Ý Đổi Trạng Thái Duyệt ❓ Sang Pass</span>

🪪 **Tên**: Quy Tắc Độc Quyền Quyền Lực Phê Duyệt Của Con Người  
📝 **Nội dung**: 
- **Bộ 3 Trạng Thái Duyệt Siêu Ngắn (Binary Trio)**:
  - **`"y"`** (Yes): Đã Phê Duyệt / Đồng Ý (Render `🌿`, `🪄`, `💧`, `⛵` theo Param 4).
  - **`"n"`** (No): Hủy Duyệt / Từ Chối (Render `❓` dấu hỏi đỏ).
  - **`""`** (rỗng / `""` / `"❓"`): Chưa Duyệt Mặc Định (Render `❓` dấu hỏi đỏ).
- **Tuyệt đối cấm AI tự pass/duyệt**: AI **TUYỆT ĐỐI KHÔNG ĐƯỢC TỰ Ý** đổi tham số từ `""` / `"n"` / `"❓"` sang `"y"` hoặc đổi sang bất kỳ emoji duyệt nào khác.
- **Trường hợp dán mã thuần `💎 K...`**: AI **KHÔNG ĐỔI TANG "y"**, mà coi đó là yêu cầu Rà soát, Phân tích & Đề xuất Wording tối ưu.
- **Bắt buộc có Dấu Chấm `.` hoặc Lệnh Duyệt Khẳng Định**: AI CHỈ ĐƯỢC ĐỔI sang `"y"` khi tin nhắn chat có Dấu Chấm `.` ở cuối (ví dụ: `💎 K... .`), từ khóa phê duyệt (`duyệt`, `ok`), hoặc lệnh duyệt dải (`💎 Kstart ... 💎 Kend`).

---

<a id="1.4. 💎 QC-RU-APC-RANGE-APPROVAL"></a>
### 1.4. 💎 QC-RU-APC-RANGE-APPROVAL
<span style="color:#15803d; font-weight:700;">Cú Pháp Lệnh Duyệt Dải Mã ID Siêu Ngắn (START_ID ... END_ID)</span>

🪪 **Tên**: Quy Tắc Duyệt Hàng Loạt Theo Dải Mã ID  
📝 **Nội dung**: 
- **Cú pháp lệnh chat**: `💎 Kstart ... 💎 Kend` hoặc `💎 Kstart...💎 Kend` (Khoảng trắng hai bên dấu ba chấm `...` là tùy chọn, có hoặc không có đều hợp lệ 100%).
- **Thuật toán thực thi của AI**: Khi nhận lệnh chat dạng me, AI Agent **BẮT BUỘC** tự động xác định phạm vi dòng từ nút `Kstart` tới nút `Kend` (bao gồm cả các nút bấm trung gian ở giữa) và cập nhật tất cả các nút trong dải từ trạng thái `"❓"` sang `"pass"`.

---

<a id="1.5. 💎 QC-RU-APC-VERSIONING"></a>
### 1.5. 💎 QC-RU-APC-VERSIONING
<span style="color:#15803d; font-weight:700;">Quy Tắc Quản Trị Phiên Bản Nút Duyệt (APC Versioning 💎 V...)</span>

🪪 **Tên**: Quy Tắc Quản Trị Phiên Bản & Đánh Dấu Cập Nhật Logic  
📝 **Nội dung**: 
- **Mã Định Danh Gốc (`💎 K...`)**: Đại diện cho Ngày Giờ Khởi Tạo (`created_at`). Không thay đổi vĩnh viễn.
- **Mã Phiên Bản (`💎 V...`)**: Đại diện cho Ngày Giờ Cập Nhật / Nâng Cấp Logic Mới Nhất (`updated_at`), được băm từ Timestamp Unix ms / Datetime sang Base-36 có prefix `💎 V`.
- **Cú pháp nút nạp 5 tham số**: `qc("c", "💎 K...", "🪄")`.
- **Hiển thị Tooltip Hover**: Động cơ `ac.js` tự động giải mã cả 2 mã ID Base-36 ra Ngày Giờ `DD/MM/YYYY HH:mm:ss` tương ứng để hiển thị trên Tooltip rê chuột.
- **Cơ chế Tự Động Test Lại (Automated Re-Test Trigger)**: Khi Mã Spec có `Mã_Version_Spec > Mã_Version_QA`, Bảng Nghiệm Thu QA tự động hạ về `⏳ Outdated` và báo AI Agent thực thi lại kịch bản kiểm thử cho phiên bản mới!
- **Menu Chuột Phải Nâng Cao (Advanced Context Menu)**: Click chuột phải mở Menu 5 tùy chọn copy linh hoạt (Copy 2 mã, Copy mã ID gốc, Copy mã Version, Copy Ngày giờ khởi tạo, Copy Ngày giờ sửa).

---

<a id="1.6. 💎 QC-RU-APC-USERMODE-STORAGE"></a>
### 1.6. 💎 QC-RU-APC-USERMODE-STORAGE
<span style="color:#15803d; font-weight:700;">Phân Định Vị Trí Ghi Trạng Thái Phê Duyệt qc("c") Theo Usermode & Logic Key Khởi Tạo</span>

🪪 **Tên**: Quy Tắc Phân Định Vị Trí Ghi Trạng Thái Phê Duyệt qc("c")  
📝 **Nội dung**: 
1. **Khi Ở Mode 0 (`usermode === 0` Master Spec Mode)**: Thao tác duyệt/thay đổi trạng thái nút `qc("c")` nhằm mục đích hoàn thiện Master Spec Document Gốc ➔ **BẮT BUỘC SỬA TRỰC TIẾP VÀO TỆP MARKDOWN (`.md`)** (đổi tham số từ `"❓"` ➔ `"y"`, sinh mã phiên bản timestamp `💎 V...`).
2. **Khi Ở Mode 1 (`usermode === 1`) Hoặc Mode 2 (`usermode === 2` Comparison Mode ⚖️)**: Thao tác duyệt/hủy duyệt nút `qc("c")` là của User cá nhân (`<username>`) ➔ **BẮT BUỘC CHỈ GHI VÀO TỆP `.cfgs/users/<username>.json`** (tuyệt đối không sửa hay đụng vào tệp `.md` gốc).
3. **Quy Tắc Không Có Key = False (Chưa duyệt ❓)**: Trong tệp `.cfgs/users/<username>.json`, hệ thống áp dụng logic tối giản bộ nhớ:
   - **Chưa duyệt (`isUserApproved = false`)**: Không cần lưu key (hoặc xóa key `delete map[effId]`). Khi không có key, giao diện tự động hiểu là Chưa duyệt **`❓`**.
   - **Đã duyệt (`isUserApproved = true`)**: Lưu giá trị `"y"` (`map[effId] = "y"`). Giao diện tự động render icon Đã duyệt **`🌿`** (hoặc icon loại tương ứng `🪄`, `💧`, `⛵`).
4. **Rà Soát Tệp Session Bắt Buộc (`.cfgs/ses.json`) Tránh Lộn User**: Phải luôn đọc trực tiếp tệp `.cfgs/ses.json` trước mỗi thao tác ghi nhận duyệt để lấy chính xác `username` (`qtu`, `nhan7285`, v.v.) và `usermode` thời điểm hiện tại, tuyệt đối không dùng username cũ trong bộ nhớ tạm.

---

<a id="1.7. 💎 QC-RU-APC-SCRIPT-MIRRORING"></a>
### 1.7. 💎 QC-RU-APC-SCRIPT-BUILD-MINIFY
<span style="color:#15803d; font-weight:700;">Biên Dịch & Nén Tự Động Script qmd.js Từ Mã Nguồn ac.js</span>

🪪 **Tên**: Quy Tắc Biên Dịch & Nén Tự Động Script Động Cơ qmd.js  
📝 **Nội dung**: 
- **Kho Mã Nguồn Phát Triển Duy Nhất**: Mã nguồn phát triển nằm tại `qmd-spec-vault/.src/`, gồm tệp vỏ `ac.js` và các module được chèn tại marker `/* __QMD_MODULE:<tên tệp>__ */` theo đặc tả `QMD/SPECS/JS/MODULES.md`.
- **Bắt buộc tự động nén & biên dịch**: Mỗi khi sửa đổi bất kỳ tệp nào trong `.src/`, AI Agent **BẮT BUỘC** phải chạy `node .src/build.js` để sinh bundle plugin `.obsidian/plugins/qmd/main.js` (kèm bản lui CustomJS `.a21/js/qmd.js`), đồng thời kiểm tra `node --check` 0 lỗi syntax và **cửa băm nguồn khớp `.src/BASELINE.sha`** trong cùng một turn.
