import styles from "./BACKOFFICERMAINPAGE.module.css";

const BACKOFFICERMAINPAGE = () => {
  return (
    <div className={styles.backOfficerMainPage}>
      <div className={styles.backOfficerMainPageChild} />
      <div className={styles.backOfficerMainPageItem} />
      <div className={styles.backOfficerMainPageInner} />
      <b className={styles.urbanWasteCollectionContainer}>
        <p className={styles.urbanWaste}>{`URBAN WASTE `}</p>
        <p className={styles.urbanWaste}>COLLECTION AID 2.0</p>
      </b>
    </div>
  );
};

export default BACKOFFICERMAINPAGE;
