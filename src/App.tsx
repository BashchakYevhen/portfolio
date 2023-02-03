import React from 'react';
import logo from './image/logo.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} alt='logo' className='logo' />
        <nav className='App-nav'>
          <ul className='App-list'>
            <li className='App-link'>About me</li>
            <li className='App-link'>Portfolio</li>
            <li className='App-link'>Contact</li>
          </ul>
        </nav>
      </header>
      <div className='Container'>
        <section className='Section'>
          <p className='aboutText'>
            <img src="http://via.placeholder.com/200" alt="photography" className='Photo' /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam illum nobis deleniti repellendus quia laborum harum molestiae nemo maiores? Aspernatur eius architecto doloribus! Minus hic optio cumque voluptate dolores eveniet excepturi, tempora ratione, dignissimos aspernatur est consequuntur suscipit blanditiis illum esse deleniti exercitationem nulla, voluptas laborum itaque eligendi expedita dolorum!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perferendis sunt quam nisi sint nulla temporibus incidunt impedit, eligendi tenetur? Est nemo, ipsum repellendus amet quidem obcaecati expedita, magni minima perferendis velit adipisci dolor corporis repellat architecto odio aliquid natus a, voluptas consequuntur! Blanditiis nulla a voluptas fuga minus enim!</p>

        </section>


      </div>
      <footer className='footer'>Powered by Yevhen</footer>
    </div>
  );
}

export default App;