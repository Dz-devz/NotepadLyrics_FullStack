import { MouseEventHandler, useState } from "react";

export default function ModalEdit(props: {
  specific: { note_id: number; title: string; lyrics: string };
  onClose: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  const [notePad, setNotepad] = useState({
    note_id: props.specific.note_id,
    title: props.specific.title,
    lyrics: props.specific.lyrics,
  });

  async function updateLyrics(event: { preventDefault: () => void }) {
    event.preventDefault();
    try {
      await fetch(`http://localhost:8800/edit/${notePad.note_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notePad),
      });
      console.log(notePad.note_id);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center modal">
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-left text-xl text-gray-700 mb-2">
          Edit Data
        </h1>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            value={notePad.title}
            onChange={(e) => setNotepad({ ...notePad, title: e.target.value })}
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            value={notePad.lyrics}
            onChange={(e) => setNotepad({ ...notePad, lyrics: e.target.value })}
          />
        </div>
        <div className="text-center">
          <button
            onClick={(e) => updateLyrics(e)}
            className="hover:bg-red-500 mr-5 px-5 py-2 bg-gray-700 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={props.onClose}
            className=" px-5 py-2 bg-gray-700 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
