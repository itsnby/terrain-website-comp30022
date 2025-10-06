import React, { useEffect, useState } from "react";

import { getResources } from "../../api/contenful/utils.js";

import IndexItem from "./IndexList/IndexList.js";
import Resource from "./Resource/Resource.js";
import styles from "./garden.module.css";
import SearchBar from "./SearchBar/SearchBar.js";
import Footer from "../../components/Footer/Footer.js";

const GardenPage = () => {
  const [searchString, setSearchString] = useState(null);
  const [gardenItems, setGardenItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [counts, setCounts] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  const [mobileView, setMobileView] = useState(false);

  const handleFilter = (tag, index) => {
    if (tag === "All") {
      setFilteredItems(gardenItems);
    } else {
      const filtered = gardenItems.filter((item) => {
        return item.contentfulMetadata.tags.some(
          (tagObj) => tagObj.name.toLowerCase() === tag
        );
      });
      setFilteredItems(filtered);
    }
    setActiveIndex(index); // Update the active index when an item is clicked
  };

  useEffect(() => {
    getResources()
      .then((response) => {
        const items = response.resourcesCollection.items;
        setGardenItems(items);
        setFilteredItems(items);
        const uniqueTags = {};

        // Loop through items and collect unique tags
        items.forEach((item) => {
          const tags = item.contentfulMetadata.tags;
          tags.forEach((tagObj) => {
            const text = tagObj.name;
            uniqueTags[text] = 0;
          });
        });

        // Create the initialCounts object from uniqueTags
        const initialCounts = { ...uniqueTags };

        // Create a copy of counts
        const updatedCounts = { ...initialCounts };
        // Update the counts
        items.forEach((item) => {
          const tags = item.contentfulMetadata.tags;
          tags.forEach((tagObj) => {
            const text = tagObj.name;
            updatedCounts[text]++;
          });
        });
        // Update the state with the modified counts
        setCounts(updatedCounts);

        if (searchString) {
          const filteredItems = items.filter((item) => {
            return item.title
              .toLowerCase()
              .includes(searchString.toLowerCase());
          });
          setFilteredItems(filteredItems);
        }
      })
      .catch((error) => {
        console.error("Error fetching resources:", error);
      });
  }, [searchString]);

  useEffect(() => {
    // Check the viewport width to determine mobile view
    const handleResize = () => {
      if (window.innerWidth < 970) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className={styles["outer"]}>
        <div className={styles["container"]}>
          <div>
            <div className={styles["gardenSearch"]}>
              <SearchBar
                searchString={searchString}
                setSearchString={setSearchString}
              />
            </div>
            <div className={styles["digital-garden"]}>
              {!mobileView && (
                <div className={styles["gardenMenu"]}>
                  {Object.keys(counts).map((key) => (
                    <IndexItem
                      key={key}
                      text={key}
                      onClick={handleFilter}
                      counts={counts}
                    />
                  ))}
                </div>
              )}

              <div className={styles["gardenContent"]}>
                {filteredItems.map((item, index) => (
                  <Resource key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p>
          Submit to the growing Digital Garden{" "}
          <a
            href="https://form.asana.com/?k=Gn-ENvSvWMTAPWra4ZHDww&d=1204995862481516"
            target="_blank"
          >
            here
          </a>
          .{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default GardenPage;
