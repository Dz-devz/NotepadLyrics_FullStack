import DzLogo from "../src/assets/DzLogo.png";

export default function Header() {
  return (
    <header className="px-3 py-1 flex items-center bg-zinc-900 w-[100%] h-20">
      <h1 className="font-bold text-[2rem] text-[#dcdcdc]">Dz Pen</h1>
      <img src={DzLogo} alt="" className="w-10" />
    </header>
  );
}
