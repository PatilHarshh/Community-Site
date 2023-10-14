import React, {useState} from 'react';
import {GoogleLogin} from './GoogleLogin';
function closeForm(){
    document.querySelector('.home').classList.add('d-none');
}
const LoginPopup = () => {
    const [userData, setUserData] = useState({
        email: '',
        userName: '',
        password: '',
    });
    let name, value;
    const postUserData = (e)=>{
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]:value});
    };
    // const handleLoginBtn = document.getElementById('handleLoginBtn');
    // const resp = localStorage.getItem('res');
    // if(resp){
    //     // handleLoginBtn.style.display = 'none';
    // }
    //*****************Connect Firebase********************//******* and login function on click *//////
    const submitData = async (e) =>{
        e.preventDefault();
        const { email, userName, password } = userData;
        const res = fetch(
            'https://community-login-167f7-default-rtdb.firebaseio.com/userDataRec.json',
                {
                method : 'POST',
                Headers: {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    email, userName, password,
                }),
            }
        );
        if(res){
            alert('Successfully Logged In :)');
            localStorage.setItem('res', 'res');
            window.location.reload();
        }
    };
    
    return (
        <section className="home d-none">
            <div className="form-container">
                <i onClick={closeForm} className="uil uil-times form_close"></i>
                
                <div className="form login_form">
                    <form method="POST">
                        <h2>Login</h2>
                        <div className="input_box">
                            <input type="email" name='email' placeholder="Enter your Email" value={userData.email} onChange={postUserData} required />
                            <i className="uil uil-envelope-alt email"></i>
                        </div>
                        <div className="input_box">
                            <input type="text" name='userName' placeholder="Enter your Name" value={userData.userName} onChange={postUserData} required />
                            <i className="uil uil-kid user"></i>
                        </div>
                        <div className="input_box">
                            <input type="password" name='password' placeholder="Enter your password" value={userData.password} onChange={postUserData} required />
                            <i className="uil uil-lock password"></i>
                            <i className="uil uil-eye-slash pw_hide"></i>
                        </div>
                        <div className="option_field">
                            <span className="checkbox">
                                <input type="checkbox" id="check"/>
                                    <label for="check">Remember me</label>
                            </span>
                            {/* <a href="#" className="forgot_pw">Forget password?</a> */}
                        </div>
                        <button onClick={submitData} className="button">Login Now</button>
                        <hr></hr>
                            <GoogleLogin /> 
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LoginPopup;
