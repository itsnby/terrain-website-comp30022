import React from "react";

import Image from "../../components/Image/Image";
import styles from "../BioassemblyPage/page-template.module.css";
import Footer from "../../components/Footer/Footer.js";

import smallStudioImage from "../../assets/small-images/small-studio_img.jpg";
import medStudioImage from "../../assets/med-images/med-studio_img.jpg";
import StudioImage from "../../assets/large-images/large-studio_img.jpg";

const StudioPage = () => {
  return (
    <>
      <div className={styles["outer"]}>
        <div className={styles["left-col"]}>
          <div className={styles["text-img"]}>
            <span>
              <h1>STUDIO</h1>
            </span>
          </div>
        </div>

        <div className={styles[("container", "column")]}>
          <div>
            <Image
              setImage={smallStudioImage}
              mobileImage={medStudioImage}
              zoomedImage={StudioImage}
              imageTitle={"The Anomolous Image by Trent Crawford."}
            />
          </div>

          <div className={styles["textbox"]}>
            <p>
            At TERRAIN, we are focused on seeding and producing the future we envision. Adjacent to our bookshop and gallery, we host a dedicated private studio for aligned practitioners across disciplines.
<br/><br/>
            This work environment is our hearth, and is designed to further and strengthen the practices, network, and capabilities of each member by being supported and surrounded by likeminds in a space grounded by ecological ideas, values and ethics.
              <br></br>
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudioPage;
