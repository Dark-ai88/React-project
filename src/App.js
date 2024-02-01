import './App.css';
import Header from './components/Header/Header';
import MessagePage from './components/MessagePage/MessagePage';
import NavBar from './components/NavBar/NavBar';
// import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <NavBar />
        <div className='app-wrapper'>
          {/* <ProfilePage /> */}
          <MessagePage />
        </div>
      </div>
    </div>
  );
}

export default App;
