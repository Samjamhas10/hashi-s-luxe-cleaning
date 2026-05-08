import React from "react";
import "./CleaningPics.css";
// import kitchenImage from "../../images/clean-kitchen.jpg";
// import officeImage from "../../images/clean-office.jpg";
// import bathroomImage from "../../images/clean-bathroom.jpg";
import entry from "../../assets/entry.jpeg";
import entryWay from "../../assets/entry-way.jpeg";
import bathroomWay from "../../assets/bathroom-way.jpeg";
import bathroom from "../../assets/bathroom.jpeg";
import bathroomToilet from "../../assets/bathroom-toilet.jpeg";

function CleaningPics() {
  const cleaningImages = [
    // {
    //   id: 1,
    //   src: kitchenImage,
    //   alt: "Spotless Kitchen",
    //   caption: "Spotless Kitchen",
    // },
    // {
    //   id: 2,
    //   src: officeImage,
    //   alt: "Pristine Office Space",
    //   caption: "Pristine Office Space",
    // },
    // {
    //   id: 3,
    //   src: bathroomImage,
    //   alt: "Sparkling Bathroom",
    //   caption: "Sparkling Bathroom",
    // },
    {
      id: 4,
      src: entry,
      alt: "Clean Entry",
      caption: "Clean Entry",
    },
    {
      id: 4,
      src: entryWay,
      alt: "Clean Entry Way",
      caption: "Clean Entry Way",
    },
    {
      id: 5,
      src: bathroomWay,
      alt: "Clean Bathroom",
      caption: "Clean Bathroom",
    },
    {
      id: 6,
      src: bathroom,
      alt: "Clean Bathroom",
      caption: "Clean Bathroom",
    },
    {
      id: 7,
      src: bathroomToilet,
      alt: "Clean Bathroom Toilet",
      caption: "Clean Bathroom Toilet",
    },
  ];

  return (
    <section id="cleaning-pics" className="cleaning-pics">
      <h2 className="cleaning-pics__title">Our Cleaning Work</h2>
      <div className="cleaning-pics__grid">
        {cleaningImages.map((image) => (
          <div key={image.id} className="cleaning-pics__item">
            <img
              src={image.src}
              alt={image.alt}
              className="cleaning-pics__image"
            />
            <p className="cleaning-pics__caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CleaningPics;
