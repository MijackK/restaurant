import './style.css'
import * as home from "./home/home.js";
import * as menu from  "./menu/menu.js";
import * as about from  "./about/about.js";
import flare from "./lens-flare.png";

const navFactory =  (() =>{
    //create elements
    const content = document.querySelector('.content');
    const main = document.createElement('main');
    const Header = document.createElement('header');
    const navContainer = document.createElement('div');
    const navLink = document.createElement('a');
    const list = document.createElement('li');
    const logoText = document.createElement('span')
    const humberger = document.createElement('span');
    const image = document.createElement('img');
    //append elements
    main.appendChild(home.getHome());
    logoText.textContent = "The Galdin Quay";
    Header.appendChild(logoText);
    humberger.innerHTML =`<i class="fas fa-bars"></i>`;
    Header.appendChild(humberger);
    // set attributes
    navLink.setAttribute('href','');
    //add classes
    navContainer.classList.toggle('nav');
    list.classList.toggle('nav-list');
    logoText.classList.toggle('logo-text');



    //non DOM varaibles
    let currentlySelected;
    let closed = true;

    const switcher = function(link){
        if(link.id == currentlySelected)
        return
        
        main.textContent='';
        currentlySelected=link.id;

        switch (link.id) {
            case '0':
               main.appendChild(home.getHome())
                break;
            case '1':
                main.appendChild(menu.getMenu())
                break;
            case '2':
                main.appendChild(about.getAbout())
                break; 
        }
    }

    const closeMenu = () =>{
        closed == true ? navContainer.style.display='flex':navContainer.style.display='none';
        closed =!closed;
    }

    const createLink = (() =>{
        let linkNames =['Home','Menu','About'];
        for(let i=0; i<linkNames.length; i++){
            list.setAttribute('id',i);
            navLink.textContent =linkNames[i];
            image.src=flare;
            list.appendChild(image);
            list.appendChild(navLink);
            navContainer.appendChild(list.cloneNode(true));
           navContainer.children[i].addEventListener('click',function(e){
                e.preventDefault();
                switcher(this); 
            })}
         content.appendChild(navContainer);
        content.appendChild(Header);
        content.appendChild(main);
        
    })();

        //Event listeners
        humberger.addEventListener('click',closeMenu)
 
})();

