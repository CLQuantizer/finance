<script lang="ts">
    import {buttonVariants, type Props, size, variant} from "$lib/components/ui/button";
    import {cn} from "$lib/utils";

    type $$Props = Props;

    let className: $$Props["class"] = undefined;
    export { className as class };
</script>

<div class="font-bold"
     class={cn(buttonVariants({ variant, size, className }))}
        {...$$restProps}>
    <slot />
</div>
