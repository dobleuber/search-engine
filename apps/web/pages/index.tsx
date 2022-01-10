import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

import styles from "../index.module.css";
import { SearchInput } from "../components/search-input";
import { SearchResult } from "../components/search-result";


export default function Web() {
  const [result, setResult] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();

  const {query} = router.query as {query: string};

  const handleSearch = async (query: string) => {
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
  }

  const submitSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = event.currentTarget["query"].value;
    handleSearch(query);
    router.push(`/?query=${query}`, undefined, { shallow: true })
  };

  useEffect(() => {
    if(query) {
      handleSearch(query);
    }
  }, [query]);
  
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
