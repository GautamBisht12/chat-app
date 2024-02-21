import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(loginInfo);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-blue-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
        <h1 className="text-3xl flex flex-col gap-3 font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-800 ml-5">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
              name="username"
              value={loginInfo.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-black font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>
          <Link
            to="/signup"
            className="text-lg  hover:underline hover:text-purple-900 mt-3 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 text-[18px] "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Log in"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
