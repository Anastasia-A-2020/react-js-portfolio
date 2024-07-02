import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section__content-box">
        <div className="hero--section__content">
          <p className="section__title">Hey, I&#39;m Anastasiia</p>
          <h1 className="hero--section__title">
            <span className="hero--section__title--color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero--section__description">
            I’m a novice front-end developer with a strong interest in creating
            interactive and visually appealing websites. I am ready for quick
            learning and mastering of new technologies in web development.
            <br />
            I’m prepared to contribute to a team and participate in the creation
            of high-quality and innovative web projects.
          </p>
        </div>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
          className="btn btn-primary"
        >
          Contact Me
        </Link>
      </div>
      <div className="hero--section__img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
