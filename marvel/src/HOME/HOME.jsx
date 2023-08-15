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
              Marvelpedia es la plataforma definitiva para los fanáticos del
              universo de Marvel. Como una completa base de datos de cómics y
              personajes, nuestro sitio web está diseñado para satisfacer todas
              tus necesidades de información sobre el vasto y emocionante mundo
              de Marvel. En Marvelpedia, encontrarás una extensa colección de
              cómics, desde las icónicas historias clásicas hasta las últimas
              publicaciones. Puedes buscar cómics por título, arco argumental,
              personajes destacados, equipo creativo y más, lo que te permitirá
              sumergirte en las aventuras de tus héroes y villanos favoritos
            </p>
            <img
              className="img-introduction"
              src="https://firebasestorage.googleapis.com/v0/b/marvel-8521f.appspot.com/o/AvengersMarvel.webp?alt=media&token=9f25a881-1c37-4013-835e-0ca8948e4d93"
              alt=""
            />
          </div>

          <div className="container-introduction2 wow animate__animated animate__backInLeft ">
            <p>
              Además, nuestra base de datos de personajes es una mina de oro de
              información. Aquí, podrás acceder a perfiles detallados de todos
              los personajes del universo Marvel, desde los famosos Vengadores y
              los mutantes de X-Men hasta los formidables enemigos de Spider-Man
              y los Guardianes de la Galaxia. Cada perfil incluye datos
              esenciales sobre el personaje, como su historia de origen, poderes
              y habilidades, aliados y enemigos, y sus momentos más destacados
              en el mundo del cómic.
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
