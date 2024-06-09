import { Link } from "react-router-dom";

export const HeaderNavBar = () => {
    return (
        <div className="d-flex align-items-center justify-content-between mb-3 py-3 px-5 bg-dark text-white">
            <h1>Daily news</h1>
            <div className="d-flex mx-4">
                <Link to="/" className="mr-2 text-white">Home</Link>
                <p>About</p>
            </div>
        </div>
    );
};
