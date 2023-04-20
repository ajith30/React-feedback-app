import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion"; //This package for animation
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

//Here we are trying simple animation: fadein at newFeedback addedand fade out when we delete feedback using framer-motion package

function FeedbackList() {
  //Getting Global state value (feedback) from Context(FeedbackContext) with the help of useContext() Hook.
  const {feedback} = useContext(FeedbackContext);

  // console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet.</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}


export default FeedbackList;
