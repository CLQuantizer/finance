<script lang="ts">
    import {cn} from "$lib/utils";
    import {type TextProps, textVariants} from "$lib/components/ui/text/index";


    type $$Props = TextProps;
    export let variant: $$Props["variant"] = "md";

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<div class={cn(textVariants({ variant, className }))}
     {...$$restProps}>
    <slot />
</div>
