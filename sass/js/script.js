// Smooth scroll for anchor links
const allLinks = document.querySelectorAll(".container a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top of page
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Smooth scroll to other sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Slide navigation
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};
