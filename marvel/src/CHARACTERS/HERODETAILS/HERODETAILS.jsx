import "../HERODETAILS/HERODETAILS.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchHeroe } from "../../services/fetchHeroe";
export function HERODETAILS() {
  let { id } = useParams();
  const [hero, sethero] = useState();
  useEffect(() => {
    fetchHeroe(id)
      .then((data) => sethero(data[0]))
      .catch((err) => console.error(err));
  }, []);
  if (!hero) {
    return;

  }
  return (
    <>
      <div className="container-hero">
        <div className="container-info">
            <div className="">
            <img
            className="img-hero"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt=""
          />
                    <div className="hero-name">{hero.name}</div>

            <div className="hero-description"><p>{hero.description}</p></div>
            </div>
          <div className="hero-data">
          <div className="hero-series">
            <h1>series:</h1>
            <ol>
              {hero.series.items.map((s) => {
                return(
                    <>
                    <div className="container-li">
                    <li key={Math.random() * 1000}>{s.name}</li>;
                    </div>
                    </>
                )
              })}
            </ol>
            <h1>comics:</h1>
            <ol>
              {hero.stories.items.map((s2) => {
                return(
                    <>
                    <div className="container-li">
                    <li key={Math.random() * 1000}>{s2.name}</li>;
                    </div>
                    </>
                )
              })}
            </ol>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
