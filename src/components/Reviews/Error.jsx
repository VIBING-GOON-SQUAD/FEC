import {Link} from 'react-router-dom'
const Error = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <div className="TOPBAR"></div>
        <section className="modal-main">
        <div className="ErrorHeader">
        <button className="X" type="button" onClick={handleClose}>
          </button>
            <h1 className="Error"> Error</h1>
       </div>
        <div className="ErrorBody">
            <p className="Message">You must be logged in to perform that action.</p>
            <div className="buttonContainer">
              <Link to='login'>
              <div>
          <button className="SignIn" type="button">sign in</button>
          </div>
              </Link>
          <div>
          <button className="Close" type="button" onClick={handleClose}>cancel</button>
          </div>
          </div>
        </div>
        </section>
      </div>
    );
  };

  export default Error;