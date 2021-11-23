<template>
  <div>
    <div class="bg-indigo-900 background-dancer">
      <div class="container py-12 relative">
        <img src=".././assets/gruv-logo.png" class="mx-auto lg:mx-0">
        <div class="text-center lg:text-left py-16 lg:py-28 md:w-1/2">
          <h1 class="text-gray-100 text-6xl font-bold leading-relaxed"> {{ $t('hero.title') }} </h1>
          <h4 class="text-gray-100 text-large font-bold leading-relaxed"> {{ $t('hero.subtitle') }} </h4>
          <div class="flex flex-row justify-center lg:justify-start pt-4">
            <a href="https://apps.apple.com/us/app/gr%C3%BCv-it/id1585058785" target="_blank">
              <img class="pr-2 lg:pr-5 h-10" src=".././assets/appstore-badge.png">
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.lusibus.app" target="_blank">
            <img class="lg:pr-5 h-10" src=".././assets/google-play-badge.png">
            </a>
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
          <h2 class="text-4xl font-bold">{{ $t('banner.title') }}</h2>
          <p>{{ $t('banner.subtitle') }}</p>
        </div>
        <div class="flex w-full lg:hidden justify-end pt-4 align-end"><img src=".././assets/phone_mockup_2.png" class="w-1/2"></div>
      </div>
    </div>
    <div class="bg-offwhite">
      <div class="container py-12">
        <h2 class="text-4xl text-center lg:text-left font-bold leading-normal pb-12 lg:pb-24">{{ $t('content.title') }}</h2>
        <div class="flex flex-col lg:flex-row">
          <div class="flex flex-col lg:w-1/2">
            <div
              v-for="(item, i) in howToPlay"
              :key="i"
              class="flex flex-row"
              :class="{ 'mt-10': i>0 }"
            >
              <component v-if="item" :is="item" class="flex-none w-16 h-16 rounded-full bg-white mr-8 p-5 text-primary" width="50" height="50"/>
              <img v-else src=".././assets/logo-small.png" alt="gruv logo" class="flex-none w-16 h-16 rounded-full object-cover bg-white mr-8 p-5" />
              <div class="min-w-0 relative flex-auto">
                <h2 class="text-lg font-semibold text-black mb-0.5">{{ $t(`content.list[${i}].title`) }}</h2>
                <p>{{ $t(`content.list[${i}].text`) }}</p>
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
                <p class="text-gray-100 pt-6 lg:pt-0"><router-link to="/EULA">{{ $t('footer.links.eula') }}</router-link></p>
                <p class="text-gray-100 pt-6 lg:pt-0 lg:pl-4"><router-link to="/terms">{{ $t('footer.links.tandc') }}</router-link></p>
                <p class="text-gray-100 pt-2 lg:pt-0 lg:pl-4"><router-link to="/privacy">{{ $t('footer.links.privacy') }}</router-link></p>
                <p class="text-gray-100 pt-6 lg:pt-0 lg:pl-4"><router-link to="/rules">{{ $t('footer.links.rules') }}</router-link></p>
              </div>
            </div>
            <div class="flex flex-col pt-10 lg:pt-0">
              <h4 class="text-gray-100 text-center lg:text-left text-large font-bold leading-relaxed">{{ $t('footer.download') }}</h4>
              <div class="flex justify-center lg:justify-start pt-6">
                <a href="https://apps.apple.com/us/app/gr%C3%BCv-it/id1585058785" target="_blank">
                  <img class="pr-2 lg:pr-5 h-10" src=".././assets/appstore-badge.png">
                </a>
              </div>
              <div class="flex justify-center lg:justify-start pt-6">
              <a href="https://play.google.com/store/apps/details?id=com.lusibus.app" target="_blank">
                <img class="lg:pr-5 h-10" src=".././assets/google-play-badge.png">
              </a>
              </div>  
            </div>
          </div>
          <div class="pt-12 lg:pt-0">
            <p class="text-gray-300 text-xs">{{ $t('footer.contact') }}gruv.itapp@gmail.com</p>
            <p class="text-gray-300 text-xs">{{ $t('footer.rights') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LightningBoltIcon, CameraIcon, ClockIcon } from '@heroicons/vue/solid'

export default {
  components: { LightningBoltIcon, CameraIcon, ClockIcon },
  data: () => ({
    howToPlay: [
      "LightningBoltIcon",
      "CameraIcon",
      "",
      "ClockIcon",
      "",
    ],
  }),
}
</script>

<style>
.background-dancer {
  background-image: url('../assets/BG.png');
  background-size: cover;
}
</style>
