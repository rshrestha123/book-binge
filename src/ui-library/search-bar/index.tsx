import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchBarProps = {
  onSearchCallback: (searchTerm: string) => void;
  placeholderText?: string;
};

export default function SearchBar({
  onSearchCallback,
  placeholderText = "",
}: Readonly<SearchBarProps>) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = (document.getElementById("search-bar-input-field") as HTMLInputElement)
      .value;
    if (searchTerm) onSearchCallback(searchTerm);
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <div className={styles.searchBarContainer}>
        <input id={"search-bar-input-field"} type="text" placeholder={placeholderText} />
        <button type="submit" aria-label={"search"}>
          <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}
