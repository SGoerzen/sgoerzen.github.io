import {ReactNode} from "react";


interface ICarouselItemProps {
    children: ReactNode
}
export const CarouselItem = ({children}: ICarouselItemProps) => {
    return <>{children}</>
};

interface ICarouselProps {
    selectedIndex: number,
    children: ReactNode[]
}

export const Carousel = ({selectedIndex, children}: ICarouselProps) => {
    return <>
        {selectedIndex}
    </>
};
