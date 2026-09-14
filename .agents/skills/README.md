---
name: qmd-us-roadmap
id: 💎 K5jhuvp7vrdx
code: QC-MDS-ROADMAP-US-DUALGIT
title: Lộ trình triển khai Hệ thống .us/ Comments Notes, Registry & ACL Index
type: 📌 AI-TASK
status: 🛠️ Draft
description: Lộ trình chi tiết triển khai Kiến trúc Quản lý Trạng thái Người dùng (.us/), Hệ thống Thảo luận & Ghi chú (Comments & Notes), Central Registry (.cfgs/users & groups), ACL Index (.us/{file_id}/index.json), và Hạ tầng 2 Git Song song (Dual-Git).
🚥 status: ❓ Pending
---
`$= qc("c")`

# 💎 QC-MDS-ROADMAP-US-DUALGIT
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrdv", "sh1")` Lộ Trình Triển Khai Hệ Thống `.us/`, Comments, Central Registry & ACL Index `$= qc("c", "💎 K5jhuvp7vrdw", "hd1")`</span>

> [!NOTE]
> Tài liệu định hướng kiến trúc Quản lý Trạng thái Người dùng (`.us/`), Hệ thống Thảo luận/Ghi chú (Comments & Notes), Danh mục Tập trung (`.cfgs/`), Chỉ mục Phân quyền (`index.json`) và Hạ tầng 2 Git Song song (Dual-Git) cho hệ thống QCD Markdown.

---

## 1. 💎 QC-US-SEC-FOLDER-STRUCTURE

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrdy", "sh2")` 1. Kiến Trúc Thư Mục `.us/` & Tệp Dữ Liệu `$= qc("c", "💎 K5jhuvp7vrdz", "hd2")`</span>

- [x] `$= qc("c", "💎 K5jhuvp7vre0", "tsk")` Định vị thư mục ẩn local `.us/` tại từng folder chứa tệp Markdown (`.md`).
- [x] `$= qc("c", "💎 K5jhuvp7vre1", "tsk")` Tạo thư mục con `.us/{file_id}/` đặt tên theo Mã Định Danh `id: 💎 K...` bất biến trong YAML Header của file `.md`.
- [x] `$= qc("c", "💎 K5jhuvp7vre2", "tsk")` Định dạng tệp `public.json` chứa Thảo luận công khai, Chú thích chung và Trạng thái Master Team.
- [x] `$= qc("c", "💎 K5jhuvp7vre3", "tsk")` Định dạng các tệp `{username}.json` (ví dụ `qtu.json`, `nhan7285.json`) chứa Phê duyệt cá nhân & Ghi chú riêng tư (Private Notes).

---

## 2. 💎 QC-US-SEC-UI-UX

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vre4", "sh2")` 2. Giao Diện & Trải Nghiệm Người Dùng (UI/UX) `$= qc("c", "💎 K5jhuvp7vre5", "hd2")`</span>

- [x] `$= qc("c", "💎 K5jhuvp7vre6", "tsk")` Hiển thị Micro-Badge `💬 N` cạnh nút `qc("c")` khi mục có bình luận hoặc ghi chú.
- [x] `$= qc("c", "💎 K5jhuvp7vre7", "tsk")` Thiết kế Khung Thảo Luận Nổi (Popover Card Glassmorphism UI) khi click chuột vào nút `qc("c")` hoặc badge `💬`.
- [x] `$= qc("c", "💎 K5jhuvp7vre8", "tsk")` Tối giản Context Menu thành 2 tùy chọn sắc nét: `💬 Thảo luận` và `📝 Ghi chú`.
- [x] `$= qc("c", "💎 K5jhuvp7vre9", "tsk")` Phục hồi thông báo khởi động nguyên bản tinh tế (`🚀 QMD đã sẵn sàng!` tại `top: 82px; right: 24px;`).

---

## 3. 💎 QC-US-SEC-ENGINE

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrea", "sh2")` 3. Động Cơ `ac.js` (Core Engine) `$= qc("c", "💎 K5jhuvp7vreb", "hd2")`</span>

- [x] `$= qc("c", "💎 K5jhuvp7vrec", "tsk")` Cấu hình nạp dữ liệu song song từ `.us/{file_id}/public.json` và `.us/{file_id}/{username}.json`.
- [x] `$= qc("c", "💎 K5jhuvp7vred", "tsk")` Triển khai cơ chế **Single Initialization Trigger**: Chỉ thực thi `Smart Auto-Relocate` 1 lần duy nhất tại câu lệnh khởi tạo đầu tệp `` `$= qc("c")` ``.
- [x] `$= qc("c", "💎 K5jhuvp7vree", "tsk")` Tích hợp RAM Cache để tất cả các nút `qc("c")` phía dưới nạp dữ liệu tức thì (0ms I/O).
- [x] `$= qc("c", "💎 K5jhuvp7vref", "tsk")` Tự động phát hiện và di chuyển thư mục `.us/{file_id}/` khi tệp `.md` bị kéo thả di chuyển lẻ sang folder khác.
- [x] `$= qc("c", "💎 K5jhuvp7vreg", "tsk")` Thực thi Quy tắc Biên dịch & Nén Tự động (Rule 10 - MANDATORY SCRIPT BUILD & MINIFY RULE) build `qmd-spec-vault/.src/` ➔ `.obsidian/plugins/qmd/main.js`.

---

