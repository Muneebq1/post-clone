import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const rightBar = () => {
    return (
        <div className="right">

            <div className="pages">
                <p className='p'>Your Pages and Profiles</p>
                <FontAwesomeIcon icon={faBell} />
                <p>Notifications</p>
            </div>
        </div>

    );
}

export default rightBar;