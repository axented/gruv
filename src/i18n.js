import { createI18n } from 'vue-i18n';

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
          text: "Each subsequent player watches the video created by the previous person only once, and then records himself / herself trying to mimic what he or she saw (it's harder than it seems).",
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
    rules: {
      title: 'grüv it rules',
      purpose: 'Our purpose is to connect and inspire people so they can express themselves in a joyful and creative way. Our rules are created to ensure everyone can safely participate in our app.',
      enjoy: 'Please join us only if you are willing to comply with our rules. If not, grüv.it is not the place for you.',
      short: 'In short:',
      kind: 'Be Kind. Be Respectful.',
      anyone: 'Anyone can report violations of our rules, whether they have a grüv.it account or not. To report your concern for review, please send us an email to: gruv.itapp@gmail. We will act promptly by reviewing the alert, removing content, locking the account, suspending or even blocking users to our app, depending on the severity of the violation.',
      here: 'Here is our set of rules:',
      list: [
        "We have zero tolerance for any form of child sexual exploitation or abuse.",
        "You may not share, produce or distribute any kind of adult content or videos depicting violent sexual conduct, pornography or nudity.",
        "You may not engage in the targeted harassment of someone, or incite others to do so.",
        "You may not threaten violence against an individual or a group.",
        "You may not promote violence against, threaten, or harass other people on the basis of race, ethnicity, national origin, sexual orientation, gender, gender identity, religious affiliation, age or disability.",
        "You may not promote or encourage suicide or self-harm.",
        "You may not threaten or promote terrorism.",
        "You may not publish other people's private information without their express authorization.",
        "You may not violate others' intellectual property rights, including copyright and trademark.",
        "You may not use our service for any kind of unlawful purpose."
      ]
    }
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
    rules: {
      title: 'grüv it rules',
      purpose: 'Nuestro propósito es conectar a las personas e inspirarlas para expresarse de una forma alegre y creativa.',
      enjoy: 'Creamos estas reglas para que todos puedan participar de forma segura en nuestra comunidad.',
      short: 'En breve:',
      kind: 'Sé amable. Ten respeto.',
      anyone: 'Cualquiera puede reportar violaciones a nuestras reglas, aún si no se tiene una cuenta de grüv.it. Para solicitar una revisión, por favor envíanos un correo electrónico a: gruv.itapp@gmail.com. Actuaremos oportunamente revisando la alerta, y dependiendo de la severidad de la falta, responderemos removiendo contenido, suspendiendo usuarios y/o bloqueando temporal o permanentemente usuarios.',
      here: 'Éstas son nuestras reglas:',
      list: [ 
        "Cero tolerancia a cualquier tipo de explotación sexual o abuso infantil.",
        "No deberás compartir, producir ni distribuir ningún tipo de contenido destinado a público adulto, ni pornográfico o que muestre el cuerpo desnudo, ni parcial, ni totalmente.",
        "No toleramos comportamientos de acoso de ningún tipo.",
        "No permitimos las amenazas ni violencia contra ningún individuo o grupo.",
        "No deberás promover violencia, amenazas o acoso dirigido a personas en base a su raza, etnicidad, origen nacional, orientación sexual, género, identidad de género, afiliación religiosa, edad o discapacidad.",
        "No deberás promover el suicidio ni daño personal.",
        "No permitimos la promoción de actividades terroristas.",
        "No deberás publicar ni compartir información privada de otros sin su autorización expresa.",
        "Deberás respetar los derechos de propiedad intelectual, incluyendo el copyright y las marcas registradas.",
        "No deberás utilizar nuestro producto con fines ilícitos."
      ]
    }
  },
};

const i18n = createI18n({
  locale: navigator.language.split('-')[0] || navigator.userLanguage,
  fallbackLocale: 'en',
  messages,
});

export default i18n;