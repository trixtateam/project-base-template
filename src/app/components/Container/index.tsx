export default function Container(props: { 
    children: React.ReactNode,
    className?: string
}) {
    const { 
        children,
        className
    } = props;

    return (
        <div className={`bg-white p-4 rounded-xl ${className}`}>
            {children}
        </div>
    );
}