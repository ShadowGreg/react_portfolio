import * as React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface SendCVProps {
    open: boolean;
    handleClose: () => void;
}

export default function SendCV({ open, handleClose }: SendCVProps) {
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setEmailError(false);
    };

    const handleSubscribe = () => {
        if (!validateEmail(email)) {
            setEmailError(true);
            return;
        }

        // Validation passed, send email to the database
        sendEmailToDatabase(email);
        // Validation passed, return the file "CV.pdf"
        window.location.href = 'https://disk.yandex.ru/i/E3b0DFZ7dzF-EQ';
    };

    const validateEmail = (email: string) => {
        // Email validation logic
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const sendEmailToDatabase = (email: string) => {
        // Simulating sending email to the database
        // Replace this with your actual database integration code
        console.log(`Sending email ${email} to the database`);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Получить Резюме</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div >
                       <strong>
                           Прошу вас оставить свою почту что бы я мог с вами связаться
                       </strong>
                    </div>
                    <div>
                        После корректно введённого почтового адреса откроется скачивание резюме
                    </div>
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={handleEmailChange}
                    error={emailError}
                    helperText={emailError ? 'Please enter a valid email address' : ''}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Выход</Button>
                <Button onClick={handleSubscribe}>Получить резюме</Button>
            </DialogActions>
        </Dialog>
    );
}