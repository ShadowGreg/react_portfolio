import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import avatar from './img/1.jpg';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            sx={{
                maxWidth: '100%',
                margin: 'center',
                opacity: '0.9',
                padding: '2rem',
            }}
        >
            <CardHeader
                avatar={
                    <div>
                        <Avatar
                            alt="Greg Osetrov"
                            src={avatar} // Update the src attribute here
                            sx={{
                                width: 75,
                                height: 75,
                                boxShadow: 6 }}
                        />
                    </div>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Осетров Григорий Александрович"
                subheader="Август 21, 1985"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Обо мне
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Я начал заниматься программированием в 2021 году.
                    С тех пор я увлеченно изучаю и исследую C#, .Net, JS и технологии, окружающие эти языки.
                    Мне нравится решать задачи и создавать приложения, которые делают людей более счастливыми и
                    свободными от рутины.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    В программировании меня особенно привлекает возможность немедленно видеть результат своей работы.
                    Когда я пишу код и запускаю программу, я могу сразу увидеть, как она работает и какие изменения
                    вносятся.
                    Это дает мне ощущение достижения и мотивирует меня продолжать развиваться в этой области.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Обо мне подробней:</Typography>
                    <Typography paragraph>
                        Мой общий стаж работы более 16 лет и в 2021 году я решил
                        реализовать своё желание и стать программистом.
                    </Typography>
                    <Typography paragraph>
                        Я получил образование в Политехническом университете ВолГТУ на кафедре "Процессы и аппараты
                        промышленных предприятий".
                        Во время учебы я старался автоматизировать все решаемые мной задачи, используя специальные
                        программы или писал небольшие скрипты и макросы.
                        Это помогало мне ускорять процессы и повышать эффективность работы.
                    </Typography>
                    <Typography paragraph>
                        Я все еще нахожусь в процессе обучения, но предложил своему текущему работодателю заниматься
                        автоматизацией инженерных расчетов. Теперь я работаю по специальности программиста и занимаюсь
                        разработкой программного обеспечения для автоматизации этих расчетов. Это очень интересная и
                        перспективная область, и я рад, что могу применять свои навыки программирования в инженерной
                        сфере.
                    </Typography>
                    <Typography>
                        Если вас заинтересовала моя кандидатура то пишите мне в телеграм
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}