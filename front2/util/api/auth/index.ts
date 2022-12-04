import { customAxios } from "../customAxios";

export const signInPost = async (username: string, password: string) => {
  try {
    const response = await customAxios.post("/users/login", {
      username,
      password,
    });
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("username", response.data.username);
    location.href = "/";
  } catch (err) {
    console.log(err);
  }
};

export const signUpPost = async (
  username: string | undefined,
  password: string
) => {
  console.log(username, password);
  try {
    await customAxios.post("/users/register", { username, password });
    location.href = "/signin";
  } catch (err) {
    throw err;
  }
};
