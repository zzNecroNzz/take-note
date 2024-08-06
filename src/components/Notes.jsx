import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Notes = ({ notesData }) => {
  return (
    <main className="p-4 md:py-10 w-full h-full">
      {notesData.length === 0 ? (
        <p className="">No Notes Available</p>
      ) : (
        <section className="grid md:grid-cols-4 gap-8">
          {notesData.map((note, index) => (
            <div
              key={index}
              className="border border-primary w-[250px] h-[150px]  space-y-2 rounded-md flex justify-between "
            >
              <div className="p-2">
                <h2 className="text-xl font-bold text-primary">{note.title}</h2>
                <p>{note.content}</p>
              </div>
              <div className="flex">
                <button>
                  <MdEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Notes;
