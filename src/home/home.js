import "./home.css";
import myLogo from "./logo2.png";
//let position =[];
//document.querySelector('body').addEventListener('click',e => {
// position.push({x:e.clientX,y:e.clientY});
//console.log(position);
//})

const Home = document.createElement("div");
const constructHome = (() => {
  const firstSection = document.createElement("section");
  const SecondSection = document.createElement("section");
  const ThirdSection = document.createElement("section");
  const galdinVideo = document.createElement("img");
  const firstTextBox = document.createElement("div");
  const movingText = document.createElement("div");
  const title1 = document.createElement("span");
  const subTitle1 = document.createElement("span");
  const title2 = document.createElement("span");
  const subTitle2 = document.createElement("span");
  const title3 = document.createElement("span");
  const letter = document.createElement("div");
  const firstWord = document.createElement("div"); // for moving text
  const secondWord = document.createElement("div"); // for moving text
  const logo = document.createElement("img");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  const wrapper1 = document.createElement("div");
  const imageVisible = document.createElement("div");
  const imageInvisible = document.createElement("div");

  //add class
  Home.classList.toggle("Home");
  firstSection.classList.toggle("first-section");
  SecondSection.classList.toggle("second-section");
  ThirdSection.classList.toggle("third-section");
  galdinVideo.classList.toggle("galdin-video");
  firstTextBox.classList.toggle("first-text");
  movingText.classList.toggle("moving-text");
  firstWord.classList.toggle("first-word");
  secondWord.classList.toggle("second-word");
  logo.classList.toggle("logo2");
  title3.classList.toggle("title3");
  wrapper1.classList.toggle("wrapper1");
  imageVisible.classList.toggle("img-visible");
  imageInvisible.classList.toggle("img-invisible");

  //append item
  Home.appendChild(firstSection);
  firstSection.appendChild(firstTextBox);
  firstSection.appendChild(galdinVideo);
  firstTextBox.appendChild(title1);
  firstTextBox.appendChild(subTitle1);
  firstTextBox.appendChild(movingText);
  movingText.appendChild(firstWord);
  movingText.appendChild(secondWord);
  title1.textContent = "The Galdin Quay";
  subTitle1.textContent = "Ignis Scientia";
  Home.appendChild(SecondSection);
  SecondSection.appendChild(logo);
  SecondSection.appendChild(title2);
  SecondSection.appendChild(subTitle2);
  title2.textContent = "16 YEARS";
  Home.appendChild(ThirdSection);
  ThirdSection.appendChild(title3);
  ThirdSection.appendChild(paragraph1);
  ThirdSection.appendChild(paragraph2);
  ThirdSection.appendChild(wrapper1);
  wrapper1.appendChild(imageVisible);
  imageVisible.appendChild(imageInvisible);
  subTitle2.textContent =
    "Final Fantasy XV is an action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series";
  title3.textContent = " A First-Class Experience";
  paragraph1.textContent = `A Stunning seaside getaway along the Vannath Coast in southern Leide. Known not only for its world-class spa, but also for the exquisite seafood dishes crafted by Mother of Pearl's chef de cuisine, Coctura Arlund.`;
  paragraph2.textContent = ` With the sea right at our door we offer only the freshest sea food and if your feeling up to it, we'll let you catch you're own fish doubling the experience`;

  //add/edit attribute
  //galdinVideo.src= localStorage.theme == 'light'?'https://gta5mod.net/wp-content/uploads/2020/06/Final-Fantasy-XV-Galdin-Quay.jpg':'https://i.ytimg.com/vi/FQcPlk5APAs/maxresdefault.jpg';
  //imageInvisible.style.backgroundImage = localStorage.theme == 'light' ? `url('https://i.imgur.com/z3PX2uk.png')` :  `url('https://i.imgur.com/gkeuUxp.jpg')`;
  //imageVisible.style.backgroundImage = localStorage.theme == 'light' ?`url('https://i.imgur.com/enudYqV.jpg')` :  `url('https://i.imgur.com/bnLWCgA.jpg')`;

  logo.src = myLogo;

  const animate = () => {
    let first = firstWord.childNodes;
    let second = secondWord.childNodes;
    first.forEach((element) => {
      element.style.transform = "translate(0) scale(1)";
      element.style.opacity = 1;
    });
    second.forEach((element) => {
      element.style.transform = "translate(0) scale(1)";
      element.style.opacity = 1;
    });
  };

  const animatedText = (() => {
    let animatedText = "WelcomeAdventurer";
    let displacement = [
      { x: 133, y: 518 },
      { x: 327, y: 219 },
      { x: 465, y: 559 },
      { x: 473, y: 322 },
      { x: 317, y: 560 },
      { x: 512, y: 287 },
      { x: 675, y: 526 },
      { x: 41, y: 493 },
      { x: 209, y: 571 },
      { x: 331, y: 586 },
      { x: 363, y: 265 },
      { x: 540, y: 301 },
      { x: 462, y: 581 },
      { x: 633, y: 304 },
      { x: 522, y: 573 },
      { x: 675, y: 402 },
      { x: 663, y: 591 },
      { x: 716, y: 465 },
    ];
    animatedText = animatedText.split("");

    for (let i = 0; i < animatedText.length; i++) {
      letter.style.transform = `translate(${displacement[i].x}px,${displacement[i].x}px) scale(0.1)`;
      letter.style.opacity = 0;

      if (i < 7) {
        letter.textContent = animatedText[i];
        firstWord.appendChild(letter.cloneNode(true));
      } else {
        letter.textContent = animatedText[i];
        secondWord.appendChild(letter.cloneNode(true));
      }
    }
    setTimeout(animate, 300);
  })();

  const lookingGlass = (() => {
    const visible = imageVisible; //document.querySelector('.img-visible');
    const invisible = imageInvisible; //document.querySelector('.img-invisible');

    const moveGlass = (e) => {
      let coord = visible.getBoundingClientRect();
      let dimensions = invisible.getBoundingClientRect();
      let outOfBoundsRight = coord.left + coord.width;
      let outOfBoundsTop = visible.offsetTop;
      let outOfBoundsBottom = visible.offsetTop + coord.height;
      let radius = dimensions.width / 2;
      invisible.style.opacity = 1;
      //console.log(`screenX${e.screenX}  clinetX${e.clientX} pageX:${e.pageX} `);
      //console.log(`imgX:${coord.x} ${coord.left}  imgY: ${coord.y} ${visible.offsetTop}  scrY:${e.screenY} pageY:${e.pageY} cliY:${e.clientY} `);
      if (
        coord.left > e.pageX ||
        e.pageX > outOfBoundsRight ||
        e.pageY < outOfBoundsTop ||
        e.pageY > outOfBoundsBottom
      ) {
        invisible.style.opacity = 0;
        return;
      }

      invisible.style.left = `${e.pageX - radius}px`;
      invisible.style.top = `${e.pageY - radius}px`;
      //invisible.style.backgroundPosition = `${-1*(e.pageX -coord.x)+radius}px ${-1*(e.pageY - visible.offsetTop)+radius}px` //show without zoom effect, make sure both visible and invisible background size is the same.
      invisible.style.backgroundPosition = `${
        -1 * (e.pageX - coord.x) + radius - 25
      }px ${-1 * (e.pageY - visible.offsetTop) + radius - 25}px`; // invisible background size needs to be larger than visible background size, adjust till desired effect is achieved
    };
    visible.addEventListener("mousemove", (e) => moveGlass(e));
    visible.addEventListener("touchmove", (e) => {
      e.preventDefault();
      moveGlass(e.changedTouches[0]);
    });
  })();

  return { galdinVideo, imageInvisible, imageVisible };
})();

const getHome = () => {
  constructHome.galdinVideo.src =
    localStorage.theme == "dark"
      ? "https://i.ytimg.com/vi/FQcPlk5APAs/maxresdefault.jpg"
      : "https://gta5mod.net/wp-content/uploads/2020/06/Final-Fantasy-XV-Galdin-Quay.jpg";
  constructHome.imageInvisible.style.backgroundImage =
    localStorage.theme == "dark"
      ? `url('https://i.imgur.com/gkeuUxp.jpg')`
      : `url('https://i.imgur.com/z3PX2uk.png')`;
  constructHome.imageVisible.style.backgroundImage =
    localStorage.theme == "dark"
      ? `url('https://i.imgur.com/bnLWCgA.jpg')`
      : `url('https://i.imgur.com/enudYqV.jpg')`;
  return Home;
};

export { getHome };
