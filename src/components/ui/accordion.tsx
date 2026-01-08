"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-b border-border/80 py-1 focus-within:relative focus-within:z-10 focus-within:rounded-2xl focus-within:ring-2 focus-within:ring-ring",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-3 rounded-2xl px-3 py-3 text-left text-[15px] font-medium leading-6 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4 sm:py-4 sm:text-base sm:leading-7 data-[state=open]:bg-muted",
        className,
      )}
      {...props}
    >
      <span className="flex-1 text-pretty">{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 motion-safe:group-data-[state=open]:rotate-180" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[14px] leading-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-sm sm:leading-7"
    {...props}
  >
    <div
      className={cn(
        "break-words px-3 pb-4 pt-1 text-muted-foreground [overflow-wrap:anywhere] sm:px-4",
        className,
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
