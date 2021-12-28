import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav nav-logo">
                <strong>구구절절</strong>
            </div>
            <div className="nav nav-menu">
                <ul>
                    <li>
                        <Link to="#">
                            <p>소개</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p>랜덤 추천</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p>실시간 추천</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p>음식 월드컵</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <p>개발자 소개</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="nav nav-link"></div>
        </div>
    );
};
export default Nav;
