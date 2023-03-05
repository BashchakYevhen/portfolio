import React from 'react'

declare module '@mui/material/styles' {
    interface Palette {
        color: Palette['primary'];
    }


    interface PaletteOptions {
        color?: PaletteOptions['primary'];
    }
    interface PaletteColor {
        backGround?: string;
        primary?: string;
        secondary?: string;
        additional?: string;
        textColor?: string;
        active?: string;
    }
    interface PaletteColorOptions {
        backGround?: string;
        primary?: string;
        secondary?: string;
        additional?: string;
        textColor?: string;
        active?: string;
    }
}

declare module '@mui/icons-material' {
    interface IconPropsColor {
    }

}