const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default Loading;
