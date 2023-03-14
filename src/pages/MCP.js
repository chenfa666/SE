import { Button } from "@mui/material";
import styles from "./MCP.module.css";

const MCP = () => {
  return (
    <div className={styles.mcp}>
      <div className={styles.mcpInner}>
        <iframe className={styles.frameChild} frameBorder="0" allowFullScreen />
      </div>
      <div className={styles.shapeWithTextParent}>
        <div className={styles.shapeWithText} />
        <b className={styles.mcpsStatus}>MCPS’ STATUS</b>
      </div>
      <div className={styles.shapeWithTextGroup}>
        <div className={styles.shapeWithText1} />
        <b className={styles.dailyReport}>Daily report</b>
      </div>
      <div className={styles.mcpInfo}>
        <div className={styles.mcpInfoChild} />
        <b className={styles.mcp1Name}>MCP#1: Name</b>
        <div className={styles.weightEvaluationLbsContainer}>
          <p className={styles.weightEvaluationLbs}>Weight evaluation: lbs</p>
          <p className={styles.weightEvaluationLbs}>Estimate time:</p>
          <p className={styles.weightEvaluationLbs}>Status:</p>
          <p className={styles.weightEvaluationLbs}>Priority:</p>
          <p className={styles.weightEvaluationLbs}>&nbsp;</p>
        </div>
        <Button
          className={styles.buttoncontainedText}
          sx={{ width: 59 }}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </div>
      <div className={styles.mcpInfo1}>
        <div className={styles.mcpInfoChild} />
        <b className={styles.mcp1Name}>MCP#1: Name</b>
        <div className={styles.weightEvaluationLbsContainer}>
          <p className={styles.weightEvaluationLbs}>Weight evaluation: lbs</p>
          <p className={styles.weightEvaluationLbs}>Estimate time:</p>
          <p className={styles.weightEvaluationLbs}>Status:</p>
          <p className={styles.weightEvaluationLbs}>Priority:</p>
          <p className={styles.weightEvaluationLbs}>&nbsp;</p>
        </div>
        <Button
          className={styles.buttoncontainedText}
          sx={{ width: 59 }}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </div>
      <div className={styles.mcpInfo2}>
        <div className={styles.mcpInfoChild} />
        <b className={styles.mcp1Name}>MCP#1: Name</b>
        <div className={styles.weightEvaluationLbsContainer}>
          <p className={styles.weightEvaluationLbs}>Weight evaluation: lbs</p>
          <p className={styles.weightEvaluationLbs}>Estimate time:</p>
          <p className={styles.weightEvaluationLbs}>Status:</p>
          <p className={styles.weightEvaluationLbs}>Priority:</p>
          <p className={styles.weightEvaluationLbs}>&nbsp;</p>
        </div>
        <Button
          className={styles.buttoncontainedText}
          sx={{ width: 59 }}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </div>
      <div className={styles.mcpInfo3}>
        <div className={styles.mcpInfoChild} />
        <b className={styles.mcp1Name}>MCP#1: Name</b>
        <div className={styles.weightEvaluationLbsContainer}>
          <p className={styles.weightEvaluationLbs}>Weight evaluation: lbs</p>
          <p className={styles.weightEvaluationLbs}>Estimate time:</p>
          <p className={styles.weightEvaluationLbs}>Status:</p>
          <p className={styles.weightEvaluationLbs}>Priority:</p>
          <p className={styles.weightEvaluationLbs}>&nbsp;</p>
        </div>
        <Button
          className={styles.buttoncontainedText}
          sx={{ width: 59 }}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </div>
      <div className={styles.mcpInfo4}>
        <div className={styles.mcpInfoChild} />
        <b className={styles.mcp1Name}>MCP#1: Name</b>
        <div className={styles.weightEvaluationLbsContainer}>
          <p className={styles.weightEvaluationLbs}>Weight evaluation: lbs</p>
          <p className={styles.weightEvaluationLbs}>Estimate time:</p>
          <p className={styles.weightEvaluationLbs}>Status:</p>
          <p className={styles.weightEvaluationLbs}>Priority:</p>
          <p className={styles.weightEvaluationLbs}>&nbsp;</p>
        </div>
        <Button
          className={styles.buttoncontainedText}
          sx={{ width: 59 }}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </div>
      <div className={styles.mcpInfo5}>
        <div className={styles.mcpInfoChild} />
        <b className={styles.mcp1Name}>MCP#1: Name</b>
        <div className={styles.weightEvaluationLbsContainer}>
          <p className={styles.weightEvaluationLbs}>Weight evaluation: lbs</p>
          <p className={styles.weightEvaluationLbs}>Estimate time:</p>
          <p className={styles.weightEvaluationLbs}>Status:</p>
          <p className={styles.weightEvaluationLbs}>Priority:</p>
          <p className={styles.weightEvaluationLbs}>&nbsp;</p>
        </div>
        <Button
          className={styles.buttoncontainedText}
          sx={{ width: 59 }}
          variant="contained"
          color="primary"
        >
          Button
        </Button>
      </div>
      <div className={styles.logo}>
        <div className={styles.u}>U</div>
        <div className={styles.w}>W</div>
      </div>
      <div className={styles.c}>C</div>
    </div>
  );
};

export default MCP;
