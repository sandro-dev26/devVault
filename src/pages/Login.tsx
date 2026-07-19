import { useState } from "react";

function LogIn() {
  const [isVisible, setIsVisible] = useState(false);
  function changeVisible() {
    setIsVisible(!isVisible);
  }
  return (
    <div className="bg-slate-900 w-full h-screen flex justify-center items-center">
      <div className="bg-slate-100 w-80 h-80 rounded-xl flex flex-col items-center">
        <h1 className="text-3xl mt-4 font-semibold text-blue-700">Log In</h1>

        <div className="w-full m-2 mt-8 p-2 flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-md">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="bg-neutral-200 text-neutral-950 p-2 rounded-xl focus:border-none placeholder:text-neutral-800"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="text-md">
              Password
            </label>
            <input
              type={isVisible ? "text" : "password"}
              id="username"
              placeholder="Username"
              className="bg-neutral-200 text-neutral-950 p-2 rounded-xl focus:border-none placeholder:text-neutral-800"
            />
            <button
              className="w-16 mt-2 rounded-xl bg-neutral-200 p-2 text-sm hover:bg-neutral-300"
              onClick={changeVisible}
            >
              {isVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
