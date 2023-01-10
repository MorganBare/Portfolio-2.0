import { DefaultTheme } from "styled-components"

export const Theme: DefaultTheme = {
    colors: {
        black: "240, 5%, 11%",
        gray: "240, 1%, 31%",
        red: "348, 53%, 28%",
        pink: "348, 53%, 28%",
        lightRed: "342, 93%, 40%",
    },
    fontSize: {
        fs700: "clamp(4.5rem, 1.2rem + 16vw, 18rem);",
        fs600: "clamp(5rem, 2.9259rem + 11vw, 14rem);",
        fs500: "clamp(3.8rem, 3.7407rem + 0.2963vw, 4rem);",
        fs400: "clamp(2rem, 1.7037rem + 1.4815vw, 3rem);",
        fs300: "2rem",
        fs200: "1.5rem",
        fs100: "1rem",
    }
}