// import { useState } from "react";

// const Login = () => {
//   const [state, setState] = useState("Sign Up");
//   const [password, setPassword] = useState(" ");
//   const [name, setName] = useState(" ");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <form className="min-h-[80vh] flex items-center">
//         <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//           <p className="text-2xl font-semibold">
//             {state === "Sign up " ? "Create Account" : "Login"}
//           </p>
//           <p>
//             Please{state === "Sign up " ? "sign up" : "Log in"}to book
//             appointnment
//           </p>
//           <div>
//             <div className="w-full">
//               <p> Full Name</p>
//               <input
//                 className="border border-zinc-300 rounded w-full p-2 mt-1 "
//                 type="text"
//                 onChange={(e) => setName(e.target.name)}
//                 value={name}
//                 required
//               />
//             </div>

//             <div>
//               <p>Email</p>
//               <input
//                 className="border border-zinc-300 rounded w-full p-2 mt-1 "
//                 type="email"
//                 onChange={(e) => setName(e.target.name)}
//                 value={name}
//                 required
//               />
//             </div>

//             <div>
//               <p> Password</p>
//               <input
//                 className="border border-zinc-300 rounded w-full p-2 mt-1 "
//                 type="password"
//                 onChange={(e) => setName(e.target.name)}
//                 value={name}
//                 required
//               />
//             </div>
//             <button>{state === "Sign up " ? "Create Account" : "Login"}</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log({ name, email, password, state });
  };

  return (
    <div>
      <form
        className="min-h-[80vh] flex items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </p>
          <p>
            Please {state === "Sign Up" ? "sign up" : "log in"} to book an
            appointment
          </p>
          {state === "Sign Up" && (
            <div className="w-full">
              <p>Full Name</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}
          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>
          <button
            type="button"
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-blue-500 mt-4 underline"
          >
            {state === "Sign Up" ? (
              <p>
                {" "}
                Already have an account?{" "}
                <span
                  onClick={() => setState("Lgin")}
                  className="text-primary underline cursor-pointer"
                >
                  {" "}
                  Log in
                </span>{" "}
              </p>
            ) : (
              <p>
                {" "}
                Don't have an account?{" "}
                <span
                  onClick={() => setState("Lgin")}
                  className="text-primary underline cursor-pointer"
                >
                  Sign up
                </span>{" "}
              </p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
