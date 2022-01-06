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
    overflow-wrap: break-word;
    background-color: var(--secondary3);  
    // font-family: 'Quicksand', sans-serif; 
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-family: 'Raleway', sans-serif;
}

:root {
  
   --padding: 2rem;
   
   --background1-main: #1E1E1F;
   --background2-main: #3C3B3D;
   --background3-main: #6D6C70;
   --background4-main: #A2A1A6;
   --background5-main: #CBC9CF;

   --secondary1: #264653;
   --secondary2: #2a9d8f;
   --secondary3: #e9c46a;
   --secondary4: #f4a261;
   --secondary5: #e76f51;

   --redblue1: #e63946;
   --redblue2: #f1faee;
   --redblue3: #a8dadc;
   --redblue4: #457b9d;
   --redblue5: #1d3557;
   
   --pink1: #f7a14e;
     
  --orange1: #ca6702;
  --orange2: #ee9b00;
  --orange3: #fca311;

    --success1: #008000;
    --success2: #38b000;
    --success3: #70e000;

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

   
    .nav_link {
      color: var(--background4-main);
      display: flex;
      align-items: center;
      
    }
    .nav_link.activated {
      // color: var(--background5-main);
      color: var(--secondary2);

     
      
    }
    .nav_link:hover  {
      color: var(--background5-main);
   
      transition: 0.3s; 
    }
    a, a:link, a:visited {
      text-decoration: none;
     
      // color: var(--background4-main);
  
      // transition: 0.3s;
      
    }
    
    
    
}
::-webkit-scrollbar {
  width: 0.5em;
  background: var(--background1-main);
}

::-webkit-scrollbar-thumb {
  background: #3C3B3D;
  border-radius: 2px;
  -webkit-box-shadow: inset 10px 10px 20px #2e2d2e,
  inset -10px -10px 20px #4a494c;;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.7);
  border-radius: 2px;
  background-color: #CBC9CF;
}

`

export { GlobalStyle }
