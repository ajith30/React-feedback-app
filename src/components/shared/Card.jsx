import PropTypes from 'prop-types';


//Style Component with condional styling using style attribute and Terinory Operator
function Card({children, reverse}) {
    return (
        
        //Note: reverse props come from FeedbackItem.jsx and card componet props set to boolean value <Card reverse={true}> 
        //Since && operator only consider code right side when the left had side is true -> .reverse class style from CSS will apply.

        <div className="card" style={{
            backgroundColor: (reverse) ? "rgba(0,0,0,0.4)" : "#fff",
            color: (reverse) ? "#fff" : "#000"
        }}>
            {children}
        </div>
      
    );
}

//If the props value not added we can specify the default valuse. Ex: In <Card reverse={true}> 
//if reverse attribute/props not added below props value applied by default.
Card.defaultProps = {
    reverse: false,
}

// We can specify the type of the props need to be passed to help debug in future.
// This is not mandetory and it's optional to debug the errors when we receive wrong Props type
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

/*Notes: Props and PropTypes are important mechanisms for passing read-only attributes between React components.
 We can use React props, short for properties, to send data from one component to another.
 If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
*/

/* Style Component:-

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

//Style Component with condional class styling using AND operator
function Card({children, reverse}) {
    return (
        //Note: reverse props come from FeedbackItem.jsx and card componet and this props set to boolean value <Card reverse={true}> 
        //Since && operator only consider code right side when the left hand side is true -> .reverse class style from CSS will apply.
        // If we remove reverse props in <Card /> then only .card style will apply
        <div className={`card ${reverse && "reverse"}`}>
            {children}
        </div>
    )
}


//Style Component with contional styling using style attribute and Terinory Operator
function Card({children, reverse}) {
    return (
        //Note: reverse props come from FeedbackItem.jsx and card componet , this props set to boolean value <Card reverse={true}> 

        <div className="card" style={{
            backgroundColor: (reverse) ? "rgba(0,0,0,0.4)" : "#fff",
            color: (reverse) ? "#fff" : "#000"
        }}>
            {children}
        </div>
    )
}
*/

export default Card;
