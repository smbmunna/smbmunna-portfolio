import { Link } from "react-router-dom";
import Button from "../Button/Button";


const Navbar = () => {
    const links = <>
        <Link to="/"><Button text="Home" /></Link>

    </>
    return (
        <div className="navbar bg-base-100  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className=" rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/TMzm3sQ/Resume-picture.png" />
                    </div>
                </div>
                <a className="text-xl font-bold">Mahmud Munna</a>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;