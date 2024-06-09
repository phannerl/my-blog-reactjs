import { Link } from "react-router-dom";

export const HeaderNavBar = () => {
    return (
        <div className="d-flex align-items-center justify-content-between mb-3 py-3 px-4 px-lg-4 bg-dark text-white">
            <h1 className="ms-lg-5">Daily news</h1>
            <div className="d-flex mx-xl-4 align-items-center">
                <Link to="/blogs" className="me-4 text-white">Home</Link>
                <Link to="/about" className="me-lg-5 text-white">About</Link>
            </div>
        </div>
    );
};
