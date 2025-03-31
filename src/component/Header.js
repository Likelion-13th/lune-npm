import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const isMypage = currentPage.startsWith("/mypage");

  return (
    <header className={isMypage ? "mypage" : ""}>
        <div className="header-section">
            <Link to="" className={currentPage === "" ? "active" : "header-logo"}>
                LIKELION
            </Link>
            <div className="header-term">
                <Link to="/new" className={currentPage === "/new" ? "active" : "header-new"}>
                    New
                </Link>
                <Link to="/perfume" className={currentPage === "/perfume" ? "active" : "header-perfume"}>
                    Perfume
                </Link>
                <Link to="/diffuser" className={currentPage === "/diffuser" ? "active" : "header-diffuser"}>
                    Diffuser
                </Link>
                <Link to="/mypage" className={currentPage === "/mypage" ? "active" : "header-mypage"}>
                    Mypage
                </Link>
            </div>
        </div>
    </header>
  );
};

export default Header;