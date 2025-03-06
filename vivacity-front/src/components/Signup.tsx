import React from "react";

const Signup = () => {
  return (
    <>
      <div className="m-auto bg-white rounded-2xl">
        <form action="" className="grid grid-rows-5 p-5 gap-y-2">
          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Name</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="John Doe" />
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Location</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="Idaho"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Occupation</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="Student"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Username</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="john_doe"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Password</label>
            <input type="password" name="" id="" className="text-lg rounded-sm border px-1" placeholder="**********"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Retype Password</label>
            <input type="password" name="" id="" className="text-lg rounded-sm border px-1" placeholder="**********"/>
          </div>

          <div className="mx-auto my-2">
          <input type="submit" className="text-2xl px-4 py-1 rounded-md text-white bg-blue-500 cursor-pointer hover:scale-105 hover:bg-blue-600 transition-all duration-300 active:scale-95" value={'Submit'}/>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
