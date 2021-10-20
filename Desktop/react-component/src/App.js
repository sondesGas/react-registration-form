import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div
        className="card"
        style={{
          width: "20rem",
          marginLeft: "500px",
          borderColor: "green",
        }}
      >
        <ProfilePhoto />
        <div className="card-body" style={{ color: "red" }}>
          <FullName />
          <p className="card-text" style={{ color: "green" }}>
            <Adress />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
