import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header/dropdown.css'

const DropDown = () => {

    const [showMenu1, setShowMenu1] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);
    const [showMenu3, setShowMenu3] = useState(false);
    const [showMenu4, setShowMenu4] = useState(false);
    const [showMenu5, setShowMenu5] = useState(false);
    const [showMenu6, setShowMenu6] = useState(false);
    const [showMenu7, setShowMenu7] = useState(false);
    
    const handleMouseOver = (menuNumber) => {
        switch (menuNumber) {
            case 1:
                setShowMenu1(true);
              break;
            case 2:
                setShowMenu2(true);
              break;
            
            case 3:
                setShowMenu3(true);
              break;

            case 4:
                setShowMenu4(true);
              break;
            
            case 5:
                setShowMenu5(true);
              break;
              
            case 6:
                setShowMenu6(true);
              break;
                
            case 7:
                setShowMenu7(true);
              break;
          }
      };
  
      const handleMouseOut = (menuNumber) => {
        switch (menuNumber) {
            case 1:
                setShowMenu1(false);
              break;
            case 2:
                setShowMenu2(false);
              break;
            
            case 3:
                setShowMenu3(false);
              break;

            case 4:
                setShowMenu4(false);
              break;
            
            case 5:
                setShowMenu5(false);
              break;
              
            case 6:
                setShowMenu6(false);
              break;
                
            case 7:
                setShowMenu7(false);
              break;
          }
      };

    return (
      <div className="container">
        <div
          className="menu"
          onMouseOver={() => handleMouseOver(1)}
          onMouseOut={() => handleMouseOut(1)}
        >
          <button>선한이웃복지용구</button>
          {showMenu1 && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">전동침대</Link>
              </li>
              <li>
                <Link to="/wheelchair">휠체어</Link>
              </li>
              <li>
                <Link to="/mattress">매트리스</Link>
              </li>
              <li>
                <Link to="/portable-bath">이동욕조</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className="menu"
          onMouseOver={() => handleMouseOver(2)}
          onMouseOut={() => handleMouseOut(2)}
        >
          <button>급여대여</button>
          {showMenu2 && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">전동침대</Link>
              </li>
              <li>
                <Link to="/wheelchair">휠체어</Link>
              </li>
              <li>
                <Link to="/mattress">욕창예방 매트리스</Link>
              </li>
              <li>
                <Link to="/portable-bath">배회감지기/이동욕조</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className="menu"
          onMouseOver={() => handleMouseOver(3)}
          onMouseOut={() => handleMouseOut(3)}
        >
          <button>급여구입</button>
          {showMenu3 && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">이동변기/간이변기</Link>
              </li>
              <li>
                <Link to="/wheelchair">목욕의자</Link>
              </li>
              <li>
                <Link to="/mattress">보행기</Link>
              </li>
              <li>
                <Link to="/portable-bath">지팡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">안전손잡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">방석</Link>
              </li>
              <li>
                <Link to="/portable-bath">자세변환용구</Link>
              </li>
              <li>
                <Link to="/portable-bath">방수시트</Link>
              </li>
              <li>
                <Link to="/portable-bath">요실금팬티</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className="menu"
          onMouseOver={() => handleMouseOver(4)}
          onMouseOut={() => handleMouseOut(4)}
        >
          <button>일반대여</button>
          {showMenu4 && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">전동침대</Link>
              </li>
              <li>
                <Link to="/wheelchair">휠체어</Link>
              </li>
              <li>
                <Link to="/mattress">욕창예방 매트리스</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className="menu"
          onMouseOver={() => handleMouseOver(5)}
          onMouseOut={() => handleMouseOut(5)}
        >
          <button>일반구입</button>
          {showMenu5 && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">이동변기/간이변기</Link>
              </li>
              <li>
                <Link to="/wheelchair">목욕의자</Link>
              </li>
              <li>
                <Link to="/mattress">보행기</Link>
              </li>
              <li>
                <Link to="/portable-bath">지팡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">안전손잡이</Link>
              </li>
              <li>
                <Link to="/portable-bath">방석</Link>
              </li>
              <li>
                <Link to="/portable-bath">자세변환용구</Link>
              </li>
              <li>
                <Link to="/portable-bath">방수시트</Link>
              </li>
              <li>
                <Link to="/portable-bath">요실금팬티</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className="menu"
          onMouseOver={() => handleMouseOver(6)}
          onMouseOut={() => handleMouseOut(6)}
        >
          <button>환자영양식</button>
          {showMenu6 && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">고소한 검은깨</Link>
              </li>
              <li>
                <Link to="/wheelchair">구수한맛</Link>
              </li>
              <li>
                <Link to="/mattress">오메가</Link>
              </li>
              <li>
                <Link to="/portable-bath">화이바</Link>
              </li>
            </ul>
          )}
        </div>
        <div
          className="menu"
          onMouseOver={() => handleMouseOver(7)}
          onMouseOut={() => handleMouseOut(7)}
        >
          <button>홈헬스케어</button>
          {showMenu7 && (
            <ul className="dropdown">
              <li>
                <Link to="/electric-bed">건강기능신발</Link>
              </li>
              <li>
                <Link to="/wheelchair">압박용밴드</Link>
              </li>
              <li>
                <Link to="/mattress">지팡이고무</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    );
};

export default DropDown;