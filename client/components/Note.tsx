import { useEffect, useState } from "react";
import ModalEdit from "../components/ModalEdit";
export default function Note() {
  const [lyrics, setLyrics] = useState<any[]>([]);
  const [showModal, setModal] = useState(false);
  const [specific, setSpecific] = useState<any>([]);

  function handleOnClose() {
    setModal(false);
  }

  async function deleteLyrics(id: number) {
    try {
      const response = await fetch(`http://localhost:8800/notes/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      setLyrics(lyrics.filter((notes) => notes.note_id !== id));
      console.log(lyrics);
    } catch (error) {
      console.log(error);
    }
  }

  async function getLyrics() {
    const response = await fetch(`http://localhost:8800/notes`);
    const lyricsArray = await response.json();
    setLyrics(lyricsArray);
  }

  useEffect(() => {
    getLyrics();
  }, []);

  async function getSpecificLyrics(id: number) {
    const response = await fetch(`http://localhost:8800/notes/${id}`);
    const json = await response.json();
    console.log(json);
    setModal(true);
    setSpecific(json);
  }

  return (
    <div>
      {lyrics.map((lyric) => (
        <div
          key={lyric.note_id}
          className="bg-[#fff] rounded-[7px] shadow-md p-[10px] w-80A m-4 float-left text-center"
        >
          <h1 className="text-xl mb-2 font-bold">{lyric.title}</h1>
          <p className="text-md mb-2 whitespace-pre-wrap break-words">
            {lyric.lyrics}
          </p>
          <button
            className="bg-[#28231D] text-white rounded-md float-right w-[50px] h-[36px] mr-[10px] outline-none cursor-pointer"
            onClick={() => deleteLyrics(lyric.note_id)}
          >
            Delete
          </button>
          <button
            className="bg-[#28231D] text-white rounded-md float-right w-[55px] h-[36px] mr-[10px] outline-none cursor-pointer"
            onClick={() => getSpecificLyrics(lyric.note_id)}
          >
            Update
          </button>
        </div>
      ))}
      {showModal && <ModalEdit onClose={handleOnClose} specifics={specific} />}
    </div>
  );
}
