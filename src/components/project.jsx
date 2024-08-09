import React from "react"


function Project(props) {
  const dataProject = props.data;

  return (
    <div className="flex justify-center bg-white text-black">
      <div className="w-11/12 relative">

        <div className="sticky top-0 bg-white">
          <div className="py-8 flex gap-4 items-center">
            <i className="fi fi-br-arrow-turn-down-right text-5xl rotate-90 -scale-y-100"></i>
            <h1 className="text-6xl">Project</h1>
          </div>
          <div className="w-full h-hr bg-black"></div>
        </div>

        <div className="flex flex-col py-8 gap-20">
          {dataProject.map((project, index) => (
            <div
              key={index}
              className="flex gap-4 max-md:flex-col-reverse border-r-2 border-black border-opacity-50"
            >
              <img className="w-80 h-48 rounded-md" src={project.picture} alt={project.title} />
              <div className="flex flex-col justify-around max-md:gap-2">
                <h1 className="text-3xl">{project.title}</h1>
                <p className="w-3/4 text-base">{project.desc}</p>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">Built With:</p>
                  <div className="flex gap-2 items-center">
                    {project.buildWith.map((tech, techIndex) => (
                      <img key={techIndex} className="h-6" src={tech} alt={`Technology ${techIndex}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
  
  export default Project;