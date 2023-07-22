import { useState } from "react"

export const Login = () => {
    const  [phoneNumber, setPhoneNumber] = useState ('');
    const [password, setPassword] = useState ("");

    const handleSubmit = () => {
           console.log()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label for="phoneNumber">UserName:</label>
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type= "tel" placeholder="Enter your mobile number" id="phoneNumber" name="phoneNumber"/>
            <label for= "password">password: </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="*********" id="password" name="password"></input>
            <button>Log In</button>
        </form>
    )
}