const elements = {
  btnMenu: document.querySelector(".btn-menu"),
  headerEl: document.querySelector(".header"),
  headerCustomersEl: document.querySelector(".header-customers"),
  yearEl: document.querySelector(".year"),
  heroSection: document.querySelector(".hero"),
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

// For year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

btnMenu.addEventListener("click", onBtnMenuClick);
menuEl.addEventListener("click", onLinkClickHandler);
closeBtn.addEventListener("click", onCloseBtnHandler);
overlayEl.addEventListener("click", onCloseBtnHandler);
document.addEventListener("keydown", onEscKeyHandler);

function onBtnMenuClick() {
  headerEl.classList.toggle("nav-open-js");
}

// For sticky header
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

// Scroll-UP
const scrollupBtn = document.querySelector(".scrollup__btn");

const handlerScrollEvent = function () {
  window.scrollY < 300
    ? scrollupBtn.classList.add("hidden")
    : scrollupBtn.classList.remove("hidden");
};

window.addEventListener("scroll", handlerScrollEvent);

scrollupBtn.addEventListener("click", handlerScrollupBtnClick);

function handlerScrollupBtnClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Smooth section appearing

const sections = document.querySelectorAll(".section");

const lasyLoad = (targets) => {
  const options = {
    rootMargin: "100px",
    threshold: 0.2,
  };

  const onEntry = (entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.add("appear");
        observer.unobserve(target);
      }
    });
  };

  const sectionsObserver = new IntersectionObserver(onEntry, options);

  targets.forEach((target) => sectionsObserver.observe(target));
};

setTimeout(() => {
  lasyLoad(sections);
}, 250);

// SUBSCRIBE MODAL
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-subscribe-modal-open]"),
    closeSubscrModalBtn: document.querySelector("[data-subscribe-modal-close]"),
    modal: document.querySelector("[data-subscribe-modal]"),
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeSubscrModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
