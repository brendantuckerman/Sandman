<template>
  <div>
    <h3>Buttons & Inputs</h3>
      <div class="py-4 grid grid-cols-2 gap-16 items-center justify-center">
        <div>
          <h5>Primary Round</h5>
            <ButtonAction 
              text="Stop"                   
            >
            </ButtonAction>
        </div>
        <div>
          <h5>Secondary Round</h5>
            <ButtonAction 
              btnstyle="secondary"
              text="Start"
            >
            </ButtonAction>
        </div>
        <div>
          <h5>Primary Pill</h5>
          <ButtonAction 
              text="Stop"
              btnshape="pill"
            >
            </ButtonAction>
        </div>
        <div>
          <h5>Secondary Pill</h5>
          <ButtonAction 
              btnstyle="secondary"
              text="Start"
              btnshape="pill"
            >
            </ButtonAction>
        </div>
              
                
              
                    
                
      </div>
  </div>
</template>