## 4. 💎 QC-US-SEC-REGISTRY

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vreh", "sh2")` 4. Danh Mục Quản Lý Tập Trung Users & Groups (`.cfgs/`) `$= qc("c", "💎 K5jhuvp7vrei", "hd2")`</span>

- [x] `$= qc("c", "💎 K5jhuvp7vrej", "tsk")` Khởi tạo tệp `.cfgs/users.json` chứa danh sách tất cả Username hợp lệ trong Vault (ví dụ `["qtu", "nhan7285", "admin"]`).
- [x] `$= qc("c", "💎 K5jhuvp7vrek", "tsk")` Khởi tạo tệp `.cfgs/groups.json` chứa danh mục Nhóm và danh sách thành viên (ví dụ `{ "dev": ["qtu", "nhan7285"], "leads": ["qtu"] }`).
- [x] `$= qc("c", "💎 K5jhuvp7vrel", "tsk")` Nạp tự động `users.json` và `groups.json` vào RAM Cache khi `ac.js` khởi chạy session.
- [x] `$= qc("c", "💎 K5jhuvp7vrem", "tsk")` Hỗ trợ tính năng Autocomplete gợi ý gõ `@` nạp danh sách gợi ý cả User (`@qtu`) lẫn Group (`@dev`) trên Form nhập liệu.

---

## 5. 💎 QC-US-SEC-FORM-SHARE

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vren", "sh2")` 5. Form Nhập Liệu Thống Nhất & Phân Quyền Chia Sẻ Riêng (Selective Sharing) `$= qc("c", "💎 K5jhuvp7vreo", "hd2")`</span>

- [x] `$= qc("c", "💎 K5jhuvp7vrep", "tsk")` Thiết kế Form nhập liệu 1 ô thống nhất thay thế 2 tab, kèm ô Checkbox `🌐 Công khai (Public)`.
- [x] `$= qc("c", "💎 K5jhuvp7vreq", "tsk")` Thiết lập cờ default: Bấm `💬 Thảo luận` $\rightarrow$ Mặc định Checkbox `🌐 Công khai` = **ON**; Bấm `📝 Ghi chú` $\rightarrow$ Mặc định Checkbox `🌐 Công khai` = **OFF**.
- [x] `$= qc("c", "💎 K5jhuvp7vrer", "tsk")` Tích hợp trường `👥 Chia sẻ riêng` cho phép chọn 1 hoặc nhiều User / Group khi cờ Public = OFF.
- [x] `$= qc("c", "💎 K5jhuvp7vres", "tsk")` Định dạng cấu trúc lưu trữ phân lập chống sai sót tuyệt đối trong JSON: `"s": { "u": ["nhan7285"], "g": ["dev"] }`.

---

## 6. 💎 QC-US-SEC-ACL-INDEX

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vret", "sh2")` 6. Chỉ Mục Phân Quyền Đảo Nguồn (`.us/{file_id}/index.json`) & Lazy Loading `$= qc("c", "💎 K5jhuvp7vreu", "hd2")`</span>

- [x] `$= qc("c", "💎 K5jhuvp7vrev", "tsk")` Thiết kế tệp tra cứu siêu nhẹ `.us/{file_id}/index.json` lưu bản đồ phân quyền `{ [effId]: { "u": "creator", "s": { "u": [...], "g": [...] } } }`.
- [x] `$= qc("c", "💎 K5jhuvp7vrew", "tsk")` Triển khai thuật toán **Lazy Read 2 Bước**: Khi nạp file, chỉ đọc `public.json`, `index.json` và tệp cá nhân người đang xem; Bỏ qua 100% các tệp user khác nếu không được share.
- [x] `$= qc("c", "💎 K5jhuvp7vrex", "tsk")` Tự động ghi nhận/cập nhật chỉ mục vào `index.json` ngầm (0ms) mỗi khi bất kỳ user nào tạo, sửa hoặc đổi quyền share.
- [x] `$= qc("c", "💎 K5jhuvp7vrey", "tsk")` Gắn nhãn badge minh bạch trên Popover Card UI: `🌐 Public`, `🔒 Chỉ mình tôi`, `👥 Được chia sẻ bởi {creator} (Cho @{group})`.

---

## 7. 💎 QC-US-SEC-DUAL-GIT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vrez", "sh2")` 7. Hạ Tầng 2 Git Song Song & Phân Quyền Privacy (Giai Đoạn 2 - Nâng Cấp Tương Lai) `$= qc("c", "💎 K5jhuvp7vrf0", "hd2")`</span>

> [!NOTE]
> Mục 7 thuộc Giai đoạn 2 (Post-MVP): Triển khai khi vault phát triển quy mô làm việc nhóm bảo mật đa lớp.

- [ ] `$= qc("c", "💎 K5jhuvp7vrf1", "tsk")` Cấu hình tệp `.gitignore` quy định loại trừ `.us/*/*.json` và giữ lại `!.us/*/public.json`.
- [ ] `$= qc("c", "💎 K5jhuvp7vrf2", "tsk")` Đặt thư mục `.git/` gốc làm Git Mặc Định (Public Team Repo) cho Obsidian Git Plugin & VS Code.
- [ ] `$= qc("c", "💎 K5jhuvp7vrf3", "tsk")` Khởi tạo thư mục `.git-private/` làm Git Phụ Song Song (Private Personal Repo).
- [ ] `$= qc("c", "💎 K5jhuvp7vrf4", "tsk")` Tạo alias/script hỗ trợ sync Git Private bằng lệnh `git --git-dir=.git-private --work-tree=.`.
