import "../index.css";
import Card from "./Card";
import cPlusPlus from "../assets/C++.png";
import cSharp from "../assets/CSharp.png";

function Skills(props) {
  return (
    <div
      ref={props.ref}
      className="bg-ccGray w-full min-h-screen px-72 py-32 flex flex-wrap justify-evenly"
    >
      <Card
        Name="C++"
        Category="Programming Language"
        Icon={cPlusPlus}
        Desc=" C++ Is an enhanced version of the programming language C, in which
        essentially includes support for Object Oriented Programming."
        Level="3"
        Percent={10.4}
        isFontAwesome={false}
      />

      <Card
        Name="Javascript"
        Category="Programming Language"
        Icon={<i className="fa-brands fa-js"></i>}
        Desc="JavaScript is the lifeblood of the web. It's the magic behind interactive pages, from simple animations to complex web apps. This dynamic language lets you build amazing things, and it's always evolving."
        Level="7"
        Percent={56.7}
        isFontAwesome={true}
      />

      <Card
        Name="C#"
        Category="Programming Language"
        Icon={cSharp}
        Desc="C# is a versatile language used to build a wide range of applications, from desktop software to web services. It's known for its object-oriented structure and strong typing, making it reliable and efficient."
        Level="5"
        Percent={96.4}
        isFontAwesome={false}
      />

      <Card
        Name="Soft Skills"
        Category="People Skills"
        Icon={<i className="fa-solid fa-people-group"></i>}
        Desc="I excel at building strong relationships and fostering teamwork. With excellent communication and listening skills, I can effectively collaborate with diverse teams to achieve shared goals. My adaptability and positive attitude contribute to a productive and enjoyable work environment."
        Level="8"
        Percent={92.4}
        isFontAwesome={true}
      />

      <Card
        Name="AWS"
        Category="Cloud Computing"
        Icon={<i className="fa-brands fa-aws"></i>}
        Desc="AWS is a cloud computing platform offering a wide range of services. I have experience leveraging several key services within the AWS ecosystem, including DynamoDB for flexible NoSQL database solutions, IAM for robust identity and access management, and EC2 for scalable compute resources."
        Level="6"
        Percent={42.4}
        isFontAwesome={true}
      />

      <Card
        Name="Control Systems"
        Category="Engineering"
        Icon={<i className="fa-solid fa-robot"></i>}
        Desc="Controls Systems Engineering involves designing and implementing systems that regulate equipment and processes. I possess expertise in this field, with a focus on industrial automation. My experience includes working with VFDs and safety systems like AS-i, ensuring optimal performance and safety in complex environments."
        Level="7"
        Percent={89.4}
        isFontAwesome={true}
      />
    </div>
  );
}

export default Skills;
