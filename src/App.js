// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './header/Home';
import MyPage from './header/MyPage';
import OrderHistory from './header/OrderHistory';
import Cart from './header/Cart';
import Login from './header/Login';
import Signup from './header/Signup';
import './App.css'; // App.css에서 스타일을 정의합니다.

const App = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">홈</Link>
        <Link to="/mypage">마이페이지</Link>
        <Link to="/order-history">주문내역</Link>
        <Link to="/cart">장바구니</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;