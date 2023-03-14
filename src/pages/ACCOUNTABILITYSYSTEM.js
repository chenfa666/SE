import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ACCOUNTABILITYSYSTEM.module.css";

const ACCOUNTABILITYSYSTEM = () => {
  const navigate = useNavigate();

  const onACCOUNTABILITYSYSTEMContainerClick = useCallback(() => {
    navigate("/communication");
  }, [navigate]);

  return (
    <div
      className={styles.accountabilitySystem}
      onClick={onACCOUNTABILITYSYSTEMContainerClick}
    >
      <div className={styles.accountabilitySystemChild} />
      <img
        className={styles.accountabilitySystemItem}
        alt=""
        src="/rectangle-102@2x.png"
      />
      <div className={styles.nameTrnhTrnContainer}>
        <span className={styles.notDoneTxtContainer}>
          <p className={styles.nameTrnhTrnPhngTn}>
            <b>Name: Trịnh Trần Phương Tứn</b>
          </p>
          <p className={styles.nameTrnhTrnPhngTn}>
            <b>{`Position: `}</b>
            <span className={styles.janitor}>Janitor</span>
          </p>
          <p className={styles.nameTrnhTrnPhngTn}>
            <b className={styles.janitor}>{`D.O.B: `}</b>
            <span>12/4/1997</span>
          </p>
          <p className={styles.nameTrnhTrnPhngTn}>
            <b>{`Phone Number: `}</b>
            <span className={styles.janitor}>0123456789</span>
          </p>
          <p className={styles.nameTrnhTrnPhngTn}>
            <b className={styles.janitor}>Email:</b>
            <span> J97@uwc.vn</span>
          </p>
        </span>
      </div>
      <div className={styles.accountabilitySystemInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.accountabilitySystemChild1} />
      <b className={styles.jobDescription}>Job Description</b>
      <div className={styles.accountabilitySystemChild2} />
      <b className={styles.status}>Status</b>
      <div className={styles.taskBox}>
        <div className={styles.taskBoxChild} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.notDone}>
          <span className={styles.notDoneTxtContainer}>
            <p className={styles.nameTrnhTrnPhngTn}>not</p>
            <p className={styles.nameTrnhTrnPhngTn}>done</p>
          </span>
        </b>
      </div>
      <div className={styles.taskBox1}>
        <div className={styles.taskBoxInner} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.inProgress}>
          <span className={styles.notDoneTxtContainer}>
            <p className={styles.nameTrnhTrnPhngTn}>in</p>
            <p className={styles.nameTrnhTrnPhngTn}>progress</p>
          </span>
        </b>
      </div>
      <div className={styles.taskBox2}>
        <div className={styles.taskBoxChild2} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.done1}>done</b>
      </div>
      <div className={styles.taskBox3}>
        <div className={styles.taskBoxChild} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.notDone1}>
          <span className={styles.notDoneTxtContainer}>
            <p className={styles.nameTrnhTrnPhngTn}>not</p>
            <p className={styles.nameTrnhTrnPhngTn}>done</p>
          </span>
        </b>
      </div>
      <div className={styles.taskBox4}>
        <div className={styles.taskBoxChild} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.inProgress}>
          <span className={styles.notDoneTxtContainer}>
            <p className={styles.nameTrnhTrnPhngTn}>not</p>
            <p className={styles.nameTrnhTrnPhngTn}>done</p>
          </span>
        </b>
      </div>
      <div className={styles.taskBox5}>
        <div className={styles.taskBoxInner} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.inProgress}>
          <span className={styles.notDoneTxtContainer}>
            <p className={styles.nameTrnhTrnPhngTn}>in</p>
            <p className={styles.nameTrnhTrnPhngTn}>progress</p>
          </span>
        </b>
      </div>
      <div className={styles.taskBox6}>
        <div className={styles.taskBoxChild2} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.done1}>done</b>
      </div>
      <div className={styles.taskBox7}>
        <div className={styles.taskBoxChild2} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.done1}>done</b>
      </div>
      <div className={styles.taskBox8}>
        <div className={styles.taskBoxChild} />
        <div className={styles.taskBoxItem} />
        <div className={styles.thayTaBe}>Thay ta be sol</div>
        <b className={styles.inProgress}>
          <span className={styles.notDoneTxtContainer}>
            <p className={styles.nameTrnhTrnPhngTn}>not</p>
            <p className={styles.nameTrnhTrnPhngTn}>done</p>
          </span>
        </b>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/rectangle-991.svg" />
        <img className={styles.groupItem} alt="" src="/vector-21.svg" />
        <img className={styles.groupInner} alt="" src="/vector-31.svg" />
        <div className={styles.logo}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild1} />
            <div className={styles.u}>U</div>
            <div className={styles.w}>W</div>
            <div className={styles.c}>C</div>
          </div>
        </div>
        <b className={styles.accountabilitySystem1}>ACCOUNTABILITY SYSTEM</b>
      </div>
    </div>
  );
};

export default ACCOUNTABILITYSYSTEM;
