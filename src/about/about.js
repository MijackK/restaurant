import './about.css'

const about = document.createElement('div');
const aboutTitle = document.createElement('span');
const aboutWrapper =document.createElement('div');
const aboutContent =document.createElement('div');
const lucisMap = document.createElement('div');
const paragraph = document.createElement('p');
const Footer = document.createElement('footer');


//add class
aboutTitle.classList.toggle('about-title');
aboutWrapper.classList.toggle('about-wrapper');
aboutContent.classList.toggle('about');
lucisMap.classList.toggle('location-map');
paragraph.classList.toggle('p-about');
about.classList.toggle('about-container');
//append item
aboutTitle.textContent = "Map of Lucis";
Footer.innerHTML =`<span> Created by  <a href="https://github.com/MijackK/restuarant/tree/main/src"><i class="fab fa-github"></i></a></span>`;



const constructAbout = (() =>{
    let content = [`Stunning seaside getaway along the Vannath Coast in southern Leide. Known not only for its world-class spa, but also for the exquisite seafood dishes crafted by Mother of Pearl's chef de cuisine, Coctura Arlund.`
    ,`While the quay currently enjoys its reputation as the kingdom's premier resort, Galdin itself was once a quiet fishing town. That all changed when Niflheim made inroads into Lucian territory some 150 years ago and effectively put all lands outside the Crown City under imperial control. From that time onward, the former fishing village turned into a trading post connecting the Lucian continent with the imperial province of Accordo.`
    ,`In time, the empire shifted their shipping operations from the sea to the skies, and Galdin's importance as an imperial outpost diminished. What the town lost in strategic value, however, it gained in culture, gleaning heavily from Altissian immigrants drawn to Lucian shores. In that sense, one could say the quay owes its current success to the empire's intervention.`];

   for(let i=0;i <content.length;i++){
       paragraph.textContent =content[i];
       aboutContent.appendChild(paragraph.cloneNode(true))
   }
aboutWrapper.appendChild(aboutContent);
aboutWrapper.appendChild(lucisMap);
about.appendChild(aboutTitle);
about.appendChild(aboutWrapper);
about.appendChild(Footer);




})();
const mapMovement = (() =>{
    const map = lucisMap;
    let shouldMove = false;
    let coordinates = {x:0,y:0};// cordinates when first clicked, changes by mouse move
    let mapPosition = {x:-3000,y:-2000}; // starting point
    let movement ={x:0,y:0}// used to store where the map moves.
    let offsetX;
    let offsetY;
    const startMovement = (e) =>{
        if(!shouldMove)
        return
        offsetX = [0,1,2,3,-1,-2,-3].map(x => x+coordinates.x);// prevent movement from slight offsets
        offsetY = [0,1,2,3,-1,-2,-3].map(y => y+coordinates.y);// prevent movement from slight offsets
       
        movement.x = offsetX.includes(e.clientX) ? 0: e.clientX > coordinates.x ? 16:-16;
        movement.y =  offsetY.includes(e.clientY) ? 0:e.clientY > coordinates.y ? 16:-16;
        mapPosition.x = mapPosition.x + movement.x;
        mapPosition.y = mapPosition.y + movement.y;
       map.style.backgroundPosition = `${mapPosition.x}px ${mapPosition.y}px`;
       coordinates.x=e.clientX;
       coordinates.y =e.clientY;
    }
  
    map.addEventListener('mousedown', e =>{
        shouldMove=true;
        e.target.style.cursor = 'grabbing';
        coordinates.x=e.clientX;
        coordinates.y =e.clientY;
    })
    map.addEventListener('touchstart', e =>{
        shouldMove=true;
        e.target.style.cursor = 'grabbing';
        coordinates.x=e.clientX;
        coordinates.y =e.clientY;
    })

    map.addEventListener('mouseup', e =>{
        shouldMove=false;
        e.target.style.cursor = 'grab';
    })
    map.addEventListener('mouseend', e =>{
        shouldMove=false;
        e.target.style.cursor = 'grab';
    })

    map.addEventListener('mousemove', e =>{
        startMovement(e);
      
    })
    map.addEventListener('touchmove', e =>{
        e.preventDefault();
        startMovement(e.changedTouches[0]);
     
    })

})();

const getAbout = () =>{
    return about;
}

export{getAbout}
   
  
