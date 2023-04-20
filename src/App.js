import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import URLParams from "./components/URLParams";
import ReactRedirect from "./components/ReactRedirect";
import NotFound from "./components/NotFound";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {

  return (
    // <> </> --> this is called react fragment tag.

    // Router In Version-6
    //---------------------
    //Note: <Switch> Element Replaced by <Routes> and "component" attribute replaced by "element" attribute to render the components
    
    <FeedbackProvider>
    <Router>
      <Header />
      
      {/* Note: "exact" prop no longer needed at <Route> Tag in "react-router-dom" Version-6. here i added just for understanding. */}
      
      <div className="container">
        <Routes>
          <Route exact path="/" element={   
            <>
            <FeedbackForm />
            <FeedbackStatus />
            <FeedbackList />
          </>
          }></Route>

          <Route path="/about" element={
            <>
              <AboutPage />
            </>
          }></Route>
          
          {/* Example for URL params in Routes */}
          {/* <Route path="/post/:id/:name" element={<><Post /></>}></Route> */}

          {/* Nested Routes */}
          <Route path="/post/*" element={<><URLParams /></>}></Route>


          <Route path="/redirect" element={<><ReactRedirect /></>}></Route>

          <Route path="/notfound" element={<><NotFound /></>}></Route>
        </Routes>

        <AboutIconLink />
      </div>
      
    </Router>
    </FeedbackProvider>
  );
}

//Note: exact attribute -> It will render the mentioned components for only matching routes.

// //Common concepts used in JSX

// function App() {
//   const title = "Blog Post";
//   const body = "This is my blog post";
//   const comments = [
//     { id: 1, text: "Comment one" },
//     { id: 2, text: "Comment two" },
//     { id: 3, text: "Comment three" },
//   ];

//   const loading = false;
//   const showComments = false;

//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {/* creating multiple elements/IF we want to cerate diiferent repaeating elements with map() */}
//         {comments.map((comment, index) => {
//           return <li key={index}>{comment.text}</li>;
//         })}
//       </ul>
//     </div>
//   );

//   //conditions in JSX
//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div className="container">
//       <h1>{title.toUpperCase()}</h1>
//       <p>{body}</p>
//       {/* conditional Rendering with Terinary operator
//         {(showComments)? commentBlock: null}
//       */}

//       {/* Conditional rendering with AND operator */}
//       {showComments && commentBlock}
//     </div>
//   );
// }

export default App;
