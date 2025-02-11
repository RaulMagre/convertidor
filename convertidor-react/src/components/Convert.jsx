import Exchange2 from "/src/assets/Exchange2.png";
import Heart from "/src/assets/Heart.png";

function Convert() {
  return (
    <div className="Convert">
      <h2 className="Convert-text">convert</h2>
      <div className="fila">
        <select className="select">
          <option value="1">km → miles</option>
          <option value="2">miles → km</option>
          <option value="3">ft → metres</option>
          <option value="4">metres → ft</option>
          <option value="5">cm → inches</option>
          <option value="6">inches → cm</option>
        </select>
        <div className="exchange">
          <img src={Exchange2} height={24} width={24} alt="exchange" />
        </div>
        <input className="input" type="text" placeholder="introduce el valor"></input>
      </div>
      <div className="heart">
        <img src={Heart} height={24} width={24} alt="fav" />
      </div>
    </div>
  );
}

export default Convert;
