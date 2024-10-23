import '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        addChartDialog: true;
        white: true;
        red: true;
        rose: true;
    }
}