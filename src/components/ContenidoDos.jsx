import React from "react";

const ContenidoDos = () => {
  const cartas = [
    {
      introduccion: "Making a design system from scratch ",
      fecha: "12 Feb 2020",
      skills: "Design, Pattern",
      contenido:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      introduccion: "Creating pixel perfect icons in Figma",
      fecha: "12 Feb 2020",
      skills: "Design, Pattern",
      contenido:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];
  return (
    <div className="w-full bg-[#EDF7FA] flex justify-center flex-col items-center lg:w-full lg:h-[400px] lg:py-[32px]">
      <div className="h-[60px] lg:flex justify-between w-full max-w-[856px]">
        <p className="text-[#21243D] text-[18px] text-center">
          Recent posts
        </p>
        <p className="hidden lg:block">view all</p>
      </div>
      <div className=" xl:flex xl:justify-between xl:max-w-[856px] w-full">
        {cartas.map((item, index) => (
          <div className="key={index} flex justify-center flex-col items-center   mt-[17px] lg:mt-[2px] ">
            <div className="w-[354px] h-[266px] bg-white  px-[19px] pt-[5px] rounded-[4px]   ">
              <h1 className="font-bold text-[22px] mt-[15px]">
                {item.introduccion}
              </h1>
              <p className="flex justify-between  mt-[2px] mb-[19px]">
                {item.fecha} | {item.skills}
              </p>
              <p className="w-[314px] h-[117px] ">{item.contenido}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContenidoDos;
/* <div className="w-full h-[647px] bg-[#EDF7FA] mt-[59px] flex justify-center">
        <p className="text-[#21243D] mt-[15px]">Recent posts</p>
        <div></div>
      </div> */
