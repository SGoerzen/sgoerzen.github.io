import {Box, Divider, Stack} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

interface IStarDividerProps {
    starBackgroundColor?: string
}
export const StarDivider = ({starBackgroundColor}: IStarDividerProps) => {
    const starColor = "rgba(0, 0, 0, 0.12)";

    const smallStar = <StarIcon fontSize="small" sx={{top: "10px", position: "relative", color: starColor}} />;

  return <Box className="star-divider" sx={{position: "relative", mt: 3, mb: 3}}>
      <Divider role="presentation" />
      <Stack direction="row" className="stars" sx={{
          position: "absolute",
          left: "calc(50% - 45.5px)",
          top: "-27px",
          backgroundColor: starBackgroundColor ?? "white",
          p: 1
      }}>
          {smallStar}
          <StarIcon fontSize="large" sx={{color: starColor}} />
          {smallStar}
      </Stack>
  </Box>
}
