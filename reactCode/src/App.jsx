/*
  1. Migrate all the project to vite scaffold
  将项目迁移到vite
  2. Abstract CircleProperty component from circle size and circle rotate
  将圆形大小和旋转抽象为CircleProperty组件

  More: Create TogglePurple and TextColor components
  更多：创建TogglePurple和TextColor组件
 
  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/
import { useState } from "react";
import "./App.css";

import CircleProperty from "./CircleProperty";
import TogglePurple from "./TogglePurple";
import TextColor from "./TextColor";

function App() {
  const [isPurple, setIsPurple] = useState(false);
  const [textColor, setTextColor] = useState("");

  const circleClasses = `${isPurple ? "purple" : ""} ${textColor}`;

  const [size, setSize] = useState(150);
  const [rotate, setRotate] = useState(0);

  const circleStyles = {
    height: `${size}px`,
    width: `${size}px`,
    lineHeight: `${size}px`,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <main>
      <TogglePurple value={isPurple} setValue={setIsPurple} >
        Purple
      </TogglePurple>

      <TextColor value={textColor} setValue={setTextColor} >
        Text Color
      </TextColor>

      <CircleProperty value={size} setValue={setSize}>
        Circle Size
      </CircleProperty>


      <CircleProperty value={rotate} setValue={setRotate}>
        Circle Rotate
      </CircleProperty>

      <div className={`circle ${circleClasses}`} style={circleStyles}>
        Hi!
      </div>
    </main>
  );
}

export default App;