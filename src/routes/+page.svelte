<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import {goto} from "$app/navigation";

  </script>

  <Menubar.Root class="flex justify-center">
    <Menubar.Menu>
      <Menubar.Trigger on:click={()=> goto("/swap")}>Swap</Menubar.Trigger>
    </Menubar.Menu>
    <Menubar.Menu>
      <Menubar.Trigger>Option</Menubar.Trigger>
    </Menubar.Menu>
    <Menubar.Menu>
      <Menubar.Trigger>Perp</Menubar.Trigger>
    </Menubar.Menu>
  </Menubar.Root>