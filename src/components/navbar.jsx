import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Travel Guides", href: "#" },
  { label: "Spiritual Reflections", href: "#" },
  { label: "Social Impact", href: "#" },
  { label: "Vision Board", href: "#" },
  { label: "Connect", href: "#" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 md:h-[65px] h-14  bg-[#6b4c2d] text-[#e3dcdc] px-5 flex items-center justify-between z-50 shadow-md">
      <h1 className="text-2xl font-semibold font-ubuntu">Shizrae</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 w-[80%] justify-end font-Montserrat">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:underline whitespace-nowrap">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden cursor-pointer p-1 rounded-full border border-[#e3dcdc]/20  hover:bg-[#6b4c2d] text-[#e3dcdc] transition-all duration-300"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {open ? (
          <LiaTimesSolid className="text-2xl rotate-90" />
        ) : (
          <CiMenuBurger className="text-2xl" />
        )}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-[80px] left-0 right-0 bg-[#6b4c2d] p-5 md:hidden shadow-md transition-all">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-lg hover:underline whitespace-nowrap"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
