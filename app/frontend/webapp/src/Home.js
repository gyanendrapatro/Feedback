import React, {useState} from "react";
import {ReactComponent as WelcomeImg} from "./final.svg";
import { useHistory } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
import Comment2Modal from './modals/WelcomePopup'


const Home = () => {
  const history = useHistory();
  // const [showComment2Modal, setShowComment2Modal] = useState(true);
  const [showComment2Modal, setShowComment2Modal] = useState(Cookies.get('watched') || '');

    return (
      <>
        <div>
            <div className="d-sm-flex vertical-center-container">
            <div className="col-0 col-sm-1"></div>
          <div className="col-12 col-sm-4 wel-img"><WelcomeImg /></div>
          <div className="col-0 col-sm-1"></div>
          <div className="col-12 col-sm-5 wel-header">
            <h3 style={{ color: "#808080" }}>Welcome to Feediee!!!</h3>
            <h5>We want feedback about everything</h5>
              <p>
                We are always working together to create a better reporting for our leadership. Your feedback help us to decide which columns to concentrate, and what improvements should me made. Simply put, we'd like to understand more what's important to you when it comes to reporting.
              </p>
              <p>
              We would love if you could take 15 minutes of your time to give us some feedback and share your input.
              </p>
              <div className="screening-buttons d-sm-block">
                    <div className="d-flex screening-buttons-width screening-button-mobile">
                      {/* <Link to={allConditionsNotAgree ? '/attestationSuccess' : '/attestationFailure'}> */}
                      <button
                        type="button"
                        id=""
                        className="btn screening-cancel-button w-50 btn-secondary text-truncate"
                        onClick={()=>history.push('/feedback')}
                      >
                        Go to Feedback
                      </button>
                    </div>
                  </div>
          </div>
          <div className="col-0 col-sm-1"></div>
            </div>
        </div>
          </>
    );
};

export default Home;
