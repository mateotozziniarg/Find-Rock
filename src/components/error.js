import React from "react";
import "./error.css";

function Error(props) {
  const children = props.children;
  return (
    <React.Fragment>
      <div className="ut utut">
        <div className="col-md-12">
          <h5>
            <p className="utut">Surgió un error:</p> <br></br>
            {props.mensaje}
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
