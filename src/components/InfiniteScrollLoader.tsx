
import React from 'react';

interface InfiniteScrollLoaderProps {
  loaderRef: React.Ref<HTMLDivElement>;
  loading: boolean;
  hasMore: boolean;
}

export const InfiniteScrollLoader: React.FC<InfiniteScrollLoaderProps> = ({ loaderRef, loading, hasMore }) => {
  return (
    <div ref={loaderRef} className="h-32 flex flex-col items-center justify-center mt-12 gap-4">
      {loading && (
        <div className="flex items-center gap-2 text-[#C7F246]">
          <div className="w-2 h-2 rounded-full bg-[#C7F246] animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 rounded-full bg-[#C7F246] animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 rounded-full bg-[#C7F246] animate-bounce"></div>
        </div>
      )}
      {!hasMore && !loading && (
        <p className="text-gray-600 text-sm font-mono uppercase tracking-widest">End of content</p>
      )}
    </div>
  );
};
