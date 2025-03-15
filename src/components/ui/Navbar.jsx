import { useSelector } from 'react-redux';
import ThemeButton from './ThemeButton';
import { TbMenu2 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { toggleSidebar } from '../../store/slice/themeSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const {mode} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  }

  return (
    <nav className={`top-0 z-10 px-12 background-blur-lg flex items-center justify-between h-18 gap-4 border-b ${mode==='dark' ? 'border-gray-600 shadow-lg':'border-gray-300 shadow-sm'} transition-all duration-300`}>
      <div className='font-mono text-2xl font-bold text-tertiary cursor-pointer'>Pravesh Tiwari</div>
      <div className='hidden md:flex gap-2.5 justify-center items-center'>
      <Link to="/about" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>About</Link>
      <Link to="/skills" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Skills</Link>
      <Link to="/projects" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Projects</Link>
      <Link to="/contact" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Contact</Link>
      <Link to="/resume" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Resume</Link>
      </div>
      <div className='flex items-center justify-center gap-2'>
      <ThemeButton/>
      <TbMenu2 onClick={handleSidebar} className='md:hidden text-3xl text-highlight cursor-pointer rounded-full'/>
      </div>
    </nav>
  );
};

export default Navbar;
