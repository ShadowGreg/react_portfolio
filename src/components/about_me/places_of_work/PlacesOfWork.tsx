import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import data from './data.json'; // Import the JSON data

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function PlacesOfWork() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        newExpanded: boolean
    ) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Card
                sx={{
                    maxWidth: '100%',
                    margin: 'center',
                    marginTop: '1rem',
                    opacity: '0.9',
                    padding: '2rem',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        marginTop: '1rem',
                        marginInlineStart: '1rem',
                    }}
                >
                    Карьера
                </Typography>
                {data.map((item: any, index: number) => (
                    <Accordion
                        key={index}
                        expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)}
                    >
                        <AccordionSummary
                            aria-controls={`panel${index + 1}d-content`}
                            id={`panel${index + 1}d-header`}
                        >
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{item.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Card>
        </div>
    );
}