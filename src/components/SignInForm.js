
import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom";

// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";

// import axios from "../api/axios"
// const LOGIN_URL = "/auth";

export default function SignIn(props) {
  const userRef = useRef();
  const errRef = useRef();
  // const {setAuth} = useContext(AuthContext)

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd)
    // with axios
    // try {
    //   const response = await axios.post(LOGIN_URL,
    //     JSON.stringify({user, pwd}),
    //     {
    //       headers: {'Content-Type' : 'application/json'},
    //       withCredentials: true
    //     }
    //   );
    //   setUser("")
    //   setPwd("")
    //   console.log(JSON.stringify(response?.data))
    //   const accessToken = response?.data.accessToken;
    //   const roles = response?.data.roles;
    //   // saved in global context
    //   setAuth({user, pwd, roles, accessToken})
    // } catch (err) {
    //   if(!err?.response){
    //     setErrMsg('No server response')
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('Missing username or password')
    //   } else if (err?.response === 401) {
    //     setErrMsg('Unauthorized')
    //   } else {
    //     setErrMsg('Login failed')
    //   }
    //   errRef.current.focus();
    // }
    setUser("")
    setPwd("")
    setSuccess(true)
  }

  return(
    <>
      {success ? (
        <section>
          <h2>You are logged in!</h2>
          <br/>
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (<section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            // controlled component => important to clean
            value={user}
            required
        />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
        />
        <button>Sign In</button>
      </form>
      <p> Need an account?<br/><span><Link to="/register"><p>Register</p></Link></span></p>
    </section>
    )}
    </>
  )
};
