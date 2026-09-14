---
name: git-tutorial-for-beginners-mosh
description: Hướng dẫn học Git toàn diện trong 1 giờ từ cơ bản đến nâng cao theo bài giảng của Programming with Mosh (Mosh Hamedani).
🆔 id: 💎 Kmu0dcfuf
💍 code: QC-YT-GIT-MOSH-TUTORIAL
🪞 title: Hướng dẫn học Git trong 1 giờ (Programming with Mosh)
🏷️ version: 1.0.0
🔰 type: 📚 DOCS
🚥 status: 🌿 Ready
---
`$= (window.qc || (window.qc = () => '⏳'))()`
# 💎 QC-YT-GIT-MOSH-TUTORIAL

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcfuw", "sh1")` Hướng dẫn học Git trong 1 giờ từ cơ bản đến nâng cao `$= qc("c", "💎 Kmu0dcfvd", "hd1")`</span>

`$= qc("c", "💎 Kmu0dcfvu", "⛵")` **Nguồn video**: [Git Tutorial for Beginners: Learn Git in 1 Hour](https://www.youtube.com/watch?v=8JJ101D3knE) - Giảng viên: **Mosh Hamedani** (*Programming with Mosh*). `$= qc("b", "💎 Kmu0dcfwb", "par")`
`$= qc("c", "💎 Kmu0dcfws", "🔹")` Tài liệu này tổng hợp và cấu trúc hóa toàn bộ 69 phút bài giảng, cung cấp hệ thống lý thuyết cốt lõi, kiến trúc 3 vùng làm việc, các lệnh thao tác hàng ngày và các phương pháp thực hành chuẩn (*Best Practices*). `$= qc("b", "💎 Kmu0dcfx9", "par")`

---

## 1. 💎 QC-GIT-OVERVIEW

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcfxq", "sh2")` Tổng quan hệ thống quản trị phiên bản và bản chất của Git `$= qc("c", "💎 Kmu0dcfy7", "hd2")`</span>

`$= qc("c", "💎 Kmu0dcfyo", "🔹")` **Hệ thống quản trị phiên bản** (*Version Control System - VCS*) là công cụ ghi nhận lịch sử thay đổi của tập tin mã nguồn theo thời gian, cho phép lập trình viên quay ngược phiên bản, so sánh khác biệt và cộng tác an toàn. `$= qc("b", "💎 Kmu0dcfz5", "par")`

### 1.1. 💎 QC-GIT-VCS-TYPES

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcfzm", "sh3")` Phân loại hệ thống quản trị phiên bản tập trung và phân tán `$= qc("c", "💎 Kmu0dcg03", "hd3")`</span>

`$= qc("c", "💎 Kmu0dcg0k", "🔹")` **Centralized VCS** (VCS Tập trung - ví dụ Subversion, TFS): Toàn bộ lịch sử mã nguồn nằm trên một máy chủ trung tâm duy nhất. Nhược điểm chí mạng là điểm lỗi đơn (*Single Point of Failure*) - nếu máy chủ sập hoặc mất kết nối mạng, toàn bộ nhóm phát triển không thể commit, xem lịch sử hay làm việc. `$= qc("b", "💎 Kmu0dcg11", "par")`

`$= qc("c", "💎 Kmu0dcg1i", "🔹")` **Distributed VCS** (VCS Phân tán - ví dụ Git, Mercurial): Mỗi máy trạm của lập trình viên đều sở hữu một bản sao kho lưu trữ hoàn chỉnh (*Full Local Repository*), bao gồm toàn bộ lịch sử commit. `$= qc("b", "💎 Kmu0dcg1z", "par")`

`$= qc("c", "💎 Kmu0dcg2g", "🔹")` Lợi ích vượt trội của Git: `$= qc("b", "💎 Kmu0dcg2x", "par")`
- `$= qc("c", "💎 Kmu0dcg3e", "🔹")` Hoạt động 100% độc lập khi mất mạng: Bạn có thể commit, tạo nhánh, duyệt log cục bộ với tốc độ tức thì. `$= qc("b", "💎 Kmu0dcg3v", "par")`
- `$= qc("c", "💎 Kmu0dcg4c", "🔹")` Khả năng chịu lỗi cao: Bất kỳ máy trạm nào cũng có thể đóng vai trò máy chủ sao lưu khôi phục lại toàn bộ dự án. `$= qc("b", "💎 Kmu0dcg4t", "par")`

---

## 2. 💎 QC-GIT-INSTALL-CONFIG

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcg5a", "sh2")` Cài đặt và cấu hình môi trường làm việc Git ban đầu `$= qc("c", "💎 Kmu0dcg5r", "hd2")`</span>

`$= qc("c", "💎 Kmu0dcg68", "🔹")` Git hỗ trợ nhiều phương thức tương tác: Dòng lệnh (*Command Line - CLI*), Ứng dụng đồ họa (*GUI*), và tích hợp trong Trình soạn thảo mã nguồn (*VS Code*). Lập trình viên chuyên nghiệp bắt buộc phải nắm vững CLI vì CLI có mặt trên 100% server Linux và thể hiện chính xác bản chất từng thao tác. `$= qc("b", "💎 Kmu0dcg6p", "par")`

### 2.1. 💎 QC-GIT-ESSENTIAL-CONFIG

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcg76", "sh3")` Các lệnh cấu hình danh tính và trình biên tập `$= qc("c", "💎 Kmu0dcg7n", "hd3")`</span>

`$= qc("c", "💎 Kmu0dcg84", "🔹")` Git lưu trữ cấu hình ở 3 cấp độ: System (toàn hệ thống), Global (cho user hiện tại), và Local (cho repository hiện tại). Dưới đây là các cấu hình bắt buộc thiết lập ngay sau khi cài đặt: `$= qc("b", "💎 Kmu0dcg8l", "par")`

```bash title="💻 terminal - Thiết lập danh tính & editor"
# Thiết lập họ tên và email tác giả commit
git config --global user.name "Mosh Hamedani"
git config --global user.email "mosh@programmingwithmosh.com"

# Thiết lập VS Code làm trình soạn thảo mặc định khi nhập thông điệp commit
git config --global core.editor "code --wait"

# Chuẩn hóa ký tự kết thúc dòng (Windows: CRLF sang LF khi commit, macOS/Linux: giữ LF)
# Dành cho Windows:
git config --global core.autocrlf true
# Dành cho macOS / Linux:
git config --global core.autocrlf input
```

`$= qc("c", "💎 Kmu0dcg92", "📦")` *Các lệnh cấu hình danh tính và editor mặc định của Git.*

### 2.2. 💎 QC-GIT-CONFIG-INSPECT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcg9j", "sh3")` Kiểm tra cấu hình và xem tài liệu trợ giúp `$= qc("c", "💎 Kmu0dcga0", "hd3")`</span>

```bash title="💻 terminal - Xem cấu hình & Trợ giúp"
# Mở file cấu hình global trực tiếp trong VS Code
git config --global -e

# Xem toàn bộ danh sách cấu hình đang hiệu lực
git config --list

# Mở tài liệu hướng dẫn đầy đủ trên trình duyệt
git config --help

# Xem tóm tắt nhanh các cờ tùy chọn của một lệnh (Quick Help)
git config -h
```

---

## 3. 💎 QC-GIT-ARCHITECTURE-AREAS

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcgah", "sh2")` Kiến trúc 3 vùng làm việc cốt lõi của Git `$= qc("c", "💎 Kmu0dcgay", "hd2")`</span>

`$= qc("c", "💎 Kmu0dcgbf", "🔹")` Để làm chủ Git, chìa khóa quan trọng nhất là hiểu rõ **3 vùng làm việc** (*The Three Areas*): `$= qc("b", "💎 Kmu0dcgbw", "par")`

| `$= qc("c", "💎 Kmu0dcgcd", "🔹")` VÙNG | `$= qc("c", "💎 Kmu0dcgcu", "🔹")` TÊN KỸ THUẬT | `$= qc("c", "💎 Kmu0dcgdb", "🔹")` VAI TRÒ & BẢN CHẤT |
| :--- | :--- | :--- |
| **01. Thư mục làm việc** | `Working Directory` | Chứa các tập tin mã nguồn vật lý đang được chỉnh sửa trên đĩa. |
| **02. Vùng chuẩn bị** | `Staging Area (Index)` | Vùng đệm chứa ảnh chụp (*Snapshot*) của những tập tin sẵn sàng ghi nhận vào commit tiếp theo. |
| **03. Kho lưu trữ** | `Repository (.git)` | Cơ sở dữ liệu vĩnh viễn chứa toàn bộ lịch sử các commit và metadata. |

`$= qc("c", "💎 Kmu0dcgds", "📊")` *Bảng đối soát 3 vùng làm việc căn bản trong kiến trúc Git.*

`$= qc("c", "💎 Kmu0dcge9", "🔹")` **Quy trình luân chuyển dữ liệu**: `$= qc("b", "💎 Kmu0dcgeq", "par")`
1. `$= qc("c", "💎 Kmu0dcgf7", "🔹")` Sửa đổi tập tin trong **Working Directory**. `$= qc("b", "💎 Kmu0dcgfo", "par")`
2. `$= qc("c", "💎 Kmu0dcgg5", "🔹")` Chạy `git add` để đưa bản chụp tập tin vào **Staging Area**. `$= qc("b", "💎 Kmu0dcggm", "par")`
3. `$= qc("c", "💎 Kmu0dcgh3", "🔹")` Chạy `git commit` để lưu snapshot vĩnh viễn vào **Repository**. `$= qc("b", "💎 Kmu0dcghk", "par")`

---

## 4. 💎 QC-GIT-WORKFLOW-BASICS

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcgi1", "sh2")` Khởi tạo dự án, quản lý trạng thái và ghi nhận commit `$= qc("c", "💎 Kmu0dcgii", "hd2")`</span>

### 4.1. 💎 QC-GIT-INIT-ADD-STATUS

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcgiz", "sh3")` Khởi tạo kho lưu trữ và thêm tập tin vào staging `$= qc("c", "💎 Kmu0dcgjg", "hd3")`</span>

```bash title="💻 terminal - Khởi tạo & Staging"
# Khởi tạo một git repository mới trong thư mục hiện hành
git init

# Đưa một tập tin cụ thể vào Staging Area
git add file1.js

# Đưa tất cả thay đổi trong thư mục hiện tại vào Staging Area
git add .
```

`$= qc("c", "💎 Kmu0dcgjx", "🔹")` **Kiểm tra trạng thái ngắn gọn với `git status -s`**: `$= qc("b", "💎 Kmu0dcgke", "par")`
`$= qc("c", "💎 Kmu0dcgkv", "🔹")` Thay vì hiển thị dài dòng, tùy chọn `-s` (*Short Status*) chia làm 2 cột: `$= qc("b", "💎 Kmu0dcglc", "par")`
- `$= qc("c", "💎 Kmu0dcglt", "🔹")` **Cột trái** (Màu xanh lá): Đại diện cho **Staging Area**. `$= qc("b", "💎 Kmu0dcgma", "par")`
- `$= qc("c", "💎 Kmu0dcgmr", "🔹")` **Cột phải** (Màu đỏ): Đại diện cho **Working Directory**. `$= qc("b", "💎 Kmu0dcgn8", "par")`
- `$= qc("c", "💎 Kmu0dcgnp", "🔹")` `??`: Tập tin chưa được theo dõi (*Untracked*). `$= qc("b", "💎 Kmu0dcgo6", "par")`
- `$= qc("c", "💎 Kmu0dcgon", "🔹")` `A `: Tập tin mới đã đưa vào staging (*Added*). `$= qc("b", "💎 Kmu0dcgp4", "par")`
- `$= qc("c", "💎 Kmu0dcgpl", "🔹")` `M `: Tập tin đã sửa đổi và đã đưa vào staging. `$= qc("b", "💎 Kmu0dcgq2", "par")`
- `$= qc("c", "💎 Kmu0dcgqj", "🔹")` ` M`: Tập tin đã sửa đổi trong working directory nhưng chưa stage. `$= qc("b", "💎 Kmu0dcgr0", "par")`
- `$= qc("c", "💎 Kmu0dcgrh", "🔹")` `MM`: Tập tin vừa có phần đã stage, vừa có chỉnh sửa mới sau khi stage. `$= qc("b", "💎 Kmu0dcgry", "par")`

### 4.2. 💎 QC-GIT-COMMIT-BEST-PRACTICES

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcgsf", "sh3")` Quy chuẩn ghi nhận commit và thực hành chuẩn `$= qc("c", "💎 Kmu0dcgsw", "hd3")`</span>

```bash title="💻 terminal - Ghi nhận commit"
# Ghi nhận commit với thông điệp trực tiếp
git commit -m "Initial commit"

# Đi tắt: Tự động stage tất cả file đã theo dõi bị sửa đổi/xóa và commit luôn
git commit -am "Refactor user authentication module"
```

> [!TIP]
> **Thực hành chuẩn khi commit (Best Practices theo Mosh Hamedani):**
> 1. `$= qc("c", "💎 Kmu0dcgtd", "🔹")` **Atomic Commits (Tính nguyên tử)**: Mỗi commit chỉ nên giải quyết một nhiệm vụ duy nhất (ví dụ sửa 1 lỗi cụ thể hoặc hoàn thành 1 hàm). Tránh gộp nhiều tính năng không liên quan vào cùng một commit. `$= qc("b", "💎 Kmu0dcgtu", "par")`
> 2. `$= qc("c", "💎 Kmu0dcgub", "🔹")` **Thông điệp thể mệnh lệnh (Imperative Mood)**: Viết như một câu ra lệnh (ví dụ: "Fix crash on login", "Add search filter", KHÔNG viết "Fixed..." hay "Added..."). `$= qc("b", "💎 Kmu0dcgus", "par")`
> 3. `$= qc("c", "💎 Kmu0dcgv9", "🔹")` **Độ dài hợp lý**: Dòng tiêu đề ngắn gọn dưới 50 ký tự, nếu cần giải thích chi tiết hãy để trống 1 dòng rồi viết thân bài giải thích lý do tại sao thay đổi. `$= qc("b", "💎 Kmu0dcgvq", "par")`

---

## 5. 💎 QC-GIT-FILE-MANAGEMENT

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcgw7", "sh2")` Quản lý tập tin: Xóa, đổi tên và loại trừ (.gitignore) `$= qc("c", "💎 Kmu0dcgwo", "hd2")`</span>

### 5.1. 💎 QC-GIT-RM-MV

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcgx5", "sh3")` Xóa và đổi tên tập tin bằng lệnh của Git `$= qc("c", "💎 Kmu0dcgxm", "hd3")`</span>

```bash title="💻 terminal - Xóa & Đổi tên"
# Xóa tập tin khỏi Working Directory đồng thời stage thao tác xóa vào Staging Area
git rm file2.txt

# Đổi tên hoặc di chuyển tập tin (tương đương xóa tên cũ và thêm tên mới)
git mv main.js app.js
```

### 5.2. 💎 QC-GIT-GITIGNORE-CACHED

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dcgy3", "sh3")` Cấu hình tập tin .gitignore và gỡ bỏ file đã lỡ theo dõi `$= qc("c", "💎 Kmu0dcgyk", "hd3")`</span>

`$= qc("c", "💎 Kmu0dcgz1", "🔹")` Tập tin `.gitignore` dùng để chỉ định các file hoặc thư mục mà Git không bao giờ theo dõi (như file build, dependency, logs, bí mật API). `$= qc("b", "💎 Kmu0dcgzi", "par")`

```gitignore title="📄 .gitignore - Ví dụ mẫu cấu hình"
# Loại trừ toàn bộ thư mục build và thư mục dependencies
bin/
node_modules/

# Loại trừ tất cả file có đuôi .log
*.log

# Loại trừ file log nhưng giữ lại một file quan trọng cụ thể
!important.log
```

`$= qc("c", "💎 Kmu0dcgzz", "🔹")` **Gỡ bỏ tập tin đã lỡ đưa vào Staging Area / Repository mà không muốn xóa file thật trên đĩa**: `$= qc("b", "💎 Kmu0dch0g", "par")`

```bash title="💻 terminal - Gỡ bỏ khỏi staging"
# Xóa thư mục bin/ khỏi Staging Area nhưng giữ nguyên trên ổ cứng
git rm --cached -r bin/

# Kiểm tra danh sách file hiện có trong Staging Area
git ls-files
```

---

## 6. 💎 QC-GIT-DIFF-INSPECTION

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dch0x", "sh2")` So sánh khác biệt mã nguồn và cấu hình công cụ trực quan `$= qc("c", "💎 Kmu0dch1e", "hd2")`</span>

### 6.1. 💎 QC-GIT-DIFF-COMMANDS

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dch1v", "sh3")` So sánh thay đổi giữa các vùng làm việc `$= qc("c", "💎 Kmu0dch2c", "hd3")`</span>

```bash title="💻 terminal - Lệnh git diff"
# So sánh Working Directory với Staging Area (Xem các thay đổi chưa stage)
git diff

# So sánh Staging Area với Commit gần nhất (Xem các thay đổi sắp được commit)
git diff --staged
# (Hoặc sử dụng cờ tương đương --cached)
git diff --cached
```

### 6.2. 💎 QC-GIT-VISUAL-DIFFTOOL

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dch2t", "sh3")` Cấu hình VS Code làm công cụ Diff trực quan `$= qc("c", "💎 Kmu0dch3a", "hd3")`</span>

`$= qc("c", "💎 Kmu0dch3r", "🔹")` Thay vì đọc các dòng `+` / `-` khó nhìn trên terminal, ta có thể tích hợp VS Code làm Visual Diff Tool: `$= qc("b", "💎 Kmu0dch48", "par")`

```bash title="💻 terminal - Cấu hình VS Code làm difftool"
git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"

# Sử dụng difftool để so sánh trực quan trên 2 khung màn hình VS Code
git difftool
git difftool --staged
```

---

## 7. 💎 QC-GIT-HISTORY-LOG

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dch4p", "sh2")` Tra cứu lịch sử commit và nội dung chi tiết `$= qc("c", "💎 Kmu0dch56", "hd2")`</span>

```bash title="💻 terminal - Xem lịch sử log & chi tiết commit"
# Xem toàn bộ lịch sử commit (phân trang, nhấn q để thoát)
git log

# Xem lịch sử ngắn gọn trên một dòng cho mỗi commit (mã hash rút gọn + message)
git log --oneline

# Xem lịch sử theo thứ tự thời gian từ cũ nhất đến mới nhất
git log --oneline --reverse

# Xem chi tiết nội dung thay đổi của một commit cụ thể
git show <commit-id>

# Xem commit mới nhất
git show HEAD

# Xem commit kế trước commit mới nhất
git show HEAD~1
```

---

## 8. 💎 QC-GIT-UNDOING-CHANGES

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dch5n", "sh2")` Hủy bỏ thay đổi và khôi phục mã nguồn (Git Restore) `$= qc("c", "💎 Kmu0dch64", "hd2")`</span>

`$= qc("c", "💎 Kmu0dch6l", "🔹")` Kể từ phiên bản Git 2.23+, lệnh `git restore` ra đời để tách biệt rõ ràng trách nhiệm hủy thao tác khỏi lệnh `git checkout`. `$= qc("b", "💎 Kmu0dch72", "par")`

```bash title="💻 terminal - Khôi phục và hủy thay đổi"
# 1. Bỏ stage một tập tin (đưa từ Staging Area quay lại Working Directory)
git restore --staged file1.js

# 2. Hủy bỏ toàn bộ sửa đổi chưa stage trong Working Directory (khôi phục từ Staging)
git restore file1.js

# 3. Hủy bỏ sửa đổi trên toàn bộ file trong thư mục hiện hành
git restore .

# 4. Xóa bỏ các tập tin và thư mục mới chưa theo dõi (Untracked)
git clean -fd

# 5. Khôi phục một tập tin về trạng thái của một commit cụ thể trong quá khứ
git restore --source=<commit-hash> file1.js
```

> [!WARNING]
> `$= qc("c", "💎 Kmu0dch7j", "🔹")` **Cảnh báo mất dữ liệu**: Thao tác `git restore <file>` và `git clean -fd` sẽ xóa vĩnh viễn các sửa đổi cục bộ chưa được commit. Hãy cân nhắc kỹ trước khi chạy! `$= qc("b", "💎 Kmu0dch80", "par")`

---

## 9. 💎 QC-GIT-SUMMARY-CHEATSHEET

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmu0dch8h", "sh2")` Bảng tổng hợp các lệnh Git hàng ngày (Cheatsheet) `$= qc("c", "💎 Kmu0dch8y", "hd2")`</span>

| `$= qc("c", "💎 Kmu0dch9f", "🔹")` STT | `$= qc("c", "💎 Kmu0dch9w", "🔹")` LỆNH GIT | `$= qc("c", "💎 Kmu0dchad", "🔹")` MÔ TẢ TÁC VỤ | `$= qc("c", "💎 Kmu0dchau", "🔹")` VÙNG TÁC ĐỘNG |
| :--- | :--- | :--- | :--- |
| **01** | `git init` | Khởi tạo kho lưu trữ Git cục bộ mới | Repository |
| **02** | `git config --global ...` | Thiết lập cấu hình hệ thống (tên, email, editor) | Global Config |
| **03** | `git status -s` | Xem trạng thái ngắn gọn 2 cột (Staged / Unstaged) | Working & Staging |
| **04** | `git add .` | Đưa toàn bộ sửa đổi vào vùng chuẩn bị | Staging Area |
| **05** | `git commit -m "..."` | Ghi nhận snapshot vĩnh viễn vào lịch sử | Repository |
| **06** | `git commit -am "..."` | Stage tự động các file tracked và commit | Working to Repo |
| **07** | `git diff` | So sánh thay đổi giữa Working Directory và Staging | Working vs Staging |
| **08** | `git diff --staged` | So sánh thay đổi giữa Staging và Commit trước | Staging vs Repo |
| **09** | `git difftool` | So sánh trực quan trên VS Code | External Tool |
| **10** | `git log --oneline` | Xem lịch sử commit rút gọn 1 dòng | Repository |
| **11** | `git show HEAD` | Xem chi tiết commit mới nhất | Repository |
| **12** | `git rm <file>` | Xóa file khỏi cả thư mục và staging | Working & Staging |
| **13** | `git mv <old> <new>` | Đổi tên hoặc di chuyển vị trí file | Working & Staging |
| **14** | `git rm --cached -r <dir>` | Gỡ bỏ khỏi staging nhưng giữ lại file trên đĩa | Staging Area |
| **15** | `git restore --staged <file>` | Bỏ stage tập tin (Unstage) | Staging Area |
| **16** | `git restore <file>` | Hủy thay đổi chưa stage của tập tin | Working Directory |
| **17** | `git clean -fd` | Dọn dẹp xóa bỏ toàn bộ file/folder untracked | Working Directory |
| **18** | `git restore --source=<hash> <f>` | Khôi phục tập tin về một commit trong quá khứ | Working & Staging |

`$= qc("c", "💎 Kmu0dchbb", "📊")` *Bảng tổng hợp 18 lệnh Git thiết yếu trong bài giảng 1 giờ của Mosh Hamedani.*
