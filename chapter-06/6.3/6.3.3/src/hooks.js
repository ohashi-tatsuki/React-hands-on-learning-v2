import { useState } from 'react';

// カスタムフックの宣言
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    // onChange: はオブジェクトリテラル, key: valueと記載できる
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue)
  ];
};
