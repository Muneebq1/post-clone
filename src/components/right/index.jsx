import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const rightBar = () => {
    return (
        <div className="right">
            <p className='p'>Birthdays</p>
            <div className='bd'>
                <img src="./img/1.png" alt="" />
                <p>Shayan Malik's <span>birthday is today</span> </p>
            </div>
            <hr />
            <p className='p'>Your Pages and Profiles</p>
            <div className='pages'>
                <FontAwesomeIcon icon={faBell} />
                <p>1 Notifications</p>
            </div>
            <hr />
            <p className='p'>Contacts</p>
            <div className='contacts'>
                <div>
                    <img src="./img/profiles/usman.jpg" alt="" />
                    <p>Usman Matloob</p>
                </div>
                <div>
                    <img src="./img/profiles/anas.jpg" alt="" />
                    <p> Anas Khan</p>
                </div>
                <div>
                    <img src="./img/profiles/fahad.jpg" alt="" />
                    <p> Fahad Paracha</p>
                </div><div>
                    <img src="./img/profiles/mahad.jpg" alt="" />
                    <p> Mahad Siddiqui</p>
                </div><div>
                    <img src="./img/profiles/sami.jpg" alt="" />
                    <p> Sami Khan</p>
                </div>
            </div>




        </div>

    );
}

export default rightBar;