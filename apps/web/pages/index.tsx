import { useState } from "react";
import styles from "../index.module.css";
import { SearchInput } from "../components/search-input";
import { SearchResult } from "../components/search-result";

export default function Web() {
  const [result, setResult] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const submitSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = event.currentTarget["query"].value;
    try {
      const response = await fetch(`/api/search?query=${query}`);
      const data = await response.json();
      if(data.length === 0) {
        setNoResults(true);
        setResult([]);
      } else {
        setResult(data);
        setNoResults(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>My Search Engine</h1>
      <SearchInput onSearch={submitSearch} />
      {noResults && <h2>No results found</h2>}
      { !!result.length && <h2>Results</h2>}
      <ul className={styles.results}>
        {result.map( searchItem => (
          <SearchResult key={searchItem.id} searchItem={searchItem} />
        ))}
      </ul>
    </div>
  );
}
