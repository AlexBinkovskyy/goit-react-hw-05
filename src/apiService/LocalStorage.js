export const getStorage = () => {
  const res = JSON.parse(sessionStorage.getItem('trends'));
  if (res) {
    return res;
  }
  return []
};

export const setStorageTrends = data => {
  sessionStorage.setItem('trends', JSON.stringify(data));
};
