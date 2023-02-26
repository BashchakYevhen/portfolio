import React from 'react'
import second from '@mui/icons-material/'

declare module '@mui/material/styles' {
    interface Palette {
        light: Palette['primary'];
    }

    interface PaletteOptions {
        light?: PaletteOptions['primary'];
    }
    interface PaletteColor {
        backGround?: string;
        white?: string;
        secondary?: string;
        additional?: string;
        textColor?: string;
    }
    interface PaletteColorOptions {
        backGround?: string;
        white?: string;
        secondary?: string;
        additional?: string;
        textColor?: string;
    }
}

declare module '@mui/icons-material' {
    interface IconPropsColor {

    }

}