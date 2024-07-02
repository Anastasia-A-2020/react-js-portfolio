export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about-section--img">
        <img src="./img/about-me.png" alt="about me" />
      </div>
      <div className="hero--section__content-box about--section--box">
        <div className="hero--section__content">
          <p className="section--title">About and experience </p>
          <h1 className="skills--section-heading">About Me</h1>

          <h3>Education</h3>
          <p className="hero--section__description">
            Kharkov National Agrarian University named after V.V. Dokuchaeva{" "}
            <br />
            Faculty of Management and Economics
            <br />
            Years of study: 2009 - 2014
          </p>
          <h3>Soft skills</h3>
          <ul className="about-section--list">
            <li className="hero--section__description">result-oriented</li>
            <li className="hero--section__description">attentive to details</li>
            <li className="hero--section__description">highly organized</li>
          </ul>
          <h3>Languages</h3>
          <ul className="about-section--list">
            <li className="hero--section__description">
              english (В1: Intermediate)
            </li>
            <li className="hero--section__description">
              polish (B2 : Upper-intermediate)
            </li>
          </ul>
        </div>
      </div>
      <div className="hero--section__content-box about--section--box">
        <h1 className="skills--section-heading">Work experience</h1>
        <p className="text-lg">Company &#34;LOPAN Group&#34;, Ukraine </p>
        <p className="hero--section__description">
          <span className="text-sm">
            Customer Education Specialist | August 2018 - November 2022
          </span>{" "}
          <br />
          Training clients on new accounting software; сonducting trial
          consultations for new clients and introducing them to the technical
          support line; сollaborating with company dealers. Developed a client
          management system, which included client brief completion, course
          planning tailored to client needs, and scheduling sessions in
          agreement with the client.
        </p>
        <p className="hero--section__description">
          <span className="text-sm">
            Head of Customer Training Department | December 2021 - February 2022
          </span>{" "}
          <br />
          Allocated clients among employees, reviewed session recordings,
          advised clients with unique requests, assisted in solving complex
          issues, conducted technical meetings within the department, maintained
          communication with other departments of the company.
        </p>
      </div>
      <div className="about-section--img">
        <img src="./img/about-me-1.png" alt="about me" />
      </div>
    </section>
  );
}
