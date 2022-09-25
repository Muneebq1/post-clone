import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserGroup, faPeopleGroup, faStore, faTv, faClockRotateLeft, faCaretDown
    , faDragon, faPuzzlePiece, faDice, faChess
} from '@fortawesome/free-solid-svg-icons'
const left = () => (

    <div className="left-bar">
        <div className="icons">
            <div className="dp">
                <img src="./img/IMG_6703 2.jpg" alt=" DP" width={20} />
                <p>Muneeb Shahzad</p>
            </div>

            <div className="frnd">
                <FontAwesomeIcon icon={faUserGroup} className="icon" />
                <p> Friends</p>
            </div>

            <div className="group">
                <FontAwesomeIcon icon={faPeopleGroup} className="icon" />
                <p> Groups</p>
            </div>

            <div className="store">
                <FontAwesomeIcon icon={faStore} className="icon" />
                <p>Marketplace</p>
            </div>

            <div className="tv">
                <FontAwesomeIcon icon={faTv} className="icon" />
                <p>Watch</p>
            </div>

            <div className="memories">
                <FontAwesomeIcon icon={faClockRotateLeft} className="icon" />
                <p>Memories</p>
            </div>

            <div className="see-more">
                <FontAwesomeIcon icon={faCaretDown} className="icon" />
                <p>See More</p>
            </div>
            <hr />

            <p className="sc">Your shortcuts</p>

            <div className="game">
                <FontAwesomeIcon icon={faDragon} />
                <p>Dragon City</p>
            </div>

            <div className="game">
                <FontAwesomeIcon icon={faPuzzlePiece} />
                <p>Puzzle</p>
            </div>

            <div className="game">
                <FontAwesomeIcon icon={faDice} />
                <p>Ludo</p>
            </div>

            <div className="game">
                <FontAwesomeIcon icon={faChess} />
                <p>Chess</p>
            </div>

        </div>
    </div>
)
export default left