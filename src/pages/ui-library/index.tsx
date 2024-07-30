import styles from "./index.module.scss";
import IconButton from "@/ui-library/icon-button";
import { faCoffee, faSmile, faDog } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "@/ui-library/search-bar";
import Button from "@/ui-library/button";
import StarRating from "@/ui-library/star-rating";
import { useState } from "react";

export default function UiLibrary() {
  const [rating, setRating] = useState(0);
  return (
      <div className={styles.container}>
        <h1>UI Component Library</h1>
        <section className={styles.sectionContainer}>
          <h2>Buttons</h2>
          <div className={styles.row}>
            <div className={styles.item}>
              <Button onClickCallback={() => console.log("Clicked primary button")}>Primary</Button>
              <div>
                <code>&lt;Button variant=&quot;primary&quot;&gt;</code>
              </div>
            </div>
            <div className={styles.item}>
              <Button
                  variant={"passive"}
                  onClickCallback={() => console.log("Clicked passive button")}
              >
                Passive
              </Button>
              <div>
                <code>&lt;Button variant=&quot;passive&quot;&gt;</code>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <IconButton
                  onClickCallback={() => console.log("clicked")}
                  icon={faDog}
                  tooltip={"Primary is the default variant"}
              />
              <div>
                <code>&lt;IconButton variant=&quot;primary&quot;&gt;</code>
              </div>
            </div>
            <div className={styles.item}>
              <IconButton
                  onClickCallback={() => console.log("clicked")}
                  icon={faCoffee}
                  tooltip={"Tooltip is a prop passed in"}
                  variant={"secondary"}
              />
              <div>
                <code>&lt;IconButton variant=&quot;secondary&quot;&gt;</code>
              </div>
            </div>
            <div className={styles.item}>
              <IconButton
                  onClickCallback={() => console.log("clicked")}
                  icon={faSmile}
                  tooltip={"Icon must be passed on props as well"}
                  variant={"accent"}
              />
              <div>
                <code>&lt;IconButton variant=&quot;accent&quot;&gt;</code>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <h2>Search Bar</h2>
          <SearchBar
              onSearchCallback={(searchTerm) => console.log("Searched for:", searchTerm)}
              placeholderText={"Your placeholder goes here..."}
          />
          <div style={{margin: "1rem"}}>
            <code>
              &lt;SearchBar onSearchCallback=&#123;functionExpectsStringFromInput&#125;
              placeholderText=&#123;&quot;Your placeholder goes here...&quot;&#125; /&gt;
            </code>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <h2>Star Rating</h2>
          <div className={styles.row}>
            <div className={styles.item}>
              <StarRating interactive={false} displayRating={3.5}/>
              <code>
                &lt;StarRating interactive=&#123;false&#125; readOnlyRating=&#123;3.5&#125; /&gt;
              </code>
            </div>
            <div className={styles.item}>
              <StarRating interactive={true} onClickCallback={(rate) => setRating(rate)}/>
              <p>Rating: {rating}</p>
              <code>
                &lt;StarRating interactive=&#123;true&#125; onClickCallback=&#123;setRating&#125;
                /&gt;
              </code>
            </div>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <h2>Fonts</h2>
          <div className={styles.row}>
            <div className={styles.item}>
              <div className={styles.bitterFont}>
                Bitter
              </div>
              <code>
                font-family: &lsquo;Bitter&rsquo;, serif;
              </code>
              <code>
                font-weight: 700;
              </code>
            </div>
            <div className={styles.item}>
              <div className={styles.ralewayFont}>
                Raleway
              </div>
              <code>
                font-family: &lsquo;Raleway&rsquo;, sans-serif;
              </code>
              <code>
                font-weight: 500;
              </code>
            </div>
            <div className={styles.item}>
              <div className={styles.robotoFont}>
                Roboto
              </div>
              <code>
                font-family: &lsquo;Roboto&rsquo;, sans-serif;
              </code>
            </div>
          </div>
        </section>
      </div>
  );
}
