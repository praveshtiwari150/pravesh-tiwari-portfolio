import { useSelector } from 'react-redux';
import ThemeButton from './ThemeButton';
import { TbMenu2 } from "react-icons/tb";
import { toggleSidebar } from '../../store/slice/themeSlice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const {mode} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  }

  return (
    <nav className={`fixed top-0 w-full z-10 px-12 background-blur-lg flex items-center justify-between h-18 gap-4 border-b ${mode==='dark' ? 'bg-stroke border-b border-gray-900 shadow-lg':'bg-main border-gray-300 shadow-sm'} transition-all duration-300`}>
      <div className='font-mono text-2xl font-bold text-tertiary cursor-pointer'>Pravesh Tiwari</div>
      <div className='hidden md:flex gap-2.5 justify-center items-center'>
      <a href="#about" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>About</a>
      <a href="#skills" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Skills</a>
      <a href="#projects" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Projects</a>
      <a href="#contact" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Contact</a>
      <a href="#resume" className='text-secondary hover:text-highlight hover:underline cursor-pointer'>Resume</a>
      </div>
      <div className='flex items-center justify-center gap-2'>
      <ThemeButton/>
      <TbMenu2 onClick={handleSidebar} className='md:hidden text-3xl text-highlight cursor-pointer rounded-full'/>
      </div>
    </nav>
  );
};

export default Navbar;
