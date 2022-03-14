import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from './components/layout/Layout';
import "./App.css";

const App = () => {
  return (
    
     <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
  
    </Layout>
  );
}

export default App;
