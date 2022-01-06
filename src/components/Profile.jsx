import React from "react";
import userImg from "../images/user.png";

const Profile = (props) => {
  return (
    <>
      <div className="profile-box">
        <div className="profile-info">
          <img src={userImg} />
          <h5>Abhishek</h5>
          <p>{props.username}</p>
          <p>8876624331</p>
        </div>
        <div className="signout-btn">
          <input
            id="encrypted"
            type="checkbox"
            checked={props.check}
            onClick={() => props.setCheck(!props.check)}
          />
          <label htmlFor="encrypted">Encrypted Invoice</label>
          {/* <span>Encrypted Invoice</span> */}
          <br/>  
          {props.check ? <button id="download-btn">Download Omail App</button> : null}
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
};

export default Profile;
