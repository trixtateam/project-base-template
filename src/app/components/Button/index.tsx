import { useMemo } from "react";  

export const BUTTON_SIZE = {
    default: "default",
    large: "large"
} as const;
type ButtonSizeKeys = keyof typeof BUTTON_SIZE;

export const BUTTON_TYPES = {
    default: "default",
    outline: "outline"
} as const;
type ButtonTypeKeys = keyof typeof BUTTON_TYPES;

export const BUTTON_ROUNDED = {
    default: "default",
    full: "full"
} as const;
type ButtonRoundedKeys = keyof typeof BUTTON_ROUNDED;

export default function Button(props: { 
    children: React.ReactNode,
    onClick: () => void, 
    className?: string,
    size?: ButtonSizeKeys,
    type?: ButtonTypeKeys,
    rounded?: ButtonRoundedKeys
}) {
    const { 
        children, 
        onClick, 
        className, 
        type = BUTTON_TYPES.default,
        size = BUTTON_SIZE.default,
        rounded = BUTTON_ROUNDED.default,
        ...rest 
    } = props;

    const buttonSizeClasses = useMemo(() => {
        switch (size) {
            case BUTTON_SIZE.large:
                return "py-3";
            case BUTTON_SIZE.default:
            default:
                return "py-2";
        }
    }, [size]);

    const buttonTypeClasses = useMemo(() => {
        switch (type) {
            case BUTTON_TYPES.outline:
                return "bg-white border border-brand-teal text-brand-teal hover:bg-gray-100";
            case BUTTON_TYPES.default:
            default:
                return "bg-brand-teal text-white hover:opacity-80";
        }
    }, [type]);

    const ButtonRoundedKeys = useMemo(() => {
        switch (rounded) {
            case BUTTON_ROUNDED.full:
                return "rounded-full";
            case BUTTON_ROUNDED.default:
            default:
                return "rounded-lg";
        }
    }, [rounded]);

    return (
        <button
            className={`text-center text-sm font-medium px-5 ${buttonSizeClasses} ${buttonTypeClasses} ${ButtonRoundedKeys} ${className}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}