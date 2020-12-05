import axios from "axios";

import { signout } from "next-auth/client";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      signout();

      return Promise.reject();
    }

    return Promise.reject(error);
  }
);

export { http };
