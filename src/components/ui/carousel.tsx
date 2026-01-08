"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];

type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];

type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
};

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within <Carousel />");
  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    React.useEffect(() => {
      if (!emblaApi) return;
      setApi?.(emblaApi);
      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("reInit", onSelect);
        emblaApi.off("select", onSelect);
      };
    }, [emblaApi, onSelect, setApi]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: emblaRef,
          api: emblaApi,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "gap-4" : "gap-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "" : "",
        className,
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "absolute -left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-softSm backdrop-blur transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Anterior"
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "absolute -right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-softSm backdrop-blur transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Próximo"
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
