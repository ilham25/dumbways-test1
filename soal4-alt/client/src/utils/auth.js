const TOKEN_KEY = "email";

export const login = (data) => {
  localStorage.setItem(
    TOKEN_KEY,
    JSON.stringify({
      email: data.email,
    })
  );
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};
