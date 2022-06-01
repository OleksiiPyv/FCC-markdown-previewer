import Zoomer from "./Zoomer";
import { EDITOR } from "../App";

function Editor(props) {
    return (
        <Zoomer
            className={
                props.zoomed && props.zoomedEl === EDITOR
                    ? "editor zoomed"
                    : props.zoomed && props.zoomedEl !== EDITOR
                    ? "editor hidden"
                    : "editor"
            }
            handleZoom={props.handleZoom}
            zoomed={props.zoomed}
        >
            <textarea
                onChange={props.handleChange}
                value={props.markdown}
                id="editor"
            />
        </Zoomer>
    );
}

export default Editor;
