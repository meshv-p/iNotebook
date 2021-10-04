import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TextUtils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/article">TextUtils</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/footer">Footer</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about" tabIndex="-1" >About</Link>
                            </li>
                            <li className="nav-item">
                                <div className="form-check form-switch ">
                                    <input className="form-check-input mt-2 " onClick={props.setmode} type="checkbox" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label nav-link" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
