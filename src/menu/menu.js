import "./menu.css";

//import backdrop from './backdrop.png';
//import border from './border.png';
import attack from "./attack.PNG";
import health from "./health.PNG";
import poison from "./poison.PNG";
import resist from "./resist.PNG";
import fresh from "./fresh.PNG";
import magic from "./magic.PNG";
//import noodles from './noodles.PNG';

let menu;

const constructMenu = (() => {
  const menuWrapper = document.createElement("div");
  const Menu = document.createElement("div");
  const Selection = document.createElement("div");
  const menuTitle = document.createElement("span");
  const menuItems = document.createElement("div");
  const Item = document.createElement("div");
  const Border = document.createElement("div");
  const Information = document.createElement("div");
  const Rating = document.createElement("div");
  const Utensils = document.createElement("i");
  const foodDisplay = document.createElement("div");
  const foodName = document.createElement("div");
  const foodImage = document.createElement("div");
  const foodStats = document.createElement("div");
  const Effect = document.createElement("div");
  const effectTitle = document.createElement("div");
  const Span = document.createElement("span");
  const statImage = document.createElement("img");
  const effectDescription = document.createElement("p");

  //add class
  menuWrapper.classList.toggle("menu-wrapper");
  Menu.classList.toggle("menu");
  Selection.classList.toggle("selection");
  menuTitle.classList.toggle("menu-title");
  menuItems.classList.toggle("menu-items");
  Item.classList.toggle("item");
  Border.classList.toggle("border");
  Information.classList.toggle("information");
  Rating.classList.toggle("rating");
  foodDisplay.classList.toggle("food-display");
  foodName.classList.toggle("food-name");
  foodImage.classList.toggle("food-image");
  foodStats.classList.toggle("food-stats");
  Effect.classList.toggle("effect");
  effectTitle.classList.toggle("effect-title");
  effectDescription.classList.toggle("effect-description");

  //append item
  Selection.appendChild(menuTitle);
  menuTitle.textContent = "Recepies";
  //Item.appendChild(Border);
  menuWrapper.appendChild(Menu);
  Menu.appendChild(Selection);
  Selection.appendChild(menuTitle);
  Selection.appendChild(menuItems);
  Menu.appendChild(Information);
  Information.appendChild(Rating);
  Utensils.innerHTML = `<i class="fas fa-utensils"></i>`;
  Rating.innerHTML = `  <span>Ignis</span>
    <span>Restaurant</span>
    <span>Level <sup>9</sup></span>`;
  Rating.prepend(Utensils);
  Information.appendChild(foodDisplay);
  foodDisplay.appendChild(foodName);
  foodDisplay.appendChild(foodImage);
  foodDisplay.appendChild(foodStats);
  effectTitle.appendChild(statImage);
  effectTitle.appendChild(Span);
  Effect.appendChild(effectTitle);
  Effect.appendChild(effectDescription);

  // none elements vairiables
  let effectIcons = {
    attack: attack,
    fresh: fresh,
    health: health,
    magic: magic,
    poison: poison,
    resist: resist,
  };

  let foods = [
    {
      name: "Galdin Gratin",
      image: "https://i.imgur.com/7OGxOpV.png",
      stats: [
        {
          effect: "Fresh",
          icon: effectIcons.fresh,
          text: "Boost all stats and increases EXP earned by 10%",
        },
        {
          effect: "HP Boost (Level 10)",
          icon: effectIcons.health,
          text: "Increases maximum HP by 500",
        },
      ],
    },
    {
      name: "White Fish in Tomato Sauce",
      image: "https://i.imgur.com/2YoRtOV.png",
      stats: [
        {
          effect: "Attack Boost (level 16)",
          icon: effectIcons.attack,
          text: "Increases attack  by 160",
        },
        {
          effect: "HP Boost (Level 18)",
          icon: effectIcons.health,
          text: "Increases maximum HP by 900",
        },
        {
          effect: "PoisonProof",
          icon: effectIcons.poison,
          text: "Prevents poison",
        },
      ],
    },
    {
      name: "Sea's Bounty Risotto",
      image: "https://i.imgur.com/o5lt5Am.png",
      stats: [
        {
          effect: "Attack Boost (level 12)",
          icon: effectIcons.attack,
          text: "Increases attack  by 120",
        },
        {
          effect: "HP Boost (Level 12)",
          icon: effectIcons.health,
          text: "Increases maximum HP by 600",
        },
        {
          effect: "Regen Boost (Level 1)",
          icon: effectIcons.health,
          text: "Accelarates HP recovery by 25%",
        },
      ],
    },
    {
      name: "Steamed Crab with Rock Salt",
      image: "https://i.imgur.com/yXOHtCD.png",
      stats: [
        {
          effect: "Resistant",
          icon: effectIcons.resist,
          text: "Nulifies fire, ice, and lightning attacks",
        },
      ],
    },
    {
      name: "Tenebraen Berry Opera",
      image: "https://i.imgur.com/jiFHrLV.png",
      stats: [
        {
          effect: "Magemaster",
          icon: effectIcons.magic,
          text: "Magic +500, Strength becomes 0",
        },
      ],
    },
    /*
        {name:'Cup Noodles',
        image:noodles,
        stats:[
            {effect:'Attack Boost (level 3)',icon:effectIcons.attack,text:'Increases attack  by 30'},
            {effect:'HP Boost (Level 6)',icon:effectIcons.health,text:'Increases maximum HP by 300'},
        ]},
        */
  ];

  const foodInfo = function () {
    foodStats.textContent = "";
    let index = this.id;
    let numOfStats = foods[index].stats.length;
    foodName.textContent = `${foods[index].name}`;
    foodImage.style.backgroundImage = `url('${foods[index].image}')`;

    for (let i = 0; i < numOfStats; i++) {
      statImage.src = `${foods[index].stats[i].icon}`;
      Span.textContent = `${foods[index].stats[i].effect}`;
      effectDescription.textContent = `${foods[index].stats[i].text}`;
      foodStats.appendChild(Effect.cloneNode(true));
    }
  };

  const addItems = (() => {
    const menuSlots = 13;
    for (let i = 0; i < menuSlots; i++) {
      Item.textContent = "";
      Item.style.backgroundImage = "";
      Item.id = "";
      if (i < foods.length) {
        Item.appendChild(Border);
        Item.style.backgroundImage = `url('${foods[i].image}'`;
        Item.setAttribute("id", `${i}`);
        menuItems.appendChild(Item.cloneNode(true));
        menuItems.childNodes[i].addEventListener("mousedown", foodInfo);
      } else menuItems.appendChild(Item.cloneNode(true));
    }
  })();

  menu = menuWrapper;
})();
const getMenu = () => {
  return menu;
};

export { getMenu };
