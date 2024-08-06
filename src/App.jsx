import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);
  return (
    <div className="w-full h-screen max-w-[1200px] mx-auto">
      <Navbar />
      <Notes notesData={notes} />
    </div>
  );
}

export default App;
