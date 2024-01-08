import React from "react";
import SubTitle from "../../global/SubTitle";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useMediaQuery } from "react-responsive";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: ""
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkOutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "invalid phone number")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required")
});

const Form = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1178px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const onSubmit = values => {
    console.log(values);
  };

  const [open, setOpen] = React.useState(false);

  const [type, setType] = React.useState("error");

  const handleClick = () => {
    setOpen(true);
    console.log(type);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="m-6">
      <SubTitle title={"Form"} subtitle={"Create a New User Profile"} />
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={checkOutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) =>
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              className="gap-7"
              gridTemplateColumns={`repeat(${4}, 1fr)`}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: `span ${isSmallScreen ? 4 : 2}` }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: `span ${isSmallScreen ? 4 : 2}` }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                sx={{ textTransform: "capitalize" }}
                variant="outlined"
                onClick={() => {
                  if (!errors.address1 && !errors.address2 && !errors.contact && !errors.email && !errors.firstName && !errors.lastName) {
                     if (values.address1 !== "" && values.address2 !== "" && values.contact !== "" && values.email !== "" && values.firstName !== "" && values.lastName !== "") {
                      setType("success");
                     }
                  }else {
                    setType("error")
                  }
                  handleClick();
                }}
              >
                Create New User
              </Button>
            </Box>
          </form>}
      </Formik>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {type === "success" ? "Success To Create New User!" : "Field To Create New User!"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
