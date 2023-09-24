import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Component1 from '../Pages/HomePage';
import NextPage from '../Pages/NextPage';
import Component_front from '../Pages/Chat_box_Front';
import Chat_box_interact from '../Pages/chat_box_interact';
function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/about">首页</Link>
            </li>
            <li>
              <Link to="/next">下一页</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
         <Route path="/" element={<Component_front />}></Route>
          <Route path="/home" element={<Component1 />}></Route>
          <Route path="/chat" element={<Chat_box_interact />}></Route>
          <Route path="/next/:value" element={<NextPage />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
