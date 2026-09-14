---
name: qmd-env-plg
💍 code: QC-ENV-PLG
🪞 title: Quy chuẩn môi trường & plugins Obsidian
🔰 type: 🛡️ AI-RULE
🚥 status: 🌿 Ready
---
`$= qc("c")`

# 💎 QCD-ENV-PLG (Rule Quy Chuẩn Môi Trường & Plugins Obsidian)

<span style="color:#15803d; font-weight:700;">👉 Quy định Chuẩn hóa Danh sách Plugin Nền Tảng, Cấu hình Mặc định & Bộ Script cho toàn bộ Vault thuộc hệ thống QCD.</span>

---

## 1. 💎 QC-RU-PLG-DATAVIEW
<span style="color:#15803d; font-weight:700;">Obsidian Plugin Dataview (`dataview`)</span>

🪪 **Tên**: Cấu Hình Bắt Buộc Plugin Dataview  
📝 **Nội dung**: Bắt buộc có `"dataview"` trong mảng `.obsidian/community-plugins.json` và tệp `.obsidian/plugins/dataview/data.json` phải bật ON 100% tính năng Inline DataviewJS:
```json
{
  "enableDataviewJs": true,
  "enableInlineDataviewJs": true,
  "enableDataviewJsInline": true
}
```

---

## 2. 💎 QC-RU-PLG-SHOW-HIDDEN-FILES
<span style="color:#15803d; font-weight:700;">Plugin Show Hidden Files (`show-hidden-files`)</span>

🪪 **Tên**: Cấu Hình Bật ON Hiển Thị Thư Mục Ẩn  
📝 **Nội dung**: Bắt buộc có `"show-hidden-files"` trong `.obsidian/community-plugins.json` và tệp `.obsidian/plugins/show-hidden-files/data.json` bật hiển thị thư mục ẩn `.agents/`:
```json
{
  "showHiddenFiles": true
}
```

---

## 3. 💎 QC-RU-PLG-AUTO-REVEAL
<span style="color:#15803d; font-weight:700;">Plugin Auto Reveal in Explorer (`auto-reveal-in-explorer`)</span>

🪪 **Tên**: Cấu Hình Tự Động Định Vị Tệp Trong Thư Mục  
📝 **Nội dung**: Bắt buộc có `"auto-reveal-in-explorer"` trong `.obsidian/community-plugins.json` để tự động cuộn định vị tệp đang mở trên cây thư mục Vault.

---

## 4. 💎 QC-RU-PLG-BASE-SCRIPTS
<span style="color:#15803d; font-weight:700;">Động Cơ QMD Runtime (Plugin `qmd`)</span>

🪪 **Tên**: Khởi Tạo Động Cơ Nút Bấm DataviewJS Bằng Plugin  
📝 **Nội dung**: Động cơ QMD nạp qua **Plugin Obsidian thật**, không qua CustomJS. Bắt buộc:
1. Thư mục `.obsidian/plugins/qmd/` hiện diện đủ 2 tệp `main.js` và `manifest.json`, sao chép từ gói cài offline `.agents/skills/qmd-ens-plg/qmd/`.
2. Chuỗi `"qmd"` có mặt trong `.obsidian/community-plugins.json` để Obsidian bật plugin.

Động cơ này xử lý Nút bấm Duyệt Mã ID (`qc("c")`), Nút User Badge Capsule (`uc("xem")`) và toàn bộ tiện ích tương tác DataviewJS của hệ QMD.

⚠️ **Lý do bắt buộc dùng Plugin thay CustomJS**: chỉ Plugin mới có `async onload()` để chạy `qmdPreloadVfs()` nạp trước kho dữ liệu vào RAM trước khi `qc()` bắt đầu vẽ. CustomJS gọi `bootstrap()` đồng bộ từ trong `eval` nên không await được, khiến toàn bộ trạng thái duyệt **không nạp và không lưu trên mobile**.

📌 **Tệp `.a21/js/qmd.js`**: đã chính thức bị loại bỏ khỏi toàn bộ hệ sinh thái Vaults. Runtime được quản trị và phân phối 100% qua plugin `.obsidian/plugins/qmd/main.js`.

---

## 5. 💎 QC-RU-PLG-CUSTOMJS
<span style="color:#15803d; font-weight:700;">Plugin Custom JS (`customjs`)</span>

🪪 **Tên**: Giữ CustomJS Nhưng Không Nạp Động Cơ  
📝 **Nội dung**: Vẫn bắt buộc có `"customjs"` trong `.obsidian/community-plugins.json` cho các script phụ trợ khác, nhưng tệp `.obsidian/plugins/customjs/data.json` **BẮT BUỘC ĐỂ TRỐNG** phần nạp động cơ, tránh nạp trùng với Plugin `qmd`:
```json
{
  "jsFiles": "",
  "jsFolder": "",
  "startupScriptNames": [],
  "registeredInvocableScriptNames": [],
  "rerunStartupScriptsOnFileChange": true
}
```
⚠️ **Quy Chuẩn Kiến Trúc Tệp Mã Nguồn `.src/ac.js`**:
1. Toàn bộ mã nguồn **bắt buộc phải là DUY NHẤT 1 `class ac { ... }`** bao bọc từ dòng 1 đến hết tệp để đảm bảo tính module hóa và tương thích bundle plugin.
2. Tất cả logic khởi tạo, hàm xử lý và gán `window.` phải nằm bên trong phương thức `static bootstrap() { ... }`.
3. **TUYỆT ĐỐI KHÔNG** đặt khối IIFE `(function() { ... })()` tự gọi hoặc bất kỳ câu lệnh nào nằm ngoài `class ac`. Động cơ `node .src/build.js` có cửa kiểm tra hợp đồng này và sẽ dừng build nếu vi phạm.

---

## 6. 💎 QC-RU-PLG-CODE-STYLER
<span style="color:#15803d; font-weight:700;">Plugin Code Styler (`code-styler`)</span>

🪪 **Tên**: Cấu Hình Hiển Thị Tiêu Đề Code Block Header & Styling  
📝 **Nội dung**: Bắt buộc có `"code-styler"` trong `.obsidian/community-plugins.json` để tự động nhận diện và hiển thị thanh tiêu đề tệp (`title="filename.ext"`), số dòng, tab bar và nút sao chép chuyên nghiệp cho 100% các khối Fenced Code Block.

---

## 7. 💎 QC-RU-PLG-OFFLINE-PRINCIPLE
<span style="color:#15803d; font-weight:700;">Quy Tắc Độc Lập Offline Của Plugin Vault (Zero-Internet Self-Healing)</span>

🪪 **Tên**: Quy Tắc Đóng Gói Bộ Cài Offline Cho Mọi Plugin Vault  
📝 **Nội dung**: Mọi Plugin khi được bổ sung vào danh sách quy chuẩn Nền Tảng **BẮT BUỘC** phải có thư mục bộ cài mẫu offline đặt trực tiếp tại `.agents/skills/qmd-ens-plg/<plugin-id>/`. Khi AI Agent làm việc trên Vault mới hoặc khôi phục tự chữa lành, AI **BẮT BUỘC** copy trực tiếp thư mục bộ cài mẫu offline này sang `.obsidian/plugins/<plugin-id>/` mà không phụ thuộc vào kết nối Internet hay tải trực tuyến từ Obsidian Store.
