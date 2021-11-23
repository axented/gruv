import { createI18n } from "vue-i18n/index";

const messages = {
  en: {
    hero: {
      title: 'We modernize the classic "Telephone" game',
      subtitle: 'Download grüv.it',
    },
    banner: {
      title: 'Play remotely',
      subtitle: 'Our purpose is to connect and inspire people so they can express themselves in a joyful and creative way.',
    },
    content: {
      title: 'How to play?',
      list: [
        {
          title: 'Lobby',
          text: 'Create a lobby and invite your friends and family. Chat with them while you wait for everyone to join the game.',
        },
        {
          title: 'Create',
          text: 'The first player on the chain records an appearance (hint: dancing, body movements, singing, telling a joke, etc.)',
        },
        {
          title: 'Continue',
          text: 'Each subsequent player watches the video created by the previous person only once, and then records himself / herself trying to mimic what he or she saw (it’s harder than it seems).',
        },
        {
          title: 'Wait',
          text: 'Once everyone has recorded their video, the platform will present them in sequence. This is called a grüv.',
        },
        {
          title: 'grüv',
          text: 'Although the objective of the game is to mimic the video as it appears on screen, this rarely happens. Notice the cumulative error as each player imprints his or her own style. Watch as hilarity ensues!',
        },
      ],
    },
    footer: {
      links: {
        eula: 'EULA',
        tandc: 'Terms and Conditions',
        privacy: 'Privacy Policy',
        rules: 'Our Rules',
      },
      contact: 'Contact us: ',
      rights: '© 2021  All rights reserved',
      download: 'Download the app',
    },
  },
  es: {
    hero: {
      title: 'Modernizamos el clásico "teléfono descompuesto"',
      subtitle: 'Descarga grüv.it',
    },
    banner: {
      title: 'Juega remotamente',
      subtitle: 'Nuestro propósito es conectar a las personas e inspirarlas para expresarse de una forma alegre y creativa.',
    },
    content: {
      title: '¿Cómo se juega?',
      list: [
        {
            title: 'Lobby',
            text: 'Crea un lobby e invita a tus amigos y familiares. Chatea con ellos mientras esperan a que todos se unan al juego.',
        },
        {
            title: 'Crea',
            text: 'El primer jugador en la cadena actúa frente a su cámara haciendo algunos pasos de baile, movimientos corporales, canto, declamación o incluso contar un chiste.',
        },
        {
            title: 'Continua',
            text: 'Cada jugador en la línea visualiza una sola vez el video creado por el participante anterior y se graba tratando de imitar lo que vio (es más difícil de lo que parece).',
        },
        {
            title: 'Espera',
            text: 'Una vez que todos han grabado su video, la plataforma los presenta en secuencia. Esto es un grüv.',
        },
        {
            title: 'grüv',
            text: 'El objetivo del juego es imitar el video tal como aparece en pantalla. Notarás cómo cada participante interpreta el reto a su estilo y el efecto acumulado de las diferencias.',
        },
      ],
    },
    footer: {
      links: {
          eula: 'EULA',
          tandc: 'Términos y Condiciones',
          privacy: 'Aviso de Privacidad',
          rules: 'Nuestras Reglas',
      },
      contact: 'Contáctanos: ',
      rights: '© 2021  Todos los derechos reservados',
      download: 'Descarga la app',
    },
  },
};

const i18n = createI18n({
  locale: navigator.language.split('-')[0] || navigator.userLanguage,
  fallbackLocale: 'en',
  messages,
});

export default i18n;