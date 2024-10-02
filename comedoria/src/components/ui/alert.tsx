import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-[860px] h-[48px] mx-auto rounded-lg p-4 flex items-center justify-center [&>svg~*]:pl-7 [&>svg+*]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  message?: string;
  isVisible: boolean;
  onClose: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, message, isVisible, onClose, ...props }, ref) => {
    if (!isVisible) return null;

    return (
      <div className="fixed inset-x-0 top-4 z-50 flex items-center justify-center pointer-events-none">
        <div
          ref={ref}
          role="alert"
          className={cn(
            alertVariants({ variant }),
            "bg-[#AED970] pointer-events-auto shadow-md overflow-hidden",
            className
          )}
          {...props}
        >
          {message && (
            <p className="text-black text-center truncate max-w-[calc(100%-3rem)]">
              {message}
            </p>
          )}
          <button
            onClick={onClose}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex justify-center items-center text-black/50 hover:text-black"
            aria-label="Close alert"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  )
);

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };