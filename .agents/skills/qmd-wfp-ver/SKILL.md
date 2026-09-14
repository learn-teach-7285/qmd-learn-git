---
name: qmd-wfp-ver
description: Tự động phân loại, ghi và cập nhật thuộc tính phiên bản cấp tệp (version) chuẩn SemVer trong khối YAML Header cho các tài liệu Markdown. Kích hoạt khi ghi phiên bản hoặc khởi tạo tài liệu đặc tả mới.
🆔 id: 💎 Kmt12k12z
💍 code: QC-MDS-SKILL-WFP-VER
🪞 title: Ghi phiên bản tệp metadata
🏷️ version: 1.0.0
🔰 type: 🧰 AI-SKILL
🚥 status: 🌿 Ready
---
`$= (window.qc || (window.qc = () => '⏳'))()`


# 💎 QC-MDS-SKILL-WFP-VER
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmt12k130", "sh1")` Kỹ năng Ghi Phiên Bản Tệp (qmd-wfp-ver) `$= qc("c", "💎 Kmt12k131", "hd1")`</span>


`$= qc("c", "💎 Kmt12k132", "gok")` **Mục tiêu**: `$= qc("c", "💎 Kmt12k133", "gov")` Đảm bảo khối YAML Header sở hữu thuộc tính `🏷️ version:` phản ánh đúng phiên bản phát hành chuẩn SemVer (Semantic Versioning) hoặc bản phát hành tài liệu đặc tả. `$= qc("b", "💎 Kmt12k134", "par")`
`$= qc("c", "💎 Kmt12k135", "ack")` **Hành động**: `$= qc("c", "💎 Kmt12k136", "acv")` Rà soát & tuân thủ quy chuẩn định dạng phiên bản SemVer 3 chữ số bên dưới. `$= qc("b", "💎 Kmt12k137", "par")`

---

## 1. 💎 QC-MDS-WFP-VER-FMT
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmt12k138", "sh2")` Quy chuẩn định dạng phiên bản SemVer `$= qc("c", "💎 Kmt12k139", "hd2")`</span>


> [!IMPORTANT]
> **QUY CHUẨN ĐỊNH DẠNG PHIÊN BẢN (SEMVER FORMAT)**:
> Thuộc tính `🏷️ version:` trong khối YAML Header tuân thủ nghiêm ngặt chuẩn **Semantic Versioning (MAJOR.MINOR.PATCH)**:
> 
> 1. `🏷️ version: 1.0.0` (Bản phát hành chính thức đầu tiên của Đặc tả / API).
> 2. `🏷️ version: 1.1.0` (Bản nâng cấp tính năng tương thích ngược - Minor Update).
> 3. `🏷️ version: 1.0.1` (Bản vá lỗi nhỏ hoặc chuẩn hóa định dạng - Patch Update).
> 4. `🏷️ version: 2.0.0` (Bản thay đổi cấu trúc lớn hoặc phá vỡ tính tương thích ngược - Breaking Change).

---

## 2. 💎 QC-MDS-WFP-VER-INT
<span style="color:#6b7280; font-weight:700;">`$= qc("c", "💎 Kmt12k13a", "sh2")` Tương thích hệ thống OpenAPI & Vòng đời tài liệu `$= qc("c", "💎 Kmt12k13b", "hd2")`</span>


> [!NOTE]
> **TƯƠNG THÍCH OPENAPI 3.0 & VÒNG ĐỜI TÀI LIỆU**:
> 1. Thuộc tính `🏷️ version:` ánh xạ trực tiếp với trường `info.version` trong chuẩn OpenAPI 3.0 / Swagger.
> 2. Khi đường dẫn API có tiền tố phiên bản (ví dụ `/api/v1/...`), chữ số `MAJOR` của thuộc tính `🏷️ version: 1.x.x` phải khớp với phiên bản URL (`v1`).
