import {
  TextField,
  Input,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import styles from "./HOME.module.css";

const HOME = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <div className={styles.loginForgottenPassword} />
        <div className={styles.poweredByHcmutContainer}>
          <span className={styles.poweredByHcmutContainer1}>
            <span className={styles.poweredBy}>{`powered by `}</span>
            <b>HCMUT</b>
          </span>
        </div>
        <div className={styles.shapeWithTextParent}>
          <div className={styles.shapeWithText} />
          <div className={styles.urbanWasteCollectionContainer}>
            <b>Urban Waste Collection</b>
            <span className={styles.poweredBy}> aid 2.0</span>
          </div>
          <div className={styles.theSolutionForContainer}>
            <p className={styles.theSolution}>
              <span className={styles.theSolution1}>
                <span className={styles.the}>{`the `}</span>
                <b>SOLUTION</b>
              </span>
            </p>
            <p className={styles.forUrbanDisposal}>for urban disposal</p>
          </div>
          <div className={styles.uParent}>
            <div className={styles.u}>U</div>
            <div className={styles.w}>W</div>
            <div className={styles.c}>C</div>
          </div>
        </div>
        <label className={styles.forgottenPassword}>Forgotten password?</label>
        <button className={styles.login} />
        <TextField
          className={styles.inputfilledWithIcon}
          sx={{ width: 309 }}
          color="primary"
          variant="filled"
          defaultValue="Input"
          type="text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Icon>visibility</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Label"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
        <div className={styles.username}>Username</div>
      </div>
      <div className={styles.homeChild} />
    </div>
  );
};

export default HOME;
