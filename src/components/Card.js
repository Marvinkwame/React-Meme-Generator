import React from "react";


export default function Card() {
    const [formData, setFormData] = React.useState(
        {
            myEmail: "",
            firstPassword: "",
            secondPassword: "",
            signUp: true
        }
    )

    function handleClick() {
        const {name, value, type, checked} = target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    console.log(formData)


    function handleSubmit() {
        preventDefault() 
        if(formData.firstPassword === formData.secondPassword) {
            console.log("Successfully Signed Up")
        } else {
            console.log("Passwords do not match")
        }
    }


    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    onChange={handleClick}
                    placeholder="Email address"
                    className="form-input" 
                    name="myEmail"
                    value={formData.myEmail}
                />
                <input 
                    type="password" 
                    onChange={handleClick}
                    placeholder="Type Password"
                    className="form-input" 
                    name="firstPassword"
                    value={formData.firstPassword}
                />                
                <input 
                    type="password" 
                    onChange={handleClick}
                    placeholder="Confirm Password"
                    className="form-input" 
                    name="secondPassword"
                    value={formData.secondPassword}
                />

                <div>
                    <input 
                        type="checkbox" 
                        onChange={handleClick}
                        id="signUp"
                        name="signUp"
                        checked={formData.signUp}
                    />
                    <label htmlFor="signUp">I want to join the newsletter</label>
                </div>

                <button className="form-submit">Sign Up</button>
            </form>
        </div>
    )
}