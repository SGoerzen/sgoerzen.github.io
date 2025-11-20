export function borderRadius(value: string) {
    return {
        borderRadius: value,
        WebkitBorderRadius: value,
        MozBorderRadius: value,
    };
}

export function transition(value: string) {
    return {
        transition: value,
        OTransition: value,
        WebkitTransition: value,
        MozTransition: value,
    };
}
