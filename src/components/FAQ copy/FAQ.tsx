import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./FAQ.css";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "22px",
    color: "black",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "white",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.527)",
    backgroundColor: "white",
    color: "black",
    fontSize: "20px",
    margin: "1vh 0",
    minHeight: 72,
    "&$expanded": {
      minHeight: 72,
      color: "rgb(231, 68, 68)",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq" className="faq-component">
      <h1>FAQ's</h1>
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowDown
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              <IoIosArrowUp
                className={expanded === "panel1" ? "minus active" : "minus"}
              />
              1. What is BitBoy Crypto Token?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              BITBOY is a decentralized community social token launched on the
              Ethereum and Binance Smart Chain networks.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowUp
                className={expanded === "panel3" ? "minus active" : "minus"}
              />
              <IoIosArrowDown
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              2. Where do I buy BITBOY?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can buy BBITBOY on Pancakeswap exchanges by searching BITBOY's{" "}
              <br />
              <a
                className="answer"
                href="https://thebittimes.com/token-BITBOY-BSC-0xe23e05edccbfde83e8f510ac4d6a3aba89789e15.html"
                target="_blank"
              >
                0xe23E05EDccBfdE83e8f510AC4D6a3abA89789e15
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowUp
                className={expanded === "panel4" ? "minus active" : "minus"}
              />
              <IoIosArrowDown
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              3. How do I add the BITBOY to trust wallet?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Information in correct order</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={
                expanded === "panel5"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowUp
                className={expanded === "panel5" ? "minus active" : "minus"}
              />
              <IoIosArrowDown
                className={expanded === "panel5" ? "arrow active" : "arrow"}
              />
              4. How do I fix "INSUFFICIENT OUTPUT AMOUNT" on Pancakeswap?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Click on the gear icon in the top right corner and make sure the
              slippage is set to at least 12%.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography
              className={
                expanded === "panel6"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <IoIosArrowUp
                className={expanded === "panel6" ? "minus active" : "minus"}
              />
              <IoIosArrowDown
                className={expanded === "panel6" ? "arrow active" : "arrow"}
              />
              5. Who owns the BITBOY contract?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              BITBOY is a token native to the Binance Smart Chain. Liquidity is
              burned and the token is decentralized. The contract is renounced,
              there is no ownership.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
