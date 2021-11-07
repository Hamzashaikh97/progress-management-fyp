import React , {useState} from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";


const Login = () => {


    const [user,setUser] = useState({
        email:"",
        password:""
    })

    let name , value;
    const handleInputs = (e) =>{
        console.log(e)
        name = e.target.name;
        value = e.target.value;

        console.log( setUser({...user , [name]:value}) )

    }


    return (
        <>
            <section className="registration ">
                <div className="container mt-5">
                    <div className="signup-content">
                        {/* student login  */}
                        <div className="signup-form">
                            <h2 className="form-title">
                                Student Login
                            </h2>
                            <form className="registration-form" id="register-form">


                                <div className="form-group">
                                    <label htmlFor="email">
                                        <span className="icon">  <MdEmail /> </span>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email" />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">
                                        <span className="icon">  <RiLockPasswordFill /> </span>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="password" />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" className="form-submit"
                                        value="Log in " />
                                </div>

                            </form>

                        </div>

                        {/* faculty login  */}
                        <div className="signup-form">
                            <h2 className="form-title">
                                Faculty Login
                            </h2>
                            <form className="registration-form" id="register-form">


                                <div className="form-group">
                                    <label htmlFor="email">
                                        <span className="icon">  <MdEmail /> </span>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off"
                                        placeholder="Your Email" />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">
                                        <span className="icon">  <RiLockPasswordFill /> </span>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        placeholder="password" />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" className="form-submit"
                                        value="Log in " />
                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Login
