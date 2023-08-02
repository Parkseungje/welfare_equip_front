import React, { useState } from 'react';

const Signup = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업을 열기 위한 이벤트 핸들러
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // 팝업을 닫기 위한 이벤트 핸들러
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
  const style = {
    margin : "20px",
  };

  const labelDiv1 = {
    border : "none",
    display : "inline-block",
    padding : "5px",
    paddingLeft : "25px",
    marginTop : "10px",
    backgroundColor : "#CACACA",
    color : "white",
    width : "200px"
  };

  const labelDiv2 = {
    border : "none",
    display : "inline-block",
    padding : "5px",
    paddingLeft : "25px",
    marginTop : "10px",
    backgroundColor : "#CACACA",
    color : "white",
    width : "360px"
  };

  const labelFont = {
    fontSize : "30px",
  };
  

  return (

    

    <div style={style}>
      <div>
        <h1>회원가입</h1>
      </div>
      <hr />
      <div style={labelDiv1}>
        <span style={labelFont}>Member Type</span>
      </div>
      <div style={{marginTop:"10px"}}>
        <span>가입하실 회원구분을 선택해주세요</span>
      </div>
      <div style={{marginTop:"40px", marginBottom:"40px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>회원구분</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"100px"}}>
          <input type='radio' checked value="1"></input><span>개인회원</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"50px"}}>
          <input type='radio' checked value="0"></input><span>사업자회원</span>
        </div>
      </div>
      <hr />
      <div style={labelDiv2}>
        <span style={labelFont}>Member Basic Information</span>
      </div>
      <div style={{marginTop:"10px"}}>
        <span>회원가입을 위해 필요한 기본정보입니다. 회원님 정보는 동의없이 사용하지 않습니다.</span>
      </div>
      <div style={{marginTop:"40px", marginBottom:"40px"}}>
        <div style={{display:"inline-block"}}>
          <span style={{marginLeft:"10px"}}>아이디</span><span style={{color:"red"}}>*</span>
        </div>
        <div style={{display:"inline-block", marginLeft:"100px"}}>
          <input id="idInput"></input>
        </div>
        <div style={{display:"inline-block"}}>
          <button onClick={openPopup}>아이디 중복확인</button>
          
          {isPopupOpen && (
          <div
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: '999',
            }}
          >
            <div
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '4px',
              }}
            >
              <h2>팝업 컨텐츠</h2>
              <p>팝업 내용을 입력하세요.</p>

              {/* 팝업 닫기 버튼 */}
              <button onClick={closePopup}>팝업 닫기</button>
            </div>
          </div>
        )}

        </div>
      </div>

    </div>
    
  );
};

export default Signup;
