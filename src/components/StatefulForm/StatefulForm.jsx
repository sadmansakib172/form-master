import { useState } from "react";


const StatefulForm = () => {
    const [name, setName]= useState('Sakib')
    const [email, setEmail]= useState(null)
    const [password, setPassword]= useState(null)
    const [error, setError]=useState('')
    // handle form onsubmit 
const handleSubmit = e =>{
   e.preventDefault()
   if(password.length<6){
     setError('password must be 6 caracters or longer.')
   }
   else{
    setError('')
    console.log(name, email, password)
   }
}
//  name change field 
const handleNameChange = e =>{
    setName(e.target.value);
}

// email field onchange 
const handleEmailChange = e =>{
//    console.log(e.target.value)
   setEmail(e.target.value)
}

// password field onchange 
const handlePasswordChange = e =>{
   setPassword(e.target.value)
}

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                value={name}
                onChange={handleNameChange}
                type="text" name="name" />
                <br />
                <input
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" id="" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;