import Zoomer from "./Zoomer";
import { marked } from "marked";
import { PREVIEWER } from "../App";
import Prism from "prismjs";

marked.use({
    breaks: true,
    highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
});

const renderer = new marked.Renderer();

function Previewer(props) {
    return (
        <Zoomer
            className={
                props.zoomed && props.zoomedEl === PREVIEWER
                    ? "previewer zoomed"
                    : props.zoomed && props.zoomedEl !== PREVIEWER
                    ? "previewer hidden"
                    : "previewer"
            }
            handleZoom={props.handleZoom}
            zoomed={props.zoomed}
        >
            <div
                id="preview"
                dangerouslySetInnerHTML={{
                    __html: marked(props.markdown, { renderer: renderer }),
                }}
            />
        </Zoomer>
    );
}

export default Previewer;
