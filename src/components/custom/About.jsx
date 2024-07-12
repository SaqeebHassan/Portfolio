function About() {
  return (
    <>
      <div
        className="about-containe flex justify-cente text-gray-200 h-screen"
        style={{ backgroundColor: "#0a1e2b" }}
      >
        <div className="detail mt-10 w-11/12">
          <div className="about-me flex justify-center">
            <div className="w-9/12">
              <strong className="text-2xl text-cyan-500">About me</strong>
              <p className="text-justify my-2">
                Hi there! My name is Saqeeb Hassan. I am full stack Developer
                proficient in MongoDB, Express js, React js and Node js. <br />
                With a background in programming, including experience in
                JavaScript, React Js. I am confident in my ability to contribute
                significantly to the team in enhancing the front end and backend
                infrastructure of the website. <br /> My experience in various
                programming languages and data management tools, such as MySQL
                and MongoDB, has taught me to keep a keen eye on the back-end
                performance metrics. I am continually seeking to learn the
                latest technologies and programming languages.
              </p>
            </div>
          </div>
          <div className="about-education flex justify-center">
            <div className="education-detail w-9/12">
              <strong className="text-2xl text-cyan-500">Education</strong>
              <div
                className="master my-2
                "
              >
                <strong>Master's in Information Technology | 2022-2024</strong>
                <p style={{ color: "#FFEB3B" }}>
                  University of Education, Lahore
                </p>
              </div>
              <div className="bechlor my-2">
                <strong>Associate Degree, Computer Science | 2019-2021</strong>
                <p style={{ color: "#FFEB3B" }}>University of Sargodha</p>
              </div>
              <div className="Intermediate my-2">
                <strong>F.sc Engineering | 2017-2019</strong>
                <p style={{ color: "#FFEB3B" }}>BISE Sargodha</p>
              </div>
            </div>
          </div>
          <div className="about-projects"></div>
          <div className="about-achievements"></div>
        </div>
      </div>
    </>
  );
}

export default About;
