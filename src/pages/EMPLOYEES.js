import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EMPLOYEES.module.css";

const EMPLOYEES = () => {
  const navigate = useNavigate();

  const onEMPLOYEESContainerClick = useCallback(() => {
    navigate("/accountability-system");
  }, [navigate]);

  return (
    <div className={styles.employees} onClick={onEMPLOYEESContainerClick}>
      <img className={styles.employeesChild} alt="" src="/rectangle-99.svg" />
      <div className={styles.vectorParent}>
        <img className={styles.groupChild} alt="" src="/vector-2.svg" />
        <img className={styles.groupItem} alt="" src="/vector-3.svg" />
        <div className={styles.logo}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupInner} />
            <div className={styles.u}>U</div>
            <div className={styles.w}>W</div>
            <div className={styles.c}>C</div>
          </div>
        </div>
        <b className={styles.currentEmployees}>CURRENT EMPLOYEES</b>
        <div className={styles.theSolutionForContainer}>
          <span className={styles.theSolution}>
            <span className={styles.the}>{`the `}</span>
            <b>{`SOLUTION `}</b>
          </span>
          <span className={styles.forUrbanDisposal}>for urban disposal</span>
        </div>
      </div>
      <img className={styles.employeesItem} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.employeesInner} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.employeesChild1} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.employeesChild2} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.employeesChild3} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.employeesChild4} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.employeesChild5} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.employeesChild6} alt="" src="/ellipse-2@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.employeesChild7} />
      <div className={styles.employeesChild8} />
      <div className={styles.employeesChild9} />
      <div className={styles.employeesChild10} />
      <div className={styles.employeesChild11} />
      <div className={styles.employeesChild12} />
      <div className={styles.employeesChild13} />
      <div className={styles.employeesChild14} />
      <b className={styles.khoa}>Khoa</b>
      <b className={styles.khi}>Khôi</b>
      <b className={styles.ng}>Đăng</b>
      <b className={styles.th}>Thư</b>
      <b className={styles.bnh}>Bình</b>
      <b className={styles.tm}>Tâm</b>
      <b className={styles.ti}>Tài</b>
      <b className={styles.quang}>Quang</b>
      <b className={styles.cng}>Cường</b>
    </div>
  );
};

export default EMPLOYEES;
