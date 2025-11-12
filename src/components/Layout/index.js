import './index.scss';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
    return (
        <div className="App">
            <div className="sidebar">
                <Link className="logo" to="/">
                    <div className="logo-text">PS</div>
                </Link>
                <nav>
                    <Link exact="true" to="/" activeclassname="active">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </Link>
                    <Link className="about-link" to="/about" activeclassname="active">
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </Link>
                    <Link className="portfolio-link" to="/portfolio" activeclassname="active">
                        <FontAwesomeIcon icon={faFolderOpen} color="#4d4d4e" />
                    </Link>
                    <Link className="work-link" to="/work" activeclassname="active">
                        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                    </Link>
                    <Link className="contact-link" to="/contact" activeclassname="active">
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </Link>
                </nav>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/patrick-sheng/"
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/yourusername"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="page">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;