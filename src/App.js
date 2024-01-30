import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <div>
      <div className="app-header">
        <Header />
      </div>
      <div className="app">
        <NavBar />
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
