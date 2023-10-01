export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  if (typeof window === "undefined") return undefined;

  const token = localStorage.getItem("token");

  if (!token) return undefined;

  if (token) {
    return localStorage.getItem("token");
  }
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
