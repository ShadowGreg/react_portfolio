import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TelegramIcon from '../../img/icons8-telegram-50.png';
import GitHubIcon from '../../img/icons8-github-50.png';
import GitLabIcon from '../../img/icons8-gitlab-64.png';
import HarborIcon from '../../img/habrahabr-flower.png';
import './ContactIcons.css'; // Import the CSS file for animations

const ContactIcons: React.FC = () => {
    return (
        <Box sx={{
            position: 'fixed',
            top: '90px',
            left: '20px'
        }}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Stack direction="column" spacing={2}>
                    <a href="https://t.me/GregOsetrov">
                        <Avatar alt="telegram" src={TelegramIcon} className="animated-icon"
                                sx={{width: 40, height: 40}}/>
                    </a>
                    <a href="https://github.com/ShadowGreg">
                        <Avatar alt="github"
                                src={GitHubIcon}
                                className="animated-icon"
                                sx={{width: 40, height: 40}}
                        />
                    </a>
                    <a href="https://gitlab.com/ShadowGreg">
                        <Avatar alt="gitlab" src={GitLabIcon} className="animated-icon"
                                sx={{width: 35, height: 35}}/>
                    </a>
                    <a href="https://habr.com/ru/users/ShadowGreg/publications/articles/" >
                        <Avatar
                            alt="harbor"
                            src={HarborIcon}
                            className="animated-icon"
                            sx={{width: 35, height: 35}}
                        />
                    </a>
                </Stack>
            </Box>
        </Box>
    );
};

export default ContactIcons;