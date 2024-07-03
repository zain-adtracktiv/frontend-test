"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ ...props }, ref) => {
  return <RadioGroupPrimitive.Root {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "group border-2 transition rounded-2xl p-5 flex gap-3 bg-gray-200 border-gray-400 relative data-[state=checked]:border-indigo-500 data-[state=checked]:bg-indigo-100 hover:border-indigo-500 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <div className="rounded-full size-8 border-2 border-gray-300 bg-white group-data-[state=checked]:bg-indigo-500 group-data-[state=checked]:border-0 flex items-center justify-center">
        <RadioGroupPrimitive.Indicator className="size-4 bg-white rounded-full" />
      </div>
      {children}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
