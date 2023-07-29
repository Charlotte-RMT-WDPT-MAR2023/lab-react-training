import React, { useState } from 'react';

function SignUp(){

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userCountry, setCountry] = useState('');
    const [newUser, setNewUser] = useState('');

    let userGreeting = '';
    const mailRegex = new RegExp( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
    const correctEmail = mailRegex.test(userEmail);
    
    let inpClassName = '';

    if(userCountry === 'de'){
                userGreeting = 'Hallo';
    } else if(userCountry === 'fr'){
                userGreeting = 'Bonjour';
    } else userGreeting = 'Hello';

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const userLogin = {userEmail, userPassword, userGreeting} 
        setNewUser(userLogin);
     }

   

    return(
        <div className='form-container'>
            <form className='sign-up-form' onSubmit = {handleSubmit}>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' className={correctEmail ? 'green-input' : 'regular-input'} onChange={(event)=>setEmail(event.target.value)}/>
                <br/>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' className={inpClassName} onChange={(event)=>setPassword(event.target.value)}/>
                <br/>
                <label htmlFor='nationality'>Country:</label>
                <select name='nationality' onChange={(event)=>setCountry(event.target.value)}>
                    <option value="" disabled selected>Select your country</option>
                    <option value='fr'>France</option>
                    <option value='de'>Germany</option>
                    <option value='en'>United Kingdom</option>
                </select>
                <button>Submit</button>
            </form>
            { newUser && <div>
                <p>{newUser.userGreeting}</p>
                <p>Your email address is: {newUser.userEmail}</p>
                <p>{correctEmail ? 'Your E-mail is correct' : 'Please enter a valid E-mail'}</p>
            </div>}
        </div>
    )
}

export default SignUp;