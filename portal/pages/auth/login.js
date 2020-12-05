import axios from "axios";
import { http } from "lib/http";
import React from "react";
import { csrfToken } from "next-auth/client";

const Login = ({ csrfToken }) => {
  // const login = async e => {
  //   e.persist();
  //   e.preventDefault();
  //   const form = new FormData(e.target);
  //   let data = Object.fromEntries(form);
  //   data.device_name = window.navigator.userAgent;

  //   await http.get("/sanctum/csrf-cookie");

  //   const res = await axios.post("/api/auth/callback/credentials", data);
  //   // const res = await api().post("/login", data);

  //   if (res.status === 200) {
  //     console.log("🚀 ~ file: index.js ~ line 11 ~ login ~ res", res);
  //   }
  // };
  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            method="post"
            action="/api/auth/callback/credentials"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember_me"
                  className="block ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <input
              name="device_name"
              type="hidden"
              defaultValue={window?.navigator.userAgent}
            />
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

export const getServerSideProps = async context => {
  return {
    props: {
      csrfToken: await csrfToken(context),
    },
  };
};
