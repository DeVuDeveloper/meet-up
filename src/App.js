import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from './components/layout/MainNavigation';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
