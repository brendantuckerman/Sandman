<template>
<div class="absolute left-0 pb-8 px-8 pt-2 max-h-screen overflow-scroll rounded border-2 border-retro-green dark:border-retro-yellow bg-[rgba(255,255,255,0.1)] ">
    <div class="sidebar title">
        <h5>Contents</h5>
    </div>
        <ul class="flex flex-col gap-2 pt-4 text-sm sidebar-list">
            <li><a href="/stylesheet/color">Colour</a></li>
            <li><a href="/stylesheet/typography">Typography</a></li>
            <li><a href="/stylesheet/inputs">Buttons and Inputs</a></li>
            <li><a href="/stylesheet/widgets">Widgets</a></li>
            <li><a href="/stylesheet/color">Colour</a></li>
            <li><a href="/stylesheet/typography">Typography</a></li>
            <li><a href="/stylesheet/inputs">Buttons and Inputs</a></li>
            <li><a href="/stylesheet/widgets">Widgets</a></li>
            <li><a href="/stylesheet/color">Colour</a></li>
            <li><a href="/stylesheet/typography">Typography</a></li>
            <li><a href="/stylesheet/inputs">Buttons and Inputs</a></li>
            <li><a href="/stylesheet/widgets">Widgets</a></li>
        </ul>
        <slot />
</div>
</template>

<style scoped>

.sidebar-list{

    li{
        @apply py-4 rounded;
    }

    li:hover a {
        @apply bg-retro-blue text-retro-yellow; 
    }
}


</style>