import React from 'react'
import Heading from './utils/Heading';
import Detail from './utils/Detail';
import WorkProcessCard from './utils/WorkProcessCard';

const WorkProcess = () => {
  return (
    <section
      id="workProcess"
      className="bg-[#F0F1F3]  lg:pb-[140px] lg:pt-[248px] mt-10 lg:mt-0 py-8  lg:-translate-y-[70px]"
    >
      <div className="container grid lg:grid-cols-2 gap-8 lg:gap-[143px] items-center">
        <div className="workProcessCnt">
          <Heading className="text-5xl">Work Process</Heading>
          <Detail className="pt-6 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </Detail>
          <Detail>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </Detail>
        </div>
        <div className="workProcessCards grid md:grid-cols-2 gap-6 items-center">
          <div className="firstRow grid gap-6 ">
            <WorkProcessCard />
            <WorkProcessCard />
          </div>
          <div className="lastRow grid gap-6 md:mt-10">
            <WorkProcessCard />
            <WorkProcessCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcess
