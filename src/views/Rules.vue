<template>
  <div>
    <div class="bg-primary py-10">
      <div class="container">
        <img src=".././assets/gruv-logo.png" class="mx-auto lg:mx-0" />
      </div>
    </div>
    <div class="terms container py-10">
      <h1 class="leading-loose font-bold text-4xl">{{ $t("rules.title") }}</h1>

      <p>{{ $t("rules.purpose") }}</p>
      <br />
      <p>{{ $t("rules.enjoy") }}</p>
      <br />
      <p>
        {{ $t("rules.short") }} <strong>{{ $t("rules.kind") }}</strong>
      </p>
      <br />
      <p>
        {{ $t("rules.anyone") }}
        <a
          class="underline text-primary"
          href="mailto:gruv.itapp@gmail.com"
          target="_blank"
          >gruv.itapp@gmail</a
        >. {{ $t("rules.anyone2") }}
      </p>
      <br />
      <p>{{ $t("rules.here") }}</p>

      <ul
        class="list-disc list-inside"
        v-for="index in $t('rules.list').length"
        :key="index"
      >
        <li>{{ $t(`rules.list[${index - 1}]`) }}</li>
      </ul>
      <button class="button bg-primary text-white rounded-full p-2 mt-5">
        <router-link to="/">{{ $t("content.gobackbtn") }}</router-link>
      </button>
    </div>
  </div>
</template>
