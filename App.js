import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>(
    <h1 className="raj" tabIndex="5">
        JAVASCRIPT DEVELOPER
    </h1>
);

const HeadingComponent = () =>(
    <div id="container">
        <Title/>
    <h1 className="heading">RAJ CHAUHAN</h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);