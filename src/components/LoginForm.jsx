import axios from 'axios';
import React, { useState } from 'react'

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [loading, setloading] = useState(false);
    const handlesSubmit = async (e) =>{
        e.preventDefault();
        const authObject = {
            "Project-ID": "30af4882-f6aa-4f4b-8aa5-22e51f797963",
            "User-Name": username,
            "User-Secret": password
        }
        try{
            setloading(true);
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            localStorage.setItem('auth', JSON.stringify(authObject));
            window.location.reload();
            setloading(false);
        } catch (err){
            seterror('Oops, something went wrong');
            setloading(false);
        }
    }
  return (
    <div className='wrapper'>
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handlesSubmit}>
                <input type="text" placeholder='username' value={username} onChange={(e)=> setusername(e.target.value)
                } className="input" required/>
                <input type="text" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)
                } className="input" required/>
                <div className="justify-center">
                    <button type="submit" className='button' disabled={!username || !password}>
                        <span className={loading?'loading':''}>{!loading ? 'Start Chatting':'Verifying credentials...'}</span>
                    </button>
                    
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm