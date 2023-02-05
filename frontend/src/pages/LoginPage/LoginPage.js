import react, { useState } from 'react';
function app(){
 const [username, setUsername] = useState('');
 const  [password, setPassword] = useState('');
return(
  <div className='App'>
    <div className='login'>
      <h1>Login</h1>
      <label>Username</label>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Password</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Login</button>
    </div>
  </div>
  
)
};
  