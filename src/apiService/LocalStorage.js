export const getStorage = () => {
  const res = JSON.parse(localStorage.getItem('trends'));
  if (res) {
    return res;
  }
  return []
};

export const setStorageTrends = data => {
  localStorage.setItem('trends', JSON.stringify(data));
};
