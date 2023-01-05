import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        black:string,
        gray:string,
        red: string,
        pink: string,
        lightRed: string,
    },

    fontSize: {
        fs700: string,
        fs600: string,
        fs500: string,
        fs400: string,
        fs300: string,
        fs200: string,
        fs100: string,
    }
  }
}