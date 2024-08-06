import React from "react";

const Notes = ({ notesData }) => {
  return (
    <main className="p-4 md:py-10 w-full h-full">
      {notesData.length === 0 ? (
        <p className="">No Notes Available</p>
      ) : (
        <section className="grid md:grid-cols-4">
          {notesData.map((note, index) => (
            <div key={index} className="">
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Notes;
