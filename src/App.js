import "./App.css";
import Form from "./components/FormComponent/Form";
import Ads from "./components/AdsComponent/Ads";
function App() {
  return (
    <div className="App">
      <div className="text">
        <h1 className="heading-text">Learn to code by watching others</h1>
        <p className="sub-heading">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="functionality">
        <Ads />
        <Form />
      </div>
    </div>
  );
}

export default App;
