
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const  navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 sticky-top">
            
            
            <Link 
                className="navbar-brand ps-4" 
                to="/"
            >
                Associations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={(args) => `nav-item nav-link ${args.isActive ? 'active' : ''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end pe-4">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Neyza
                    </span>

                    <button 
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

