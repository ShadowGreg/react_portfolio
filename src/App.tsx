import React, { useEffect } from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material';
import SendCV from './components/sendCV/SendCV';
import ContactIcons from './components/header/ContactIcons';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes // Import Routes component
} from 'react-router-dom';
import AboutMe from './components/about_me/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import { Footer } from "./components/footer/Footer";

function App() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleCVTabClick = () => {
        setValue(0);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Code to refresh or update data goes here
            console.log('Auto-refreshing...');
        }, 5 * 60 * 1000); // 5 minutes in milliseconds

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Router>
            <body></body>
            <div>
                <nav>
                    <Box
                        sx={{
                            position: 'fixed',
                            top: { xs: 5, sm: 10, md: 15 }, // Adjust the top position for different screen sizes
                            left: 0,
                            right: 0,
                            zIndex: 9999,
                            maxWidth: { xs: 320, sm: 360, md: 330 }, // Adjust the max width for different screen sizes
                            bgcolor: alpha('#1c2331', 0.8),
                            margin: 'auto',
                            justifyContent: 'right',
                            borderRadius: 1,
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            indicatorColor='primary'
                            textColor='primary'
                        >
                            <Tab
                                label="Обо мне"
                                component={Link} // Use Link component
                                to="/aboutme" // Link to aboutme
                            />
                            <Tab
                                label="Резюме"
                                onClick={handleCVTabClick}
                                className="tabs"
                            />
                            <Tab
                                label="Мои работы"
                                component={Link} // Use Link component
                                to="/portfolio" // Link to portfolio
                            />
                        </Tabs>
                    </Box>
                </nav>
                <body>
                <div className="overlay"></div>
                {/* Добавьте прямоугольник с классом overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    className="background-video"
                    id="bgvideo"
                >
                    <source
                        src="https://static.videezy.com/system/resources/previews/000/054/807/original/digital-background.mp4"
                        type="video/mp4"
                    ></source>
                </video>
                </body>
                <div>
                    {value === 0 && <SendCV open={open} handleClose={handleClose} />}
                    {/* Add other components for other tabs */}
                </div>
                <div>
                    <Footer />
                </div>

                <ContactIcons />
                <Routes>
                    {/* Use Routes component */}
                    <Route path="/aboutme" element={<AboutMe />} />
                    {/* Use element prop */}
                    <Route path="/" element={<AboutMe />} />
                    {/* Set /aboutme as the default page */}
                    <Route path="/portfolio" element={<Portfolio />} />
                    {/* Set /aboutme as the default page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;