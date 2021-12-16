function showLinks() {
  document.querySelector(".links").classList.remove("hidden");
  document.querySelector(".burger-menu").classList.add("cross-icon");
}

function hideLinks() {
  document.querySelector(".links").classList.add("hidden");
  document.querySelector(".burger-menu").classList.remove("cross-icon");
}

function handleClick() {
  if (document.querySelector(".links").classList.contains("hidden")) {
    showLinks();
  } else {
    hideLinks();
  }
}

document.querySelector("#burger-menu").addEventListener("click", handleClick);
const links = document.querySelectorAll(".menu-item a");
Array.prototype.slice
  .call(links)
  .map((item) => item.addEventListener("click", hideLinks));
