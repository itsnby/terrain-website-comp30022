import React from "react";

import PageTitle from "../../components/PageTitle/PageTitle.js";
import Image from "../../components/Image/Image";
import styles from "../BioassemblyPage/page-template.module.css";
import Footer from "../../components/Footer/Footer.js";

import smallGalleryImage from "../../assets/small-images/small-symbiotic_img.jpg";
import medGalleryImage from "../../assets/med-images/med-symbiotic_img.jpg";
import GalleryImage from "../../assets/large-images/large-symbiotic_img.jpg";

const GalleryPage = (props) => {
  return (
    <>
      <div className={styles["outer"]}>
        <div className={styles["left-col"]}>
          <div className={styles["text-img"]}>
            <PageTitle title={"NOW SHOWING"} />
            <span>
              <h1>
                SYMBIOTIC STRUCTURES
                <br />
                BY LISA MEINESZ
              </h1>
            </span>
          </div>
        </div>

        <div className={styles[("container", "column")]}>
          <div>
            <Image
              setImage={smallGalleryImage}
              mobileImage={medGalleryImage}
              zoomedImage={GalleryImage}
              imageTitle={"The Anomolous Image by Trent Crawford."}
            />
          </div>

          <div className={styles["textbox"]}>
            <p>
              ‘Symbiotic Structures’ invites visitors to envisage a world where
              diverse lifeforms seamlessly integrate with their environments
              forming intricate symbiotic relationships. Through prints,
              animations and 3D-printed sculptures, each work serves as a window
              into a realm where architecture and biology converge to showcase
              the potential for habitats that not only sustain life, but
              celebrate its inherent diversity. Drawing inspiration from
              nature’s resilience and adaptability, the series celebrates the
              beauty of symbiosis: where organisms can mutually benefit from
              their interactions, creating a delicate equilibrium that sustains
              life.
              <br></br>
              <br></br>
              ‘Symbiotic Structures’ asks: for human habitats to be designed and
              retrofit symbiotically at scale, what necessary innovations and
              implementations of technology might help us get there?
              <br></br>
              <br></br>
              Lisa Meinesz (b. 1995) specialises in the creation of speculative life
              forms, digitally sculpting intricate models and often bringing
              them to life through sustainable 3D-printing and media. Her
              practice utilises conceptual form to not only prompt contemplation
              on the broader implications and significance of our aesthetic
              choices, but also to elicit an emotional response to the
              possibilities that exist beyond the familiar touchstones of life.
              <br></br>
              <br></br>
              This exhibition opened as part of the Melbourne Design Week
              program, an initiative of the Victorian Government through
              Creative Victoria in collaboration with the NGV.
              <br></br>
              <br></br>
              For pricing, please contact us to request a catalogue. For artists
              expressing interest in our gallery, please fill in{" "}
              <a href="https://forms.gle/MsSZAh2r3ibxXwdX6" target="_blank">
                this online form
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
