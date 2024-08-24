import "../index.css";
import ResumeImg from "../assets/JGilliam_Resume.jpg";
import ResumeImgDark from "../assets/JGilliam_ResumeDark.jpg";
import JGilliamResume from "../assets/JGilliam_Resume.docx";

function Resume(props) {
  return (
    <div
      ref={props.ref}
      className="bg-ccGray w-full min-h-screen Desktop:p-36 Laptop:p-20 Tablet:p-0 Phone:p-0 flex justify-center relative flex-wrap"
    >
      <img
        src={ResumeImgDark}
        className="w-full h-auto object-scale-down"
      ></img>
      <div className="pt-10 font-Merriweather Phone:pt-0">
        <a href={JGilliamResume} download="JGilliamResume.docx">
          <button
            className="bg-blue-500 w-fit h-fit text-white p-5 rounded-lg"
            onClick={() => {}}
          >
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
