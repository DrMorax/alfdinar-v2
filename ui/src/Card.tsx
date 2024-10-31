import { Button, Typography } from "@mui/material";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4">Welcome to My MUI + Vite App</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {count}
      </Button>
    </div>
  );
}

export default Card;
