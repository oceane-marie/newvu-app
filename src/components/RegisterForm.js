import {useRef, useState, useEffect} from 'react';

// 1 lower or uppercase followed by btw 3 and 23 characters lower/upper/numbers
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// at least 1 lowercase character, 1 upper 1 special character btw 8 and 24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export default function RegisterForm(props) {
  const userRef = useRef();
  const errRef = useRef();

  // create state for user
  // user's input
  const [user, setUser] = useState('');
  // verify is name is valid
  const [validName, setValidName] = useState(false)
  // verify if user's input is in focus
  const [userFocus, setUserFocus] = useState(false)

  // create state for pwd
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  // create state for pwd match
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  // create state for error and succes
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect for focus
  useEffect(() => {
    userRef.current.focus();
  }, [])

   // useEffect for user's name
   useEffect(() => {
    // test the user state to the regex
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result)
   }, [user])

   useEffect(() => {
    // test the user state to the regex
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    // check if the pwd matches the matchPwd
    const match = pwd === matchPwd;
    setValidMatch(match)
   }, [pwd, matchPwd])

   useEffect(() => {
    setErrMsg('')
    // clean
   }, [user, pwd, matchPwd])

   const handleSubmit = async (e) => {
      e.preventDefault()
      // if button enabled with js hack
      const v1 = USER_REGEX.test(user)
      const v2 = PWD_REGEX.test(pwd)
      if (!v1 || !v2) {
        setErrMsg("invalid entry");
        return;
      }
      console.log(user, pwd);
      setSuccess(true);
   }

   return(
    <div className='ctr-centered'>
    {success ? (
      <section className={`ctr-form ${props.darkMode ? "dark-shadow" : "clear-shadow"}`}>
        <img src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXhwZXJpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="new user" className="img-form"/>
        <h2>Sucess!</h2>
        <a href="#" className={`btn-send w-25 ${props.darkMode ? "clear" : "dark"}`}>
          <p className='tx-center'>Sign in</p>
        </a>
      </section>
    ) : (
      <section className={`ctr-form h-100 ${props.darkMode ? "dark-shadow" : "clear-shadow"}`}>
        <img src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXhwZXJpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="new user" className="img-form"/>
        <form className='form-content' onSubmit={handleSubmit}>
          <p ref={errRef} className={ errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h2>Register</h2>
          <label htmlFor='username'>
            Username:
            <span className={validName ? "valid" : "hide"}>
              <i class="fa-solid fa-check"></i>
            </span>
            <span className={validName || !user ? "hide" : "invalid"}>
              <i class="fa-solid fa-xmark"></i>
            </span>
          </label>
          <input
              type="text"
              id="username"
              className={props.darkMode ? "dark-input" : ""}
              //  to set focus
              ref={userRef}
              autoComplete="off"
              // retireve the value of input
              onChange={(e) => setUser(e.target.value)}
              required
              // if valid name aria-invalid = false
              aria-invalid={validName ? "false" : "true"}
              // used to attach descriptive information through the use of an id reference list(
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
          />
          <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <i class="fa-solid fa-circle-info"></i>
            4 to 24 characters.<br/>
            Must begin with a letter.<br/>
            Letters, numbers, underscores, hyphens allowed.
          </p>

          <label
              htmlFor='password'
              className='mt-24'
          >
            Password:
            <span className={validPwd ? "valid" : "hide"}>
              <i class="fa-solid fa-check"></i>
            </span>
            <span className={validPwd || !pwd ? "hide" : "invalid"}>
              <i class="fa-solid fa-xmark"></i>
            </span>
          </label>
          <input
              type="password"
              id="password"
              className={props.darkMode ? "dark-input" : ""}
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
          />
          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            <i class="fa-solid fa-circle-info"></i>
            8 to 24 characters.<br/>
            Must include uppercase and lowercase letters, a number and a special character.
            Allowed special characters: <span aria-label="exclamation mark">!</span>, <span aria-label="at symbol">@</span>, <span aria-label="hashtag">#</span>, <span aria-label="percent">%</span>
          </p>

          <label
              htmlFor='confirm_pwd'
              className='mt-24'
          >
            Confirm password:
            <span className={validMatch && matchPwd ? "valid" : "hide"}>
              <i class="fa-solid fa-check"></i>
            </span>
            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
              <i class="fa-solid fa-xmark"></i>
            </span>
          </label>
          <input
              type="password"
              id="confirm_pwd"
              className={props.darkMode ? "dark-input" : ""}
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
          />
          <p id="confirmnote" className={matchFocus && !matchPwd ? "instructions" : "offscreen"}>
            <i class="fa-solid fa-circle-info"></i>
            Must match the first password input field.
          </p>
        <button
            className={`btn-send w-100 mt-24 ${props.darkMode ? "clear" : "dark"}`}
            disabled={!validName || !validPwd || !validMatch ? true : false}>
              <h3>Sign up</h3>
        </button>
        <p>Already registered?</p>
        <a href='#' className={`btn-send w-25 ${props.darkMode ? "clear" : "dark"}`}>
          <p className='tx-center'>Sign in</p>
        </a>
        </form>
      </section>
    )}
    </div>
   )
};
