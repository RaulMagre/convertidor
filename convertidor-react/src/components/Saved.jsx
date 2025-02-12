import { useSelector, useDispatch } from "react-redux";
import { deleteConversion } from "../features/convertSlice";
import Cross from "../assets/Cross.png";

function Saved() {
  // Obtiene las conversiones guardadas en el estado de Redux
  const conversions = useSelector((state) => state.convert.conversions);
  const dispatch = useDispatch(); 

  // Elimina una conversión
  const handleDelete = (index) => {
    console.log("Conversion borrada:", index); // Verificar que el índice es correcto
    dispatch(deleteConversion(index));
  };

  return (
    <div className="Saved">
      <h2 className="Saved-text">saved</h2>
      <div className="Caja">
        <ul className="Caja-list">
          {conversions.map((conversion, index) => (
            <li key={index}>
              <div className={`Caja-text caja-${index}`}>
                <p className={`text-${index}`}>
                {conversion.inputNum} {conversion.inputUnit} →{" "}
                {conversion.resultNum} {conversion.resultUnit}
                </p>                
                <div className={`cross-${index}`}>
                  <button className="cross-button" onClick={() => handleDelete(index)}>
                    <img src={Cross} height={24} width={24} alt="close" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Saved;
