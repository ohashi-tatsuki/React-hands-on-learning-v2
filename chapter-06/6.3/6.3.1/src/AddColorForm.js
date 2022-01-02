import React, { useRef } from 'react';

// 制御されていないコンポーネント
export default function AddColorForm({ onNewColor = f => f }) {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = e => {
    // クリック時にPOSTを送らない
    e.preventDefault();

    // currentフィールドから入力値を取得
    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    onNewColor(title, color);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form>
      {/* useRefを参照 */}
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  );
}
