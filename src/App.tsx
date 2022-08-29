import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { Home } from './views/Home';
import { useLocalStorage } from 'usehooks-ts';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "black" : "lofi"
  );

  const switchTheme = () => {
    const newTheme = theme === "black" ? "lofi" : "black";
    setTheme(newTheme);
  }


  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <NavBar theme={theme} switchTheme={switchTheme}/>
        <Routes>
          <Route path='/Emart99' element={<Home />} />
          <Route
            path="*"
            element={<Navigate to="/Emart99" replace />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
