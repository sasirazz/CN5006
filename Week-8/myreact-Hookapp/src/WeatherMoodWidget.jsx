import { useState, useEffect } from "react"; 
import Rainy from "./rainy.png"; 
import Sunny from "./sunny.png"; 
import Cloudy from "./cloudy.jpg";

function WeatherMoodWidget({ pic: selectedEmoji }) { 
  const [image, setImage] = useState(Rainy); 
  const [count, setCount] = useState(0); 
 
  useEffect(() => { 
    const emojiImages = { 
      Rainy, 
      Sunny, 
      Cloudy, 
    }; 
 
    setImage(emojiImages[selectedEmoji] || Love); 
  }, [selectedEmoji]); 
 
  const handleClick = () => { 
    setCount((prevCount) => prevCount + 1); 
  }; 
 
  return ( 
    <div className="App">  
      <p> 
        {selectedEmoji} 
        <button type="button" onClick={handleClick}> 
          {count} 
          <img src={image} alt={selectedEmoji} /> 
        </button> 
      </p> 
 
  <p>&nbsp;</p> 
    </div> 
  ); 
} 
 
export default WeatherMoodWidget;  