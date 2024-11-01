import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import PageData from "@/components/PageData";

export default function Page() {
  return (
    <main>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI - Next.js App Router example in TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
        <PageData />
      </Container>
    </main>
  );
}
