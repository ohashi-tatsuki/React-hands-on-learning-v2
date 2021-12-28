import React, { useState } from 'react';
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

export default function App() {
  // 更新関数のないuseState... 初期値出してねってこと？
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}