import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <NavBar />
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
