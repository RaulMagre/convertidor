import Exchange from "/src/assets/Exchange.png";

function Header() {
  return (
    <div className="Header">
      <div className="exchange">
        <img src={Exchange} height={32} width={32} alt="exchange" />
      </div>
      <h1 className="Header-text">unit converter</h1>
    </div>
  );
}

export default Header;
