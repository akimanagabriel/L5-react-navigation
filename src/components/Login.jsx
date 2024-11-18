import React, { useState } from "react";

function Login() {
  const [username, setusername] = useState("user");
  const [password, setpassword] = useState();
  const [view, setview] = useState(false);
  const handleclicksubmitbutton = (e) => {
    e.preventDefault;
    setview(true);
  };
  return (
    <div>
      <h1>Login here</h1>
      {/* <form> */}
      <label htmlFor="">Username</label>
      <input
        type="text"
        placeholder="ex: eric"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <br />
      <label htmlFor="">Password</label>
      <input
        type="password"
        placeholder="ex: eric"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleclicksubmitbutton}>Login</button>
      {/* </form> */}
      {view && (
        <div>
          <h4>hello {username}</h4>
          <h5>your are using : {password} as password</h5>
        </div>
      )}
    </div>
  );
}

export default Login;
