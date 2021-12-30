const isLoggedIn = () => {
  return localStorage.getItem('accessToken') ? true : false;
};

const setUserData = (data) => {
  localStorage.setItem('userData', JSON.stringify(data));
};

const getUserData = () => {
  return JSON.parse(localStorage.getItem('userData'));
};

const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export { isLoggedIn, setUserData, getUserData, setAccessToken, getAccessToken, clearLocalStorage };
