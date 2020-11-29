import axios from "axios";
axios.defaults.withCredentials = true;

export default function IndexPage() {
  const login = async () => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
    const res = await axios.post("http://localhost:8000/login", {
      email: "",
      password: "",
    });
    console.log("🚀 ~ file: index.js ~ line 11 ~ login ~ res", res);
  };
  const user = async () => {
    const { data } = await axios.get("http://localhost:8000/api/user");
    console.log("🚀 ~ file: index.js ~ line 11 ~ login ~ data", data);
  };

  return (
    <div className="text-center">
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div>

      <button
        className="px-4 py-2 text-white bg-blue-400 rounded"
        onClick={login}
      >
        Login
      </button>
      <button
        className="px-4 py-2 text-white bg-blue-400 rounded"
        onClick={user}
      >
        User
      </button>
    </div>
  );
}
