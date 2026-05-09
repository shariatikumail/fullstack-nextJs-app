"use client";

import { UserHexagon } from "@boxicons/react";
import { useState } from "react";

export interface EmailType {
  email: string;
}

export interface PasswordType {
  password: string;
} 

const Log = () => {
  const [email, setEmail] = useState<EmailType>();
  const [password, setPassword] = useState<PasswordType>();

  const emailBar = () : void => {
     setEmail(email);
  }

  const passwordBar = () : void => {
     setPassword(password);
  }
  
  return (
    
    <main>
       <h1 className="text-white text-2xl ml-10 mt-5">LOGIN PAGE</h1>

       <form className="border w-130 h-150 ml-120 rounded-3xl bg-white p-23 flex flex-col gap-10">
          <header className="flex flex-col gap-5">
             <UserHexagon className="ml-30 w-24 h-24"></UserHexagon>
             <h1 className="ml-21 font-medium text-2xl">Create Account</h1>
          </header>
          
          <section className="flex flex-col gap-5 ml-[-30]">
              <input
                className="w-100 hover:bg-gray-100 transition-all border-r-0 border-l-0 border-t-0 duration-20 border-2 p-3 cursor-pointer" 
                type="email" 
                placeholder="Email"
                onChange={emailBar}
              />

              <input 
                className="w-100 hover:bg-gray-100 border-r-0 border-l-0 border-t-0 transition-all duration-200 border-2 p-3 cursor-pointer" 
                type="password" 
                placeholder="Password"
                onChange={passwordBar}
              />
          </section>

          <a href="" className="w-50">Forgot Password?</a>
          
          <section>
              <button 
                 className="rounded-xl cursor-pointer border bg-black p-4 w-100 ml-[-30] hover:p-6 hover:mt-[-5]  transition-all duration-200 text-white text-2xl">

                  Login
              </button>
          </section>
          
       </form>

       <h1 className="text-white ml-10 text-xl">By Kumail Shariati</h1>
    </main>
    // end
  )
}

export default Log;