
const parent = React.createElement("div",{id: "parent"},[
  React.createElement("div",{id: "child" },[
    React.createElement("h1", {},"i'm  raj"),
    React.createElement("h2", {}, "i'm  raj"),
  ]),
  React.createElement("div",{id: "child2"},[
    React.createElement("h1", {},"i'm web developer"),
    React.createElement("h2", {},"i'm aslo application devloper"),
  ]),
]);

// //jsx 

//   //const heading = React.createElement(
//         //    "h1",
//           //  {id: "heading",xyz:"raj"},  
//             //"hello world from raj chauhan!" 
//         // );  creat javascript obj

          
//           console.log(parent);//obj

//             //const root = ReactDOM.createRoot(document.getElementById("root"));
//                         const root = ReactDOM.createRoot(document.getElementById("header")); //assign root

//           root.render(parent); //obj // take this obj creat h1 element for browser understanding put them inside the root
          
// // render method is put an obj on to our page