import React, { useState } from 'react';
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

export default function App() {
  // 更新関数のないuseState... 初期値出してねってこと？
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map(color => 
          color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
      }}
      onRemoveColor={id => {
        // color.idにマッチしていないものは削除されている
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
  );
}