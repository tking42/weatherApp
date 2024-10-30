import './App.css'
import Heading from "./components/Heading/index.jsx";
import DisplayCurrent from "./components/DisplayCurrent/index.jsx";
import DisplayForcast from "./components/DisplayForcast/index.jsx";
import CitySearch from "./components/CitySearch/index.jsx";


function App() {

    return (
    <main>
        <Heading></Heading>
        <CitySearch></CitySearch>
        <DisplayCurrent></DisplayCurrent>
        <DisplayForcast></DisplayForcast>
    </main>
  )
}

export default App
