import { SearchItem } from "../../types/SearchItem";
import styles from "./index.module.css";
import Link from "next/link";

export interface SearchResultProps {
  searchItem: SearchItem;
}

export const SearchResult = ({ searchItem }: SearchResultProps) => {
  const { id, title, shortDescription, photo } = searchItem;
  return (
    <Link href={`/${id}`}>
      <a className={styles.link}>
        <div role="listitem" className={styles.item}>
          <img src={photo} alt={title} className={styles.image} />
          <div className={styles.details}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.shortDescription}>{shortDescription}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};
