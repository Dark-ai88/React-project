import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MessagePage from './components/MessagePage/MessagePage';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import NewsPage from './components/NewsPage/NewsPage';
import MusicPage from './components/MusicPage/MusicPage';
import SettingsPage from './components/SettingsPage/SettingsPage';

function App(props) {
  return (
    <div>
      <div className="app">
        <Header />
        <NavBar />
        <Routes>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/message/*' element={<MessagePage state={props.state} />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/music' element={<MusicPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
