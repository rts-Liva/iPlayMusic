import { useRoutes } from "react-router";
import routes from "~react-pages";
import UpdateDarkmode from "./components/update-darkmode";
import './scss/style.scss';

function App() {
  const colourTheme = localStorage.getItem('darkmode');

  UpdateDarkmode(colourTheme);

  return (
    <>
      {useRoutes(routes)}
    </>
  )
}

export default App;