// const heading = React.createElement("h1", { id: "heading" }, "Hello React with CDN links");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>i am a h1 tag</h1>
        <h2>iam a h2 tag</h2>
    </div>
</div> ...........> create react  elemnts */}

const parent= React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"iam a h1 tag"),
React.createElement("h2",{ style: { color: "brown" } },"iam a h2 tag")])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

