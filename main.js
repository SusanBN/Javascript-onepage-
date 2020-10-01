const body = document.body;
const themeButton = document.getElementById("color-theme-btn");
const randomFact = document.getElementById("random-fact");
const blogLink = document.getElementById("blog-link");
const factLink = document.getElementById("fact-link");
const blog = document.getElementById("blog");
const facts = document.getElementById("facts");

themeButton.addEventListener("click", function (event) {
  body.classList.toggle("dark-theme");
});

blogLink.addEventListener("click", function (event) {
  blog.style.display = "block";
  facts.style.display = "none";
});

factLink.addEventListener("click", function (event) {
  facts.style.display = "block";
  blog.style.display = "none";
});

function lowerFirstLetter(sentence) {
  return sentence.charAt(0).toLowerCase() + sentence.slice(1);
}

function getFact() {
  fetch(`https://uselessfacts.jsph.pl/random.json?language=en`, {
    method: "GET",
    header: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.text);
      randomFact.innerHTML = lowerFirstLetter(data.text);
    });
}
getFact();
