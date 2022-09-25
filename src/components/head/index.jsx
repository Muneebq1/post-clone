import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMoon, faSearch, faTv, faGamepad, faHome, faStore, faListSquares, faBell } from '@fortawesome/free-solid-svg-icons'

import "./index.css";

const head = (props) => {
    return (
        <div className="head">
            <div className="hsb-1">
                <FaFacebook className="fa-3x" />
                <i className="fa-brands fa-facebook fa-3x" ></i>
            </div>
            <div className="hsb-2">
                <FontAwesomeIcon icon={faSearch} className="FaSearch" />
                <input type="search" placeholder=" Search Facebook" className="hsb2-input" />
            </div>

            <div className="hsb-3 ">
                <FontAwesomeIcon icon={faHome} className="hsb-3-icon" />
                <FontAwesomeIcon icon={faTv} className="hsb-3-icon" />
                <FontAwesomeIcon icon={faStore} className="hsb-3-icon" />
                <FontAwesomeIcon icon={faUser} className="hsb-3-icon" />
                <FontAwesomeIcon icon={faGamepad} className="hsb-3-icon" />
            </div>

            <div className="hsb-4 ">


                <div className="app-icon">
                    <FontAwesomeIcon icon={faListSquares} className="icon" />
                </div>

                <div className="msg-icon">
                    <FaFacebookMessenger className="icon" />
                </div>

                <div className="bell-icon">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                </div>
                <div className="dp">
                    <img src="./img/IMG_6703 2.jpg" alt=" DP" width={20} />
                </div>

                <div className="icon"><FontAwesomeIcon icon={faMoon} onClick={props.clickHandler} /></div>
            </div>
        </div>
    );
}

export default head;