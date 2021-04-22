document.querySelector("#myFileInput").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});
document.addEventListener("DOMContentLoaded", () => {
  const recentImageDataUrl = localStorage.getItem("recent-image");

  if (recentImageDataUrl) {
    document
      .querySelector("#imgPreview")
      .setAttribute("src", recentImageDataUrl);
  }
});
