// chapter-06を記載する 
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// f => f はダミー関数, undefined対策
const Star = ({ selected = false, onSelect = f => f }) => (
  // 1. スターアイコンをクリック, onSelectが発火
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5 }) {
  // const [State変数, 更新関数] = usestate(初期値);
  // 3. stateの状態が変化したら再描画する
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
         key={i}
         selected={selectedStars > i}
         // 2. 更新関数を=1, stateの状態が変わる
         onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}