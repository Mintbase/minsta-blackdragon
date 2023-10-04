import { FETCH_FEED } from "@/data/queries/feed.graphl";
import useInfiniteScrollGQL from "@/hooks/useInfiniteScroll";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { MemoizedImageThumb } from "./ImageThumb";

export const FeedScroll = ({blockedNfts}: any) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const { items, loadingItems, total, error } = useInfiniteScrollGQL(
    "q_FETCH_FEED",
    isVisible,
    { query: FETCH_FEED }
  );


  if (error) {
    return <> Error.</>;
  }

  return (
    <>
      {items?.map((token: any, index: number) => {
        if (
          !!blockedNfts &&
          blockedNfts.includes(token?.metadata_id)
        ) {
          return null;
        }

        return (
          <MemoizedImageThumb
            key={token?.metadata_id}
            token={token}
            index={index}
          />
        );
      })}
      <div ref={ref}>
        {loadingItems?.map((item, i) => (
          <div
            className="md:aspect-square rounded overflow-x-hidden cursor-pointer sm:w-full md:w-72 h-72 xl:w-80 xl:h-80 relative"
            key={`${item}-${i}`}
          >
            <div className="rounded animate-pulse w-full h-full bg-gray-600 dark:bg-gray-800" />
          </div>
        ))}
      </div>
    </>
  );
};
