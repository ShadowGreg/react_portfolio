import { Typography } from '@mui/material';
import * as React from 'react';

export function Footer() {
    return (
        <span
            style={{
                opacity: 0.2,
                backgroundColor: '#45508d',
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 0, // Add this line to position the element at the bottom
                textAlign: 'center',
                fontSize: '2rem',
                zIndex: 9999,
            }}
        >
            <Typography
                color="white"
                alignItems={'center'}
            >
                Разработано с помощью React Осетровым Григорием &copy; 2023
            </Typography>
        </span>
    );
}