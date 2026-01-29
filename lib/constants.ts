import React from "react";
import AccordionDemo from "@/renders/component/AccordionDemo";
import ButtonDemo from "@/renders/component/ButtonDemo";
import AlertDialogDemo from "@/renders/component/AlertDialogDemo";

const components: ComponentsMap = {
  Accordion: {
    title: "Accordion",
    excerpt:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    sections: {
      preview: {
        render: AccordionDemo,
        code: `
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/registry/new-york/ui/accordion"

const AccordionDemo = () => {
    return (
        <>
            <Accordion type="single" collapsible className="w-full max-w-lg">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-hero'>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default AccordionDemo
        `,
      },
      installation: {
        cli: {
          pnpm: "pnpm dlx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          npm: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          yarn: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          bun: "bunx --bun shadcn@latest add https://neobrutalism.dev/r/accordion.json",
        },
        code: `
"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import * as React from "react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-base overflow-hidden border-2 border-foreground border-b-2 shadow-neo",
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between text-left text-base text-main-foreground border-foreground focus-visible:ring-[3px] bg-main p-4 font-heading transition-all [&[data-state=open]>svg]:rotate-180 data-[state=open]:rounded-b-none data-[state=open]:border-b-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="pointer-events-none size-5 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden rounded-b-base bg-secondary-background text-sm font-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("p-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

        `,
      },
      usage: {
        code: [
          `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`,

          `<Accordion type="single" collapsible className="w-full max-w-xl">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
        ],
      },
      example: {
        default: {
          render: AccordionDemo,
          code: `
import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return <Button>Button</Button>
}
        `,
        },
      },
    },
  },

   AlertDialog: {
    title: "Alert Dialog",
    excerpt:
      "A modal dialog that interrupts the user with important content and expects a response.",
    sections: {
      preview: {
        render: AlertDialogDemo,
        code: `
import { Button } from "@/registry/new-york/ui/button"

export default function ButtonDemo() {
  return <Button>Button</Button>
}
        `,
      },
      installation: {
        cli: {
          pnpm: "pnpm dlx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          npm: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          yarn: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          bun: "bunx --bun shadcn@latest add https://neobrutalism.dev/r/accordion.json",
        },
        code: `
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-hero border-2 border-foreground shadow-neo",
        noShadow: "text-main-foreground bg-main border-2 border-border",
        neutral:
          "bg-secondary-background text-foreground border-2 border-border shadow-neo",
        reverse:
          "text-main-foreground bg-main border-2 border-border shadow-neo",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

        `,
      },
      usage: {
        code: [
          `import { Button } from '@/components/ui/button'
`,

          `<Button>Default</Button>
`,
        ],
      },
      example: {
        default: {
          render: AlertDialogDemo,
          code: `
import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return <Button>Button</Button>
}
        `,
        },
      },
    },
  },

  Button: {
    title: "Button",
    excerpt:
      "Displays a button or a component that looks like a button.",
    sections: {
      preview: {
        render: ButtonDemo,
        code: `
import { Button } from "@/registry/new-york/ui/button"

export default function ButtonDemo() {
  return <Button>Button</Button>
}
        `,
      },
      installation: {
        cli: {
          pnpm: "pnpm dlx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          npm: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          yarn: "npx shadcn@latest add https://neobrutalism.dev/r/accordion.json",
          bun: "bunx --bun shadcn@latest add https://neobrutalism.dev/r/accordion.json",
        },
        code: `
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-hero border-2 border-foreground shadow-neo",
        noShadow: "text-main-foreground bg-main border-2 border-border",
        neutral:
          "bg-secondary-background text-foreground border-2 border-border shadow-neo",
        reverse:
          "text-main-foreground bg-main border-2 border-border shadow-neo",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

        `,
      },
      usage: {
        code: [
          `import { Button } from '@/components/ui/button'
`,

          `<Button>Default</Button>
`,
        ],
      },
      example: {
        default: {
          render: ButtonDemo,
          code: `
import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return <Button>Button</Button>
}
        `,
        },
      },
    },
  },


 


};

const componentsList = Object.keys(components)
export { components, componentsList };



