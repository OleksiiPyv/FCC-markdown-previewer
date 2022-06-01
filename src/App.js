import React from "react";
import "./App.scss";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

export const PREVIEWER = 'previewer';
export const EDITOR = 'editor';
export const NEITHER = 'neither';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder,
            zoomed: false,
            zoomedEl: NEITHER,
        };
        this.handleChange = this.handleChange.bind(this);
        this.editorZoom = this.editorZoom.bind(this);
        this.previewerZoom = this.previewerZoom.bind(this);
    }

    handleChange(e) {
        this.setState({
            markdown: e.target.value,
        });
    }

    editorZoom() {
        this.setState(state => {return {
            zoomed: !state.zoomed,
            zoomedEl: EDITOR,
        }});
    }

    previewerZoom() {
        console.log(this.state)
        this.setState(state => {return {
            zoomed: !state.zoomed,
            zoomedEl: PREVIEWER,
        }});
    }

    render() {
        
        return (
            <div className={this.state.zoomed ? "App zoomed" : "App"}>
                <Editor
                    handleChange={this.handleChange}
                    markdown={this.state.markdown}
                    handleZoom={this.editorZoom}
                    zoomed={this.state.zoomed}
                    zoomedEl={this.state.zoomedEl}
                />
                <Previewer
                    markdown={this.state.markdown}
                    handleZoom={this.previewerZoom}
                    zoomed={this.state.zoomed}
                    zoomedEl={this.state.zoomedEl}
                />
            </div>
        );
    }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

export default App;
