export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-zinc-900 text-center bottom-0 w-[100%] h-[2.5%] left-0 mt-10 fixed">
      <h1 className="font-bold text-[1rem] text-[#dcdcdc]">
        © {year} Copy Rights by Dz.dev
      </h1>
    </footer>
  );
}
