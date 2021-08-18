### `Structure explanation - Navigation`
├──FrontpageHeader (this header is rendered only in desktop view)
├──Nav.tsx (this component implements a custom hook that enables changing classess of certain components according to screen scrolling)
    ├── for example TransitionWrapper gets additional class active or hidden depending on direction of the scroll and the distance - it enables hiding and sliding it in view depending on scroll input
    also HeaderTitleDesktop is a title component that shows only when user is not at the top of the page ie. when header is out of the view
    ├──NavListDesktop- contains components that are only rendered in mobile view 
  
    ├──


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.







