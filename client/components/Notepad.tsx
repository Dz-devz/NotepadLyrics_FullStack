import { useState } from "react";

export default function Notepad() {
  const [input, setInput] = useState({
    title: "",
    lyrics: "",
  });

  function handleInput(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function submitNote(event: { preventDefault: () => void }) {
    event.preventDefault();
    try {
      const body = input;
      const response = fetch("http://localhost:8800/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="font-bold text-center text-[2rem]  text-zinc-900">
        Lyrics Notepad
      </h1>
      <div>
        <form className="relative pb-[100px] max-w-[50%] mt-[30px] mr-auto mb-[20px] ml-auto shadow-lg shadow-[#28231D] p-[15px] rounded-[7px] text-center">
          <input
            className="text-zinc-900 shadow-md w-[100%] p-1 outline-none text-xl resize-none text-center"
            type="text"
            name="title"
            value={input.title}
            placeholder="Title"
            onChange={handleInput}
          />
          <textarea
            className="text-zinc-900 w-[100%] p-1 outline-none text-xl resize-none text-center"
            name="lyrics"
            rows={5}
            placeholder="Type your lyrics here."
            value={input.lyrics}
            onChange={handleInput}
          />
          <button
            className="bg-zinc-800 text-white mt-20 rounded-md float-right w-[50px] h-[36px] mr-[8px] outline-none cursor-pointer"
            onClick={submitNote}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
