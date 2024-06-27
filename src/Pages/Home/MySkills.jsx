import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map(item => (
          <div key={item.id} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              {item.description.map(description =>
                Object.entries(description).map(([key, value]) => (
                  <p className="skills--section--description" key={key}>
                    <span className="text-sm">{key}: </span> {value}
                  </p>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
