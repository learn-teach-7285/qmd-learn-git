---
name: qmd-ups-skl
description: Quy trình kiểm tra, nâng cấp & đồng bộ 100% hệ thống Skills, Rules, Scripts và Mã Định Danh ID toàn Vault không bị lộn sót. Kích hoạt khi được yêu cầu nâng cấp skill hay rà soát quy trình.
🆔 id: 💎 K5jhuvp7vr9i
💍 code: QC-MDS-SKILL-UPS-SKL
🪞 title: Quy chuẩn kiểm tra & nâng cấp hệ thống Skills, Rules, Scripts toàn Vault
🔰 type: 🧰 AI-SKILL
🚥 status: 🌿 Ready
---
`$= qc("c")`

# 💎 QC-MDS-SKILL-UPS-SKL

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr9c", "sh1")` Kỹ năng quy chuẩn nâng cấp & đồng bộ hệ thống Skills, Rules và Scripts `$= qc("c", "💎 K5jhuvp7vr9d", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vr9e", "gk")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr9f", "gv")` Đảm bảo mọi phiên nâng cấp logic, cú pháp hoặc script nền tảng được đồng bộ 100% không trùng sót trên toàn hệ thống.
`$= qc("c", "💎 K5jhuvp7vr9g", "ak")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr9h", "av")` Thực thi quy trình 5 bước kiểm tra & đối soát bắt buộc bên dưới trước khi công bố hoàn tất nâng cấp.

---

## 1. BẢN ĐỒ ĐIỀU PHỐI QUY TRÌNH NÂNG CẤP HỆ THỐNG (UPGRADE WORKFLOW MAP)

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr90", "sh2")` Bản đồ 5 bước quy trình nâng cấp & kiểm tra hệ thống `$= qc("c", "💎 K5jhuvp7vr9a", "hd2")`</span>


> [!IMPORTANT]
> **5 BƯỚC BẮT BUỘC KHI NÂNG CẤP BẤT KỲ SKILL, RULE HOẶC SCRIPT NÀO**:
> 1. `$= qc("c", "💎 K5jhuvp7vr91", "gk")` **Biên Dịch & Nén Tự Động Script**: Khi sửa bất kỳ module nào trong kho mã nguồn `qmd-spec-vault/.src/`, **BẮT BUỘC** chạy `node .src/build.js` để sinh bundle plugin `main.js`, kiểm tra `node --check` 0 lỗi syntax và cửa băm nguồn khớp `.src/BASELINE.sha` trước khi đẩy git.
> 2. `$= qc("c", "💎 K5jhuvp7vr92", "gv")` **Đồng bộ Thượng Tầng & Kỹ Năng**: Cập nhật cả `AGENTS.md`, `GEMINI.md`, bộ quy tắc [[.agents/rules/qmd-fbd-apc.md|qmd-fbd-apc]], [[.agents/rules/qmd-fbd-hdn.md|qmd-fbd-hdn]] và các kỹ năng liên quan (`qmd-wfb-*`).
> 3. `$= qc("c", "💎 K5jhuvp7vr93", "ak")` **Chuẩn Hóa Mã Base-36 & Semantic Type**: Đảm bảo mỗi vị trí nút bấm sở hữu mã Base-36 độc lập (`Param 2`), truyền Semantic Type ngắn (`Param 4`: `hd1`..`hd6`, `sh1`..`sh6`, `gk`, `gv`, `ak`, `av`) và hỗ trợ mã duyệt siêu ngắn (`"y"`, `"pass"`).
> 4. `$= qc("c", "💎 K5jhuvp7vr94", "av")` **Quét Refactor Đa Thư Mục/Workspace**: Quét kiểm tra tất cả các workspace/folder đang hoạt động (`qmd-spec-vault`, `qmd-auth-vault`, `drv-api-docs`, `drv-rose-project`, `qc-qrm-docs`...) để refactor các file còn vi phạm.
> 5. **An Toàn Đường Dẫn 100%**: Tuyệt đối không dùng đường dẫn ổ đĩa tuyệt đối (`X:/`, `C:/`) khi nhúng link trong các tệp Markdown/Skills/Rules. Chỉ sử dụng Wikilink tương đối `[[.agents/...]]` hoặc `[.agents/...](.agents/...)` theo [[.agents/skills/qmd-ens-lnk/SKILL.md|qmd-ens-lnk]].

---

## 2. QUY CHUẨN ĐỊNH DẠNG LINK TƯƠNG ĐỐI AN TOÀN (RELATIVE LINK SAFETY)

<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr95", "sh2")` Quy tắc bắt buộc không dùng đường dẫn tuyệt đối trong link `$= qc("c", "💎 K5jhuvp7vr9b", "hd2")`</span>


`$= qc("c", "💎 K5jhuvp7vr96", "gk")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr97", "gv")` Đảm bảo tệp đặc tả có thể di chuyển hoặc mở trên bất kỳ máy tính/OS nào mà không bị hỏng liên kết.
`$= qc("c", "💎 K5jhuvp7vr98", "ak")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr99", "av")` Loại bỏ hoàn toàn prefix `file:///X:/...` hay `X:\...` khi ghi link nội bộ trong các tệp `.md`. Phải dùng định dạng Wikilink tương đối `[[...]]` hoặc Markdown link tương đối `[...] (...)`.
