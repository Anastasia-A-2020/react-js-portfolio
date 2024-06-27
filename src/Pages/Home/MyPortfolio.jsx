import data from "../../data/index.json";
import { VscGithub } from "react-icons/vsc";
import { MdArrowOutward } from "react-icons/md";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <a
            className="btn btn-github"
            href="http://surl.li/pkrhyc"
            target="_blanck"
          >
            <VscGithub size={32} />
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map(item => {
          return (
            <div key={item.id} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.img} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <p className="text-sm portfolio--link">
                  {item.link}
                  <a href={item.href} target="_blanck">
                    <MdArrowOutward size={20} className="portfolio--icon" />
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
