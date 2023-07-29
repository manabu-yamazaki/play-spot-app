import { Step, StepLabel, Stepper } from "@mui/material"
import { steps } from "constants/index"
import React from "react"

type StepperLabelTemplateProps = {
  activeStep: number
  steps: string[]
}

export const StepperLabel: React.FC<StepperLabelTemplateProps> = (props) => {
  return (
    <Stepper activeStep={props.activeStep} sx={{ pt: 3, pb: 5 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
