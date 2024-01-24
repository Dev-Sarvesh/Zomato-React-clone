const heading=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},
[
    React.createElement("h1",{},"Hello this is H1"),
    React.createElement("h2",{},"hello this is H2 tag")
]),
React.createElement("div",{id:"child2"},
[
    React.createElement("h1",{},"Hello this is H1"),
    React.createElement("h2",{},"hello this is H2 tag")
]),

])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);