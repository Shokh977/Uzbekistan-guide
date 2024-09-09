import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="px-6">
      <div className="h-16 mx-auto flex justify-between items-center">
        <div className="laila-bold font-bold text-[24px] leading-[1.025] text-center text-black">
          <h1>Uzbekistan</h1>
        </div>
        <div>
          <ul className="flex gap-[40px]">
            <li>
              <Link className="font-semibold text-xl hover:text-gray-400" href="/">About</Link>
            </li>
            <li>
              <Link className="font-semibold text-xl hover:text-gray-400" href="/">News</Link>
            </li>
            <li>
              <Link className="font-semibold text-xl hover:text-gray-400" href="/">Shop</Link>
            </li>
            <li>
              <Link className="font-semibold text-xl hover:text-gray-400" href="/">Spots</Link>
            </li>
            <li>
              <Link className="font-semibold text-xl hover:text-gray-400" href="/">Culture</Link>
            </li>
          </ul>
        </div>
        <div>icon</div>
      </div>
    </nav>
  );
};
