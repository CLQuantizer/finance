<script>
    import "../app.pcss";
    import * as Menubar from "$lib/components/ui/menubar/index";
    import {Button} from "$lib/components/ui/button/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import {goto} from "$app/navigation";
    import {page} from "$app/stores";
    import {pop, popStore} from "./store";

    import * as Alert from "$lib/components/ui/alert";
    import {COMING_SOON, PRODUCTS} from "./common";

    $:url = "/"+$page.url.toString().split("/").pop();

</script>

<div class="p-2 overflow-x-hidden overflow-y-scroll">
    <div class="flex justify-center mb-2">
        <Menubar.Root class="flex justify-center">
            <Menubar.Menu>
                <Menubar.Trigger on:click={()=> goto("/")}>Home</Menubar.Trigger>
            </Menubar.Menu>
            <Menubar.Menu>
                <Menubar.Trigger>Regulations</Menubar.Trigger>
                <DropdownMenu.Content class="w-56">
                    <DropdownMenu.Item on:click={()=>pop("CET coming soon", COMING_SOON)}>CET</DropdownMenu.Item>
                </DropdownMenu.Content>
            </Menubar.Menu>
            <Menubar.Menu>
                <Menubar.Trigger>Products</Menubar.Trigger>
                <DropdownMenu.Content class="w-56">
                    <DropdownMenu.Item on:click={()=>goto(PRODUCTS+"/swap")}>swap</DropdownMenu.Item>
                </DropdownMenu.Content>
            </Menubar.Menu>
        </Menubar.Root>
    </div>
    <slot></slot>
    <div class="flex justify-center mt-12 mb-24">
        <Menubar.Root class="flex justify-center">
            <Menubar.Menu>
                <Menubar.Trigger on:click={()=> goto(url)}>To Top</Menubar.Trigger>
            </Menubar.Menu>
        </Menubar.Root>
    </div>
</div>


{#if $popStore.isPop}
    <div class="absolute left-2 top-2 flex">
        <Alert.Root>
            <Alert.Title>{$popStore.title}</Alert.Title>
            <Alert.Description>
                {$popStore.msg}
            </Alert.Description>
        </Alert.Root>
    </div>
{/if}
