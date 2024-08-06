import React from "react";
import { MdAdd } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="w-full h-16 border-b border-primary">
      <nav className="w-full h-full flex justify-between items-center px-4">
        <h1 className="text-primary text-3xl font-bold">TakeNote!</h1>
        <button className="flex items-center space-x-1 md:space-x-4 text-primary font-semibold  text-sm md:text-lg border border-primary p-1 md:p-2 rounded-md hover:bg-primary group hover:text-white">
          <MdAdd className="size-[20px] md:size-[25px]" /> <span>Add Note</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
