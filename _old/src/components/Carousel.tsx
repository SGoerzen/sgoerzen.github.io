import React, {ReactNode} from "react";
import {Box, BoxProps, Container} from "@mui/material";
import {transition} from "../_helpers/mixins";

interface ICarouselItemProps extends BoxProps {
    children: ReactNode,
    width: number
}

const CarouselItem = ({children, width, ...props}: ICarouselItemProps) => {
    return <Box component="article" className="carousel-item"
        {...props}
                sx={{
                    height: "730px",
                    width: width + "px",
                    float: "left",
                    display: "inline-block",
                    p: 4,
                    ...props.sx,
                    "& section": {
                        "&:not(:first-child)": {
                            pt: 2
                        },
                        "&:not(:last-child)": {
                            pb: 2
                        },
                    }
    }}>{children}</Box>
};

interface ICarouselProps {
    selectedIndex: number,
    items: ReactNode[]
}

export const Carousel = ({selectedIndex, items}: ICarouselProps) => {
    const wrapperRef = React.createRef();
    const itemWidth = 1082;

    return <Container className="carousel" sx={{position: "relative"}}>
        <Box className="carousel-items-wrapper" sx={{width: "100%", overflow: "hidden"}} ref={wrapperRef}>
            <Box className="carousel-items" sx={{
                position: "relative",
                width: (itemWidth * items.length) + "px",
                left: (-itemWidth * selectedIndex) + "px",
                ...transition("left .5s ease-in-out")
            }}>
                {items.map((child, index) => (
                    <CarouselItem width={itemWidth} key={index}>
                        {child}
                    </CarouselItem>
                ))}
            </Box>
        </Box>
    </Container>
};
