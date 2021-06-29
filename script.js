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

button.onclick = function () {
  const filteredBirthdayBuddies = bdbuddies.filter(
    (bdbuddy) => bdbuddy !== inputfield.value
  );
  let randombuddies =
    filteredBirthdayBuddies[
      Math.floor(Math.random() * filteredBirthdayBuddies.length)
    ];
  buddy.innerHTML = `Congratulations ${inputfield.value}!! your Birthdaybuddy is ${randombuddies}`;
};
