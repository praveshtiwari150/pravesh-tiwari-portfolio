import { useSelector } from 'react-redux';
import Navbar from './components/ui/Navbar';
import Sidebar from './components/ui/Sidebar'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from './store/slice/themeSlice';
import { useEffect } from 'react';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  const {mode, isSidebarOpen} = useSelector(state => state.theme)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 768 && isSidebarOpen){
        dispatch(toggleSidebar())
      }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  },[dispatch, isSidebarOpen])

  return (
   <div className={`${mode} flex flex-col max-w-full min-h-screen transition-colors ease-in-out duration-300`}>
    <Navbar/>
    {isSidebarOpen && <Sidebar onClose={() => dispatch(toggleSidebar())} className='fixed top-0 '/>}
    <About/>
    <Skills/>
    <Projects/>
   </div>
  )
}

export default App
