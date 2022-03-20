import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Component/Clock.js'

import { Clock } from './Component/Clock.js';

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
              <a class="home" href='index.html'>HOME  </a>
          </span>
          <span>
              <a class="notice" href='index.html'>공지사항  </a>
          </span>
          <span>
              <a class="service" href='index.html'>서비스  </a>
          </span>
          <span>
              <img class="link_menu">
              </img>
          </span>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        
      </header>
      <section>
        <div>
          <ul>
            <a>
              <img src="https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2021/04/1-%EC%8B%A0%EC%84%B8%EA%B3%84-%EC%9A%A9%EC%9D%B8%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8C%9C210422-0183.jpg">
                
              </img>
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
