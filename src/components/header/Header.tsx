import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {alpha} from "@mui/material";

export default function Header() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            position: 'fixed',
            top: 5,
            left: 0,
            right: 0,
            zIndex: 9999,
            maxWidth: { xs: 320, sm: 420 },
            bgcolor: alpha('#acc0fa', 0.8),
            margin: 'auto',
            justifyContent: 'right',
            borderRadius: 5,
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="CV" />
                <Tab label="AboutMe"/>
                <Tab label="Portfolio" />
                <Tab label="Home" />
            </Tabs>
        </Box>
    );
}