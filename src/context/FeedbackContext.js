import {createContext, useState} from "react";
import { v4 as uuidv4 } from "uuid"; //This package for generating random unique id.

//Initializing context
const FeedbackContext = createContext();

//Creating context provider in-order to share the global state for the child/nested components. 
//To share/access state from context simply wrap them with condext provider. Ex: check in App.js
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is Feedback item 1",
            rating: 10,
        },
        {
            id: 2,
            text: "This is Feedback item 2",
            rating: 9,
        },
        {
            id: 3,
            text: "This is Feedback item 3",
            rating: 8,
        }
    ]);


    //This State created for Edit Feedback Event and help to fill the form with the details of that feedback item when the feedback item clicked. 
    //And also To identify which event clicked and store all the data of that feedback into item obj {}
    //And set the edit flag to true for feedbackEdit State when the feedback clicked.
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    //Moved the Global Function to Context below.

    //Delete Feedback Item
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete ?")) {
          setFeedback(
            feedback.filter((item) => {
              return item.id !== id;
            })
          );
        }
    };


    //Add Feedback Item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        /* Here we can't simply appent this newFeedback to data Array. because here feedback state value hold the atual data array.
         when ever we try to chage the state value by setFeedback it actualy replace entire data Array.
        So, we create an copy of original data Array which holds in feedback state put inside new Array and 
        add this new newFeedback using spread operator([newFeedback,...feedback]) befor it. */
  
        setFeedback([newFeedback, ...feedback]);
        
    }

    //Edit Feedback Item -Fill the form with the clicked Feedback Item details
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //Update Feedback Item
    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => {
            return (item.id === id) ? {...item, ...updateItem} : item;
        }));
    }

    return(
        // Using "value" prop we can pass the global state,fucn, data as an object so that when we wrap context provider. 
        // Components can access them without passing as props individually.

        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    );
}


/*
//Context API
--------------
React Context:
----------------
React Context is a way to manage state globally.
It can be used together with the useState() Hook to share state between deeply nested components more easily than with useState alone.

To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
To Avoid props drilling we need Context.

Context Provider:
-----------------
The Context Provider to wrap the tree of components that need the state Context.
Wrap child components in the Context Provider and supply the state value.
*/

export default FeedbackContext;