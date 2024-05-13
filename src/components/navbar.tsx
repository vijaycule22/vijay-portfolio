// function Navbar() {
//   return (
//     <nav className="nav">
//       <h2 className="font-bold">Vijay.dev</h2>
//       <ul>
//         <li>
//           <a href="#Home">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#testimonial">testimonial</a>
//         </li>

import { useState } from "react";

//         <li>
//           <a href="#projects">Projects</a>
//         </li>
//         <li>
//           <a href="#contacts">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h2 className="font-bold text-xl">Vijay.dev</h2>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="h-3 w-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Menu</title>
            <path
              fill-rule="evenodd"
              d="M3 3.75C3 3.33579 3.33579 3 3.75 3H16.25C16.6642 3 17 3.33579 17 3.75C17 4.16421 16.6642 4.5 16.25 4.5H3.75C3.33579 4.5 3 4.16421 3 3.75ZM3.75 8.25C3.33579 8.25 3 8.58579 3 9C3 9.41421 3.33579 9.75 3.75 9.75H16.25C16.6642 9.75 17 9.41421 17 9C17 8.58579 16.6642 8.25 16.25 8.25H3.75ZM3 14.25C3 13.8358 3.33579 13.5 3.75 13.5H16.25C16.6642 13.5 17 13.8358 17 14.25C17 14.6642 16.6642 15 16.25 15H3.75C3.33579 15 3 14.6642 3 14.25Z"
            />
          </svg>
        </button>
      </div>
      <div
        className={
          isOpen
            ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            : "lg:block hidden"
        }
      >
        <ul className="lg:flex-row flex-col lg:gap-8 gap-4 mt-8 lg:mt-0">
          <li onClick={toggleMenu}>
            <a href="#Home">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#testimonial">testimonial</a>
          </li>

          <li onClick={toggleMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
