import React , {useState} from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";
import firebase from '../../../../config/firebase';
import { useHistory } from 'react-router';

const Login = () => {

    var history=useHistory();

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

    var checkStudent=async(event)=>{
        event.preventDefault()

        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(() => {
            history.replace(`/students/dashboard/${user.email}`)
        }).catch((error) => {
            alert("No user exist | ", error);
        })

        // await firebase.database().ref('/StudentData').once('value',function(data){
        //     Object.values(data.val()).forEach((value)=>{
        //         if(value.Email===user.email && value.password ===user.password ){
        //             history.replace('/students/dashboard')
        //         }
               
        //     })
        // })

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
                            <form className="registration-form" onSubmit={checkStudent} id="register-form">


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
            <SignupPage />
        </>
    )
}

export default Login




var SignupPage=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const  handleSubmit = async (event) =>{
      event.preventDefault()
      console.log(email,password);
      // Firebase
      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        var newEmail=email.replace(".","*")
        newEmail=newEmail.replace(".","*")
        
        firebase.database().ref('/StudentData').child(newEmail).set(
        
        {
            Email:email
        }
            )
      
        })
      .catch(()=>{
        alert("Error Occured or user not created")
      })
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(ev)=>setEmail(ev.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(ev)=>setPassword(ev.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    );
  }