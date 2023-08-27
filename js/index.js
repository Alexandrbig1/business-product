const elements = {
  btnMenu: document.querySelector(".btn-menu"),
  headerEl: document.querySelector(".header"),
  headerCustomersEl: document.querySelector(".header-customers"),
  yearEl: document.querySelector(".year"),
  heroSection: document.querySelector(".hero"),
  //
  menuEl: document.querySelector(".news-menu"),
  linkEl: document.querySelector(".news-text-subtitle"),
  modalEl: document.querySelector(".modal"),
  overlayEl: document.querySelector(".overlay"),
  closeBtn: document.querySelector(".close-modal"),
  newsTextEl: document.querySelector(".modal-news-text"),
  newsTitleEl: document.querySelector(".modal-news-title"),
};

const {
  btnMenu,
  headerEl,
  headerCustomersEl,
  yearEl,
  heroSection,
  linkEl,
  modalEl,
  overlayEl,
  closeBtn,
  menuEl,
  newsTextEl,
  newsTitleEl,
} = elements;

const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

btnMenu.addEventListener("click", onBtnMenuClick);
//
menuEl.addEventListener("click", onLinkClickHandler);
closeBtn.addEventListener("click", onCloseBtnHandler);
overlayEl.addEventListener("click", onCloseBtnHandler);
document.addEventListener("keydown", onEscKeyHandler);

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

// For News Modal
function onLinkClickHandler(e) {
  const currentTarget = e.target;
  if (currentTarget.tagName !== "H3") {
    return;
  }
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");

  newsTitleEl.textContent = `${currentTarget.textContent}`;
}

function onCloseBtnHandler() {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
}

function onEscKeyHandler(e) {
  if (e.code === "Escape" && !modalEl.classList.contains("hidden")) {
    onCloseBtnHandler();
  }
}
