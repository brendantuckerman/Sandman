<template>
  <div class="flex flex-col justify-center items-center pt-8">
    <h3>Buttons & Inputs</h3>
    <h4>Buttons</h4>
      <div class="py-4 grid grid-cols-2 gap-16 items-center justify-center">
        <div class="flex flex-col justify-center items-center gap-4">
          <h5>Primary Round</h5>
            <InputButton 
              text="Stop"                   
            >
            </InputButton>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
          <h5>Secondary Round</h5>
            <InputButton 
              btnstyle="secondary"
              text="Start"
            >
            </InputButton>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
          <h5>Primary Pill</h5>
          <InputButton 
              text="Stop"
              btnshape="pill"
            >
            </InputButton>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
          <h5>Secondary Pill</h5>
          <InputButton 
              btnstyle="secondary"
              text="Start"
              btnshape="pill"
            >
            </InputButton>
          </div>  
                
      </div>
      <div class="flex flex-col justify-center items-center pt-8">
        
        <h4>Inputs</h4>
        <div class="py-4 grid grid-cols-2 gap-16 items-center justify-center">
          <InputText
            labelText="Text (Default)"
            isType="text"
          >
          </InputText>
          
          <InputText
            labelText="Email"
            isType="email"
          >
          </InputText>
          
          <InputText
            labelText="Password"
            isType="password"
          >
          </InputText>
          
          <InputText
            labelText="URL"
            isType="url"
          >
          </InputText>
          
          <InputText
            labelText="Telephone"
            isType="tel"
          >
          </InputText>

          <InputSearch>
          </InputSearch>
          
        </div>

      </div>

  </div>
</template>