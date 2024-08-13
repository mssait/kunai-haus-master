import { Stack, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const Accordion = styled(props => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    borderRadius: 10
}));

const AccordionSummary = styled(props => (
    <MuiAccordionSummary
        expandIcon={(
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 15L12 9L18 15" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>)}
        {...props}
    />
))(({ theme }) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)'
    },
    backgroundColor: "#ECCEC0",
    color: "#000000",
    borderRadius: 10,
    "&.Mui-expanded": {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    backgroundColor: "#ECCEC0",
    color: "##1E1E1E",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
}));

export default function Faqs({ faqs }) {
    const [expanded, setExpanded] = useState(null);

    const handleChange = panel => (_, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Stack spacing={{ md: 3, xs: 2 }}>
            {faqs.map(({ question, answer }, index) => (
                <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
                    <AccordionSummary aria-controls={`${index}-content`} id={`${index}-header`}>
                        <Typography fontWeight={600} textAlign="left">{question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body1"
                            textAlign={{
                                md: "justify",
                                xs: "left"
                            }}>{answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Stack>
    )
}
