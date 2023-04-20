import { FaTimes, FaEdit } from "react-icons/fa"
//import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from 'prop-types'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return(
        <Card reverse={false}>
          <div className="num-display">{item.rating}</div>
          <button onClick={() => {deleteFeedback(item.id)}} className="close"  >
            {/* The below component comes from react-icons font awsome library so we don't need do add cdn of font awsome */}
            <FaTimes color="purple" />
          </button>
          <button className="edit" onClick={() => {editFeedback(item)}}>
            <FaEdit color="purple" />
          </button>
          <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

/* Props Drilling 
It's a process of making parent component sate data available by passing that state data as a props
to child components and use those state data in where ever the event exist (child components).

Ex: 
when we click X mark that perticular feedback item will removed from Feedback List 
and rest of the data from the Feedback will show in the Feedbacklist.
Feedback data available in app component. 
Delete button or X mark exist in FeedbackItem component. 
In order to make change in Feedback data after clicking X mark FeedbackItem component need the setFeedback state from App component.
So we can pass the setFeedback state data as props to Feedbacklist component
 and again pass the setFeedback state data paas to FeedbackItem component from Feedbacklist component.

*/


/* 
  
React Events Handeling :

const handleClick = ()=> {
    console.log(123)
}

        <button onClick={handleClick} className="close"  >
            <FaTimes color="purple" />
        </button>

//If we want to pass parameter with a function in event 

const handleClick = (id) => {
    console.log(id);
}
    
        <button onClick={() => {handleClick(item.id)}} className="close"  >
            <FaTimes color="purple" />
        </button>
*/

/* useState()-Explanation
function FeedbackItem() {
    //useState()
    const [rating, setRating] = useState(7);
    const [text, setText] = useState("This is an example of feedback item.");

    const hadleClick = () => {
        // setRating(10); -->changing the state value using setRating() func

        //If we want to hold the previous state value create a fun(prev) inside setState func--> setRating()
        setRating((prev)=> {
            console.log(prev);
            return prev + 1;
        })
    }

    //Example of react event
    return(
        <div className="card">
          <div className="num-display">{rating}</div>
          <div className="text-display">{text}</div>
          <button onClick={hadleClick}>Click</button>
        </div>
    );
}

*/
export default FeedbackItem;