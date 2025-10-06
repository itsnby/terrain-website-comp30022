import React, { useState, useContext, useCallback } from "react";

import styles from "./contact.module.css";
import Footer from "../../components/Footer/Footer.js";
import { CursorContext } from "../../components/Cursor/CursorContextProvider";

const ContactPage = () => {
  const [showSub, setShowSub] = useState(false);
  const [, setCursor] = useContext(CursorContext);

  const toggleSubscribe = () => {
    setShowSub((prevShowSub) => !prevShowSub);
  };

  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  });

  // ✅ Preload Klaviyo form invisibly
  const preloadKlaviyo = (
    <div style={{ visibility: "hidden", height: 0, overflow: "hidden" }}>
      <div className="klaviyo-form-WdFuEM" />
    </div>
  );

  return (
    <>
      {preloadKlaviyo}
      <div className={styles["outer"]}>
        <div className={styles["contactPage"]}>
          <div className={styles["container"]}>
            <div className={styles["column"]}>
              <div className={styles["row-col"]}>
                <span className={styles["rotation"]}>PHYSICAL</span>
                <span className={styles["details"]}>
                  <div>
                    <p style={{ margin: 0 }}>
                      <span style={{ fontFamily: "inherit", fontWeight: "inherit" }}>
                        Visit:
                      </span>{" "}
                      <a
                        href="https://maps.app.goo.gl/4FJRb8LaR7n1eT3b7"
                        target="_blank"
                        className={styles["details"]}
                        style={{
                          textDecoration: "underline",
                          color: "inherit",
                          fontFamily: "inherit",
                          paddingLeft: "10px",
                        }}
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                      >
                        101-103 Brunswick Street, Fitzroy, VIC, 3065, Australia
                      </a>
                    </p>

                    <br />

                    <a
                      href="#"
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      style={{ pointerEvents: "none", textDecoration: "none" }}
                    >
                      We welcome visits by appointment and during events.
                    </a>
                    <br />
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.Calendly.initPopupWidget({
                          url: "https://calendly.com/terrain-bookings/terrain-bookshop-visit?primary_color=0f45c9",
                        });
                      }}
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      style={{ textDecoration: "underline", color: "inherit" }}
                    >
                      See when we're available and book your time with us.
                    </a>

                    <br />
                    <br />

                    <a
                      href="#"
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                      style={{ pointerEvents: "none", textDecoration: "none" }}
                    >
                      Mail: P.O Box 4196, Fitzroy, VIC, 3065, Australia
                    </a>

                    <br />
                    <br />

                    <p style={{ margin: 0 }}>
                      <span>Telephone:</span>{" "}
                      <a
                        href="tel:+61399697111"
                        className={styles["details"]}
                        style={{
                          color: "inherit",
                          textDecoration: "underline",
                          marginLeft: "0px",
                          display: "inline-block",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={toggleCursor}
                        onMouseLeave={toggleCursor}
                      >
                        (03) 9969 7111
                      </a>
                    </p>
                  </div>
                </span>
              </div>

              <div className={styles["column"]}>
                <span className={styles["rotation"]}>DIGITAL</span>

                <span className={styles["links"]}>
                  <div>
                    <a
                      href="https://www.instagram.com/terrain.earth/"
                      target="_blank"
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                    >
                      INSTAGRAM
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.are.na/terrain"
                      target="_blank"
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                    >
                      ARE.NA
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://open.spotify.com/user/1232587233?si=00d0fc16457843a0"
                      target="_blank"
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                    >
                      SPOTIFY
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.tiktok.com/@terrain.earth"
                      target="_blank"
                      onMouseEnter={toggleCursor}
                      onMouseLeave={toggleCursor}
                    >
                      TIKTOK
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div className={styles["container-2"]}>
            <div className={styles["column"]}>
              <div className={styles["textbox"]}>
                <p>
                  General enquiries:{" "}
                  <a
                    href="mailto:hello@TERRAIN.earth"
                    style={{ textDecoration: "underline", color: "inherit" }}
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                  >
                    hello@TERRAIN.earth
                  </a>
                  <br />
                  Book related enquiries:{" "}
                  <a
                    href="mailto:books@TERRAIN.earth"
                    style={{ textDecoration: "underline", color: "inherit" }}
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                  >
                    books@TERRAIN.earth
                  </a>
                  <br />
                  Event enquiries:{" "}
                  <a
                    href="mailto:events@TERRAIN.earth"
                    style={{ textDecoration: "underline", color: "inherit" }}
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                  >
                    events@TERRAIN.earth
                  </a>
                  <br />
                  <br />
                  <a
                    href="/privacypolicy"
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/termsconditions"
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                  >
                    Terms and Conditions
                  </a>
                  .
                  <br />
                  <br />
                  This is a lightweight, renewably-powered, self-hosted website.
                  <br />
                  <br />
                  <a
                    className={styles["menuBtn"]}
                    onClick={() => toggleSubscribe() && setCursor(true)}
                    onMouseEnter={toggleCursor}
                    onMouseLeave={toggleCursor}
                  >
                    Subscribe
                  </a>{" "}
                  <>
    {/* Invisible preload version */}
    <div style={{ display: "none" }}>
      <div className="klaviyo-form-WdFuEM" />
    </div>

    {showSub && (
      <>
        <div
          id="subscribe"
          className={styles["sub-wrap"]}
          onClick={() => setShowSub(false)}
          onMouseEnter={toggleCursor}
          onMouseLeave={toggleCursor}
        ></div>

        <div className={styles["sub-inner"]}>
          <div className="klaviyo-form-WdFuEM" />
        </div>
      </>
    )}
  </>

                  to the <em>Topographies</em> newsletter for musings from the cave,
                  events, exhibitions, and other TERRAIN Projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
