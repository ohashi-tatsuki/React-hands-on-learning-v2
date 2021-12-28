import React from 'react';
import Color from "./Color";

export default function ColorList({ colors = [] }) {
  // 配列の長さが0の時はテキストを表示する
  if (!colors.length) return <div>No Color Listed.</div>;
  return (
    <div>
      {
        colors.map(color => <Color key={color.id} {...color}/>)
      }
    </div>
  );
}
