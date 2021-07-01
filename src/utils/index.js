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
