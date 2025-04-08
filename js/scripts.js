const rootStyles = document.documentElement.style;
const titleElement = document.getElementById('title');
const totalWindowScroll = document.body.scrollHeight;
const rgbButtonElement = document.getElementById('rgb-button');
const hexaButtonElement = document.getElementById('hexa-button');

//cosas que necesito pero no se para que
// Scroll total de la ventana: document.body.scrollHeight
// Alto de la ventana: window.innerHeight
// Cantidad de scroll: window.scrollY

const changeWidthScroll = () => {
  const scrolledPixels = window.scrollY; //lo que me muevo en la ventana

  //regla de tres
  const scrolledPercentage = Math.floor(
    (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight)
  );

  console.log(scrolledPercentage);

  //cambiar variable css

  rootStyles.setProperty('--width-scrollBar', `${scrolledPercentage}%`);

  //actualizo el texto del elemento
  titleElement.textContent = `Te has desplazado: ${scrolledPixels} px`;

  //   console.log(scrolledPixels);
};

//FUNCIONES DE LOS BOTONES

const generateRGBcolor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let newRGBcolor = `rgb(${r},${g},${b})`;
  console.log(newRGBcolor);
  return newRGBcolor;

  // color: rgb(red, green, blue);
};
const changeRGBcolor = () => {
  const newRGBcolor = generateRGBcolor();
  rootStyles.setProperty('--background-color', newRGBcolor); //editr el css
};

const generateHEXAcolor = () => {
  let characters = '0123456789ABCDEF'; // posibles caracteres en un color hex
  let colorHEXA = '#'; // que lleve #al principio

  for (let i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * characters.length);
    colorHEXA += characters.charAt(randomIndex);
  }
  console.log(colorHEXA);
  return colorHEXA;

  //WIIII SI FUNCIONA
};
const changeHEXAcolor = () => {
  const newHEXAcolor = generateHEXAcolor();
  rootStyles.setProperty('--background-color', newHEXAcolor); //editr el css
};

const getMousePosition = event => {
  rootStyles.setProperty('--mousePosition-X', `${event.clientY}px`);
  rootStyles.setProperty('--mousePosition-Y', `${event.clientX}px`);
};

//EVENTS
window.addEventListener('scroll', changeWidthScroll);
rgbButtonElement.addEventListener('click', changeRGBcolor);
hexaButtonElement.addEventListener('click', changeHEXAcolor);
document.addEventListener('mousemove', getMousePosition);
