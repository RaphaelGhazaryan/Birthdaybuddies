const button = document.getElementById("btn");
const buddy = document.getElementById("bdbuddy");
const inputfield = document.getElementById("input");
let bdbuddies = [
  "Alexander Meinstein",
  "Alica-Cathrine Kay",
  "Angelique Rode",
  "Annett Demmin",
  "Afshar Behjat",
];
let randombuddies = bdbuddies[Math.floor(Math.random() * bdbuddies.length)];

button.onclick = function () {
  buddy.innerHTML = `Congratulations ${inputfield}!! your Birthdaybuddy is ${randombuddies}`;
};
