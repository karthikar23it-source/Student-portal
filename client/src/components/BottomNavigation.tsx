import { FaBell, FaBullhorn, FaBriefcase, FaHome, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface BottomNavigationProps {
  active: 'home' | 'notices' | 'opportunities' | 'alerts' | 'profile';
}

export default function BottomNavigation({ active }: BottomNavigationProps) {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      <button
        type="button"
        className={active === 'home' ? 'active' : ''}
        onClick={() => navigate('/home')}
      >
        <FaHome />
        <span>Home</span>
      </button>

      <button
        type="button"
        className={active === 'notices' ? 'active' : ''}
        onClick={() => navigate('/official-notices')}
      >
        <FaBullhorn />
        <span>Notices</span>
      </button>

      <button
        type="button"
        className={active === 'opportunities' ? 'active' : ''}
        onClick={() => navigate('/opportunities')}
      >
        <FaBriefcase />
        <span>Opps</span>
      </button>

      <button
        type="button"
        className={active === 'alerts' ? 'active' : ''}
        onClick={() => navigate('/alerts')}
      >
        <FaBell />
        <span>Alerts</span>
      </button>

      <button
        type="button"
        className={active === 'profile' ? 'active' : ''}
        onClick={() => navigate('/profile')}
      >
        <FaUser />
        <span>Profile</span>
      </button>
    </nav>
  );
}
