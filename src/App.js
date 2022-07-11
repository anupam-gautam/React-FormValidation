import "./App.css";
// import { AdvancedFormDisplay } from "./components/AdvancedFormDisplay";
import { FormDisplay } from "./components/FormDisplay";
import { TakeInput } from "./components/TakeInput";

function App() {
  return (
    <div>
      <TakeInput></TakeInput>
      <FormDisplay></FormDisplay>

      {/* <AdvancedFormDisplay></AdvancedFormDisplay> */}
    </div>
  );
}

export default App;
