export default function Loading() {
  return (
    <>
      <div className="pt-36">
        <div className="px-4 md:px-12 mt-4 space-y-8">
          <div className="grid grid-cols-auto-fit justify-items-center gap-2">
            {[1, 2, 3, 4].map((card) => (
              <div
                key={card}
                className="group bg-white/60 opacity-5 w-80 relative rounded-md h-44 animate-skeleton-body"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
