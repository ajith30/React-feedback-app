import Card from "./shared/Card";
import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

//Form input with State
// Notes: Here, we are geting the text value entered in the input tag by adding onChange event to input tag.
// To hold the text value we used useState() hook and set initial value asempty string. Once the onChangeEvent triggered 
// state(text) will be changed to the text entered which happens because inside haddleTextChange() we called setState()
//where we targeted input value entered and set to state(text).
function FeedbackForm() {
    
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    //Side Effect with useEffect() -Hook
    //It takes one call back func and dependecies for side effect when something changes and others also need too change
    useEffect(() => {
       if(feedbackEdit.edit === true) {
        setText(feedbackEdit.item.text);
        setBtnDisabled(false);
        setMessage(feedbackEdit.item.message);
       }

    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        /*validation: if text state value is nothing we want button to disabled and no message to show.
        if  if text state value has some chars and less than 10 chars still we want button to disabled 
        and message has to show for the user "Text must be at least 10 characters".
        if more than 10 chars entered then we want button to enabled. */

        if(text === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if(text !== "" && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Text must be at least 10 characters");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }

    const hadleSubmit = (e) => {
        e.preventDefault(); //To prevent the default behaviour
        
        //This if condition for extra check eve though we have vaidating in handleTextChange()
        if(text.trim().length > 10) {
            const newFeedback = {
               text, //qualent to text: text,
               rating,
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
                feedbackEdit.edit = false;
            } else {
                addFeedback(newFeedback);
            }
            
            //Once form submited, the entered Text again set to nothing
            setText("");
        }
    }


    return (
        <Card>
            <form onSubmit={hadleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating)=>{setRating(rating)}}/>

                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <Button  type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}


/*
useEffect() Hook:
------------------
Notes:

The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>).

Note: useEffect runs on every render. which means whener a render happens, which then triggers another effect.
This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.

Example:
1.No dependency passed:

useEffect(() => {
  //Runs on every render
});


2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);


3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

*/


export default FeedbackForm;