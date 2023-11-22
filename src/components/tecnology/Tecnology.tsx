import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import { Card } from '@mui/material';

import technologyData from './technologyData.json';

export default function Tecnology() {
    let names = technologyData.map((item) => item.Name);
    return (
        <Card
            sx={{
                maxWidth: '100%',
                margin: 'center',
                marginTop: '1rem',
                opacity: '0.9',
                padding: '2rem',
            }}
        >
            <Stack sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{
                    marginTop: '1rem',
                    marginInlineStart: '1rem'
                }}>
                    Технологии
                </Typography>
                <div>
                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                        justifyContent="center"
                    >
                        {names.map((technology: string, index: number) => (
                            <Button key={index} variant="outlined">{technology}</Button>
                        ))}
                    </Stack>
                </div>
            </Stack>
        </Card>
    );
}