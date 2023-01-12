import { DefaultTheme } from "styled-components";


export const Theme: DefaultTheme = {
    colors: {
        black: "240, 5%, 11%",
        gray: "225, 4%, 72%",
        red: "348, 53%, 28%",
        pink: "342, 92%, 60%",
        lightRed: "342, 93%, 40%",
    },
    fontSize: {
        fs700: "clamp(4.5rem, 1.5rem + 17vw, 18rem);",
        fs650: "clamp(4.5rem, 1.4524rem + 15.2381vw, 5.5rem);",
        fs600: "clamp(4.5rem, 2.9259rem + 11vw, 14rem);",
        fs550: "clamp(4rem, 0.9524rem + 15.2381vw, 5rem);",
        fs500: "clamp(3.8rem, 3.7407rem + 0.2963vw, 4rem);",
        fs400: "clamp(2rem, 1.7037rem + 1.4815vw, 3rem);",
        fs300: "2rem",
        fs200: "1.5rem",
        fs100: "1rem",
    }
}