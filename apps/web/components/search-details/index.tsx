import { SearchItem } from "../../types/SearchItem";
import styles from "./index.module.css";
import Link from "next/link";

export interface SearchDetailsProps {
  searchItem: SearchItem;
}

export const SearchDetails = ({ searchItem }: SearchDetailsProps) => {
  const { title, description, photo } = searchItem;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <img src={photo} alt={title} className={styles.image} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
