import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  -webkit-tap-highlight-color: transparent;
}
html {
  font-size: 100%;
  
} 
body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    height: 100%;
    background-color: var(--background4-main);  
    font-family: 'Quicksand', sans-serif; 
}

:root {
  
    --color1-main: #102a43;
    --color2-main: #393232;
    --color3-main: #151515;
    --text-main: lightcoral;
    --text2-main: #d996a8;
    --text3-main: #d4b8c0;
    --text4-main: #393232;
    --border-main: pink;
    --border-main2: green;
    --border-main3: brown;
    --border-main4: yellow;
    --border-main5: silver;
    --border-main6: gold;
    
    --color-neu1: ;
    --color-neu2: ;
    --color-neu3: ;
    --color-neu4: ;



    --color1-secondary: #236677;
    --color2-secondary: #1bb9ac;
   
    --color1-shadow: hotpink;
    --color2-shadow: #486581;
   
    --background1-main: #282c34;
    --background2-main: #18191c;
    --background3-main: #115363;
    --background4-main: #3b6fe0;
    --background5-main: #FEBE10;


    --background-blue1: #ADD7F6;
    --background-blue2: #87BFFF;
    --background-blue3: #3F8EFC;
    --background-blue4: #2667FF;
    --background-blue5: #3B28CC;
    --background-blue6: #086788;
    --background-blue7: #7EBDC2;

    --background-secondary1: #264653;
    --background-secondary2: #2a9d8f;
    --background-secondary3: #e9c46a;
    --background-secondary4: #f4a261;
    --background-secondary5: #e76f51;
    
    --background-tertiary1: #1d3557;
    --background-tertiary2: #457b9d;
    --background-tertiary3: #a8dadc;
    --background-tertiary4: #f1faee;
    --background-tertiary5: #e63946;


    --background-quaternary1: #1d3557;
    --background-quaternary2: #457b9d;
    --background-quaternary3: #a8dadc;
    --background-quaternary4: #f1faee;
    --background-quaternary5: #e63946;



    

    svg {
      // margin-right: 0.5rem;
    }

    a, a:link, a:visited {
      text-decoration: none;
      // color: #06acf1;
      color: var(--background-tertiary1);
      transition: 0.3s;
      
    }
    a:hover  {
      color: pink;
      transition: 0.3s; 
    }
    
    
}
::-webkit-scrollbar {
  width: 0.75em;
  background: #282c34;
}

::-webkit-scrollbar-thumb {
  background: rgba(250, 153, 172, 1);
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(244, 16, 62, 0.6);
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.7);
  border-radius: 5px;
  background-color: #18191c;
}
`

export { GlobalStyle }
