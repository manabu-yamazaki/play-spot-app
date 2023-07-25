import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Box, Container } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"

export const Loading: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Suspense fallback={<CircularProgress color="secondary" />}>
          <Outlet />
        </Suspense>
      </Box>
    </Container>
  )
}
