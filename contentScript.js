if (window.location.href.includes("_preview")) {
  const regex = new RegExp("\\d+_preview.shtml", "");

  if (regex.test(window.location.href)) {
    const url =
      window.location.href.split("?")[0].replace("_preview", "") + "?gaa_at=g";
    window.location = url;
  }
}
