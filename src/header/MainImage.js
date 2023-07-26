// 이미지를 public 폴더에 저장한 경우
import React from 'react';
import '../css/main_img/main_img.css';

const MainImage = () => {
  return (
    <div>
      <img src="/main_image/carevillege_thumbnail.jpeg" alt="Example" />
    </div>
  );
};

export default MainImage;
