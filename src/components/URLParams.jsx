import { useParams, Routes, Route } from "react-router-dom";
import NestedRoute from "./NestedRoute";

//URL params:-
function URLParams() {
    //console.log(useParams);
    const params = useParams();
    return(
        <div>
            <h2>Post: {params.id}</h2>
            <p>Name: {params.name}</p>

            {/* Nested Routes */}
            <Routes>
                <Route path="/show" element={<><NestedRoute /></>}></Route>
            </Routes>
        </div>
    );
}

/*
//Notes: URL Params and Query Params
------------------------------------
URL params is not a key value pair but its a unique id or Slug given in the URL.
Slug- A URL slug is the end part of a short URL, followed after the domain name.
    The slug is the end part that identifies the exact web page the URL points to. 
    For example, “product-name” is the slug in www.ecommerce.com/category/product-name/.

Synatx to give URL params:- We have to give forward slash colon folowed some id or slug /: in the path. 
We can have multiple URL Params also.
So, how to get the actual value of the URL params(id or slug) in the actual component that will be rendered?:

By using useParams Hook from "react-router-dom" package.
EX: http://localhost:3000/post/8
    http://localhost:3000/post/8/ajith

Where, below Routes inside the App Component.

<Route path="/post/:id/" element={<><Post /></>}></Route>

<Route path="/post/:id/:name" element={<><Post /></>}></Route>

Inside the <Path /> component we simply assign a variable to useParams and using that variable we can access the URL params value.

import { useParams } from "react-router-dom";
function Post() {
    const params = useParams();
    return(
        <div>
            <h2>Post: {params.id}</h2>  -->8
            <p>Name: {params.name}</p>  -->ajith
        </div>
    );
}


Query params:
-------------
is the key value pair in the requested URL which comes after ? key = value
EXample: https://my-website.com?type=cat&name=oscar

Protocol: “https://”
Domain name: “mywebsite.com”
Query parameter 1:
name: “type”
value: “cat”
Query parameter 2:
name: “name”
value: “oscar”



*/

export default URLParams;