import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GetAppIcon from "@material-ui/icons/GetApp";
import ListIcon from "@material-ui/icons/List";

import "./welcome.css";

const Welcome = () => {
  const [text, settext] = useState("");
  const texts = [
    "Teacher.",
    "Software-Developer.",
    "Computer-Engineer.",
    "Mobile-Developer",
    "Devop-Engineer",
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  useEffect(() => {
    typewriter();
    return () => {};
  }, []);

  const typewriter = () => {
    if (index === texts.length) {
      index = 0;
    }
    currentText = texts[index];
    letter = currentText.slice(0, ++count);
    settext(letter);

    if (letter.length === currentText.length) {
      index++;
      count = 0;
    }
    setTimeout(typewriter, 200);
    //document.querySelector(createRef.current.classList).
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className=' max-w-6xl w-full'>
        <div className='flex flex-col justify-center items-center px-16'>
          <img
            src='https://res.cloudinary.com/dlecos9op/image/upload/v1596793106/vfanvscyhyzj83wg2sm5.png'
            className='rounded-full object-contain w-64 border border-red-300 '
            alt='user'
          />
          <div className='pt-16'>
            <div className='text-center'>
              <h2 className='sm:text-4xl'>Hello,I'm</h2>
              <strong className='sm:text-6xl'>TOSIN OWOEYE</strong>
            </div>

            <p className='typing pt-4 text-center sm:text-xl'>
              I'm a <strong className=' text-orange-500'>{text}</strong>
            </p>

            <div className='flex justify-evenly items-center pt-16  w-full'>
              <a
                href='https://res.cloudinary.com/dlecos9op/image/upload/v1596980369/dt8n12zlehualhz7fgre.pdf'
                className='hover:bg-white px-2 py-2 rounded-lg text-orange-800 border-0 '
              >
                <GetAppIcon />
                resume
              </a>
              <Link
                to='/project'
                className='hover:bg-white px-2 py-2 rounded-lg text-orange-800 '
              >
                <ListIcon /> Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
