import Navbar from '@/components/Navbar';

export default function Loading() {
  return (
    <>
      <Navbar />
      <div className="relative h-[56.25vw]">
        <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
          <p className="text-transparent bg-white/60 opacity-5 rounded-md h-14 text-1xl md:text-5xl w-96 lg:text-6xl font-bold drop-shadow-xl animate-skeleton-body" />
          <p className="bg-white/60 opacity-5 text-transparent p-1 md:py-2 rounded-md h-24 text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[450px] drop-shadow-xl animate-skeleton-body" />
          <div className="flex items-center mt-3 md:mt-4 gap-3">
            <div className="bg-white/60 opacity-5 h-10 text-transparent rounded-md py-1 md:py-2 px-2 md:px-4 w-24 text-xs lg:text-lg font-semibold flex flex-row items-center animate-skeleton-body" />
            <button className="bg-white/60 opacity-5 h-10 cursor-default rounded-md py-1 md:py-2 px-2 md:px-4 w-24 text-transparent text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition animate-skeleton-body" />
          </div>
        </div>
      </div>
    </>
  );
}
