// import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-end Web Developer",
          "React JS Developer",
          "TypeScript Developer",
          "React Frameworks",
          "CSS, HTML, Git, Restful APIs, Material UI, Bootstrap, and others"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
