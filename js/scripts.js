const rootStyles = document.documentElement.style;
const titleElement = document.getElementById("title");
const scrollElement=document.getElementsByClassName(".scroll-line");
const backgroundColor=document.getElementsByClassName('--background-color');
const totalWindowScroll=document.body.scrollHeight;
const rgbButtonElement = document.getElementById("rgb-button");
const hexaButtonElement = document.getElementById("hexa-button");


//cosas que necesito pero no se para que
// Scroll total de la ventana: document.body.scrollHeight
// Alto de la ventana: window.innerHeight
// Cantidad de scroll: window.scrollY



const changeWidthScroll = () => {
    const scrolledContent= totalWindowScroll- window.scrollY;
    //resto el total de la ventana menos el alto de la ventana
    
    //cambiar variable css
    rootStyles.setProperty("--width-scroll", scrolledContent);
    
    //actualizo el texto del elemento
    titleElement.textContent= `Te has desplazado: ${scrolledContent} px`;

    console.log(scrolledContent);
}
//EVENTS
window.addEventListener('scroll', changeWidthScroll);

//FUNCIONES DE LOS BOTONES

const generateRGBcolor=() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const newRGBcolor= Number(r,g,b); 
  console.log(newRGBcolor);
  return newRGBcolor;
  
}
const changeRGBcolor = () => {

    const newRGBcolor= generateRGBcolor();
    rootStyles.setProperty("--background-color",newRGBcolor); //editr el css

}

const generateHEXAcolor=() => {
    let characters = '0123456789ABCDEF'; // posibles caracteres en un color hex
    let colorHEXA = '#'; // que lleve #al principio

    for (let i = 0; i < 6; i++) { 
        randomIndex = Math.floor(Math.random() * characters.length); 
        colorHEXA += characters.charAt(randomIndex); 
    }
    console.log(colorHEXA);
    return colorHEXA;

    //WIIII SI FUNCIONA
}
const changeHEXAcolor = () => {

    const newHEXAcolor= generateHEXAcolor();
    rootStyles.setProperty("--background-color",newHEXAcolor); //editr el css

}
rgbButtonElement.addEventListener('click', changeRGBcolor);
hexaButtonElement.addEventListener('click', changeHEXAcolor);

