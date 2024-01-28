import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <ProfilePage />
    </div>
  );
}

export default App;
