import React from 'react';
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
import { Star } from "@mui/icons-material";

export const RatingStar = ({average , review}) => {

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
                marginLeft: "20px"
            }}
        >
            <Rating
                name="text-feedback"
                value={average}
                readOnly
                precision={0.5}
                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <Box sx={{ ml: 2 }}>{`${review} Reviews`}</Box>
        </Box>
    );
}
