import "../index.css";
import Card from "./Card";
import cPlusPlus from "../assets/CPlusPlus.png";
import cSharp from "../assets/CSharp.png";

import React, { useContext } from "react";
import { RWDContext } from "../App";

function Skills(props) {
  const { rwdState } = useContext(RWDContext);

  return (
    <div
      ref={props.ref}
      // px-72 py-32 BREAKS MOBILE ADD RESPECTIVE DEVICE
      className="max-w-screen w-full min-h-screen bg-ccGray flex flex-wrap justify-center items-center py-24 Desktop:px-200 "
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

      {/* acts kinda like the <br> element. */}
      {/* Conditionally renders the element only if in laptop or desktop state */}
      {rwdState === "Desktop" ? <div className=" basis-full"></div> : ""}

      <Card
        Name="Control Systems"
        Category="Engineering"
        Icon={<i className="fa-solid fa-robot"></i>}
        Desc="Controls Systems Engineering involves designing and implementing systems that regulate equipment and processes. I possess expertise in this field, with a focus on industrial automation. My experience includes working with VFDs and safety systems like AS-i, ensuring optimal performance and safety in complex environments."
        Level="7"
        Percent={89.4}
        isFontAwesome={true}
      />

      <Card
        Name="Node/Express"
        Category="Framework"
        Icon={<i className="fa-brands fa-node-js"></i>}
        Desc="Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. Express.js is a popular web framework built on top of Node.js, providing tools and features for creating efficient and scalable web applications. Together, they form a powerful combination for building server-side web applications in JavaScript."
        Level="3"
        Percent={10.4}
        isFontAwesome={true}
      />
    </div>
  );
}

export default Skills;
