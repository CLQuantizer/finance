<script lang="ts">

    import type {TextProps} from "svelte-radix/Text.svelte";
    import {textVariants} from "$lib/components/ui/text/index";
    import {cn} from "$lib/utils";

    type $$Props = TextProps;

    let className: $$Props["class"] = undefined;
    export let variant: $$Props["variant"] = "xxl";
    export { className as class };
</script>

<div class={cn(textVariants({ variant, className }))}
     {...$$restProps}>
    <slot />
</div>