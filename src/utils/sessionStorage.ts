const setSessionStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export { setSessionStorage, getSessionStorage, removeSessionStorage };
