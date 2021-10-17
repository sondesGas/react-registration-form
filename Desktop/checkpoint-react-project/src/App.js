import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <form className="form-horizontal" role="form">
          <h2>Registration</h2>
          <div className="form-group">
            <label htmlFor="firstName" className="col-sm-3 control-label">
              First Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="form-control"
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="col-sm-3 control-label">
              Last Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="form-control"
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label">
              Email*{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                name="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-3 control-label">
              Password*
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="col-sm-6 control-label">
              Confirm Password*
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="birthDate" className="col-sm-3 control-label">
              Date of Birth*
            </label>
            <div className="col-sm-9">
              <input type="date" id="birthDate" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="col-sm-6 control-label">
              Phone number{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                className="form-control"
              />
              <span className="help-block">
                Your phone number won't be disclosed anywhere{" "}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Gender</label>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-5">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      id="femaleRadio"
                      defaultValue="Female"
                    />
                    Female
                  </label>
                </div>
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input type="radio" id="maleRadio" defaultValue="Male" />
                    Male
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              <span className="help-block">*Required fields</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
