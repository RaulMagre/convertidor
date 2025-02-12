import Exchange2 from "/src/assets/Exchange2.png";
import Heart from "/src/assets/Heart.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addConversion } from "../features/convertSlice";

function Convert() {
  const [inputNum, setInputNum] = useState(0);
  const [resultUnit, setResultUnit] = useState("miles");
  const [resultNum, setResultNum] = useState(0);
  const [optionText1, setOptionText1] = useState("km → miles");
  const [optionText2, setOptionText2] = useState("miles → km");
  const [optionText3, setOptionText3] = useState("ft → metres");
  const [optionText4, setOptionText4] = useState("metres → ft");
  const [optionText5, setOptionText5] = useState("cm → inches");
  const [optionText6, setOptionText6] = useState("inches → cm");

  const dispatch = useDispatch(); // Para guardar la conversión en Redux

  console.log("numero metido: " + inputNum);
  console.log("numero resutlado: " + resultNum);
  console.log("unidad del resultado: " + resultUnit);
  console.log("unidad metida: " + detectUnit(resultUnit));

  function convertUnit(inputNum, resultUnit) {
    if (resultUnit === "miles") {
      return inputNum * 0.621371;
    } else if (resultUnit === "km") {
      return inputNum * 1.60934;
    } else if (resultUnit === "metres") {
      return inputNum * 0.3048;
    } else if (resultUnit === "ft") {
      return inputNum * 3.28084;
    } else if (resultUnit === "inches") {
      return inputNum * 0.393701;
    } else if (resultUnit === "cm") {
      return inputNum * 2.54;
    } else {
      return 0.0;
    }
  }

  // Para detectar la unidad del input, contraria a la del resultado
  function detectUnit(resultUnit) {
    if (resultUnit === "miles") {
      return "km";
    } else if (resultUnit === "km") {
      return "miles";
    } else if (resultUnit === "metres") {
      return "ft";
    } else if (resultUnit === "ft") {
      return "metres";
    } else if (resultUnit === "inches") {
      return "cm";
    } else if (resultUnit === "cm") {
      return "inches";
    } else {
      return "";
    }
  }

  // Manejo de cambios en el input number
  const handleInputNumChange = (e) => {
    const value = e.target.value;
    setInputNum(value);
    setResultNum(convertUnit(value, resultUnit).toFixed(2));
  };

  // Manejo de cambios en el select unit
  const handleResultUnitChange = (e) => {
    const value = e.target.value;
    setResultUnit(value);
    setResultNum(convertUnit(inputNum, value).toFixed(2));
  };

  function exchangeResult() {
    setResultNum(inputNum);
    setInputNum(resultNum);
    setResultUnit(detectUnit(resultUnit));

    if (optionText1 === "km → miles") {
      setOptionText1("miles → km");
      setOptionText2("km → miles");
    } else {
      setOptionText1("km → miles");
      setOptionText2("miles → km");
    }

    if (optionText3 === "ft → metres") {
      setOptionText3("metres → ft");
      setOptionText4("ft → metres");
    } else {
      setOptionText3("ft → metres");
      setOptionText4("metres → ft");
    }

    if (optionText5 === "cm → inches") {
      setOptionText5("inches → cm");
      setOptionText6("cm → inches");
    } else {
      setOptionText5("cm → inches");
      setOptionText6("inches → cm");
    }
  }

  // Para que se guarde la conversión en Redux
  function saveConversion() {
    dispatch(
      addConversion({
        inputNum: inputNum,
        resultNum: resultNum,
        resultUnit: resultUnit,
        inputUnit: detectUnit(resultUnit),
      }),
      setInputNum(0),
      setResultNum(0.00)
    );
  }
                    
  return (
    <div className="Convert">
      <h2 className="Convert-text">convert</h2>
      <div className="fila">
        <div className="exchange2">
          <button className="exchange2-button" onClick={exchangeResult}>
            <img src={Exchange2} height={24} width={24} alt="exchange" />
          </button>
        </div>
        <select className="select" onChange={handleResultUnitChange}>
          <option value="miles">{optionText1}</option>
          <option value="km">{optionText2}</option>
          <option value="metres">{optionText3}</option>
          <option value="ft">{optionText4}</option>
          <option value="inches">{optionText5}</option>
          <option value="cm">{optionText6}</option>
        </select>
        <div className="input-container">
          <p className="input-unit">{detectUnit(resultUnit)}</p>
          <input
            className="input-text"
            type="number"
            onChange={handleInputNumChange}
            placeholder="value"
            value={inputNum}  
          ></input>
        </div>
      </div>
      <div className="heart">
        <button className="heart-button" onClick={saveConversion}>
          <img src={Heart} height={24} width={24} alt="fav" />
        </button>
      </div>
      <div className="result">
        <p className="number">{resultNum}</p>
        <p className="unit">{resultUnit}</p>
      </div>
    </div>
  );
}

export default Convert;
