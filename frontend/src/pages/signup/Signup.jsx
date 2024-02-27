import { Link } from "react-router-dom";
import GenderCheck from "./GenderCheck";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-blue-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Username"
              value={inputs.fullName}
              onChange={handleChange}
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                User Name
              </span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Full Name"
              className="w-full input input-bordered  h-10"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-black font-semibold">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <GenderCheck
              onCheckboxChange={handleCheckBoxChange}
              selectedGender={inputs.gender}
            />
          </div>

          <Link
            to={"/login"}
            className=" text-lg text-black hover:underline hover:text-green-950 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 text-[18px] "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
