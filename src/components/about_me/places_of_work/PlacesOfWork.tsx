import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, {AccordionProps} from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
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
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
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

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function PlacesOfWork() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            <Card sx={{
                maxWidth: '100%',
                margin: 'center',
                marginTop: '1rem',
                opacity: '0.9',
                padding: '2rem',
            }}>
                <Typography variant="h4" sx={{
                    marginTop: '1rem',
                    marginInlineStart: '1rem',
                }}>Карьера</Typography>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>ВНП с лета 2023 по настоящее время</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            На предприятии с лета 2023 года занимаюсь разработкой программного
                            обеспечения. В моей роли я совмещаю функции тим-лида, аналитика, программиста и тестировщика.
                            Это означает, что я отвечаю за руководство командой, анализ требований, разработку кода и
                            тестирование программного обеспечения. Это очень увлекательная и ответственная работа, которая
                            требует широкого спектра навыков и знаний. Я горжусь тем, что могу вносить вклад в разработку
                            программного обеспечения на предприятии ВНП.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Card>

        </div>
    );
}