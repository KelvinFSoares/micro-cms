export const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const setStorageValue = (key, value) => {
  const saved = localStorage.setItem(key, JSON.stringify(value));
  return saved;
};
