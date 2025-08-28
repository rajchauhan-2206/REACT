/**
 * 
 * <div id="parent">
 *  <div id="child">
 *    <h1>i'm h1 tag</h1>
 *    <h2>i'm h2 tag</h2>
 *  <div>
 * </div>
 * 
 * 
 * reactElement(object) => html(Browser understand)
 * 
 */

// const parent = React.createElement(
//   "div", 
//   { id: "perent" },
//    React.createElement(
//     "div",
//     { id: "child" },[
//    React.createElement("h1", {}, "i'm h1 tag"),
//     React.createElement("h2", {}, "i'm h2 tag"),
//   ]

//    )
//   );
const group = React.creatElement(
  "div"
    { id:"abhi" },
      React.createElement(
        "div",
        { id:"raj" },[
          React.createElement("h1", {}, "abhi is doctor"),
          React.creatElement("h2", {}, "raj is soft.eng.")
        ]
      )
);
  //const heading = React.createElement(
        //    "h1",
          //  {id: "heading",xyz:"raj"},  
            //"hello world from raj chauhan!"
        // );  creat javascript obj

          
          console.log(group);

            const root = ReactDOM.createRoot(document.getElementById("root"));

          root.render(group); //obj // take this obj creat h1 element for browser understanding put them inside the root