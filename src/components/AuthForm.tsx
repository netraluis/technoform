import { useState, useRef, FormEvent } from "react";
import { signIn } from "next-auth/react";

async function createUser(email: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}
function AuthForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState(false);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    console.log({isLogin})
    event.preventDefault();

    const enteredEmail =
      emailInputRef && emailInputRef.current ? emailInputRef.current.value : "";
    const enteredPassword =
      passwordInputRef && passwordInputRef.current
        ? passwordInputRef.current.value
        : "";
    console.log({ enteredEmail, enteredPassword });

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if(result){
        // change state
      }
      console.log({result})
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            onClick={()=>{
              console.log('click')
              switchAuthModeHandler()
            }}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
