import { useEffect, useState } from "react";

// `!!` 求两次反，转换成 boolean 值
export const isFalsy = (v) => (v === 0 ? false : !v);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次value的值改变后，设置一个新的定时器
    const handle = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 在每次上一个useEffect执行完后运行清除（第二个设置了就把第一个清除了，以此类推）
    return () => {
      clearTimeout(handle);
    };
  }, [value, delay]);
  return debounceValue;
};
