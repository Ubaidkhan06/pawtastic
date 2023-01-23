import React, { useContext } from "react";
import { petContext } from "../Signupthird";
import theme from "../../styles/theme";
import { Box, Typography, Link, Card } from "@mui/material";
import CustomTextField from "../../Components/CustomTextField";

const ConfirmPage = () => {

  const data = useContext(petContext);

  console.log(data?.image)

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.neutral.lightPink,
        }}
        padding={"3rem 7rem 1rem 7rem"}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.neutral.navy}
            paddingBottom={"2rem"}
          >
            Okay, {data?.name}'s all set! We can’t wait to meet her.
          </Typography>
        </Box>
        {/* pet detail card */}

        <Box>
          <Box>
            <img src={data?.image} />
          </Box>
        </Box>
        {/* pet detail card */}

      </Box>
    </>
  );
};

export default ConfirmPage;
