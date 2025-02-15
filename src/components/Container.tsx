import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto", className)}>{children}</div>
  );
};

export default Container;
