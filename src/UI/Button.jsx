export default function Button({ children, onClick, className = '', ...props }) {
    return (
      <button
        className={`w-[183px] h-[68px] rounded-[8px] text-whit focus:outline-none focus:ring-2 focus:ring-black-400 bg-[#33084a] hover:bg-[#3e0258] text-white ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
  