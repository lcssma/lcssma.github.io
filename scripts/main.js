const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu-link");
const panels = document.querySelectorAll(".panel");
const tabs = document.querySelectorAll(".tab");

// Hamburger button listener
btn.addEventListener("click", navToogle);

// Links menu click listener
menuLinks.forEach((link) => link.addEventListener("click", navToogle));

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function navToogle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

function onTabClick(event) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0",
    );
  });

  // Hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
    panel.classList.remove("flex");
  });

  // Activate a new tab and panel based on the target
  event.target.classList.add("border-softRed", "border-b-4");
  const classString = event.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}
