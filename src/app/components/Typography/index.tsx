export const PageTitle = (props: { 
    children: React.ReactNode,
    className?: string
}) => {
    const { 
        children,
        className
    } = props;

    return (
        <div className={`font-bold text-gray-900 text-xl mb-5 text-center ${className}`}>
            {children}
        </div>
    );
}

export const Text = (props: { 
    children: React.ReactNode,
    className?: string
}) => {
    const { 
        children,
        className
    } = props;

    return (
        <div className={`font-normal text-gray-500 text-md mb-3 text-left ${className}`}>
            {children}
        </div>
    );
}