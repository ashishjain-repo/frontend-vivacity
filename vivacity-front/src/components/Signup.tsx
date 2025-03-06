import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      location: e.target.location.value,
      occupation: e.target.occupation.value,
      birth: e.target.birth.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    axios.post("http://localhost:3000/awesome/applicant/register", formData)
      .then((response) => {
        console.log("Signup successful:", response.data);
      });
  };
  return (
    <>
      <div className="m-auto bg-white rounded-2xl">
        <form className="grid grid-rows-5 p-5 gap-y-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Name</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="John Doe" name="name"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Location</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="Idaho"  name="location"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Occupation</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="Student" name="occupation"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Date of Birth</label>
            <input type="date" className="text-lg rounded-sm border px-1" name="birth"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Username</label>
            <input type="text" className="text-lg rounded-sm border px-1" placeholder="john_doe" name="username" />
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Password</label>
            <input type="password" name="password" id="" className="text-lg rounded-sm border px-1" placeholder="**********"/>
          </div>

          <div className="grid grid-cols-[170px_1fr]">
            <label htmlFor="" className="text-xl">Retype Password</label>
            <input type="password" name="" id="" className="text-lg rounded-sm border px-1" placeholder="**********" />
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
