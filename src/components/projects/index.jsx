import React from "react";
import { project } from "../../mocks/projects";
import  './index.module.css'

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import ProjectList from "./projectList";

const Index = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center px-4 h-auto relative '>
      <div className=' max-w-6xl w-full '>
        <div className=' flex flex-col r '>
          <div className='pt-8 flex justify-between items-center '>
            <Link
              to='/'
              className=' flex items-center justify-center border px-1 py-1 rounded-lg hover:border-orange-500'
            >
              <ArrowBackIcon />
              Back
            </Link>

            <Avatar
              alt='tosin owoeye'
              src='https://res.cloudinary.com/dlecos9op/image/upload/v1596793106/vfanvscyhyzj83wg2sm5.png'
              className='border '
            />
          </div>

          <strong className='pt-8 text-xl sm:text-5xl text-orange-300'>
            Projects
          </strong>
          <div className='flex flex-wrap justify-evenly mb-4'>
            {project.map((proj) => (
              <ProjectList
                key={proj.id}
                title={proj.title}
                description={proj.description}
                image={proj.image}
                url={proj.url}
                technology={proj.technology}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
