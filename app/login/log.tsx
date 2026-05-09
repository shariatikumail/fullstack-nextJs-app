import { UserHexagon } from "@boxicons/react";
import { useState } from "react"

export interface EmailType {
  email: string | null;
}

export interface PasswordType {
  email: string | null;
}

const Log = () => {
  const[email, setEmail] = useState<EmailType>();
  const[Password, setPassword] = useState<PasswordType>();

  const emailBar = () : void => {
    setEmail(email);
  }

  const passwordBar = () : void => {
    setPassword(email);
  }

  const enterBtn = () => {}

  return (
    <main>
       <form className="border w-130 h-150 ml-120 mt-13 rounded-3xl bg-white p-23 flex flex-col gap-10">
          <header className="flex flex-col gap-5">
             <UserHexagon className="ml-30 w-24 h-24"></UserHexagon>
             <h1 className="ml-21 font-medium text-2xl">Create Account</h1>
          </header>
          
          <section className="flex flex-col gap-5 ml-[-30]">
             <input
                className="w-100 hover:bg-gray-100 transition-all duration-200 border p-3 cursor-pointer" 
                type="email" 
                placeholder="Email"
                onChange={emailBar}
              />
             <input 
                className="w-100 hover:bg-gray-100 transition-all duration-200 border p-3 cursor-pointer" 
                type="password" 
                placeholder="Password"
                onChange={passwordBar}
              />
          </section>
          
          <section>
              <button 
                 onClick={enterBtn}
                 className="cursor-pointer border bg-black p-4 w-100 ml-[-30] hover:p-6 transition-all duration-200 text-white text-2xl">

                  Login
              </button>
          </section>
       </form>
    </main>
  )
}

export default Log;