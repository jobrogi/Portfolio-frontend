import "../index.css";

function Projects() {
  return (
    <div className="bg-ccDark w-full min-h-screen px-20 py-32">
      <div className="flex flex-nowrap">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/2 min-h-96 h-auto p-3 hover:p-1 transition-all group">
            <button className=" bg-ccGray w-full h-full flex justify-center items-center">
              <h1 className="text-ccOffWhite font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
                Voxel Game Engine
              </h1>
            </button>
          </div>
          <div className="w-1/2 min-h-96 h-auto p-3 hover:p-1 transition-all group">
            <button className=" bg-ccGray w-full h-full flex justify-center items-center">
              <h1 className="text-ccOffWhite font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
                Wizardly Survival
              </h1>
            </button>
          </div>
          <div className="w-full min-h-96 h-auto p-3 hover:p-1 transition-all group">
            <button className=" bg-ccGray w-full h-full flex justify-center items-center">
              <h1 className="text-ccOffWhite font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
                Real Time Chat
              </h1>
            </button>
          </div>{" "}
        </div>
        <div className="w-1/2 min-h-96 p-3 hover:p-1 transition-all group">
          <button className=" bg-ccOffWhite w-full h-full flex justify-center items-center">
            <h1 className="text-ccGray font-Raleway font-black text-3xl transition-all group-hover:text-4xl">
              Ghillie Studios
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
