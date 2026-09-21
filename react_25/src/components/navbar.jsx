import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {

    const theme = useContext(ThemeContext);

    return (
        <h1>Current Theme: {theme}</h1>
    );
};

export default Navbar;