import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordian.css";
export default function BasicAccordion() {
  return (
    <div>
      <h1>FAQs</h1>
      <Accordion className="accordianBody">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordianBodyAnswer">
            Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordianBody">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "green" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
