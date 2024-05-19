<template>
    <h2>Stylesheet</h2>
    <div class="typography flex flex-col gap-4 py-4">
         <h3>Typography</h3>
         <h1>H1</h1>
         <h2>H2</h2>
         <h3>H3</h3>
         <h4>H4</h4>
         <h5>H5</h5>
        
        
        <h3> &lt;p&gt;</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis massa vel velit egestas, vitae pharetra velit ultricies. Vivamus sed mi non dolor maximus efficitur. Ut vitae tortor quis mi finibus condimentum dictum sed eros. Nunc commodo dolor et nulla facilisis, dapibus imperdiet lorem ullamcorper. Etiam sit amet dolor elementum leo cursus posuere vitae blandit mauris. Donec scelerisque volutpat nisl, nec ultrices est consequat sit amet. Phasellus felis tortor, malesuada nec venenatis tempor, condimentum vestibulum ex. </p>
        <h3> &lt;a&gt;</h3>
        <a href="/stylesheet">This is an anchor</a>

        <div class="color pb-4 flex flex-col gap-6">
            <h3>Color</h3>
            <h4>Retro</h4>
            <div class="py-4 grid grid-cols-5 items-center">
                <div class="bg-retro-white h-28 w-28  border-2 border-grey-darkest rounded">White (#f4f1de)</div>
                <div class="bg-retro-red h-28 w-28  border-2 border-grey-darkest rounded">Red (#e07a5f)</div>
                <div class="bg-retro-blue h-28 w-28  border-2 border-grey-darkest rounded text-retro-white">Blue (#3d405b)</div>
                <div class="bg-retro-green h-28 w-28  border-2 border-grey-darkest rounded">Green (#81b29a)</div>
                <div class="bg-retro-yellow h-28 w-28  border-2 border-grey-darkest rounded">Yellow (#f2cc8f)</div>
            </div>
            <h4>Grey</h4>
            <div class="py-4 grid grid-cols-5 items-center">
                <div class="bg-grey-darkest text-retro-white h-28 w-28  border-2 border-grey-darkest rounded">grey-darkest</div>
                <div class="bg-grey-dark text-retro-white h-28 w-28  border-2 border-grey-darkest rounded">grey-dark</div>
                <div class="bg-grey-default text-retro-white h-28 w-28  border-2 border-grey-darkest rounded">grey-default</div>
                <div class="bg-grey-light text-grey-darkest h-28 w-28  border-2 border-grey-darkest rounded">grey-light</div>
                <div class="bg-grey-lightest text-grey-darkest h-28 w-28  border-2 border-grey-darkest rounded">grey-lightest</div>
            </div>
        </div>

        <h3>Buttons</h3>
       
        <div class="py-4 grid grid-cols-2 gap-4 items-center">
            <ButtonAction 
                text="Primary"
            >
            </ButtonAction>
                
            <ButtonAction 
                border-color="secondary"
                text="Secondary"
                >
            </ButtonAction>
        </div>
        
    </div>
</template>