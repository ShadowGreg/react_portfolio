import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import portfolioData from './portfolioData.json';

export default function Portfolio() {
    const [expandedItems, setExpandedItems] = React.useState<number[]>([]);

    const handleItemClick = (index: number) => {
        setExpandedItems((prevExpandedItems) => {
            const newExpandedItems = [...prevExpandedItems];
            if (newExpandedItems.includes(index)) {
                newExpandedItems.splice(newExpandedItems.indexOf(index), 1);
            } else {
                newExpandedItems.push(index);
            }
            return newExpandedItems;
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <List
                sx={{
                    margin: '5rem',
                    maxWidth: '80%',
                    bgcolor: 'background.paper',
                    opacity: '0.9',
                    padding: '2rem',
                }}
            >
                {portfolioData.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem
                            alignItems="flex-start"
                            button
                            onClick={() => handleItemClick(index)}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt={item.title}
                                    src={item.avatar}
                                    style={{ backgroundColor: item.avatarColor }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <div>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {item.title}
                                            </Typography>
                                            {' — ' + item.description}
                                        </div>
                                        {expandedItems.includes(index) && (
                                            <div>
                                                <Typography
                                                    sx={{ display: 'inline-list-item' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Технологии
                                                </Typography>
                                                {' — ' + item.technologies}
                                            </div>
                                        )}
                                        <div>
                                            <Typography
                                                sx={{ display: 'inline-list-item' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                Ссылка
                                            </Typography>
                                            <a href={item.link}>_переход на {item.linkText}</a>
                                        </div>
                                    </React.Fragment>
                                }
                            />
                            {expandedItems.includes(index) ? (
                                <ExpandLessIcon />
                            ) : (
                                <ExpandMoreIcon />
                            )}
                        </ListItem>
                        {expandedItems.includes(index) && (
                            <React.Fragment>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary="Дополнительная информация"
                                        secondary={item.additionalInfo}
                                    />
                                </ListItem>
                            </React.Fragment>
                        )}
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
}