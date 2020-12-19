import styles from "../styles/Home.module.css";
import ThreeScene from "../components/ThreeScene";

export default function Home() {
  return (
    <div
      className={styles.App}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ThreeScene />
    </div>
  );
}
