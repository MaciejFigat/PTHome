### `Structure explanation - Navigation`
├──FrontpageHeader (this header is rendered only in desktop view)
├──Nav.tsx (this component implements a custom hook that enables changing classess of certain components according to screen scrolling)
    ├── for example TransitionWrapper gets additional class active or hidden depending on direction of the scroll and the distance - it enables hiding and sliding it in view depending on scroll input
    also HeaderTitleDesktop is a title component that shows only when user is not at the top of the page ie. when header is out of the view
    ├──NavListDesktop- contains components that are only rendered in mobile view 

### `Styling assets - miscellaneous`  
    ├──utils.ts 
        ├──it exports a helper function that is a big switch statement which governs styling for different variant props for elements that require them ie. SectionCards
### `Styling InfoSection - miscellaneous v2`  
  ├──InfoSection 
        ├──InfoSection.styled.js - styles for the InfoSection
            ├──it uses handleSectionColor function which governs over its styles depending on the props passed through variant prop while rendering `<InfoSection/>` component, ie. variant?: 'primary' | 'secondary' | 'tertiary' | 'blue'
             ├──if you want to change styles for particular variants do so in the styles/utilsSection.ts 
        ├──InfoSection.styled.tsx - structure
            ├──it can receive variant props or it defaults to a regular one 
            ├──it expects certain data props ie.  topline: string, headline: string, subtitle: string,  img: any
            ├──buttonLabel ? it renders button : it does not (buttonLabel?: string)
             
            ├──if imgStart is present (imgStart?: boolean) img element at the start of the row if not it's at the end
 
  buttonLabel?: string

  
  
           

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### for development proxy in package.json in frontend is needed
"proxy": "http://127.0.0.1:5000",
proxy in frontend "proxy": "http://127.0.0.1:5000" in package.json, for making a request on 5000 port instead 3000 frontend is running on



