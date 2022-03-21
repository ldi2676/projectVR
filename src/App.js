import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Component/Clock.js'
import './Component/Banner.js'

import { Clock } from './Component/Clock.js';
import { Banner } from './Component/Banner.js';

const element = (
  <div>
    <h3>JSX</h3><hr/>
    <div><Clock/></div>
  </div>
);

function greeting(name) {
  if(name === 'Pengun'){
    return "Hello! " + name;
  }
  else {
    return "Hello! Guest";
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class ="inner">
          <span>
            <img class="link_icon" href='index.html'>
              {/* <span class="blind">
                Na
              </span> */}
            </img>
          </span>
          <span class ="title">
              <a class="farm_factory" href='index.html'>Farm Factory  </a>
          </span>
          <span>
              <button class="home" href='index.html'>HOME</button>
          </span>
          <span>
              <button class="notice" href='index.html'>공지사항</button>
          </span>
          <span>
              <button class="service" href='index.html'>서비스</button>
          </span>
          <span class = "dropdown">
              <button class="link_menu">
              </button>
              {/* <div class="dropdown-content">
                <li>
                  <a>메뉴1</a>
                  <a>메뉴1</a>
                  <a>메뉴1</a>
                </li>
              </div> */}
          </span>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        
      </header>
      <section>
        <div>
          <ul>
            <a>
              <Banner/>
            </a>
          </ul>
        </div>
        <a class="btn_pre _click[homeBase.goPrev('?');return false;]" href="#">이전 배너</a>
        <a class="btn_pre _click[homeBase.goPrev('?');return false;]" href="#">다음 배너</a>
        
      <p>
          Hello React!
          { element }

          {/*추가*/}
          <h2>
            {greeting('Pengun')}
          </h2>
          
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
      
     
    </div>
  );
}

export default App;
