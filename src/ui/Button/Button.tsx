import clsx from 'clsx'
import React from 'react'
import { useFormContext } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';


interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    disabled?: boolean;
    active?: boolean;
    loaderPosition: 'left' | 'right';
    loadingText?: string;
    type?: "button" | "reset" | "submit";
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    color?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "link" | "solid" | "outline" | "light" | "ghost";
    children?: React.ReactNode;
    compact?: boolean;
    width?: "xs" | "sm" | "md" | "lg" | "half" | "full";
}


const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const formState = useFormContext();

    const {
        loading,
        disabled: _disabled,
        active,
        loaderPosition,
        type,
        leftIcon,
        rightIcon,
        loadingText,
        color,
        className,
        size = "md",
        variant = "outline",
        children,
        width = "full",
        compact,
        ...rest
    } = props

    const variantClasses = {
        outline: "btn-outline",
        solid: "btn-solid",
        ghost: "btn-ghost",
        light: "btn-light",
        link: "btn-link",
    };

    const sizes = {
        xs: "btn-xs",
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
        xl: "btn-xl",
    };

    const widthSizes = {
        xs: "w-1/6",
        sm: "w-1/5",
        md: "w-1/4",
        lg: "w-1/3",
        half: "w-1/2",
        full: "w-full",
    }

    const buttonStyle = "text-center text-gray-100 dark:text-gray-100 rounded px-4 py-2 border disabled:opacity-60 disabled:bg-gray-500 disabled:hover:bg-gray-600 border-none disabled:bg-opacity-20 hover:bg-brand-800 dark:hover:bg-brand-800 font-bold text-sm"

    const classes = clsx(
        "btn",
        sizes[size],
        buttonStyle,
        variantClasses[variant],
        widthSizes[width],
        props.disabled && "btn-disabled"
    );

    const disabled = _disabled || loading;

    return (
        <>
            <button
                ref={ref}
                disabled={disabled}
                aria-disabled={disabled}
                type={type}
                data-active={active ? "true" : undefined}
                data-color={color ? color : undefined}
                className={clsx("bg-brand-900 dark:bg-brand-900", classes, className)}
                {...rest}
            >
                <div className="flex justify-center items-center">
                    {leftIcon && !loading ? leftIcon : null}
                    {loading && (
                        <CgSpinnerTwo size={25} className={clsx("animate-spin", loadingText ? "relative" : "absolute", loadingText ? `mr-2` : "mr-0")} />
                    )}
                    {loading
                        ? loadingText || <span className="opacity-0">{children}</span>
                        : children}
                    {rightIcon && !loading ? rightIcon : null}
                </div>
            </button>
        </>
    )

})

export default Button;