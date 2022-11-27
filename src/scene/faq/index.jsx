import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { themeTokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = themeTokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequent Asked Questions" />
      {/* QUESTION 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a random text.</Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a random text.</Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a random text.</Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a random text.</Typography>
        </AccordionDetails>
      </Accordion>
      {/* QUESTION 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is a random text.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default Faq;
