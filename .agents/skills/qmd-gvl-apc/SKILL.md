---
name: qmd-gvl-apc
description: Thuật toán mã hóa ID Base-36 có prefix 💎 K (Gen Value Approve Code), Smart Auto-ID Inference và quy tắc kiểm tra tính duy nhất 100% toàn Vault. Kích hoạt khi sinh hoặc giải mã ID.
💍 code: QC-MDS-SKILL-GVL-APC
🪞 title: Động cơ sinh mã ID Base-36
🔰 type: 🧰 AI-SKILL
🚥 status: ⏳ Optimizing 🌿 name 🌿 desc
---
`$= qc("c")`


# 💎 QC-MDS-SKILL-GVL-APC
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr81", "sh1")` Kỹ năng Động Cơ Sinh Mã ID Base-36 (qmd-gvl-apc) `$= qc("c", "💎 K5jhuvp7vr82", "hd1")`</span>


`$= qc("c", "💎 K5jhuvp7vr83", "🪄")` **Mục tiêu**: `$= qc("c", "💎 K5jhuvp7vr84", "💧")` Đảm bảo quy trình sinh mã ID `💎 K...` Base-36 duy nhất 100% toàn Vault.
`$= qc("c", "💎 K5jhuvp7vr85", "🪄")` **Hành động**: `$= qc("c", "💎 K5jhuvp7vr86", "⛵")` Rà soát & thực thi thuật toán quy đổi ms sang Base-36 và pre-check trùng lặp.

---

## 1. Thuật Toán Mã Hóa & Giải Mã Base-36 (BASE-36 ALGORITHM)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr87", "sh2")` Quy định thuật toán mã hóa & giải mã Base-36 `$= qc("c", "💎 K5jhuvp7vr88", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN BẮT BUỘC SINH MÃ ID & PHIÊN BẢN BASE-36 TIMESTAMP**:
> 1. `$= qc("c", "💎 K5jhuvp7vr7y", "gk")` **Mã Khởi Tạo (`💎 K...`) & Mã Phiên Bản (`💎 V...`)**: **BẮT BUỘC** sinh từ mốc thời gian thực Unix Timestamp ms `BigInt(Date.now()).toString(36)`.
> 2. `$= qc("c", "💎 K5jhuvp7vr7z", "gv")` **Cấm Tuyệt Đối Chèn Chuỗi Tùy Biến**: Không tự gõ chữ tùy ý làm hỏng cấu trúc giải mã thời gian Base-36.
> 3. `$= qc("c", "💎 K5jhuvp7vr80", "ak")` **Giải Mã Thời Gian Việt Nam**: Khi gỡ bỏ `💎` và tiền tố `K` hoặc `V`, chuỗi Base-36 bắt buộc giải mã ra mốc thời gian Ngày/Giờ Việt Nam (`DD/MM/YYYY HH:mm:ss`) chính xác 100%.

```javascript
// Sinh mã ID khởi tạo Base-36 từ thời gian thực Unix ms (Date.now())
const kCode = "💎 K" + BigInt(Date.now()).toString(36); // e.g. "💎 K5jhuvp7vr3m"

// Sinh mã phiên bản Base-36 từ thời gian thực Unix ms (Date.now())
const vCode = "💎 V" + BigInt(Date.now()).toString(36); // e.g. "💎 Vmsix9t7e"

// Giải mã khôi phục mốc thời gian Ngày/Giờ Việt Nam (DD/MM/YYYY HH:mm:ss)
const clean = "msg3ptfl";
const timestamp = Number(BigInt(parseInt(clean, 36)));
const formattedDate = new Date(timestamp).toLocaleString("vi-VN"); // e.g. "20:06:57 05/08/2026"
```

---

## 2. Quy Tắc Phê Chính Tính Duy Nhất Toàn Vault (UNIQUE K ID PRE-CHECK)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr89", "sh2")` Quy tắc đảm bảo tính duy nhất của mã ID toàn Vault `$= qc("c", "💎 K5jhuvp7vr8a", "hd2")`</span>


