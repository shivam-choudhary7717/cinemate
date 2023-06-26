export const Button = ({children}) => {
  return (
    <button className="w-60 text-2xl font-bold text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%   p-2 rounded-lg drop-shadow-lg">
        {children}
    </button>
  );
}

