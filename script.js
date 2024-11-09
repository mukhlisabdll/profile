// Toggle additional info on Beranda page
// Function to toggle visibility of additional information
function toggleMoreInfo() {
  const moreInfo = document.getElementById("more-info");
  if (moreInfo.classList.contains("d-none")) {
    moreInfo.classList.remove("d-none");
  } else {
    moreInfo.classList.add("d-none");
  }
}
