export default function Loading() {
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <div className="bg-white/60 w-auto rounded-2xl h-7 animate-skeleton-body"></div>
        <div className="flex items-center justify-center gap-8 mt-10">
          <button>
            <div className="group flex-row w-44 mx-auto">
              <div className="w-44 h-44 rounded-md flex items-center justify-center transition overflow-hidden animate-skeleton-body">
                <div className="bg-white/60  w-52 h-52"></div>
              </div>
              <div className="bg-white/60 mt-4 w-auto rounded-2xl h-7 animate-skeleton-body"></div>
            </div>
          </button>
        </div>
      </div>
      <p className="text-white text-4xl"></p>
    </div>
  );
}
