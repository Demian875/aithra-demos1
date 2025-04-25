export function Card({ children }) {
  return <div className='bg-gray-900 rounded-lg shadow-md overflow-hidden'>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}