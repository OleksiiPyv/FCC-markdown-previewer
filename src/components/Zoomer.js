import React from 'react';
import PropTypes from 'prop-types';

function Zoomer(props) {
    return (
        <div className={props.className}>
            <i className={props.zoomed ? "fa fa-compress zoom" : "fa fa-arrows-alt"} onClick={props.handleZoom}/>
            {props.children}
        </div>
    )
}

Zoomer.propTypes = {children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
}

export default Zoomer;