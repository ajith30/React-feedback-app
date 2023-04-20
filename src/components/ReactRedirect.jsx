import { Navigate, useNavigate } from "react-router-dom";
//To redirect in react we neeed <Navigate /> component from "react-router-dom".
//If some event occured(EX: onClick on the button) then we want to redirect for that we need useNavigate Hook from "react-router-dom".

function ReactRedirect() {
    const status = 200;
    const navigate = useNavigate();
    
    //If the status code is 400 then http://localhost:3000/redirect route redirect to http://localhost:3000/notfound route 
    //and show Not Found Page.
    if(status === 404) {
        return <Navigate to="/notfound" />
    }

    //Redirection in Event handlers: Ex: if you want to update some thing to server and want to redirect after that we can use this.
    //Once we click the button then  the http://localhost:3000/redirect route redirect to http://localhost:3000/about route 
    const handleClick = () => {
        console.log("Hello, World!");
        navigate("/about");
        
    }

    return(
        <div>
            <h2>React Redirect</h2>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

/*
//Notes:
--------
We can also redirect to Page Not found / 404 page by below way by default if no router path matching with the component.
This below Route inside the App component.
<Route path="*" element={<NotFound />} />
*/
export default ReactRedirect;