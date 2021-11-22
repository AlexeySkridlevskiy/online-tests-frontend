import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{color:'black', bgcolor:'#6CDE26', '&:hover': {bgcolor: '#5DC31F'}}}>Sign In</Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'sm'}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, enter the input details below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant = 'contained' color="error">Cancel</Button>
          <Button onClick={handleClose} variant = 'contained' color="success">Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
