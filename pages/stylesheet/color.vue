<template>
    <div class="color pb-4 flex flex-col gap-6 items-center justify-center">
            <h3>Color</h3>
            <h4>Retro</h4>
            <div class=" hidden w-full color-box h-72 overflow-hidden sm:grid grid-cols-5 gap-2">
                <div class="bg-retro-red h-full -skew-y-[20deg]"></div>
                <div class="bg-retro-white h-full -skew-y-[20deg] border-dashed border-[1px] border-grey-lightest dark:border-none"></div>
                <div class="bg-retro-blue h-full -skew-y-[20deg]"></div>
                <div class="bg-retro-green h-full -skew-y-[20deg]"></div>
                <div class="bg-retro-yellow h-full -skew-y-[20deg]"></div>
            </div>
            <div class="py-4 grid sm:grid-cols-5 grid-cols-1 items-center gap-4 justify-center">
                <div class="bg-retro-red h-28 w-full sm:w-28  border-2 border-grey-darkest rounded">Red (#e07a5f)</div>
                <div class="bg-retro-white h-28 w-28  border-2 border-grey-darkest rounded">White (#f4f1de)</div>
                <div class="bg-retro-blue h-28 w-28  border-2 border-grey-darkest rounded text-retro-white">Blue (#3d405b)</div>
                <div class="bg-retro-green h-28 w-28  border-2 border-grey-darkest rounded">Green (#81b29a)</div>
                <div class="bg-retro-yellow h-28 w-28  border-2 border-grey-darkest rounded">Yellow (#f2cc8f)</div>
            </div>
            <h4>Grey</h4>
            <div class="py-4 grid sm:grid-cols-5 grid-cols-1 items-center gap-4 justify-center">
                <div class="bg-grey-darkest text-retro-white h-28 w-28  border-2 border-grey-darkest rounded">grey-darkest</div>
                <div class="bg-grey-dark text-retro-white h-28 w-28  border-2 border-grey-darkest rounded">grey-dark</div>
                <div class="bg-grey-default text-retro-white h-28 w-28  border-2 border-grey-darkest rounded">grey-default</div>
                <div class="bg-grey-light text-grey-darkest h-28 w-28  border-2 border-grey-darkest rounded">grey-light</div>
                <div class="bg-grey-lightest text-grey-darkest h-28 w-28  border-2 border-grey-darkest rounded">grey-lightest</div>
            </div>
        </div>

</template>