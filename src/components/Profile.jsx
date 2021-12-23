import React from "react";
import userImg from '../images/user.png';

const Profile = ()=>{
    return(
        <>
            <div className="profile-box">
                <div className="profile-info">
                    <img src={userImg} />
                    <h5>Biswajit Chanda</h5>
                    <p>biswajit.chanda@ziroh.com</p>
                    <p>8876624331</p>
                </div>
                <div className="signout-btn">
                    <button>Sign out</button>
                </div>
                <div className="services">
                    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                </div>
            </div>
        </>
    );
}

export default Profile;