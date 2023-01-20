import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";




export default function VerticalLinearStepper({ activeStep, steps }) {

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper sx={{
        color : 'white',
        "& .Mui-active .MuiStepIcon-root": { color: "white" },
        "& .MuiStepIcon-root.Mui-completed": { color: "white" },
        "& .Mui-disabled .MuiStepIcon-root": { color: "white" }
      }} activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step sx={{
            color : 'white',
          }} key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
