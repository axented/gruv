<template>
  <div>
    <div class="bg-indigo-900 background-dancer">
      <div class="container mx-auto py-12 relative">
        <img src="./assets/gruv-logo.png">
        <div class="py-28">
          <h1 class="text-gray-100 text-6xl font-bold leading-relaxed">Baila, ríe y diviértete<br>creando videos</h1>
          <h4 class="text-gray-100 text-large font-bold leading-relaxed">Descarga grüv.it</h4>
          <div class="flex flex-row pt-4">
            <img class="pr-5 h-10" src="./assets/appstore-badge.png">
            <img class="pr-5 h-10" src="./assets/google-play-badge.png">
          </div>
        </div>
        <img class="absolute bottom-0 right-0 w-1/2" src="./assets/girl.png">
      </div>
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-5">
        <div class="col-span-2 flex flex-row items-stretch">
          <div class="flex align-start"><img src="./assets/phone_mockup_1.png"></div>
          <div class="flex align-end"><img src="./assets/phone_mockup_2.png"></div>
        </div>
        <div class="col-span-3 py-40">
          <h2 class="text-4xl font-bold">Juega Remotamente</h2>
          <p>Disfruta de la compañía de tus amigos y familiares de manera fácil y remota.</p>
        </div>
      </div>
    </div>
    <div class="bg-offwhite">
      <div class="container mx-auto py-12">
        <h2 class="text-4xl font-bold leading-normal pb-24">Personaliza tus grüvs <br> como quieras</h2>
        <div class="grid grid-cols-2 gap-5">
          <div class="space-y-10 col-span-1">
            <div class="flex">
              <LightningBoltIcon class="flex-none w-16 h-16 rounded-full bg-white mr-8 p-5 text-primary" width="50" height="50"/>
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Lobby</h2>
                <p>Crea un lobby e invita a tus amigos y familiares. Chatea con ellos mientras esperan a que todos se unan al juego.</p>
              </div>
            </div>
            <div class="flex">
              <CameraIcon class="flex-none w-16 h-16 rounded-full bg-white mr-8 p-5 text-primary" width="50" height="50"/>
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Crea</h2>
                <p>El primer jugador en la cadena actúa frente a su cámara haciendo algunos pasos de baile, movimientos corporales, canto, declamación o incluso contar un chiste.</p>
              </div>
            </div>
            <div class="flex">
              <img src="./assets/logo-small.png" alt="gruv logo" class="flex-none w-16 h-16 rounded-full object-cover bg-white mr-8 p-5" />
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Continúa</h2>
                <p>Cada jugador en la línea visualiza una sola vez el video creado por el participante anterior y se graba tratando de imitar lo que vio (es más difícil de lo que parece).</p>
              </div>
            </div>
            <div class="flex">
              <ClockIcon class="flex-none w-16 h-16 rounded-full bg-white mr-8 p-5 text-primary" width="50" height="50"/>
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">Espera</h2>
                <p>Una vez que todos han grabado su video, la plataforma los presenta en secuencia. Esto es un grüv.</p>
              </div>
            </div>
            <div class="flex">
              <img src="./assets/logo-small.png" alt="gruv logo" class="flex-none w-16 h-16 rounded-full object-cover bg-white mr-8 p-5" />
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">grüv</h2>
                <p>El objetivo del juego es imitar el video tal como aparece en pantalla. Notarás cómo cada participante interpreta el reto a su estilo y el efecto acumulado de las diferencias.</p>
              </div>
            </div>
          </div>
          <div class="col-span-1">
            <img class="d-block mx-auto" src="./assets/phone_mockup_3.png">
          </div>
        </div>
      </div>
      <div class="bg-almostblack">
        <div class="container mx-auto py-10">
          <div class="flex flex-row">
            <div class="flex-grow">
              <img src="./assets/logo-small.png">
              <div class="flex flex-row space-x-4 pt-4">
                <p class="text-gray-100">Políticas de privacidad</p>
                <p class="text-gray-100">Términos y Condiciones</p>
                <p class="text-gray-100">Ayuda</p>
              </div>
            </div>
            <div class="flex-none space-y-5">
              <h4 class="text-gray-100 text-large font-bold leading-relaxed">Descarga la app</h4>
              <img src="./assets/appstore-badge.png">
              <img src="./assets/google-play-badge.png">
            </div>
          </div>
          <div>
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
  background-image: url('assets/BG.png');
  background-size: cover;
}
</style>
