export default function NoTaskFound({ message = "No Task Found" }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 text-gray-400">
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 mb-4 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75h4.5m-2.25 4.5h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      {/* Text */}
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
