const theme = {
    color: {
        blueDark: "#0b1bd9",
        blue: "#182ee5",
        yellow: "#ffc002",
        yellowLight: "#ffe000",
        white: "#FFF",
        whiteLight: "#ffffffba",
        black: "#000",
        grey: "#ccc",
        greyLight: "#00000008",
        boxShadow: "#00000061"
    },
    fontSize: {
        xxl: '50px',
        xl: '24px',
        lg: '18px',
        md: '16px',
        sm: '14px',
        xs: '12px',
    },
    fontWeight: {
        normal: 400,
        light: 100,
        bold: 900
    },
    fontFamily: {
        sansSerif: "sans-serif"
    },
    borderRadius: '4px'
}

theme.color.primaryDark = theme.color.blueDark;
theme.color.primary = theme.color.blue;
theme.color.secondary = theme.color.yellow;
theme.color.secondaryLight = theme.color.yellowLight;

export default theme;