import { React, useState } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import * as yup from "yup";
import { shades } from "../../theme";
const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const handelFormSubmit = (value, action) => {
    setActiveStep(activeStep + 1);
  };
  async function makePayment(values) {}
  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: " 20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel> 
        </Step>
      </Stepper>
    </Box>
  );
};

export default Checkout;