> [!IMPORTANT]
> **QUY TẮC BẮT BUỘC ĐẢM BẢO TÍNH DUY NHẤT MÃ K ID & PHÂN ROLE PARAM 4**:
> 1. `$= qc("c", "💎 K5jhuvp7vr8b", "gok")` Khi sinh mã `💎 K...` mới, Agent **BẮT BUỘC** thực hiện quét Grep toàn Vault trước để đảm bảo không bị lặp lại mã đã tồn tại.
> 2. `$= qc("c", "💎 K5jhuvp7vr8c", "gok")` **Mỗi vị trí nút bấm sở hữu 1 mã Base-36 thuần độc lập duy nhất 100% toàn Vault (`Param 2`)**, không cần dùng hậu tố gõ tay `_gk`, `_gv`, `_ak`, `_av`.
> 3. `$= qc("c", "💎 K5jhuvp7vr8d", "gok")` **Tham Số 4 (`Param 4`)** đóng vai trò quy định loại hiển thị nút bấm (`"h"`, `"sub"`, `"gk"`, `"gv"`, `"ak"`, `"av"`) hoặc Emoji tùy biến trực tiếp.

---

## 3. Cung Cấp Dịch Vụ Sinh Mã Cho Các Skills Thành Phần (SERVICE PROVIDER)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr8e", "sh2")` Bảng cung cấp dịch vụ sinh mã cho các sub-skills thành phần `$= qc("c", "💎 K5jhuvp7vr8f", "hd2")`</span>


| `$= qc("c", "💎 K5jhuvp7vr8g", "🪄")` Skill Tiêu Dùng Mã | `$= qc("c", "💎 K5jhuvp7vr8h", "🪄")` Cách Sử Dụng Mã ID `💎 K...` Được Sinh Từ `qmd-gvl-apc` |
| :--- | :--- |
| [[qmd-wfb-apc]] | Dùng mã Base-36 thuần làm tham số 2 `qc("c", "💎 K...", "gk")`. |
| [[qmd-wfb-hdn]] | Dùng 2 mã Base-36 thuần độc lập: Nút 1 đầu dòng `qc("c", "💎 K...", "sub")` và Nút 2 cuối dòng `qc("c", "💎 K...", "h")`. |
| [[qmd-wfb-hdc]] | Được đại diện kiểm duyệt bởi Nút 2 (`"h"`) ở cuối dòng Phụ đề `hdn` phía ngay bên dưới. |
| [[qmd-wfb-lnk]] | Dùng mã ID `💎 K...` làm Nhãn hiển thị cho Wikilink (`[[File.md#Heading\|💎 K...]]`). |

---

## 4. Bảo Tồn Khóa Chính & Sinh Mã Tăng Dần (IMMUTABLE KEY & ADDITIVE GENERATION)
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 K5jhuvp7vr8i", "sh2")` Quy tắc bảo tồn khóa chính và sinh mã tăng dần `$= qc("c", "💎 K5jhuvp7vr8j", "hd2")`</span>


> [!IMPORTANT]
> **QUY TẮC BẢO TOÀN ÁNH XẠ KHÓA CHÍNH `qc()` (IMMUTABLE QC-KEY INTEGRITY)**:
> 1. `$= qc("c", "💎 K5jhuvp7vr8k", "gok")` **Mã ID Hiện Hữu Là Bất Biến**: Mọi mã `💎 K...` đã từng được gán trong `qc("c")` hay `qc("b")` đóng vai trò Primary Key liên kết 1-1 với `.us/.../a2u.json`, **TUYỆT ĐỐI KHÔNG ĐƯỢC sinh lại mã mới hay thay thế**.
> 2. `$= qc("c", "💎 K5jhuvp7vr8l", "ack")` **Sinh Mã Tăng Dần Độc Lập**: Khi chèn thêm cột, dòng, hoặc bổ sung nút duyệt cho các ô chưa có, Agent **CHỈ ĐƯỢC sinh ID mới cho đúng các ô mới**, giữ nguyên 100% mã ID của các nút `qc()` cũ xung quanh.
> 3. `$= qc("c", "💎 K5jhuvp7vr8m", "gov")` **Bảo Toàn Trạng Thái JSON**: Việc giữ nguyên ID cũ đảm bảo toàn vẹn dữ liệu phê duyệt `"x": "y"` đã lưu trong `a2u.json`, không làm đứt gãy quan hệ và không làm nhảy trạng thái về `❓`.


