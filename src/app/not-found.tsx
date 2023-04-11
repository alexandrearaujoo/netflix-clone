export default function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-center text-white text-xl md:text-3xl">
        Page not found
      </h1>
      <a
        href="/"
        className="bg-white p-3 rounded-md hover:opacity-80 transition"
      >
        Back to Homepage
      </a>
    </div>
  );
}
