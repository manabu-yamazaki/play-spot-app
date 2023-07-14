import { Box, Button } from "@mui/material"
import { steps } from "constants/index"
import React from "react"

type StepButtonsProps = {
  activeStep: number
  handleNext: () => void
  handleBack: () => void
}

export const StepButtons: React.FC<StepButtonsProps> = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      {props.activeStep !== 0 && (
        <Button onClick={props.handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
      )}
      <Button
        variant="contained"
        onClick={props.handleNext}
        sx={{ mt: 3, ml: 1 }}
      >
        {props.activeStep === steps.length - 1 ? "Update" : "Next"}
      </Button>
    </Box>
  )
}
