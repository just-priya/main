export const Button = ({ children }: any) => {
    return (
        <button className="py-2 px-6 rounded-sm border bg-blue-600 text-white">
            {children}
        </button>
    )
}

export default Button