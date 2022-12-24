
import { useRef, useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom";

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
    <div className='ctr-centered'>
      {success && (
          <Navigate to="/profile" replace={true} />
      )}
      <section className={`ctr-form h-100 ${props.darkMode ? "dark-shadow" : "clear-shadow"}`}>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2VsY29tZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="user" className="img-form"/>

      <form className='form-content' onSubmit={handleSubmit}>
        <h2>Sign In</h2>
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
            className={props.darkMode ? "dark-input" : ""}
        />
        <label
            htmlFor="password"
            className='mt-24'>
              Password:
        </label>
        <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className={props.darkMode ? "dark-input" : ""}
        />
        <button className={`btn-send w-100 mt-24 ${props.darkMode ? "clear" : "dark"}`}>
          <h3>
          Sign In
          </h3>
        </button>
        <p> Need an account?</p>
        <Link to="/register" className={`btn-send w-50 ${props.darkMode ? "clear" : "dark"}`}><p className='tx-center mb-m5'>Register</p></Link>
      </form>
    </section>
    </div>
  )
};
