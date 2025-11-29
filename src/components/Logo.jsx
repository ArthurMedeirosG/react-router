import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-4 whitespace-nowrap rounded-full px-3 py-2 text-[24px] font-semibold leading-none text-[#474747] transition-colors duration-200 hover:text-[#C92071]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition group-hover:ring-[#C92071]">
        <img
          src="src/assets/DigitalCollegeLogo.png"
          alt="Digital Store logo"
          className="h-6 w-6"
        />
      </span>
      <span className="text-[24px] leading-none">Digital Store</span>
    </Link>
  );
};

export default Logo;
