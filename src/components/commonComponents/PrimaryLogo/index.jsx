import { Link } from "react-router-dom";
import "./style.scss";

const PrimaryLogo = () => {
  return (
    <>
      <Link to="/" className="logo-link" title="Logo">
        <h1 className="primary-logo">logo</h1>
      </Link>
    </>
  );
};

export default PrimaryLogo;
