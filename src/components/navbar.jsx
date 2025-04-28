import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import logo from "../assets/lifeofshiz.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Travels", href: "/travel" },
  { label: "Careers", href: "/career" },
  { label: "Spiritual Reflections", href: "/spiritual" },
  { label: "Vision Board", href: "/vision" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-20 top-0 left-0 right-0 md:h-[65px] h-14 bg-[#bf6d45] text-[#f1ebdd] px-5 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} className="h-12 w-auto" alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center flex-1 font-Rumble">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="hover:underline whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Button */}
      <div className="hidden md:flex">
        <Link
          to="/contact"
          className="bg-[#f1ebdd] text-[#bf6d45] px-4 py-2 rounded-md font-semibold hover:bg-[#f1ebdd]/90 transition"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden cursor-pointer p-1 rounded-full border border-[#f1ebdd]/20 hover:bg-[#bf6d45] text-[#f1ebdd] transition-all duration-300"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {open ? (
          <LiaTimesSolid className="text-2xl rotate-90" />
        ) : (
          <CiMenuBurger className="text-2xl" />
        )}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute w-2/3 flex flex-col mx-auto rounded-2xl top-[60px] left-0 right-0 bg-[#bf6d45] p-5 md:hidden shadow-md transition-all">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="block text-xl hover:underline whitespace-nowrap"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Contact Button on Mobile */}
            <li>
              <Link
                to="/contact"
                className="block text-center bg-[#f1ebdd] text-[#bf6d45] px-4 py-2 rounded-md font-semibold hover:bg-[#f1ebdd]/90 transition"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
