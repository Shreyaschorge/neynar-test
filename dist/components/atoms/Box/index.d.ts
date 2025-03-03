import { HTMLAttributes } from 'react';
interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    alignItems?: "center" | "flex-start" | "flex-end";
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    flexGrow?: number;
    flexShrink?: number;
    spacing?: string;
    spacingTop?: string;
    spacingRight?: string;
    spacingBottom?: string;
    spacingLeft?: string;
    spacingVertical?: string;
    spacingHorizontal?: string;
}
declare const Box: import('@pigment-css/react').StyledComponent<import('@pigment-css/react/build/theme-Ju3okpk7').S<import('react').DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BoxProps>> & object;
export declare const VBox: import('@pigment-css/react').StyledComponent<import('@pigment-css/react/build/theme-Ju3okpk7').S<Omit<{
    ref?: import('react').LegacyRef<HTMLDivElement> | undefined;
    key?: import('react').Key | null | undefined;
} & BoxProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('react').RefObject<HTMLDivElement> | null | undefined;
}, object>> & import('@pigment-css/react').StyledComponent<import('@pigment-css/react/build/theme-Ju3okpk7').S<import('react').DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BoxProps>> & object;
export declare const HBox: import('@pigment-css/react').StyledComponent<import('@pigment-css/react/build/theme-Ju3okpk7').S<Omit<{
    ref?: import('react').LegacyRef<HTMLDivElement> | undefined;
    key?: import('react').Key | null | undefined;
} & BoxProps, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('react').RefObject<HTMLDivElement> | null | undefined;
}, object>> & import('@pigment-css/react').StyledComponent<import('@pigment-css/react/build/theme-Ju3okpk7').S<import('react').DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BoxProps>> & object;
export default Box;
