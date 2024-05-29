import react, { Fragment } from "react";
import { useState } from "react";
import "./accountChoose.css"
const AccountChoose = () =>{
    const [accountVisibility, setAccountVisibility] = useState(() => {
        return sessionStorage.getItem('accountVisibility') !== 'invisible';
      });

     const makeInvisible = () => {
    setAccountVisibility(false);
    sessionStorage.setItem('accountVisibility', 'invisible');

  };
  if (!accountVisibility) return null;

    return(
        <div className="visible">
            <Fragment>
                <h5 className="profileHeader">Choose a profile</h5>
                <div className="profilesContainer">
                    <div className="accountProfile">
                        <img onClick={makeInvisible} className="profileImage" style={{borderRadius:"5px"}} src={require('../images/netflixaccount.PNG')}></img>
                        <p className="profileName">Demo</p>
                    </div>
                    <div className="accountProfile">
                        <img onClick={makeInvisible} className="profileImage" style={{borderRadius:"5px"}} src={require('../images/netflixaccount.PNG')}></img>
                        <p className="profileName">Demo</p>
                    </div>
                    <div className="accountProfile">
                        <img  onClick={makeInvisible} className="profileImage" style={{borderRadius:"5px"}} src={require('../images/netflixaccount.PNG')}></img>
                        <p className="profileName">Demo</p>
                    </div>
                </div>
            </Fragment>
            

        </div>

    )




}

export default AccountChoose;