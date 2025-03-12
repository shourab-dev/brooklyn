import React from 'react'
import Detail from './Detail';
import Heading from './Heading';

const WorkProcessCard = ({icon, title, detail}) => {
  return (
    <div className="bg-white p-8 rounded-xl">
      <img
        src="/public/images/work_ressearch.png"
        alt=""
        className="max-w-[72px] max-h-[72px]"
      />
      
      <Heading className="mt-8 mb-3 !text-xl leading-[120%]">
        1. Research
      </Heading>
      <Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
        arcu.
      </Detail>
    </div>
  );
}

export default WorkProcessCard
