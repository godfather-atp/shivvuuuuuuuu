/**
 * =========================================================================
 * 💌 APOLOGY & LOVE LETTER CONFIGURATION
 * =========================================================================
 * You can easily customize every single piece of text, her name, your personal
 * notes, buttons, and music settings right here.
 * Everything will update across the website instantly!
 */

export const letterConfig = {
  // --- Personal Information ---
  recipientName: "Shivuu", // Her name or nickname
  senderName: "Yours Always", // Your name or signature
  date: "A letter for today & always",

  // --- Background Music Configuration ---
  music: {
    // If you have a custom mp3 file, put it in the /public folder (e.g. '/romantic-lofi.mp3')
    // and set customAudioUrl: '/romantic-lofi.mp3'.
    // If left null, a built-in soft romantic music box melody synthesized via Web Audio will play!
    customAudioUrl: null, 
    songTitle: "Soft Romantic Lullaby",
    defaultPlaying: false, // Per prompt: OFF by default
  },

  // --- PAGE 1: The Opening Letter ---
  page1: {
    badge: " 💌",
    greeting: "Heyyy Mi Amor! 💗",
    paragraphs: [
      "tere liye kuch hai",
    ],
    buttonText: "NEXT💌",
    hintText: "Click the envelope or button to open 🌸",
  },

  // --- PAGE 2: My Feelings ---
  page2: {
    badge: "Page 2 of our letter",
    title: "From My Heart...",
    paragraphs: [
      " shivuuu sorrry re n see kal je pn bollo you know me te mean nhi krt hoto from last 2monts.",
      "me kadhich tuza past bdl khi nhi mhtl nothing ani kdhich mhnr pn nhi trust me call kr lvkr plzzzzzzzz ",
      "i know aple bhandn hote pn tu aisa mat bol ki apl future nhi overthink me pn krto baccha me pn nhi zoplo ahe tu sarv ahe mzzz sorrry nnnn",
      "You're important to me. tula me kdhich hurt nhi kru shkt i love you from my heart",
      "ani tuza shivy mz future ch pn nhi vichar kru shkt ani tu je mhtl bhadn zale ki efforts nhi dist i will tell you why trust me call vr",
    ],
    buttonText: "There's More  💗",
  },

  // --- PAGE 3: One Last Thing ---
  page3: {
    badge: "Page 3 of our letter",
    title: "One Last Thing",
    leadIn: "Before you go, I just want you to know...",
    paragraphs: [ "tuhi mera rab tuhi mera rasool hai",
                  "aur tuhi mera jahaan  ye jaan jao",
                  "kab tak roothongi merii jaannnn",
                  "chod sab kuch chalo abb maan jao",
      
    ],
    conclusion: "I'm genuinely sorry. ❤️",
    buttonText: "One Last Question...",
  },

  // --- PAGE 4: The Big Question ---
  page4: {
    badge: "The Question",
    heading: "Are You Feeling Better Now, My Love? 🥺💗",
    subheading: "I really want to know how you feel. Be honest with me.",
    yesButtonText: "YES 💗",
    noButtonText: "NO 🥺",
    helpNote: "Take your time, there is no wrong answer 💕",
  },

  // --- PAGE 5 (WHEN SHE CLICKS "YES") ---
  yesExperience: {
    badge: "A Sweet Smile 💖",
    heading: "YAYYYYY! 🥹💗",
    subheading: "That makes me really happy!",
    introText: "Here's a little something I wrote just for you...",
    revealButtonText: "Read  💌",
    
    // The handwritten personalized note revealed on click:
    personalNote: {
      title: "🌸",
      content: [
        "tuzi shappt srv work kru apn ass nakooo mhnuuu plzzz",
        "i will explain you everything aur iske baad nhi mhnych apl future nhi tithe yeun marel me",
      ],
      signOff: "With all my love and endless warmth,",
      signature: " Your aandu babes 💕",
    },
  },

  // --- PAGE 5 (WHEN SHE CLICKS "NO") ---
  noExperience: {
    badge: "Gentle Understanding 🕊️",
    heading: " my love. 🥺",
    subheading: "I understand that you're still upset, and I respect how you feel.",
    paragraphs: [
      "trust me baccha apn call vr bolu as soon as posible",
    ],
    
  },

  // --- Footer / Common ---
  replayButtonText: "Read Letter From Beginning ↺",
};
