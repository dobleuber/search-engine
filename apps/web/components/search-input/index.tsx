import { SearchItem } from "../../types/SearchItem";

import styles from "./index.module.css";

export interface SearchInputProps {
  onSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchInput = ({ onSearch }: SearchInputProps) => {
  return (
    <>
      <form role="search" className={styles.form} onSubmit={onSearch}>
        <input
          type="text"
          name="query"
          placeholder="Search"
          className={styles.input}
          required
          minLength={3}
          maxLength={256}
          autoFocus
        />
        <button className={styles.button}>🔎 Search</button>
      </form>
    </>
  );
};
