const solarSystem = document.getElementById("solarSystem");
const name = document.getElementById("name");
const diameter = document.getElementById("diameter");
const fact = document.getElementById("fact");
const planets = [
  {
    name: "Mercury 🎤 👨🏻",
    diameter: 4879,
    color: "grey",
    trivia: "The tiniest but bravest planet orbiting closest to the Sun."
  },
  {
    name: "Venus ⚫",
    diameter: 12104,
    color: "yellow",
    trivia:
      "1 day on Venus lasts ab. 2802 earthly hrs. The same as one Monday on the planet of Earth."
  },
  {
    name: "Earth 🌎",
    diameter: 12742,
    color: "green",
    trivia:
      "By far the coolest planet in the Solar System. Makes fun of other planets for having no life. Also, a place of inhabitance to many talented developers."
  },
  {
    name: "Mars 🔴",
    diameter: 6779,
    color: "pink",
    trivia:
      "Home to some undiscovered Marsian people who live deep underground. Also, a holiday destiation for Elon Musk."
  },
  {
    name: "Jupiter 🟠",
    diameter: 139822,
    color: "yellow",
    trivia:
      "Good guy Jupiter notices an asteroid flying towards Earth. Uses its immense gravity to change its trajectory towards itself."
  },
  {
    name: "Saturn 🪐",
    diameter: 116464,
    color: "orange",
    trivia:
      "People say they really like Saturn... because it has a nice ring to it."
  },
  {
    name: "Uranus 🍑",
    diameter: 50724,
    color: "grey",
    trivia: "The butt of every space joke on the planet."
  },
  {
    name: "Neptune 🔵",
    diameter: 49244,
    color: "blue",
    trivia: "The wind on Neptune is so fast it breaks the sound barrier."
  }
];

function renderPlanets() {
  //iterating over the planets array to extract data
  for (let i = 0; i < planets.length; i++) {
    //creating a place in DOM for each item from the array
    const div = document.createElement("div");
    //add class from css to give the planets margin
    div.classList.add("planet");
    // painting the planet with a color
    div.style.background = `conic-gradient(#1C0F13 0deg 180deg, var(--${planets[i].color}) 180deg 360deg)`;
    //making the planet round
    div.style["border-radius"] = `50%`;
    // using diameter to calculate how big the planet is
    div.style.padding = `${planets[i].diameter *0.00007}em`;
    // put the div out in the DOM
    solarSystem.append(div);
    // display planet's information on hover
    div.addEventListener("mouseover", function () {
      name.textContent = `${planets[i].name}`;
      diameter.textContent = `Diameter: ${planets[i].diameter} km`;
      fact.textContent = `${planets[i].trivia}`;
      name.style.opacity = 1;
      diameter.style.opacity = 1;
      fact.style.opacity = 1;
    });
    div.addEventListener("mouseout", function () {
      name.style.opacity = 0;
      diameter.style.opacity = 0;
      fact.style.opacity = 0;
    });
  }
}

renderPlanets();
