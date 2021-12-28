import React from 'react';
import Color from "./Color";

export default function ColorList({ 
  colors = [], 
  onRemoveColor = f => f,
  onRateColor = f => f 
}) {
  // 配列の長さが0の時はテキストを表示する
  if (!colors.length) return <div>No Color Listed. (Add a Color)</div>;
  return (
    <div className='color-list'>
      {
        colors.map(color => 
          <Color 
            key={color.id} 
            {...color} 
            onRemove={onRemoveColor}
        />
       )
      }
    </div>
  );
}
