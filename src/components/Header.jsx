import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light px-4 mb-5">
            
            <div className="logo">
                LOGO
            </div>

            <nav className="ms-auto">
                <NavLink to="/" className="nav-link text-secondary">Homepage</NavLink>
            </nav>
        </header>
    );
}
