import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SearchDetails } from "../components/search-details";

import styles from "../index.module.css";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [result, setResult] = useState(null);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`/api/search/${id}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  const goBack = () => {
    router.back();
  }

  return (
    <div className={styles.container}>
      <button onClick={goBack} className={styles.back}>Back</button>
      {result && <SearchDetails searchItem={result} />}
      <button onClick={goBack} className={styles.back}>Back</button>
    </div>
  );
}
