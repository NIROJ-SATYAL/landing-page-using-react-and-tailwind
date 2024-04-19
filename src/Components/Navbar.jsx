
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-3 z-50  backdrop:blur-lg bg-slate-500 border border-b ">
                <div className="container px-3 mx-auto relative text-sm">

        <div className="flex items-center justify-between">

            <div className="flex items-center flex-shrink-4">
                <img  className="h-10 w-10 mr-2"src={logo} alt="" />
                <span className="text-xl tracking-tight">Satyal</span>

            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>

                {navItems.map((item, index) => (
                    <li className='cursor-pointer bg-slate-400 p-2 rounded-2xl' key={index}>

                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>

            <div className="hidden lg:flex justify-between items-center">

                <button className="bg-gradient-to-r from-orange-400 to-orange-800 py-2 px-3 rounded-2xl ">Sign In</button>
                <button className=" py-2 px-3 rounded-2xl ml-3  bg-gradient-to-r from-orange-400 to-orange-800">create an account</button>

            </div>

            <div className="lg:hidden">
                hi
            </div>

                </div>
    </div>
    </nav>
  )
}

export default Navbar