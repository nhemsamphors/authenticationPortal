import React, {useState} from 'react';
import login from './login.png';
import snl from 'sweetalert';

const AuthPortal = () =>{
 const [user, setUser] = useState('');
 const [pass, setPass] = useState('');
//handleValidate

const handleValidate = (e)=>{
    e.preventDefault()
    if(user == 'reactjs@gmail.com' && pass == 123456)
     snl("successful login")
    else
    snl("login failed","try again", "error")
}
    return(
        <div>
        <h1>Authentication Portal</h1>
    <div className="row">
    <div className="col-md-6" >
    <img className="float-end" src={login} alt="login" width="500"></img>
    </div>
    <div className="col-md-6 my-auto bg-secondary p-5 rounded">
    <form onSubmit={handleValidate}>
    <div className="mb-3">
      <label className="form-label">Email Address</label>
      <input type="text" value={user} className="form-control" placeholder="Email" onChange={(e)=> setUser(e.target.value)}></input>
    </div>
    <div className="mb-3">
      <label  class="form-label">Password</label>
      <input type="password" value={pass} className="form-control"  placeholder="Password" onChange={(e)=> setPass(e.target.value)}></input>
    </div>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-3">Submit</button>
    </div>
    </form>
    </div>
    </div>  
        </div>
    )
}
export default AuthPortal;