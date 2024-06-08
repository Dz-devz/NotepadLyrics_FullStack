import { Link } from "react-router-dom";
import DzLogo from "/image/DzLogo.png";

export default function Header() {
  return (
    <header className="px-10 py-1 flex items-center bg-zinc-900 w-[100%] h-20">
      <Link to="/">
        <h1 className="font-bold text-[2rem] text-[#dcdcdc]">Dz Pen</h1>
      </Link>
      <img src={DzLogo} alt="" className="w-10" />
      <nav className="ml-auto font-bold text-[1.5rem] text-[#dcdcdc]">
        <ul className="flex gap-8">
          <li>
            <Link to="/notes">Notes</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
