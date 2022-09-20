import { FaSearch, FaFacebook, FaHome, FaUserFriends, FaStore, } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faGamepad, faListSquares, faMessage, faBell } from '@fortawesome/free-solid-svg-icons'
import "./index.css";


const head = (props) => {
    return (
        <div className="head">
            <div className="hsb-1">
                <FaFacebook className="fa-3x" />
                <i className="fa-brands fa-facebook fa-3x" ></i>
            </div>
            <div className="hsb-2">
                <FaSearch className="FaSearch" />
                <input type="search" placeholder=" Search Facebook" className="hsb2-input" />
            </div>

            <div className="hsb-3 ">
                <FaHome className="hsb-3-icon" />
                <FontAwesomeIcon icon={faTv} className="hsb-3-icon" />
                <FaStore className="hsb-3-icon" />
                <FaUserFriends className="hsb-3-icon" />
                <FontAwesomeIcon icon={faGamepad} className="hsb-3-icon" />
            </div>

            <div className="hsb-4 ">


                <div className="app-icon">
                    <FontAwesomeIcon icon={faListSquares} className="icon" />
                </div>

                <div className="msg-icon">
                    <FontAwesomeIcon icon={faMessage} className="icon" />
                </div>

                <div className="bell-icon">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                </div>
                <i class="img sp_SDWlSDe1GOW_3x sx_d25937"></i>
                <div type="" className="dp">
                    <img src="./img/IMG_6703 2.jpg" alt=" DP" width={20} />
                </div>
            </div>

        </div>
    );
}

export default head;