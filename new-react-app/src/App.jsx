import './App.css';
import discardLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import background from "./assets/discord-background.png"

function App(){
  return (
    <div className='App'>
      <div className='navbar'>
        <img src={discardLogo} className='logo' alt='logo'/>
        <img src={menuIcon} className='menu' alt='menu'/>
      </div>
      <div className='inside-body'>
        <section className='section'>
          <h1>IMAGING A <span>PLACE...</span></h1>
          <p>... where you can belong to a school club, a gaming group,
             or a<span> worldwide art community. Where just you and a handful of</span> 
             <span>friends can spend time together. A place that makes 
             it easy to</span> talk every day and hang out more often.</p>
          <button className='mac-btn'>Download for Mac</button>
          <button className='browser-btn'>Open Discord in your browser</button>
        </section>
        <img src={background} className='background' alt='background'/>

      </div>
    </div>
  );
}

export default App;
