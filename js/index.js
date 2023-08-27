const elements = {
  btnMenu: document.querySelector(".btn-menu"),
  headerEl: document.querySelector(".header"),
  headerCustomersEl: document.querySelector(".header-customers"),
  yearEl: document.querySelector(".year"),
  heroSection: document.querySelector(".hero"),
};

const { btnMenu, headerEl, headerCustomersEl, yearEl, heroSection } = elements;

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

btnMenu.addEventListener("click", onBtnMenuClick);

function onBtnMenuClick() {
  headerEl.classList.toggle("nav-open-js");
}

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
