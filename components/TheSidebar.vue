<script setup lang="ts">
import { ref } from 'vue';

const isSidebarOpen = ref(false);


function toggleSidebar() {
 
  isSidebarOpen.value = !isSidebarOpen.value;

}

</script>


<template>
  
    <div class="nav-left hidden-xs">
      <div class="button absolute left-0 top-40 z-10 w-auto my-0 mx-auto cursor-pointer"  
      :class="{'active stick-it' : isSidebarOpen }"
      id="btn" 
      @click="toggleSidebar" 
      @keyup.esc="toggleSidebar" 
      tabindex="0"
      >
      <div class="bar top"></div>
      <div class="bar middle"></div>
      <div class="bar bottom"></div>
    </div>
  </div>


  <aside>
    <div class="sidebar" :class="{ 'active move-to-left': isSidebarOpen }">
      <font-awesome-icon 
      :icon="['fas', 'xmark']" 
      class="fa cursor-pointer absolute right-4 top-4"
      @click="toggleSidebar" 
      @keyup.esc="toggleSidebar" 
      tabindex="0"
      
      />
      <!-- Your sidebar content goes here -->
      <ul class="sidebar-list">
        <li class="sidebar-item"><a href="/stylesheet/color" class="sidebar-anchor">Colour</a></li>
        <li class="sidebar-item"><a href="/stylesheet/typography" class="sidebar-anchor" >Typography</a></li>
        <li class="sidebar-item" ><a href="/stylesheet/inputs" class="sidebar-anchor">Buttons and Inputs</a></li>
        <li class="sidebar-item"><a href="/stylesheet/widgets"class="sidebar-anchor">Widgets</a></li>
        
        <slot />
      </ul>
    </div>
  </aside>
</template>




<style scoped>

/* Not scoped */

aside {
  z-index: 2;
  position: relative;
  height: 100%;
  -webkit-transition: transform .7s ease-in-out;
  -moz-transition: transform .7s ease-in-out;
  -ms-transition: transform .7s ease-in-out;
  -o-transition: transform .7s ease-in-out;
  transition: transform .7s ease-in-out;
}



.sidebar {
  @apply bg-grey-light dark:bg-grey-dark w-[300px] fixed left-[-300px] top-0 h-full mt-44 z-10;
  transition: transform .7s ease-in-out;
}

.stick-it{
  position: fixed;
}

.bar{
  @apply block h-2 w-16 my-2 mx-auto;
}

.bar.top{
    @apply bg-retro-red;
  }
.bar.middle{
    @apply bg-retro-green;
  }

.bar.bottom{
  @apply bg-retro-blue;
}

.button {
   -webkit-transition: all .7s ease;
  -moz-transition: all .7s ease;
  -ms-transition: all .7s ease;
  -o-transition: all .7s ease;
  transition: all .7s ease;
  display: inline-block;
}

.nav-left {
  position: fixed;
  left: 40px;
  top: 20px;
}

.nav-left.visible-xs {
  z-index: 3;
}

.hidden-xs {
  display: none;
}

.middle {
  margin: 0 auto;
}

.bar {
  -webkit-transition: all .7s ease;
  -moz-transition: all .7s ease;
  -ms-transition: all .7s ease;
  -o-transition: all .7s ease;
  transition: all .7s ease;
}

.nav-left.visible-xs .active .bar {
  background-color: #FFF;
  -webkit-transition: all .7s ease;
  -moz-transition: all .7s ease;
  -ms-transition: all .7s ease;
  -o-transition: all .7s ease;
  transition: all .7s ease;
}

.button.active .top {
  -webkit-transform: translateY(15px) rotateZ(45deg);
  -moz-transform: translateY(15px) rotateZ(45deg);
  -ms-transform: translateY(15px) rotateZ(45deg);
  -o-transform: translateY(15px) rotateZ(45deg);
  transform: translateY(15px) rotateZ(45deg);
}

.button.active .bottom {
  -webkit-transform: translateY(-15px) rotateZ(-45deg);
  -moz-transform: translateY(-15px) rotateZ(-45deg);
  -ms-transform: translateY(-15px) rotateZ(-45deg);
  -o-transform: translateY(-15px) rotateZ(-45deg);
  transform: translateY(-15px) rotateZ(-45deg);
}

.button.active .middle {
  width: 0;
}

.move-to-left {
  -webkit-transform: translateX(400px);
  -moz-transform: translateX(400px);
  -ms-transform: translateX(400px);
  -o-transform: translateX(400px);
  transform: translateX(400px);
}

nav {
  padding-top: 30px;
}

.sidebar-list {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  margin-top: 150px;
  text-align: center;
}

.sidebar-item {
  
  margin: 30px 0;
  opacity: 0;
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
  transform: translateY(20px);
}

.sidebar-item:first-child {
  -webkit-transition: all .7s .2s ease-in-out;
  -moz-transition: all .7s .2s ease-in-out;
  -ms-transition: all .7s .2s ease-in-out;
  -o-transition: all .7s .2s ease-in-out;
  transition: all .7s .2s ease-in-out;
}

.sidebar-item:nth-child(2) {
  -webkit-transition: all .7s .4s ease-in-out;
  -moz-transition: all .7s .4s ease-in-out;
  -ms-transition: all .7s .4s ease-in-out;
  -o-transition: all .7s .4s ease-in-out;
  transition: all .7s .4s ease-in-out;
}

.sidebar-item:nth-child(3) {
  -webkit-transition: all .7s .6s ease-in-out;
  -moz-transition: all .7s .6s ease-in-out;
  -ms-transition: all .7s .6s ease-in-out;
  -o-transition: all .7s .6s ease-in-out;
  transition: all .7s .6s ease-in-out;
}

.sidebar-item:last-child {
  -webkit-transition: all .7s .8s ease-in-out;
  -moz-transition: all .7s .8s ease-in-out;
  -ms-transition: all .7s .8s ease-in-out;
  -o-transition: all .7s .8s ease-in-out;
  transition: all .7s .6s ease-in-out;
}

.sidebar-item.active {
  opacity: 1;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  -o-transform: translateY(0px);
  transform: translateY(0px);
}

.sidebar-anchor {
  color: #FFF;
  text-decoration: none;
  font-size: 1.8em;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 7px;
}

.sidebar-anchor:before {
  content: "";
  width: 0;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #FFF;
  -webkit-transition: all .7s ease-in-out;
  -moz-transition: all .7s ease-in-out;
  -ms-transition: all .7s ease-in-out;
  -o-transition: all .7s ease-in-out;
  transition: all .7s ease-in-out;
}

.sidebar-anchor:hover:before {
  width: 100%;
}


.fa {
  font-size: 2rem;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

.fa:hover {
  color: #FFF;
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  transform: scale(1.3);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -ms-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

@media (min-width: 480px) {
  .nav-list {
    display: block;
  }
}

@media (min-width: 768px) {
  .nav-left {
    position: absolute;
  }
  .hidden-xs {
    display: block;
  }
  .visible-xs {
    display: none;
  }
}

</style>