export default function HeroSection() {
  return (
    <section id="heriSection" className="hero--section">
      <div className="hero--section__content-box">
        <div className="hero--section__content">
          <p className="section__title">Hey, I&#39;m Nastia</p>
          <h1 className="hero--section__title">
            <span className="hero--section__title--color">Frontend</span> <br />
            Developer
          </h1>
          <p className="hero--section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Laudantium enim aperiam quam corporis ullam!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section__img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
