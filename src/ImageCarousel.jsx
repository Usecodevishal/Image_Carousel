import { useEffect, useState } from "react";
import "./styles.css";
function ImageCarousel() {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];

  function back() {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  }
  function forword() {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  }

  return (
    <>
      <h1>ImageCarousel</h1>
      {images.map(
        (el, index) =>
          currentImg === index && (
            <div key={el} className="slide">
              <img src={el} />
            </div>
          )
      )}

      <button onClick={back}>Toggle back</button>
      <button onClick={forword}>Toggle forword</button>
    </>
  );
}
export default ImageCarousel;
