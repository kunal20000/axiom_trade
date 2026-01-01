const PulseTokenSkeleton = () => {
  return (
    <div className="flex w-full border-b border-primaryStroke animate-pulse">
      <div className="pl-3 pr-3 sm:pr-4 pt-4 pb-3 flex gap-3 w-full overflow-x-hidden">
        <div className="flex flex-col gap-2">
          <div className="w-17 h-17 rounded bg-secondaryStroke" />
          <div className="w-20 h-3 rounded bg-secondaryStroke" />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-2">
            <div className="w-14 h-4 bg-secondaryStroke rounded" />
            <div className="w-32 h-4 bg-secondaryStroke rounded" />
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-6 h-3 rounded bg-secondaryStroke" />
            ))}
          </div>

          {/* Bottom stats */}
          <div className="flex justify-between">
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-10 h-4 rounded bg-secondaryStroke" />
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-24 h-4 rounded bg-secondaryStroke" />
              <div className="w-20 h-4 rounded bg-secondaryStroke" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PulseTokenSkeleton;
