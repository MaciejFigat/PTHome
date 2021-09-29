### `Structure explanation - Navigation`
├──FrontpageHeader (this header is rendered only in desktop view)
├──Nav.tsx (this component implements a custom hook that enables changing classess of certain components according to screen scrolling)
    ├── for example TransitionWrapper gets additional class active or hidden depending on direction of the scroll and the distance - it enables hiding and sliding it in view depending on scroll input
    also HeaderTitleDesktop is a title component that shows only when user is not at the top of the page ie. when header is out of the view
    ├──NavListDesktop- contains components that are only rendered in mobile view 

### `Styling assets - miscellaneous`  
    ├──utils.ts 
        ├──it exports a helper function that is a big switch statement which governs styling for different variant props for elements that require them ie. SectionCards


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



