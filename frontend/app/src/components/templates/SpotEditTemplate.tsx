import { Container, Paper, Typography } from "@mui/material"
import { StepButtons } from "components/molecules/StepButtons"
import { StepperLabel } from "components/molecules/StepperLabel"
import { SpotConfirm } from "components/organisms/SpotConfirm"
import { SpotInput } from "components/organisms/SpotInput"
import { SpotUpload } from "components/organisms/SpotUpload"
import { steps } from "constants/index"
import React from "react"

function getStepContent(props: SpotsEditTemplateProps) {
  switch (props.activeStep) {
    case 0:
      return (
        <SpotInput
          activeStep={props.activeStep}
          name={props.name}
          url={props.url}
          summary={props.summary}
          prefectureCode={props.prefectureCode}
          minBudget={props.minBudget}
          maxBudget={props.maxBudget}
          onChangeName={props.onChangeName}
          onChangeUrl={props.onChangeUrl}
          onChangeSummary={props.onChangeSummary}
          onChangePrefectureCode={props.onChangePrefectureCode}
          onChangeMinBudget={props.onChangeMinBudget}
          onChangeMaxBudget={props.onChangeMaxBudget}
        />
      )
    case 1:
      return (
        <SpotUpload
          activeStep={props.activeStep}
          name={props.name}
          url={props.url}
          imageUrl={props.imageUrl}
          onChangeName={props.onChangeName}
          onChangeImage={props.onChangeImage}
        />
      )
    case 2:
      return (
        <SpotConfirm
          activeStep={props.activeStep}
          name={props.name}
          url={props.url}
          summary={props.summary}
          prefectureCode={props.prefectureCode}
          minBudget={props.minBudget}
          maxBudget={props.maxBudget}
        />
      )
    default:
      throw new Error("Unknown step")
  }
}

type SpotsEditTemplateProps = {
  title: string
  activeStep: number
  name: string
  url: string
  summary: string
  prefectureCode: string
  minBudget: string
  maxBudget: string
  imageUrl: string
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeUrl: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePrefectureCode: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeMinBudget: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeMaxBudget: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleNext: () => void
  handleBack: () => void
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SpotsEditTemplate: React.FC<SpotsEditTemplateProps> = (props) => {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          {props.title}
        </Typography>
        <StepperLabel
          activeStep={props.activeStep}
          steps={steps}
        ></StepperLabel>
        {props.activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(props)}
            <StepButtons
              activeStep={props.activeStep}
              handleNext={props.handleNext}
              handleBack={props.handleBack}
            ></StepButtons>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  )
}
