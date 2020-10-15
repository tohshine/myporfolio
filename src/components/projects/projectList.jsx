import React from "react";

import LinkIcon from "@material-ui/icons/Link";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import  './project.css'

const ProjectList = ({ title, description, url, image, technology }) => {
  const renderTech = (technology) => {
    return technology.map((tech) => {
      return (
        <div key={tech.id} className=''>
          <p className="pr-2">{tech.name} </p>{" "}
        </div>
      );
    });
  };

  return (
    <div className=' w-64  rounded-lg px-2 py-8 bg-white my-8 text-black shadow-lg card__tile'>
      <div className=' '>
        <span className='flex items-center text-sm capitalize pb-4'>
          <strong className='pr-2'>title:</strong>
          {title}
        </span>
        <span className='flex items-center text-sm flex-wrap capitalize pb-2'>
          <strong className='pr-2'>technology:</strong>{renderTech(technology)}
        </span>
        <img
          src={image}
          alt='tohshine'
          className='border mb-8 rounded-lg h-64 object-cover items-center'
        />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Descriptions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{description}</Typography>
          </AccordionDetails>
        </Accordion>
        <a
          href={url}
          className='border px-2 mt-4 py-2 rounded-lg w-full text-center block  border-green-500 text-orange-600 hover:border-orange-400'
        >
          <LinkIcon className='mr-4' />
          link
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
