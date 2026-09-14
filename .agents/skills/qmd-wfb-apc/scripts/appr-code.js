(id, state = "❓", defaultIcon = "") => {
  let icon = "❓";
  let stateTitle = "Chưa duyệt ❓ (Mới tạo/Cần làm rõ)";
  
  const rawState = String(state).trim();
  const normalizedState = rawState.toLowerCase();
  
  if (rawState === "⏳" || normalizedState === "pending" || normalizedState === "paused" || normalizedState === "hourglass" || normalizedState === "sand" || normalizedState === "deferred") {
    icon = "⏳";
    stateTitle = "Pending ⏳ (Đã xem, tạm hoãn/chờ xử lý sau)";
  } else if (rawState === "❓" || normalizedState === "unclear" || normalizedState === "false" || rawState === "") {
    icon = "❓";
    stateTitle = "Chưa duyệt ❓ (Mới tạo/Cần làm rõ)";
  } else {
    // TẤT CẢ EMOJI/GIÁ TRỊ KHÁC ➔ ĐÃ DUYỆT (APPROVED)!
    // Nếu truyền "approved" / "pass" / "true", sử dụng defaultIcon (nếu có) hoặc mặc định "🌿"
    if (rawState && normalizedState !== "approved" && normalizedState !== "true" && normalizedState !== "pass" && normalizedState !== "leaf") {
      icon = rawState;
    } else {
      icon = defaultIcon ? defaultIcon : "🌿";
    }
    stateTitle = `Đã duyệt ${icon} (Đã chốt phê duyệt)`;
  }

  const getEffectiveId = () => {
    let rawId = id || "";
    if (rawId.startsWith("^")) rawId = rawId.substring(1);
    if (!rawId) return "";
    return rawId.startsWith("💎") ? rawId : `💎 ${rawId.replace(/^💎\s*/, "")}`;
  };

  const effId = getEffectiveId();

  const span = dv.el("span", icon, {
    attr: {
      style: "cursor:pointer; font-size:14px; font-weight:600; font-family:monospace; color:#0369a1; user-select:none; display:inline-block; padding:0 3px 0 0;",
      title: `${stateTitle}${effId ? "\nMã ID: " + effId : ""}`
    }
  });

  span.onclick = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const currentId = getEffectiveId();
    navigator.clipboard.writeText(currentId);
    new Notice(`✅ Đã copy mã ID: ${currentId}`, 2500);
  };

  return span;
}
