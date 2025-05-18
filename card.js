export const Card = ({ children, className }) => <div className={`bg-white rounded-2xl p-4 shadow ${className}`}>{children}</div>;
export const CardContent = ({ children }) => <div>{children}</div>;