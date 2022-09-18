import './App.css';
import Header from './components/Layout/Header'
import Sidebar from './components/sidebar/Sidebar';
import Overview from './components/overview/Overview';

function App() {
  return (
    <div className="App">
    <Header />
    <Sidebar />
    <Overview />
    </div>
  );
}

export default App;

