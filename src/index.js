import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'


function Post(props) {
    return (
        <div className="post">
            <div className="headerPost">
                <img className="profilepic" src={props.profilepic} alt="profile" />

                <div>
                    {props.name} <br />
                    {moment(props.postDate).fromNow()}
                </div>

            </div>

            <div className="postText">
                {props.postText}
            </div>

            <img className="postImage" src={props.postImage} alt="pic" />

            <hr />
            <div className="footer">

                <div><FontAwesomeIcon icon={faThumbsUp} />Like</div>
                <div><FontAwesomeIcon icon={faComment} />Comment</div>
                <div><FontAwesomeIcon icon={faShare} />Share</div>

            </div>
            <hr />
        </div>
    );
}
function Page() {
    return <div>
        <Post
            name="Muneeb"
            profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndLs1UQJYZoZ7kTX671WnLbVYfjiphBIKUA&usqp=CAU"
            postDate="12 dec 2008"
            postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
            postImage="https://scontent.fkhi2-2.fna.fbcdn.net/v/t45.1600-4/301486999_23852264484530342_6257719824637960060_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=68ce8d&_nc_eui2=AeEOlccr-m-DHoEjmUy68pyfnZiVkCapAi2dmJWQJqkCLU9Uly3Fwto_nl9M_fDHwJSI9FIapgFGhOuhYwS6WB36&_nc_ohc=N97dmOJVPXMAX_OTO5d&_nc_oc=AQlG3ITzqbs357srJn01YkShwpI5yt8Mvsxrbp21ps7DYFbDzM1adtwsDp3DOncgLm8OJwmPiiDDIRHBjmsA_mBD&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT-mqI3P8E1z2A5AOZAftTKr4RXmcgdU9bYMwtQKb-fRJA&oe=63293FF4"
        />
        <Post
            name="shayan"
            profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pZsFVy-qhDZpps34-E8Ob3ga0eSTxAVlAw&usqp=CAU"
            postDate="12 dec 2008"
            postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
            postImage="https://scontent.fkhi2-2.fna.fbcdn.net/v/t45.1600-4/301486999_23852264484530342_6257719824637960060_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=68ce8d&_nc_eui2=AeEOlccr-m-DHoEjmUy68pyfnZiVkCapAi2dmJWQJqkCLU9Uly3Fwto_nl9M_fDHwJSI9FIapgFGhOuhYwS6WB36&_nc_ohc=N97dmOJVPXMAX_OTO5d&_nc_oc=AQlG3ITzqbs357srJn01YkShwpI5yt8Mvsxrbp21ps7DYFbDzM1adtwsDp3DOncgLm8OJwmPiiDDIRHBjmsA_mBD&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT-mqI3P8E1z2A5AOZAftTKr4RXmcgdU9bYMwtQKb-fRJA&oe=63293FF4"

        />
        <Post
            name="rehan"
            profilepic="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1"
            postDate="12 dec 2008"
            postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
            postImage="https://scontent.fkhi2-2.fna.fbcdn.net/v/t45.1600-4/301486999_23852264484530342_6257719824637960060_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=68ce8d&_nc_eui2=AeEOlccr-m-DHoEjmUy68pyfnZiVkCapAi2dmJWQJqkCLU9Uly3Fwto_nl9M_fDHwJSI9FIapgFGhOuhYwS6WB36&_nc_ohc=N97dmOJVPXMAX_OTO5d&_nc_oc=AQlG3ITzqbs357srJn01YkShwpI5yt8Mvsxrbp21ps7DYFbDzM1adtwsDp3DOncgLm8OJwmPiiDDIRHBjmsA_mBD&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT-mqI3P8E1z2A5AOZAftTKr4RXmcgdU9bYMwtQKb-fRJA&oe=63293FF4"
        />
        <Post
            name="abdullah"
            profilepic="https://media.istockphoto.com/photos/happy-indian-business-man-leader-manager-standing-in-office-headshot-picture-id1350800599?b=1&k=20&m=1350800599&s=170667a&w=0&h=LDmNXp5GzpzVB2FwIsV4iTAnqLJRQ5jGCE825aRXHQQ="
            postDate="12 dec 2008"
            postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
            postImage="https://scontent.fkhi2-2.fna.fbcdn.net/v/t45.1600-4/301486999_23852264484530342_6257719824637960060_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=1&ccb=1-7&_nc_sid=68ce8d&_nc_eui2=AeEOlccr-m-DHoEjmUy68pyfnZiVkCapAi2dmJWQJqkCLU9Uly3Fwto_nl9M_fDHwJSI9FIapgFGhOuhYwS6WB36&_nc_ohc=N97dmOJVPXMAX_OTO5d&_nc_oc=AQlG3ITzqbs357srJn01YkShwpI5yt8Mvsxrbp21ps7DYFbDzM1adtwsDp3DOncgLm8OJwmPiiDDIRHBjmsA_mBD&_nc_ht=scontent.fkhi2-2.fna&oh=00_AT-mqI3P8E1z2A5AOZAftTKr4RXmcgdU9bYMwtQKb-fRJA&oe=63293FF4"
        />
    </div>

}

ReactDOM.render(<Page />, document.querySelector("#root"));