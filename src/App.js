import './stylesheets/App.css';
import './stylesheets/animate.min.css';
import Gacha from './components/Gacha.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


function App() {

  return (

    <div className="App">
      <Header/>
      <Gacha/>
      <Footer/>
    </div>
  );
}

export default App;
