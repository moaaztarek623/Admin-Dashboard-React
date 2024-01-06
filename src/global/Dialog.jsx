import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

const FormDialog = ({
  open,
  handleClose,
  title,
  description,
  cancel,
  accept,
  label,
  type,
  variant,
  onChange,
  value
}) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth scroll="paper">
      {title !== ""
        ? <DialogTitle>
            {title}
          </DialogTitle>
        : null}
      <DialogContent>
        <DialogContentText>
          {description}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={label}
          type={type}
          fullWidth
          variant={variant}
          onChange={onChange}
          value={value}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} name="cancel">
          {cancel}
        </Button>
        <Button onClick={handleClose} name="accept">
          {accept}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const AlertDialog = ({
  open,
  handleClose,
  title,
  description,
  cancel,
  accept
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      {title !== ""
        ? <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
        : null}
      {description !== ""
        ? <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
        : null}
      <DialogActions>
        <Button onClick={handleClose} name="cancel">
          {cancel}
        </Button>
        <Button onClick={handleClose} autoFocus name="accept" >
          {accept}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { FormDialog, AlertDialog };
