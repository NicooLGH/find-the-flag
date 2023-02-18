const flag = document.getElementById("flag");
const name = document.getElementById("name");
const content = document.getElementById("content");
const response = document.getElementById("response");
const URL1 = "https://flagcdn.com/en/codes.json";
const button = document.getElementById("button");
let drapeau = "";

function getFlag() {
  fetch(URL1)
    .then((response) => response.json())
    .then((flag2) => {
      const flagKeys = Object.keys(flag2);
      const flagValues = Object.values(flag2);
      const flagEntries = Object.entries(flag2);
      let drapeauImg = "";
      for (let i = 0; i < flagEntries.length; i++) {
        drapeau = flagEntries[Math.floor(Math.random(i) * flagEntries.length)];
        drapeauImg = `<img src = "https://flagcdn.com/256x192/${drapeau[0]}.png" alt="${drapeau[1]}">`;
      }
      flag.innerHTML = drapeauImg;
    });
}

getFlag();

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    valid();
  }
});

button.addEventListener("click", () => {
  valid();
});

function valid() {
  if (content.value === drapeau[1]) {
    getFlag();
    content.value = "";
  } else if (content.value === "") {
    alert("veuillez saisir le nom d'un pays");
  } else {
    alert("Faux ! vous pouvez ressayer.");
  }
}
