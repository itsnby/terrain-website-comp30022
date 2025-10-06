import React from "react";

import smallBookshopImage from "../../assets/small-images/small-bookshop_img2.jpg";
import medBookshopImage from "../../assets/med-images/med-bookshop_img2.jpg";
import BookshopImage from "../../assets/large-images/large-bookshop_img2.jpg";

import Image from "../../components/Image/Image";
import Quote from "../../components/Quote/Quote";
import Footer from "../../components/Footer/Footer.js";

import styles from "./bookshop.module.css";

const BookshopPage = () => {
  return (
    <>
      <div className={styles["outer"]}>
        <div className={styles["container"]}>
          <div className={styles["fullheight"]}>
            <div>
              <Image
                setImage={smallBookshopImage}
                zoomedImage={BookshopImage}
                mobileImage={medBookshopImage}
                imageTitle={
                  "Books from the TERRAIN bookstore. Photo of hands moving the Cyber Feminism Index by Mindy Seu"
                }
              />
            </div>
            <Quote
              content="A TERRAIN is like an open book; it gives an enormous amount of
              information to anyone who cares to read it."
              quotee="KELLY MENG"
            />
          </div>

          <div className={styles["fullheight2"]}>
            <Quote
              content="   Our world was (and continues to be) colonised through
              storytelling. Stories have the potential to divide us, but they
              also have the power to strengthen connection and community."
              quotee=" RONA GLYNN-MCDONALD"
            />

            <div className={styles["textbox"]}>
              <p>
                TERRAIN is Melbourne’s destination for ecological and
                more-than-human literature. Our carefully curated collection
                features publications that engage in critical dialogues across
                fields of ecology, technology and culture. These works highlight
                the interconnectedness between humans and the non-human world,
                and offer blueprints for how we might also design our way
                forward as one planetary ecosystem.
                <br></br>
                <br></br>
                We hand source our books from local and international authors,
                ensuring a diverse range of perspectives, and continuously
                update and expand our selections with new releases. Our full
                collection, as books continue to arrive since opening in
                December 2023 spans a total of over 300+ local and international
                publishers. Inside, you’ll notice that these books are divided
                into 14 category classifications: Earth, Air, Fire, Water,
                Space, Technology, Society, Art, Design, Spirituality, Health,
                Food, Poetry, Fiction.
                <br></br>
                <br></br>
                Did you know that the bookshop counter is tended to by
                volunteers with knowledge and expertise related to our&nbsp;
                <a href="/manifesto">key fields of interest</a>? The idea here
                is that our counter functions closer to that of a ‘help desk’,
                ‘genius bar’, or ‘librarian's desk’, - with this dynamic in
                place,it’s our community who shapes this space and become the
                active face of TERRAIN.
                <br></br>
                <br></br>
                In addition to being a bookshop, our space hosts intimate
                meetings and events. These include (but are not limited to)
                talks, book launches, performances, readings, meetups, prototype
                activations, exhibitions, screenings, and workshops. Through
                these local gatherings, we hope to foster meaningful connections
                and a community with a shared passion for applied ecological
                thinking. To pitch an event as part of our community
                programming,&nbsp;
                <a target="_blank" href="https://forms.gle/R8akjpiGW1J5ufet8">
                  please fill in this form
                </a>
                .<br></br>
                <br></br>
                As for the bookshop’s origin story, this idea was initially
                conceived as a one-off concept project with a curated collection
                of books at the NGV Art Book Fair in March 2020. From an
                overwhelmingly positive response, this evolved to popups at
                markets, an online store, and now our first bookshop.
                <br></br>
                <br></br>
                We do gift vouchers. Each gift voucher comes on a special A6
                sized recycled card and you can choose between either a speckled
                white or silver envelope. You can read gift voucher terms and
                conditions on our website <a href="termsconditions">here</a>.
                <br></br>
                <br></br>
                <i>
                  Online Shop Under Construction. Subscribe To Our Topographies
                  e-News To Be The First to Know When It’s Live.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookshopPage;
