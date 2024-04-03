export const getStorage = (key) => {
  const res = JSON.parse(sessionStorage.getItem(`${key}`));
  if (res) {
    return res;
  }
  return null
};

export const setStorageTrends = (key = 'trends', data) => {
  sessionStorage.setItem(`${key}`, JSON.stringify(data));
};
