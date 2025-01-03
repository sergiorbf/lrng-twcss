import { ComponentProps } from "react";

export type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      defaultValue="I'm a Product Designer based in Auckland, New Zealand. I specialise in UX/UI design, brand strategy, and Webflow development."
      id="bio"
      {...props}
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 " />
  );
}
