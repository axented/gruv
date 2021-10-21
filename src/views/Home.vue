<template>
  <div>
    <div class="bg-indigo-900 background-dancer">
      <div class="container py-12 relative">
        <img src=".././assets/gruv-logo.png" class="mx-auto lg:mx-0">
        <div class="text-center lg:text-left py-16 lg:py-28">
          <h1 class="text-gray-100 text-6xl font-bold leading-relaxed">Baila, ríe y diviértete<br>creando videos</h1>
          <h4 class="text-gray-100 text-large font-bold leading-relaxed">Descarga grüv.it</h4>
          <div class="flex flex-row justify-center lg:justify-start pt-4">
            <img class="pr-2 lg:pr-5 h-10" src=".././assets/appstore-badge.png">
            <img class="lg:pr-5 h-10" src=".././assets/google-play-badge.png">
          </div>
        </div>
        <img class="hidden lg:block absolute bottom-0 right-0 w-1/2" src=".././assets/girl.png">
      </div>
    </div>
    <div class="container">
      <div class="flex flex-col lg:flex-row">
        <div class="col-span-2 flex flex-row items-stretch">
          <div class="flex w-full lg:w-auto align-start"><img src=".././assets/phone_mockup_1.png" class="w-1/2 lg:w-full"></div>
          <div class="hidden lg:flex lg:w-auto align-end"><img src=".././assets/phone_mockup_2.png" class="w-1/2 lg:w-full"></div>
        </div>
        <div class="col-span-3 text-center py-12 lg:text-left lg:py-40">
          <h2 class="text-4xl font-bold">Juega Remotamente</h2>
          <p>Disfruta de la compañía de tus amigos y familiares de manera fácil y remota.</p>
        </div>
        <div class="flex w-full lg:hidden justify-end pt-4 align-end"><img src=".././assets/phone_mockup_2.png" class="w-1/2"></div>
      </div>
    </div>
    <div class="bg-offwhite">
      <div class="container py-12">
        <h2 class="text-4xl text-center lg:text-left font-bold leading-normal pb-12 lg:pb-24">Personaliza tus grüvs <br> como quieras</h2>
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col lg:w-1/2">
            <div class="flex">
              <LightningBoltIcon class="flex-none w-16 h-16 rounded-full bg-white mr-8 p-5 text-primary" width="50" height="50"/>
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Lobby</h2>
                <p>Crea un lobby e invita a tus amigos y familiares. Chatea con ellos mientras esperan a que todos se unan al juego.</p>
              </div>
            </div>
            <div class="flex mt-10">
              <CameraIcon class="flex-none w-16 h-16 rounded-full bg-white mr-8 p-5 text-primary" width="50" height="50"/>
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Crea</h2>
                <p>El primer jugador en la cadena actúa frente a su cámara haciendo algunos pasos de baile, movimientos corporales, canto, declamación o incluso contar un chiste.</p>
              </div>
            </div>
            <div class="flex mt-10">
              <img src=".././assets/logo-small.png" alt="gruv logo" class="flex-none w-16 h-16 rounded-full object-cover bg-white mr-8 p-5" />
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Continúa</h2>
                <p>Cada jugador en la línea visualiza una sola vez el video creado por el participante anterior y se graba tratando de imitar lo que vio (es más difícil de lo que parece).</p>
              </div>
            </div>
            <div class="flex mt-10">
              <ClockIcon class="flex-none w-16 h-16 rounded-full bg-white mr-8 p-5 text-primary" width="50" height="50"/>
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Espera</h2>
                <p>Una vez que todos han grabado su video, la plataforma los presenta en secuencia. Esto es un grüv.</p>
              </div>
            </div>
            <div class="flex mt-10">
              <img src=".././assets/logo-small.png" alt="gruv logo" class="flex-none w-16 h-16 rounded-full object-cover bg-white mr-8 p-5" />
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">grüv</h2>
                <p>El objetivo del juego es imitar el video tal como aparece en pantalla. Notarás cómo cada participante interpreta el reto a su estilo y el efecto acumulado de las diferencias.</p>
              </div>
            </div>
          </div>
          <div class="flex w-full lg:w-1/2 mt-12 lg:mt-0">
            <img class="d-block mx-auto" src=".././assets/phone_mockup_3.png">
          </div>
        </div>
      </div>
      <div class="bg-almostblack">
        <div class="container py-10">
          <div class="flex flex-col lg:flex-row">
            <div class="flex-grow flex flex-col justify-center lg:justify-start">
              <div class="flex justify-center lg:justify-start">
                <img src=".././assets/logo-small.png" />
              </div>
              <div class="flex flex-col lg:flex-row text-center lg:text-left pt-4">
                <p class="text-gray-100 pt-2 lg:pt-0">Políticas de privacidad</p>
                <p class="text-gray-100 pt-6 lg:pt-0 lg:pl-4">Términos y Condiciones</p>
                <p class="text-gray-100 pt-6 lg:pt-0 lg:pl-4">Ayuda</p>
              </div>
            </div>
            <div class="flex flex-col pt-10 lg:pt-0">
              <h4 class="text-gray-100 text-center lg:text-left text-large font-bold leading-relaxed">Descarga la app</h4>
              <div class="flex justify-center lg:justify-start pt-6">
                <img src=".././assets/appstore-badge.png">
              </div>
              <div class="flex justify-center lg:justify-start pt-6">
                <img src=".././assets/google-play-badge.png">
              </div>  
            </div>
          </div>
          <div class="pt-12 lg:pt-0">
            <p class="text-gray-300 text-xs">Correo de soporte: gruv.itapp@gmail.com</p>
            <p class="text-gray-300 text-xs">© 2021  Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LightningBoltIcon, CameraIcon, ClockIcon } from '@heroicons/vue/solid'

export default {
  components: { LightningBoltIcon, CameraIcon, ClockIcon }
}
</script>

<style>
.background-dancer {
  background-image: url('../assets/BG.png');
  background-size: cover;
}
</style>
