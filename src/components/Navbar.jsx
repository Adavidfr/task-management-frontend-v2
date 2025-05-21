export default function Navbar() {
  return (
    <section className="flex items-start justify-between w-full p-4 bg-white px-4 rounded-xl">
      {/* Contenedor de la barra de búsqueda */}
      <div className="relative flex-grow max-w-xs">
        {/* Ícono de lupa */}
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>

        {/* Input con padding left para que no tape la lupa */}
        <input
          type="text"
          placeholder="search"
          className="w-full px-10 py-2 rounded-lg border border-gray-300 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
      </div>

      {/* Avatar círculo */}
      <div className="ml-4 w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-lg select-none">
        D
      </div>
    </section>
  );
}
