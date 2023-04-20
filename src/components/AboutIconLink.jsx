import {FaQuestion} from "react-icons/fa";
import { Link } from "react-router-dom";

// Link in React
function AboutIconLink() {
    return(
        <div className="about-link">
           <Link to="/about">
             <FaQuestion size={30} /> 
           </Link>
        </div>
    );
}

/*
//Notes:
--------
For any Internal link <Link> in React we have to Use Link Tag insted of Anchor <a> Tag.
Because if we use anchor tags whenever the link clicked and redirect, the entire page will be reloded.
So To avoid this page reloding we are using <Link> from "react-router-dom".
To use it: we just need to replace <a></a> with <Link></Link> and href="" with to="".
the "to" attribute / props can take an object as value to add more properties [to="" or {{}}].
EX:           
<Link to={{
    pathname: "/about",  -->To add path
    search: "?sort=name",  --> to add queryParams to URL. Absove the URL for changes
    hash: "#hello"  --> To add any hases to url
   }}>
     <FaQuestion size={30} />
</Link>
*/

export default AboutIconLink;