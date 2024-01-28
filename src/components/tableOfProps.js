import "./tableOfProps.css";
import InputData from "./inputData";
function tableOfProps(props) {
  return (
    <table>
      <tr>
        <th>{props.titleOfHeader}</th>
      </tr>
      <tr>
        {/* create a list for every one of the inputs */}
        <InputData userInput={props.UserInputfromTheTop}></InputData>
      </tr>
    </table>
  );
}

export default tableOfProps;
