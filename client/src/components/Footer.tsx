export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-zinc-900 text-center bottom-0 w-[100%] h-[5%] left-0 mt-12 fixed">
      <h1 className="font-bold text-[1.3rem] text-[#dcdcdc]">
        © {year} Copyright by Dz.dev
      </h1>
    </footer>
  );
}
