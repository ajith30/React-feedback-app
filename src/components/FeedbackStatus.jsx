import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStatus() {
    //Getting Global state value (feedback) from Context(FeedbackContext) with the help of useContext() Hook.
    const {feedback} = useContext(FeedbackContext);
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, "");

    return (
        <div className="feedback-stats">
            <h3>{feedback.length} Reviews</h3>
            <h3>Average Rating: {(isNaN(average)) ? 0 : average}</h3>
        </div>
    )
}


export default FeedbackStatus;