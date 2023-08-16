import "../HOME/HOME.css";
import WOW from "wow.js";
import "animate.css";

export function HOME() {
  const wow = new WOW(function () {
    wow.init();
  }, []);

  return (
    <>
      <div className="container-home">
        <div className="cards">
          <figure className="icon-cards mt-3">
            <div className="icon-cards__content">
              <div className="icon-cards__item">
                <img
                  className="img-slideshow"
                  src="https://cdn.marvel.com/content/1x/marvel-snap-big-in-japan-new-season-article-card.jpg"
                  alt=""
                />
              </div>
              <div className="icon-cards__item">
                <img
                  className="img-slideshow"
                  src="https://cdn.marvel.com/content/1x/ghost_rider_18_nic_klein_card.jpg"
                  alt=""
                />
              </div>
              <div className="icon-cards__item">
                <img
                  className="img-slideshow"
                  src="https://cdn.marvel.com/content/1x/avengers_6_variant_card.jpg"
                  alt=""
                />
              </div>
            </div>
          </figure>
        </div>
        <div className="information">
          <div className="container-introduction wow animate__animated animate__backInRight">
            <p>
              Marvelpedia is the ultimate platform for fans of the Marvel
              universe. As a comprehensive database of comics and characters,
              our website is designed to meet all of your information needs
              about the vast and exciting world of Marvel. At Marvelpedia,
              you'll find an extensive collection of comics, from the iconic
              classic stories to the latest issues. You can search for comics by
              title, story arc, featured characters, creative team, and more,
              allowing you to immerse yourself in the adventures of your
              favorite heroes and villains
            </p>
            <img
              className="img-introduction"
              src="https://firebasestorage.googleapis.com/v0/b/marvel-8521f.appspot.com/o/AvengersMarvel.webp?alt=media&token=9f25a881-1c37-4013-835e-0ca8948e4d93"
              alt=""
            />
          </div>

          <div className="container-introduction2 wow animate__animated animate__backInLeft ">
            <p>
            Also, our character database is a gold mine of
              information. Here, you can access detailed profiles of all
              characters from the Marvel universe, from the famous Avengers and
              the mutants of X-Men to the formidable enemies of Spider-Man
              and the Guardians of the Galaxy. Each profile includes data
              essentials about the character, such as his origin story, powers
              and abilities, allies and enemies, and their highlights
              in the world of comics.
            </p>
            <img
              className="img-introduction"
              src="https://firebasestorage.googleapis.com/v0/b/marvel-8521f.appspot.com/o/personajes.png?alt=media&token=2adbc53c-f75b-495d-88ee-50e340c636d1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
