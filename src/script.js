import './style.css'
import * as home from "./home/home.js";
import * as menu from  "./menu/menu.js";
import * as about from  "./about/about.js";
import flare from "./lens-flare.png";

const navFactory =  (() =>{
    // get elements
    const body = document.querySelector('body');
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
    const themeSlider = document.createElement('div');
    const gitHub = document.createElement('div');
    //append elements
    main.appendChild(home.getHome());
    logoText.textContent = "The Galdin Quay";
    Header.appendChild(logoText);
    humberger.innerHTML =`<i class="fas fa-bars"></i>`;
    Header.appendChild(humberger);
    themeSlider.innerHTML = `<div class="theme-circle"></div>`;
    gitHub.innerHTML =(`<span> Created by  <a href="https://github.com/MijackK/restuarant/tree/main/src"><i class="fab fa-github"></i></a></span>`);

    // set attributes
    //add classes
    navContainer.classList.toggle('nav');
    list.classList.toggle('nav-list');
    logoText.classList.toggle('logo-text');
    themeSlider.classList.toggle('theme');
    gitHub.classList.toggle('github');
     // styles
    localStorage.theme == 'dark' ?body.setAttribute('class','dark') :body.setAttribute('class','light');
    themeSlider.style.flexDirection =localStorage.theme == 'dark' ?   'row-reverse':'row';
    themeSlider.style.backgroundColor =localStorage.theme == 'dark' ?  '#0997a3' : 'rgb(168, 168, 127)';
    //non DOM varaibles
    let currentlySelected;
    let closed = true;
  


    const createLocalStorage = (() =>{
        if(localStorage.theme)
        return
        localStorage.setItem('theme','light');
    })();

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
        navContainer.appendChild(themeSlider);
        navContainer.appendChild(gitHub);
        content.appendChild(navContainer);
        content.appendChild(Header);
        content.appendChild(main);

       
        
    })();

    const themeHandler = () =>{
        if(localStorage.theme){
            if(localStorage.theme == 'light'){
                themeSlider.style.flexDirection ='row';
                themeSlider.style.backgroundColor='rgb(168, 168, 127)';
                document.querySelector('body').setAttribute('class','light');
                document.querySelector('.galdin-video').src='https://gta5mod.net/wp-content/uploads/2020/06/Final-Fantasy-XV-Galdin-Quay.jpg';
                document.querySelector('.img-invisible').style.backgroundImage = `url('https://i.imgur.com/z3PX2uk.png')`;
                document.querySelector('.img-visible').style.backgroundImage = `url('https://i.imgur.com/enudYqV.jpg')`;
                return
            }
            themeSlider.style.flexDirection ='row-reverse';
            themeSlider.style.backgroundColor='#0997a3';
            document.querySelector('body').setAttribute('class','dark');
            document.querySelector('.galdin-video').src='https://i.ytimg.com/vi/FQcPlk5APAs/maxresdefault.jpg';
            document.querySelector('.img-invisible').style.backgroundImage = `url('https://i.imgur.com/gkeuUxp.jpg')`;
            document.querySelector('.img-visible').style.backgroundImage = `url('https://i.imgur.com/bnLWCgA.jpg')`; 
        }
      
    }

        //Event listeners
        humberger.addEventListener('click',closeMenu)
        themeSlider.addEventListener('click', e =>{
            localStorage.theme == 'light' ? localStorage.setItem('theme','dark') :  localStorage.setItem('theme','light');
            themeHandler();
        })
 
})();

