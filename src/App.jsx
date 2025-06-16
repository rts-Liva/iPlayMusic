import { useRoutes } from "react-router";
import { useState } from "react";
import UpdateDarkmode from "./components/update-darkmode";
import UpdateSplash from "./components/update-splash";
import routes from "~react-pages";
import './scss/style.scss';

function App() {
  const [showSplashscreen, setShowSplashscreen] = useState(
    () => !JSON.parse(localStorage.getItem('showedSplashscreen'))
  );

  const colourTheme = JSON.parse(localStorage.getItem('darkmode'));

  UpdateDarkmode(colourTheme);

  UpdateSplash(setShowSplashscreen, showSplashscreen);

  return (
    <>
      {useRoutes(routes)}
    </>
  )
}

export default App;