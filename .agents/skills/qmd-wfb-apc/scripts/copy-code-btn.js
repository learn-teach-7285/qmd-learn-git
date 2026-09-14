(id, label = "") => {
  const displayText = (label && typeof label === "string") ? `🪄 ${label}` : "🪄";
  
  const getEffectiveId = () => {
    let rawId = id || "";
    if (rawId.startsWith("^")) rawId = rawId.substring(1);
    if (!rawId) return "";
    return rawId.startsWith("💎") ? rawId : `💎${rawId}`;
  };

  const effId = getEffectiveId();

  const span = dv.el("span", displayText, {
    attr: {
      style: "cursor:pointer; font-size:12px; font-weight:600; font-family:monospace; color:#0369a1; user-select:none; display:inline-block; padding:0 2px;",
      title: `${effId ? "Mã ID: " + effId : "Copy Mã ID"}`
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
