---
name: qmd-ens-git
description: Tự động kiểm tra, gợi ý và thực thi Git Commit & Push sau khi chỉnh sửa tệp tin.
🆔 id: 💎 K5jhuvp7vr4p
💍 code: QC-MDS-SKILL-ENS-GIT-COMMIT
🪞 title: Tự động gợi ý & thực thi Git Commit & Push sau khi sửa tệp
🔰 type: 🧰 AI-SKILL
🚥 status: 🌿 Ready
---
`$= qc("c")`

# 💎 QC-MDS-SKILL-ENS-GIT-COMMIT
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4q", "sh1")` Quy trình tự động kiểm tra, gợi ý & thực thi Git Commit & Push `$= qc("c", "💎 K5jhuvp7vr4r", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vr4s", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr4t", "gov")` Đảm bảo mọi thay đổi tệp tin bởi AI Agent được gợi ý xác nhận và đẩy lên Git kịp thời, an toàn.
`$= qc("c", "💎 K5jhuvp7vr4u", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr4v", "acv")` Tự động gợi ý ở cuối phản hồi, sinh commit message tiếng Việt và thực thi `git push` khi người dùng gửi `y` hoặc `.`.

---

## 1. 💎 QC-MDS-SKILL-ENS-GIT-ASK

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr4w", "sh2")` Gợi ý xác nhận Commit & Push ở cuối phản hồi `$= qc("c", "💎 K5jhuvp7vr4x", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr4y", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr4z", "gov")` Nhắc nhở người dùng sao lưu mã nguồn sau mỗi đợt chỉnh sửa tệp tin.
`$= qc("c", "💎 K5jhuvp7vr50", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr51", "acv")` Sau mỗi lượt (turn) có thay đổi tệp, luôn thêm câu hỏi cuối phản hồi: *"Bạn có muốn Commit & Push các thay đổi này lên Git không? (Gửi `y` hoặc `.` để đồng ý)"*.

---

## 2. 💎 QC-MDS-SKILL-ENS-GIT-EXEC

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr52", "sh2")` Tự động sinh Commit Message tiếng Việt & Push lên Git `$= qc("c", "💎 K5jhuvp7vr53", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr54", "gok")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr55", "gov")` Đẩy code tự động khi nhận phản hồi `y`, `yes`, hoặc `.`.
`$= qc("c", "💎 K5jhuvp7vr56", "ack")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr57", "acv")` Chạy `git status` -> sinh commit message tiếng Việt chuẩn nghiệp vụ -> thực thi `git add -A`, `git commit -m "..."`, `git push origin main` -> báo cáo kết quả SHA commit.
