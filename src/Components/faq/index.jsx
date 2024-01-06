import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import SubTitle from "../../global/SubTitle";
import { faker } from '@faker-js/faker';

const generateRandomData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const question = faker.lorem.sentence();
    const answer = faker.lorem.paragraphs();
    data.push({ question, answer });
  }
  return data;
};

const FAQ = () => {
  const data = generateRandomData(12);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box className="m-6">
      <SubTitle title={"FAQ"} subtitle={"Frequently Asked Questions Page"} />
      <Box className="pb-6">
      {data.map((item, index) => (
        <Accordion key={index} defaultExpanded={index === 0 ? true : false} sx={{
          backgroundColor: colors.primary[400],
          boxShadow: "none !important"
        }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.blueAccent[500]} variant="h5">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </Box>
    </Box>
  );
};

export default FAQ;
