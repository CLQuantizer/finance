import type { Button as ButtonPrimitive } from "bits-ui";
import { type VariantProps, tv } from "tailwind-variants";

const textVariants = tv({
	base: "",
	variants: {
		variant: {
			secondary: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive:
				"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline:
				"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			default: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			txl: "text-3xl text-secondary-foreground hover:bg-secondary/80",
			xxl: "text-2xl text-secondary-foreground hover:bg-secondary/80",
			light: "font-light text-light text-secondary-foreground hover:bg-secondary/80",
			lg: "text-lg text-secondary-foreground hover:bg-secondary/80 my-4",
			md: "text-md text-secondary-foreground hover:bg-secondary/80 my-2",
			it: "italic text-secondary-foreground hover:bg-secondary/80",
			sm: "text-sm text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

type Variant = VariantProps<typeof textVariants>["variant"];

type TextProps = ButtonPrimitive.Props & {
	variant?: Variant;
};

export {
	type TextProps,
	textVariants,
}