import type { Lesson, LanguageCode } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish · Unit 1 · Getting Started ────────────────────────────────
  {
    id: "es-u1-l1",
    unitId: "es-u1",
    languageCode: "es",
    order: 1,
    title: "Hello & Goodbye",
    goal: {
      summary: "Greet someone and say goodbye in Spanish.",
      objectives: [
        "Say hello and goodbye",
        "Ask someone how they are doing",
        "Respond to a greeting",
      ],
    },
    vocabulary: [
      {
        id: "es-u1-l1-v1",
        term: "Hola",
        translation: "Hello",
        example: "¡Hola! ¿Cómo estás?",
        exampleTranslation: "Hello! How are you?",
      },
      {
        id: "es-u1-l1-v2",
        term: "Adiós",
        translation: "Goodbye",
        example: "¡Adiós! Hasta mañana.",
        exampleTranslation: "Goodbye! See you tomorrow.",
      },
      {
        id: "es-u1-l1-v3",
        term: "Buenos días",
        translation: "Good morning",
        example: "Buenos días, ¿cómo dormiste?",
        exampleTranslation: "Good morning, how did you sleep?",
      },
    ],
    phrases: [
      { id: "es-u1-l1-p1", text: "¿Cómo estás?", translation: "How are you?" },
      { id: "es-u1-l1-p2", text: "Muy bien, gracias.", translation: "Very well, thank you." },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Spanish?",
        options: ["Adiós", "Hola", "Gracias"],
        correctAnswer: "Hola",
      },
      {
        id: "es-u1-l1-a2",
        type: "translate",
        prompt: "Translate: Good morning",
        correctAnswer: "Buenos días",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, patient Spanish teacher speaking with a complete beginner. Speak mostly in simple Spanish, translate new words into English, and gently correct pronunciation with encouragement.",
      openingLine: "¡Hola! ¿Cómo estás?",
      openingLineTranslation: "Hello! How are you?",
      focusAreas: ["greetings", "pronunciation"],
      encouragementPhrases: ["¡Muy bien!", "¡Perfecto!"],
    },
  },
  {
    id: "es-u1-l2",
    unitId: "es-u1",
    languageCode: "es",
    order: 2,
    title: "Numbers 1-10",
    goal: {
      summary: "Count from one to ten in Spanish.",
      objectives: ["Recognize numbers 1-10", "Say your age", "Ask 'how many?'"],
    },
    vocabulary: [
      {
        id: "es-u1-l2-v1",
        term: "Uno, dos, tres",
        translation: "One, two, three",
        example: "Uno, dos, tres, cuatro, cinco.",
        exampleTranslation: "One, two, three, four, five.",
      },
      {
        id: "es-u1-l2-v2",
        term: "¿Cuántos años tienes?",
        translation: "How old are you?",
        example: "Tengo diez años.",
        exampleTranslation: "I am ten years old.",
      },
    ],
    phrases: [
      { id: "es-u1-l2-p1", text: "¿Cuántos?", translation: "How many?" },
      { id: "es-u1-l2-p2", text: "Tengo veinte años.", translation: "I am twenty years old." },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "listening",
        prompt: "Listen and repeat: cinco, seis, siete",
        correctAnswer: "cinco, seis, siete",
      },
      {
        id: "es-u1-l2-a2",
        type: "multiple-choice",
        prompt: "Which number is 'diez'?",
        options: ["5", "10", "2"],
        correctAnswer: "10",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher helping a beginner practice numbers. Count slowly, repeat numbers when asked, and praise correct answers.",
      openingLine: "¿Listo para contar en español?",
      openingLineTranslation: "Ready to count in Spanish?",
      focusAreas: ["numbers", "listening"],
      encouragementPhrases: ["¡Muy bien!", "¡Excelente!"],
    },
  },

  // ─── Spanish · Unit 2 · Everyday Basics ────────────────────────────────
  {
    id: "es-u2-l1",
    unitId: "es-u2",
    languageCode: "es",
    order: 1,
    title: "Colors & Objects",
    goal: {
      summary: "Name common colors and everyday objects.",
      objectives: ["Recognize colors", "Describe an object's color", "Name common objects"],
    },
    vocabulary: [
      {
        id: "es-u2-l1-v1",
        term: "Rojo",
        translation: "Red",
        example: "El coche es rojo.",
        exampleTranslation: "The car is red.",
      },
      {
        id: "es-u2-l1-v2",
        term: "Azul",
        translation: "Blue",
        example: "El cielo es azul.",
        exampleTranslation: "The sky is blue.",
      },
      {
        id: "es-u2-l1-v3",
        term: "La mesa",
        translation: "The table",
        example: "El libro está en la mesa.",
        exampleTranslation: "The book is on the table.",
      },
    ],
    phrases: [
      { id: "es-u2-l1-p1", text: "¿De qué color es?", translation: "What color is it?" },
    ],
    activities: [
      {
        id: "es-u2-l1-a1",
        type: "multiple-choice",
        prompt: "What color is 'azul'?",
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Blue",
      },
      {
        id: "es-u2-l1-a2",
        type: "translate",
        prompt: "Translate: The table is red.",
        correctAnswer: "La mesa es roja.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a playful Spanish teacher helping a beginner learn colors and objects. Point to everyday things and ask what color they are.",
      openingLine: "¿De qué color es tu camisa?",
      openingLineTranslation: "What color is your shirt?",
      focusAreas: ["colors", "vocabulary"],
      encouragementPhrases: ["¡Muy bien!", "¡Correcto!"],
    },
  },
  {
    id: "es-u2-l2",
    unitId: "es-u2",
    languageCode: "es",
    order: 2,
    title: "Days of the Week",
    goal: {
      summary: "Name the days of the week and talk about your schedule.",
      objectives: ["Recognize the days of the week", "Say what day it is today", "Talk about weekend plans"],
    },
    vocabulary: [
      {
        id: "es-u2-l2-v1",
        term: "Lunes",
        translation: "Monday",
        example: "Hoy es lunes.",
        exampleTranslation: "Today is Monday.",
      },
      {
        id: "es-u2-l2-v2",
        term: "Fin de semana",
        translation: "Weekend",
        example: "¿Qué haces el fin de semana?",
        exampleTranslation: "What do you do on the weekend?",
      },
    ],
    phrases: [
      { id: "es-u2-l2-p1", text: "¿Qué día es hoy?", translation: "What day is it today?" },
    ],
    activities: [
      {
        id: "es-u2-l2-a1",
        type: "multiple-choice",
        prompt: "Which word means 'Monday'?",
        options: ["Lunes", "Martes", "Viernes"],
        correctAnswer: "Lunes",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher helping a beginner talk about days of the week and weekly plans.",
      openingLine: "¿Qué día es hoy?",
      openingLineTranslation: "What day is today?",
      focusAreas: ["calendar", "routine"],
      encouragementPhrases: ["¡Muy bien!", "¡Perfecto!"],
    },
  },

  // ─── Spanish · Unit 3 · At the Café ─────────────────────────────────────
  {
    id: "es-u3-l1",
    unitId: "es-u3",
    languageCode: "es",
    order: 1,
    title: "Greetings & Introductions",
    goal: {
      summary: "Introduce yourself and meet someone new in Spanish.",
      objectives: [
        "Introduce yourself by name",
        "Ask someone's name",
        "Say nice to meet you",
      ],
    },
    vocabulary: [
      {
        id: "es-u3-l1-v1",
        term: "Me llamo",
        translation: "My name is",
        example: "Me llamo Ana.",
        exampleTranslation: "My name is Ana.",
      },
      {
        id: "es-u3-l1-v2",
        term: "Mucho gusto",
        translation: "Nice to meet you",
        example: "Mucho gusto, Carlos.",
        exampleTranslation: "Nice to meet you, Carlos.",
      },
      {
        id: "es-u3-l1-v3",
        term: "Encantado/a",
        translation: "Delighted (to meet you)",
        example: "Encantada de conocerte.",
        exampleTranslation: "Delighted to meet you.",
      },
    ],
    phrases: [
      { id: "es-u3-l1-p1", text: "¿Cómo te llamas?", translation: "What is your name?" },
      { id: "es-u3-l1-p2", text: "¿De dónde eres?", translation: "Where are you from?" },
    ],
    activities: [
      {
        id: "es-u3-l1-a1",
        type: "translate",
        prompt: "Translate: My name is Ana.",
        correctAnswer: "Me llamo Ana.",
      },
      {
        id: "es-u3-l1-a2",
        type: "speaking",
        prompt: "Introduce yourself using 'Me llamo...'",
        correctAnswer: "Me llamo...",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly, patient Spanish teacher meeting a beginner student for the first time. Speak mostly in simple Spanish, translate new words into English, and gently correct pronunciation mistakes with encouragement.",
      openingLine: "¡Hola! ¿Cómo te llamas?",
      openingLineTranslation: "Hello! What is your name?",
      focusAreas: ["greetings", "introductions", "pronunciation"],
      encouragementPhrases: ["¡Muy bien!", "¡Excelente!", "¡Perfecto!"],
    },
  },
  {
    id: "es-u3-l2",
    unitId: "es-u3",
    languageCode: "es",
    order: 2,
    title: "Daily Life",
    goal: {
      summary: "Talk about your daily routine in Spanish.",
      objectives: ["Describe your morning routine", "Talk about work and school", "Use time expressions"],
    },
    vocabulary: [
      {
        id: "es-u3-l2-v1",
        term: "Me despierto",
        translation: "I wake up",
        example: "Me despierto a las siete.",
        exampleTranslation: "I wake up at seven.",
      },
      {
        id: "es-u3-l2-v2",
        term: "Voy al trabajo",
        translation: "I go to work",
        example: "Voy al trabajo en autobús.",
        exampleTranslation: "I go to work by bus.",
      },
      {
        id: "es-u3-l2-v3",
        term: "Todos los días",
        translation: "Every day",
        example: "Estudio español todos los días.",
        exampleTranslation: "I study Spanish every day.",
      },
    ],
    phrases: [
      { id: "es-u3-l2-p1", text: "¿A qué hora te despiertas?", translation: "What time do you wake up?" },
      { id: "es-u3-l2-p2", text: "¿Qué haces todos los días?", translation: "What do you do every day?" },
    ],
    activities: [
      {
        id: "es-u3-l2-a1",
        type: "multiple-choice",
        prompt: "What does 'me despierto' mean?",
        options: ["I sleep", "I wake up", "I eat"],
        correctAnswer: "I wake up",
      },
      {
        id: "es-u3-l2-a2",
        type: "translate",
        prompt: "Translate: I go to work by bus.",
        correctAnswer: "Voy al trabajo en autobús.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher helping a beginner describe their daily routine. Ask simple follow-up questions about their day and correct mistakes gently.",
      openingLine: "¿A qué hora te despiertas normalmente?",
      openingLineTranslation: "What time do you normally wake up?",
      focusAreas: ["daily routine", "present tense verbs"],
      encouragementPhrases: ["¡Muy bien!", "¡Perfecto!"],
    },
  },
  {
    id: "es-u3-l3",
    unitId: "es-u3",
    languageCode: "es",
    order: 3,
    title: "At the Café",
    goal: {
      summary: "Order food and drinks at a café in Spanish.",
      objectives: ["Order food and drinks", "Ask for the bill", "Understand a waiter's questions"],
    },
    vocabulary: [
      {
        id: "es-u3-l3-v1",
        term: "Quisiera",
        translation: "I would like",
        example: "Quisiera un café, por favor.",
        exampleTranslation: "I would like a coffee, please.",
      },
      {
        id: "es-u3-l3-v2",
        term: "La cuenta",
        translation: "The bill",
        example: "La cuenta, por favor.",
        exampleTranslation: "The bill, please.",
      },
      {
        id: "es-u3-l3-v3",
        term: "Un café con leche",
        translation: "A coffee with milk",
        example: "Para mí, un café con leche.",
        exampleTranslation: "For me, a coffee with milk.",
      },
    ],
    phrases: [
      { id: "es-u3-l3-p1", text: "¿Qué desea tomar?", translation: "What would you like to drink?" },
      { id: "es-u3-l3-p2", text: "¿Algo más?", translation: "Anything else?" },
    ],
    activities: [
      {
        id: "es-u3-l3-a1",
        type: "translate",
        prompt: "Translate: I would like a coffee, please.",
        correctAnswer: "Quisiera un café, por favor.",
      },
      {
        id: "es-u3-l3-a2",
        type: "speaking",
        prompt: "Order a coffee with milk using 'Quisiera...'",
        correctAnswer: "Quisiera un café con leche.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher role-playing as a café waiter to help a beginner practice ordering food and drinks. Keep the conversation in simple Spanish and offer the English translation only when the student seems stuck.",
      openingLine: "¡Bienvenido! ¿Qué desea tomar?",
      openingLineTranslation: "Welcome! What would you like to drink?",
      focusAreas: ["ordering food", "politeness phrases"],
      encouragementPhrases: ["¡Muy bien!", "¡Perfecto!"],
    },
  },
  {
    id: "es-u3-l4",
    unitId: "es-u3",
    languageCode: "es",
    order: 4,
    title: "Travel & Directions",
    goal: {
      summary: "Ask for and follow directions in Spanish.",
      objectives: ["Ask where something is", "Understand basic directions", "Name common places"],
    },
    vocabulary: [
      {
        id: "es-u3-l4-v1",
        term: "¿Dónde está...?",
        translation: "Where is...?",
        example: "¿Dónde está la estación?",
        exampleTranslation: "Where is the station?",
      },
      {
        id: "es-u3-l4-v2",
        term: "A la derecha",
        translation: "To the right",
        example: "Gira a la derecha.",
        exampleTranslation: "Turn to the right.",
      },
      {
        id: "es-u3-l4-v3",
        term: "Todo recto",
        translation: "Straight ahead",
        example: "Sigue todo recto.",
        exampleTranslation: "Continue straight ahead.",
      },
    ],
    phrases: [
      { id: "es-u3-l4-p1", text: "¿Está lejos?", translation: "Is it far?" },
      { id: "es-u3-l4-p2", text: "Está cerca de aquí.", translation: "It's near here." },
    ],
    activities: [
      {
        id: "es-u3-l4-a1",
        type: "multiple-choice",
        prompt: "What does 'a la derecha' mean?",
        options: ["To the left", "To the right", "Straight ahead"],
        correctAnswer: "To the right",
      },
      {
        id: "es-u3-l4-a2",
        type: "translate",
        prompt: "Translate: Where is the station?",
        correctAnswer: "¿Dónde está la estación?",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher helping a beginner practice asking for and understanding directions. Give short, simple directions and check the student understood correctly.",
      openingLine: "¿A dónde quieres ir hoy?",
      openingLineTranslation: "Where do you want to go today?",
      focusAreas: ["directions", "prepositions"],
      encouragementPhrases: ["¡Muy bien!", "¡Correcto!"],
    },
  },
  {
    id: "es-u3-l5",
    unitId: "es-u3",
    languageCode: "es",
    order: 5,
    title: "Shopping",
    goal: {
      summary: "Shop and ask about prices in Spanish.",
      objectives: ["Ask how much something costs", "Ask for a different size or color", "Understand basic numbers for prices"],
    },
    vocabulary: [
      {
        id: "es-u3-l5-v1",
        term: "¿Cuánto cuesta?",
        translation: "How much does it cost?",
        example: "¿Cuánto cuesta esta camisa?",
        exampleTranslation: "How much does this shirt cost?",
      },
      {
        id: "es-u3-l5-v2",
        term: "Es muy caro",
        translation: "It's very expensive",
        example: "Este vestido es muy caro.",
        exampleTranslation: "This dress is very expensive.",
      },
      {
        id: "es-u3-l5-v3",
        term: "¿Tiene otra talla?",
        translation: "Do you have another size?",
        example: "¿Tiene otra talla más pequeña?",
        exampleTranslation: "Do you have a smaller size?",
      },
    ],
    phrases: [
      { id: "es-u3-l5-p1", text: "Solo estoy mirando.", translation: "I'm just looking." },
      { id: "es-u3-l5-p2", text: "Me lo llevo.", translation: "I'll take it." },
    ],
    activities: [
      {
        id: "es-u3-l5-a1",
        type: "translate",
        prompt: "Translate: How much does it cost?",
        correctAnswer: "¿Cuánto cuesta?",
      },
      {
        id: "es-u3-l5-a2",
        type: "multiple-choice",
        prompt: "What does 'es muy caro' mean?",
        options: ["It's very cheap", "It's very expensive", "It's very nice"],
        correctAnswer: "It's very expensive",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher role-playing as a shopkeeper to help a beginner practice shopping vocabulary and asking about prices.",
      openingLine: "¡Hola! ¿En qué puedo ayudarte?",
      openingLineTranslation: "Hello! How can I help you?",
      focusAreas: ["shopping", "numbers", "prices"],
      encouragementPhrases: ["¡Muy bien!", "¡Perfecto!"],
    },
  },
  {
    id: "es-u3-l6",
    unitId: "es-u3",
    languageCode: "es",
    order: 6,
    title: "Family & Friends",
    goal: {
      summary: "Talk about your family and friends in Spanish.",
      objectives: ["Name family members", "Describe relationships", "Talk about a friend"],
    },
    vocabulary: [
      {
        id: "es-u3-l6-v1",
        term: "La familia",
        translation: "The family",
        example: "Mi familia es grande.",
        exampleTranslation: "My family is big.",
      },
      {
        id: "es-u3-l6-v2",
        term: "Mi hermano/a",
        translation: "My brother/sister",
        example: "Mi hermana vive en Madrid.",
        exampleTranslation: "My sister lives in Madrid.",
      },
      {
        id: "es-u3-l6-v3",
        term: "Mi mejor amigo/a",
        translation: "My best friend",
        example: "Ella es mi mejor amiga.",
        exampleTranslation: "She is my best friend.",
      },
    ],
    phrases: [
      { id: "es-u3-l6-p1", text: "¿Cuántos hermanos tienes?", translation: "How many siblings do you have?" },
      { id: "es-u3-l6-p2", text: "Te presento a mi amigo.", translation: "Let me introduce you to my friend." },
    ],
    activities: [
      {
        id: "es-u3-l6-a1",
        type: "translate",
        prompt: "Translate: My sister lives in Madrid.",
        correctAnswer: "Mi hermana vive en Madrid.",
      },
      {
        id: "es-u3-l6-a2",
        type: "speaking",
        prompt: "Describe one member of your family in Spanish.",
        correctAnswer: "Mi... es...",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Spanish teacher helping a beginner talk about their family and friends. Ask about the student's family and encourage full sentences.",
      openingLine: "Cuéntame sobre tu familia.",
      openingLineTranslation: "Tell me about your family.",
      focusAreas: ["family vocabulary", "possessives"],
      encouragementPhrases: ["¡Muy bien!", "¡Qué bien!"],
    },
  },

  // ─── French · Unit 1 · Getting Started ─────────────────────────────────
  {
    id: "fr-u1-l1",
    unitId: "fr-u1",
    languageCode: "fr",
    order: 1,
    title: "Bonjour!",
    goal: {
      summary: "Greet someone and introduce yourself in French.",
      objectives: ["Say hello and goodbye", "Introduce yourself", "Ask how someone is doing"],
    },
    vocabulary: [
      {
        id: "fr-u1-l1-v1",
        term: "Bonjour",
        translation: "Hello / Good day",
        example: "Bonjour, comment ça va?",
        exampleTranslation: "Hello, how are you?",
      },
      {
        id: "fr-u1-l1-v2",
        term: "Je m'appelle",
        translation: "My name is",
        example: "Je m'appelle Marie.",
        exampleTranslation: "My name is Marie.",
      },
      {
        id: "fr-u1-l1-v3",
        term: "Au revoir",
        translation: "Goodbye",
        example: "Au revoir, à bientôt!",
        exampleTranslation: "Goodbye, see you soon!",
      },
    ],
    phrases: [
      { id: "fr-u1-l1-p1", text: "Comment tu t'appelles?", translation: "What is your name?" },
      { id: "fr-u1-l1-p2", text: "Enchanté(e).", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in French?",
        options: ["Au revoir", "Bonjour", "Merci"],
        correctAnswer: "Bonjour",
      },
      {
        id: "fr-u1-l1-a2",
        type: "translate",
        prompt: "Translate: My name is Marie.",
        correctAnswer: "Je m'appelle Marie.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, patient French teacher speaking with a complete beginner. Speak mostly in simple French, translate new words into English, and gently correct pronunciation with encouragement.",
      openingLine: "Bonjour! Comment tu t'appelles?",
      openingLineTranslation: "Hello! What is your name?",
      focusAreas: ["greetings", "introductions", "pronunciation"],
      encouragementPhrases: ["Très bien!", "Parfait!"],
    },
  },
  {
    id: "fr-u1-l2",
    unitId: "fr-u1",
    languageCode: "fr",
    order: 2,
    title: "Numbers & Colors",
    goal: {
      summary: "Count from one to ten and name basic colors in French.",
      objectives: ["Recognize numbers 1-10", "Name common colors", "Describe an object's color"],
    },
    vocabulary: [
      {
        id: "fr-u1-l2-v1",
        term: "Un, deux, trois",
        translation: "One, two, three",
        example: "Un, deux, trois, quatre, cinq.",
        exampleTranslation: "One, two, three, four, five.",
      },
      {
        id: "fr-u1-l2-v2",
        term: "Rouge",
        translation: "Red",
        example: "La pomme est rouge.",
        exampleTranslation: "The apple is red.",
      },
    ],
    phrases: [
      { id: "fr-u1-l2-p1", text: "De quelle couleur?", translation: "What color?" },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "listening",
        prompt: "Listen and repeat: quatre, cinq, six",
        correctAnswer: "quatre, cinq, six",
      },
      {
        id: "fr-u1-l2-a2",
        type: "multiple-choice",
        prompt: "Which word means 'Red'?",
        options: ["Bleu", "Rouge", "Vert"],
        correctAnswer: "Rouge",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly French teacher helping a beginner practice numbers and colors. Count slowly and praise correct answers.",
      openingLine: "Es-tu prêt à compter en français?",
      openingLineTranslation: "Are you ready to count in French?",
      focusAreas: ["numbers", "colors"],
      encouragementPhrases: ["Très bien!", "Excellent!"],
    },
  },

  // ─── Japanese · Unit 1 · Getting Started ───────────────────────────────
  {
    id: "ja-u1-l1",
    unitId: "ja-u1",
    languageCode: "ja",
    order: 1,
    title: "Everyday Greetings",
    goal: {
      summary: "Greet someone and introduce yourself in Japanese.",
      objectives: ["Say hello and goodbye", "Introduce yourself", "Bow politely while greeting"],
    },
    vocabulary: [
      {
        id: "ja-u1-l1-v1",
        term: "こんにちは (Konnichiwa)",
        translation: "Hello",
        example: "こんにちは、元気ですか？",
        exampleTranslation: "Hello, how are you?",
      },
      {
        id: "ja-u1-l1-v2",
        term: "私は...です (Watashi wa ... desu)",
        translation: "I am...",
        example: "私はアナです。",
        exampleTranslation: "I am Ana.",
      },
      {
        id: "ja-u1-l1-v3",
        term: "さようなら (Sayounara)",
        translation: "Goodbye",
        example: "さようなら、また明日。",
        exampleTranslation: "Goodbye, see you tomorrow.",
      },
    ],
    phrases: [
      { id: "ja-u1-l1-p1", text: "お名前は何ですか？ (Onamae wa nan desu ka?)", translation: "What is your name?" },
      { id: "ja-u1-l1-p2", text: "よろしくお願いします。(Yoroshiku onegaishimasu.)", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Japanese?",
        options: ["さようなら", "こんにちは", "ありがとう"],
        correctAnswer: "こんにちは",
      },
      {
        id: "ja-u1-l1-a2",
        type: "listening",
        prompt: "Listen and repeat: こんにちは",
        correctAnswer: "こんにちは",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, patient Japanese teacher speaking with a complete beginner. Speak mostly in simple Japanese with romaji support, translate new words into English, and gently correct pronunciation with encouragement.",
      openingLine: "こんにちは！お名前は何ですか？",
      openingLineTranslation: "Hello! What is your name?",
      focusAreas: ["greetings", "introductions", "pronunciation"],
      encouragementPhrases: ["とても良いです！ (Very good!)", "完璧です！ (Perfect!)"],
    },
  },
  {
    id: "ja-u1-l2",
    unitId: "ja-u1",
    languageCode: "ja",
    order: 2,
    title: "Numbers & Family",
    goal: {
      summary: "Count from one to ten and name close family members in Japanese.",
      objectives: ["Recognize numbers 1-10", "Name close family members", "Ask about someone's family"],
    },
    vocabulary: [
      {
        id: "ja-u1-l2-v1",
        term: "いち、に、さん (ichi, ni, san)",
        translation: "One, two, three",
        example: "いち、に、さん、し、ご。",
        exampleTranslation: "One, two, three, four, five.",
      },
      {
        id: "ja-u1-l2-v2",
        term: "家族 (kazoku)",
        translation: "Family",
        example: "私の家族は四人です。",
        exampleTranslation: "My family has four people.",
      },
    ],
    phrases: [
      { id: "ja-u1-l2-p1", text: "何人家族ですか？ (Nan-nin kazoku desu ka?)", translation: "How many people are in your family?" },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "listening",
        prompt: "Listen and repeat: いち、に、さん",
        correctAnswer: "いち、に、さん",
      },
      {
        id: "ja-u1-l2-a2",
        type: "multiple-choice",
        prompt: "What does '家族' (kazoku) mean?",
        options: ["Friend", "Family", "Teacher"],
        correctAnswer: "Family",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Japanese teacher helping a beginner practice numbers and family vocabulary. Speak slowly, use romaji when helpful, and praise correct answers.",
      openingLine: "何人家族ですか？",
      openingLineTranslation: "How many people are in your family?",
      focusAreas: ["numbers", "family vocabulary"],
      encouragementPhrases: ["とても良いです！ (Very good!)", "上手です！ (Well done!)"],
    },
  },

  // ─── Korean · Unit 1 · Getting Started ─────────────────────────────────
  {
    id: "ko-u1-l1",
    unitId: "ko-u1",
    languageCode: "ko",
    order: 1,
    title: "Greetings & Introductions",
    goal: {
      summary: "Greet someone and introduce yourself in Korean.",
      objectives: ["Say hello and goodbye", "Introduce yourself by name", "Ask how someone is doing"],
    },
    vocabulary: [
      {
        id: "ko-u1-l1-v1",
        term: "안녕하세요 (Annyeonghaseyo)",
        translation: "Hello",
        example: "안녕하세요, 저는 아나예요.",
        exampleTranslation: "Hello, I am Ana.",
      },
      {
        id: "ko-u1-l1-v2",
        term: "제 이름은...이에요 (Je ireumeun ... ieyo)",
        translation: "My name is...",
        example: "제 이름은 민수예요.",
        exampleTranslation: "My name is Minsu.",
      },
      {
        id: "ko-u1-l1-v3",
        term: "안녕히 가세요 (Annyeonghi gaseyo)",
        translation: "Goodbye",
        example: "안녕히 가세요, 내일 봐요.",
        exampleTranslation: "Goodbye, see you tomorrow.",
      },
    ],
    phrases: [
      { id: "ko-u1-l1-p1", text: "이름이 뭐예요? (Ireumi mwoyeyo?)", translation: "What is your name?" },
      { id: "ko-u1-l1-p2", text: "만나서 반가워요. (Mannaseo bangawoyo.)", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "ko-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Korean?",
        options: ["안녕히 가세요", "안녕하세요", "감사합니다"],
        correctAnswer: "안녕하세요",
      },
      {
        id: "ko-u1-l1-a2",
        type: "translate",
        prompt: "Translate: My name is Minsu.",
        correctAnswer: "제 이름은 민수예요.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, patient Korean teacher speaking with a complete beginner. Speak mostly in simple Korean, translate new words into English, and gently correct pronunciation with encouragement.",
      openingLine: "안녕하세요! 이름이 뭐예요?",
      openingLineTranslation: "Hello! What is your name?",
      focusAreas: ["greetings", "introductions", "pronunciation"],
      encouragementPhrases: ["잘했어요! (Well done!)", "완벽해요! (Perfect!)"],
    },
  },
  {
    id: "ko-u1-l2",
    unitId: "ko-u1",
    languageCode: "ko",
    order: 2,
    title: "Numbers 1-10",
    goal: {
      summary: "Count from one to ten in Korean.",
      objectives: ["Recognize numbers 1-10", "Say your age", "Ask 'how many?'"],
    },
    vocabulary: [
      {
        id: "ko-u1-l2-v1",
        term: "하나, 둘, 셋 (hana, dul, set)",
        translation: "One, two, three",
        example: "하나, 둘, 셋, 넷, 다섯.",
        exampleTranslation: "One, two, three, four, five.",
      },
      {
        id: "ko-u1-l2-v2",
        term: "몇 살이에요? (Myeot sarieyo?)",
        translation: "How old are you?",
        example: "저는 스무 살이에요.",
        exampleTranslation: "I am twenty years old.",
      },
    ],
    phrases: [
      { id: "ko-u1-l2-p1", text: "몇 개예요? (Myeot gaeyeyo?)", translation: "How many?" },
    ],
    activities: [
      {
        id: "ko-u1-l2-a1",
        type: "listening",
        prompt: "Listen and repeat: 넷, 다섯, 여섯",
        correctAnswer: "넷, 다섯, 여섯",
      },
      {
        id: "ko-u1-l2-a2",
        type: "multiple-choice",
        prompt: "Which number is '열' (yeol)?",
        options: ["5", "10", "2"],
        correctAnswer: "10",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Korean teacher helping a beginner practice numbers. Count slowly, repeat numbers when asked, and praise correct answers.",
      openingLine: "한국어로 숫자를 셀 준비 됐어요?",
      openingLineTranslation: "Ready to count in Korean?",
      focusAreas: ["numbers", "listening"],
      encouragementPhrases: ["잘했어요! (Well done!)", "훌륭해요! (Excellent!)"],
    },
  },
  {
    id: "ko-u1-l3",
    unitId: "ko-u1",
    languageCode: "ko",
    order: 3,
    title: "Colors & Objects",
    goal: {
      summary: "Name common colors and everyday objects in Korean.",
      objectives: ["Recognize colors", "Describe an object's color", "Name common objects"],
    },
    vocabulary: [
      {
        id: "ko-u1-l3-v1",
        term: "빨간색 (ppalgansaek)",
        translation: "Red",
        example: "자동차가 빨간색이에요.",
        exampleTranslation: "The car is red.",
      },
      {
        id: "ko-u1-l3-v2",
        term: "파란색 (paransaek)",
        translation: "Blue",
        example: "하늘이 파란색이에요.",
        exampleTranslation: "The sky is blue.",
      },
    ],
    phrases: [
      { id: "ko-u1-l3-p1", text: "무슨 색이에요? (Museun saegieyo?)", translation: "What color is it?" },
    ],
    activities: [
      {
        id: "ko-u1-l3-a1",
        type: "multiple-choice",
        prompt: "What color is '파란색'?",
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Blue",
      },
      {
        id: "ko-u1-l3-a2",
        type: "translate",
        prompt: "Translate: The apple is red.",
        correctAnswer: "사과가 빨간색이에요.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a playful Korean teacher helping a beginner learn colors and objects. Point to everyday things and ask what color they are.",
      openingLine: "이거 무슨 색이에요?",
      openingLineTranslation: "What color is this?",
      focusAreas: ["colors", "vocabulary"],
      encouragementPhrases: ["잘했어요! (Well done!)", "맞아요! (Correct!)"],
    },
  },
  {
    id: "ko-u1-l4",
    unitId: "ko-u1",
    languageCode: "ko",
    order: 4,
    title: "Family & Friends",
    goal: {
      summary: "Talk about your family and friends in Korean.",
      objectives: ["Name family members", "Describe relationships", "Talk about a friend"],
    },
    vocabulary: [
      {
        id: "ko-u1-l4-v1",
        term: "가족 (gajok)",
        translation: "Family",
        example: "제 가족은 네 명이에요.",
        exampleTranslation: "My family has four people.",
      },
      {
        id: "ko-u1-l4-v2",
        term: "제일 친한 친구 (jeil chinhan chingu)",
        translation: "Best friend",
        example: "그녀는 제 제일 친한 친구예요.",
        exampleTranslation: "She is my best friend.",
      },
    ],
    phrases: [
      { id: "ko-u1-l4-p1", text: "가족이 몇 명이에요? (Gajogi myeot myeongieyo?)", translation: "How many people are in your family?" },
    ],
    activities: [
      {
        id: "ko-u1-l4-a1",
        type: "translate",
        prompt: "Translate: My family has four people.",
        correctAnswer: "제 가족은 네 명이에요.",
      },
      {
        id: "ko-u1-l4-a2",
        type: "speaking",
        prompt: "Describe one member of your family in Korean.",
        correctAnswer: "제... 은/는...",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Korean teacher helping a beginner talk about their family and friends. Ask about the student's family and encourage full sentences.",
      openingLine: "가족에 대해 이야기해 주세요.",
      openingLineTranslation: "Tell me about your family.",
      focusAreas: ["family vocabulary", "counting people"],
      encouragementPhrases: ["잘했어요! (Well done!)", "좋아요! (Nice!)"],
    },
  },
  {
    id: "ko-u1-l5",
    unitId: "ko-u1",
    languageCode: "ko",
    order: 5,
    title: "At the Café",
    goal: {
      summary: "Order food and drinks at a café in Korean.",
      objectives: ["Order food and drinks", "Ask for the bill", "Understand a waiter's questions"],
    },
    vocabulary: [
      {
        id: "ko-u1-l5-v1",
        term: "주세요 (juseyo)",
        translation: "Please give me",
        example: "커피 한 잔 주세요.",
        exampleTranslation: "One coffee, please.",
      },
      {
        id: "ko-u1-l5-v2",
        term: "계산서 (gyesanseo)",
        translation: "The bill",
        example: "계산서 주세요.",
        exampleTranslation: "The bill, please.",
      },
    ],
    phrases: [
      { id: "ko-u1-l5-p1", text: "뭐 드시겠어요? (Mwo deusigesseoyo?)", translation: "What would you like to drink?" },
    ],
    activities: [
      {
        id: "ko-u1-l5-a1",
        type: "translate",
        prompt: "Translate: One coffee, please.",
        correctAnswer: "커피 한 잔 주세요.",
      },
      {
        id: "ko-u1-l5-a2",
        type: "speaking",
        prompt: "Order a coffee using 'juseyo'.",
        correctAnswer: "커피 주세요.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Korean teacher role-playing as a café worker to help a beginner practice ordering food and drinks. Keep the conversation in simple Korean.",
      openingLine: "어서 오세요! 뭐 드시겠어요?",
      openingLineTranslation: "Welcome! What would you like to drink?",
      focusAreas: ["ordering food", "politeness phrases"],
      encouragementPhrases: ["잘했어요! (Well done!)", "완벽해요! (Perfect!)"],
    },
  },

  // ─── German · Unit 1 · Getting Started ─────────────────────────────────
  {
    id: "de-u1-l1",
    unitId: "de-u1",
    languageCode: "de",
    order: 1,
    title: "Hallo & Auf Wiedersehen",
    goal: {
      summary: "Greet someone and say goodbye in German.",
      objectives: ["Say hello and goodbye", "Introduce yourself by name", "Ask how someone is doing"],
    },
    vocabulary: [
      {
        id: "de-u1-l1-v1",
        term: "Hallo",
        translation: "Hello",
        example: "Hallo, wie geht's?",
        exampleTranslation: "Hello, how are you?",
      },
      {
        id: "de-u1-l1-v2",
        term: "Ich heiße",
        translation: "My name is",
        example: "Ich heiße Anna.",
        exampleTranslation: "My name is Anna.",
      },
      {
        id: "de-u1-l1-v3",
        term: "Auf Wiedersehen",
        translation: "Goodbye",
        example: "Auf Wiedersehen, bis morgen!",
        exampleTranslation: "Goodbye, see you tomorrow!",
      },
    ],
    phrases: [
      { id: "de-u1-l1-p1", text: "Wie heißt du?", translation: "What is your name?" },
      { id: "de-u1-l1-p2", text: "Freut mich.", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "de-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in German?",
        options: ["Auf Wiedersehen", "Hallo", "Danke"],
        correctAnswer: "Hallo",
      },
      {
        id: "de-u1-l1-a2",
        type: "translate",
        prompt: "Translate: My name is Anna.",
        correctAnswer: "Ich heiße Anna.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, patient German teacher speaking with a complete beginner. Speak mostly in simple German, translate new words into English, and gently correct pronunciation with encouragement.",
      openingLine: "Hallo! Wie heißt du?",
      openingLineTranslation: "Hello! What is your name?",
      focusAreas: ["greetings", "introductions", "pronunciation"],
      encouragementPhrases: ["Sehr gut!", "Perfekt!"],
    },
  },
  {
    id: "de-u1-l2",
    unitId: "de-u1",
    languageCode: "de",
    order: 2,
    title: "Numbers 1-10",
    goal: {
      summary: "Count from one to ten in German.",
      objectives: ["Recognize numbers 1-10", "Say your age", "Ask 'how many?'"],
    },
    vocabulary: [
      {
        id: "de-u1-l2-v1",
        term: "Eins, zwei, drei",
        translation: "One, two, three",
        example: "Eins, zwei, drei, vier, fünf.",
        exampleTranslation: "One, two, three, four, five.",
      },
      {
        id: "de-u1-l2-v2",
        term: "Wie alt bist du?",
        translation: "How old are you?",
        example: "Ich bin zehn Jahre alt.",
        exampleTranslation: "I am ten years old.",
      },
    ],
    phrases: [
      { id: "de-u1-l2-p1", text: "Wie viele?", translation: "How many?" },
    ],
    activities: [
      {
        id: "de-u1-l2-a1",
        type: "listening",
        prompt: "Listen and repeat: fünf, sechs, sieben",
        correctAnswer: "fünf, sechs, sieben",
      },
      {
        id: "de-u1-l2-a2",
        type: "multiple-choice",
        prompt: "Which number is 'zehn'?",
        options: ["5", "10", "2"],
        correctAnswer: "10",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly German teacher helping a beginner practice numbers. Count slowly, repeat numbers when asked, and praise correct answers.",
      openingLine: "Bist du bereit, auf Deutsch zu zählen?",
      openingLineTranslation: "Ready to count in German?",
      focusAreas: ["numbers", "listening"],
      encouragementPhrases: ["Sehr gut!", "Ausgezeichnet!"],
    },
  },
  {
    id: "de-u1-l3",
    unitId: "de-u1",
    languageCode: "de",
    order: 3,
    title: "Colors & Objects",
    goal: {
      summary: "Name common colors and everyday objects in German.",
      objectives: ["Recognize colors", "Describe an object's color", "Name common objects"],
    },
    vocabulary: [
      {
        id: "de-u1-l3-v1",
        term: "Rot",
        translation: "Red",
        example: "Das Auto ist rot.",
        exampleTranslation: "The car is red.",
      },
      {
        id: "de-u1-l3-v2",
        term: "Blau",
        translation: "Blue",
        example: "Der Himmel ist blau.",
        exampleTranslation: "The sky is blue.",
      },
    ],
    phrases: [
      { id: "de-u1-l3-p1", text: "Welche Farbe ist das?", translation: "What color is it?" },
    ],
    activities: [
      {
        id: "de-u1-l3-a1",
        type: "multiple-choice",
        prompt: "What color is 'blau'?",
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Blue",
      },
      {
        id: "de-u1-l3-a2",
        type: "translate",
        prompt: "Translate: The apple is red.",
        correctAnswer: "Der Apfel ist rot.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a playful German teacher helping a beginner learn colors and objects. Point to everyday things and ask what color they are.",
      openingLine: "Welche Farbe hat dein Hemd?",
      openingLineTranslation: "What color is your shirt?",
      focusAreas: ["colors", "vocabulary"],
      encouragementPhrases: ["Sehr gut!", "Richtig!"],
    },
  },
  {
    id: "de-u1-l4",
    unitId: "de-u1",
    languageCode: "de",
    order: 4,
    title: "Family & Friends",
    goal: {
      summary: "Talk about your family and friends in German.",
      objectives: ["Name family members", "Describe relationships", "Talk about a friend"],
    },
    vocabulary: [
      {
        id: "de-u1-l4-v1",
        term: "Die Familie",
        translation: "The family",
        example: "Meine Familie ist groß.",
        exampleTranslation: "My family is big.",
      },
      {
        id: "de-u1-l4-v2",
        term: "Mein bester Freund",
        translation: "My best friend",
        example: "Er ist mein bester Freund.",
        exampleTranslation: "He is my best friend.",
      },
    ],
    phrases: [
      { id: "de-u1-l4-p1", text: "Wie viele Geschwister hast du?", translation: "How many siblings do you have?" },
    ],
    activities: [
      {
        id: "de-u1-l4-a1",
        type: "translate",
        prompt: "Translate: My family is big.",
        correctAnswer: "Meine Familie ist groß.",
      },
      {
        id: "de-u1-l4-a2",
        type: "speaking",
        prompt: "Describe one member of your family in German.",
        correctAnswer: "Mein... ist...",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly German teacher helping a beginner talk about their family and friends. Ask about the student's family and encourage full sentences.",
      openingLine: "Erzähl mir von deiner Familie.",
      openingLineTranslation: "Tell me about your family.",
      focusAreas: ["family vocabulary", "possessives"],
      encouragementPhrases: ["Sehr gut!", "Klasse!"],
    },
  },
  {
    id: "de-u1-l5",
    unitId: "de-u1",
    languageCode: "de",
    order: 5,
    title: "At the Café",
    goal: {
      summary: "Order food and drinks at a café in German.",
      objectives: ["Order food and drinks", "Ask for the bill", "Understand a waiter's questions"],
    },
    vocabulary: [
      {
        id: "de-u1-l5-v1",
        term: "Ich hätte gern",
        translation: "I would like",
        example: "Ich hätte gern einen Kaffee, bitte.",
        exampleTranslation: "I would like a coffee, please.",
      },
      {
        id: "de-u1-l5-v2",
        term: "Die Rechnung",
        translation: "The bill",
        example: "Die Rechnung, bitte.",
        exampleTranslation: "The bill, please.",
      },
    ],
    phrases: [
      { id: "de-u1-l5-p1", text: "Was möchten Sie trinken?", translation: "What would you like to drink?" },
    ],
    activities: [
      {
        id: "de-u1-l5-a1",
        type: "translate",
        prompt: "Translate: I would like a coffee, please.",
        correctAnswer: "Ich hätte gern einen Kaffee, bitte.",
      },
      {
        id: "de-u1-l5-a2",
        type: "speaking",
        prompt: "Order a coffee using 'Ich hätte gern...'",
        correctAnswer: "Ich hätte gern einen Kaffee.",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly German teacher role-playing as a café waiter to help a beginner practice ordering food and drinks. Keep the conversation in simple German.",
      openingLine: "Willkommen! Was möchten Sie trinken?",
      openingLineTranslation: "Welcome! What would you like to drink?",
      focusAreas: ["ordering food", "politeness phrases"],
      encouragementPhrases: ["Sehr gut!", "Perfekt!"],
    },
  },

  // ─── Chinese · Unit 1 · Getting Started ────────────────────────────────
  {
    id: "zh-u1-l1",
    unitId: "zh-u1",
    languageCode: "zh",
    order: 1,
    title: "Greetings & Introductions",
    goal: {
      summary: "Greet someone and introduce yourself in Chinese.",
      objectives: ["Say hello and goodbye", "Introduce yourself by name", "Ask how someone is doing"],
    },
    vocabulary: [
      {
        id: "zh-u1-l1-v1",
        term: "你好 (Nǐ hǎo)",
        translation: "Hello",
        example: "你好，你怎么样？",
        exampleTranslation: "Hello, how are you?",
      },
      {
        id: "zh-u1-l1-v2",
        term: "我叫... (Wǒ jiào...)",
        translation: "My name is...",
        example: "我叫安娜。",
        exampleTranslation: "My name is Ana.",
      },
      {
        id: "zh-u1-l1-v3",
        term: "再见 (Zàijiàn)",
        translation: "Goodbye",
        example: "再见，明天见。",
        exampleTranslation: "Goodbye, see you tomorrow.",
      },
    ],
    phrases: [
      { id: "zh-u1-l1-p1", text: "你叫什么名字？(Nǐ jiào shénme míngzì?)", translation: "What is your name?" },
      { id: "zh-u1-l1-p2", text: "很高兴认识你。(Hěn gāoxìng rènshi nǐ.)", translation: "Nice to meet you." },
    ],
    activities: [
      {
        id: "zh-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say 'Hello' in Chinese?",
        options: ["再见", "你好", "谢谢"],
        correctAnswer: "你好",
      },
      {
        id: "zh-u1-l1-a2",
        type: "translate",
        prompt: "Translate: My name is Ana.",
        correctAnswer: "我叫安娜。",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a warm, patient Chinese teacher speaking with a complete beginner. Speak mostly in simple Mandarin with pinyin support, translate new words into English, and gently correct pronunciation with encouragement.",
      openingLine: "你好！你叫什么名字？",
      openingLineTranslation: "Hello! What is your name?",
      focusAreas: ["greetings", "introductions", "pronunciation"],
      encouragementPhrases: ["很好！(Very good!)", "完美！(Perfect!)"],
    },
  },
  {
    id: "zh-u1-l2",
    unitId: "zh-u1",
    languageCode: "zh",
    order: 2,
    title: "Numbers 1-10",
    goal: {
      summary: "Count from one to ten in Chinese.",
      objectives: ["Recognize numbers 1-10", "Say your age", "Ask 'how many?'"],
    },
    vocabulary: [
      {
        id: "zh-u1-l2-v1",
        term: "一，二，三 (yī, èr, sān)",
        translation: "One, two, three",
        example: "一，二，三，四，五。",
        exampleTranslation: "One, two, three, four, five.",
      },
      {
        id: "zh-u1-l2-v2",
        term: "你几岁？(Nǐ jǐ suì?)",
        translation: "How old are you?",
        example: "我十岁。",
        exampleTranslation: "I am ten years old.",
      },
    ],
    phrases: [
      { id: "zh-u1-l2-p1", text: "多少个？(Duōshǎo gè?)", translation: "How many?" },
    ],
    activities: [
      {
        id: "zh-u1-l2-a1",
        type: "listening",
        prompt: "Listen and repeat: 五，六，七",
        correctAnswer: "五，六，七",
      },
      {
        id: "zh-u1-l2-a2",
        type: "multiple-choice",
        prompt: "Which number is '十' (shí)?",
        options: ["5", "10", "2"],
        correctAnswer: "10",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Chinese teacher helping a beginner practice numbers. Count slowly, repeat numbers when asked, and praise correct answers.",
      openingLine: "准备好用中文数数了吗？",
      openingLineTranslation: "Ready to count in Chinese?",
      focusAreas: ["numbers", "listening"],
      encouragementPhrases: ["很好！(Very good!)", "太棒了！(Excellent!)"],
    },
  },
  {
    id: "zh-u1-l3",
    unitId: "zh-u1",
    languageCode: "zh",
    order: 3,
    title: "Colors & Objects",
    goal: {
      summary: "Name common colors and everyday objects in Chinese.",
      objectives: ["Recognize colors", "Describe an object's color", "Name common objects"],
    },
    vocabulary: [
      {
        id: "zh-u1-l3-v1",
        term: "红色 (hóngsè)",
        translation: "Red",
        example: "车是红色的。",
        exampleTranslation: "The car is red.",
      },
      {
        id: "zh-u1-l3-v2",
        term: "蓝色 (lánsè)",
        translation: "Blue",
        example: "天空是蓝色的。",
        exampleTranslation: "The sky is blue.",
      },
    ],
    phrases: [
      { id: "zh-u1-l3-p1", text: "这是什么颜色？(Zhè shì shénme yánsè?)", translation: "What color is it?" },
    ],
    activities: [
      {
        id: "zh-u1-l3-a1",
        type: "multiple-choice",
        prompt: "What color is '蓝色'?",
        options: ["Red", "Blue", "Green"],
        correctAnswer: "Blue",
      },
      {
        id: "zh-u1-l3-a2",
        type: "translate",
        prompt: "Translate: The apple is red.",
        correctAnswer: "苹果是红色的。",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a playful Chinese teacher helping a beginner learn colors and objects. Point to everyday things and ask what color they are.",
      openingLine: "你的衣服是什么颜色？",
      openingLineTranslation: "What color is your shirt?",
      focusAreas: ["colors", "vocabulary"],
      encouragementPhrases: ["很好！(Very good!)", "对了！(Correct!)"],
    },
  },
  {
    id: "zh-u1-l4",
    unitId: "zh-u1",
    languageCode: "zh",
    order: 4,
    title: "Family & Friends",
    goal: {
      summary: "Talk about your family and friends in Chinese.",
      objectives: ["Name family members", "Describe relationships", "Talk about a friend"],
    },
    vocabulary: [
      {
        id: "zh-u1-l4-v1",
        term: "家庭 (jiātíng)",
        translation: "Family",
        example: "我的家庭有四口人。",
        exampleTranslation: "My family has four people.",
      },
      {
        id: "zh-u1-l4-v2",
        term: "最好的朋友 (zuì hǎo de péngyǒu)",
        translation: "Best friend",
        example: "她是我最好的朋友。",
        exampleTranslation: "She is my best friend.",
      },
    ],
    phrases: [
      { id: "zh-u1-l4-p1", text: "你家有几口人？(Nǐ jiā yǒu jǐ kǒu rén?)", translation: "How many people are in your family?" },
    ],
    activities: [
      {
        id: "zh-u1-l4-a1",
        type: "translate",
        prompt: "Translate: My family has four people.",
        correctAnswer: "我的家庭有四口人。",
      },
      {
        id: "zh-u1-l4-a2",
        type: "speaking",
        prompt: "Describe one member of your family in Chinese.",
        correctAnswer: "我的...是...",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Chinese teacher helping a beginner talk about their family and friends. Ask about the student's family and encourage full sentences.",
      openingLine: "跟我说说你的家庭吧。",
      openingLineTranslation: "Tell me about your family.",
      focusAreas: ["family vocabulary", "counting people"],
      encouragementPhrases: ["很好！(Very good!)", "真棒！(Great!)"],
    },
  },
  {
    id: "zh-u1-l5",
    unitId: "zh-u1",
    languageCode: "zh",
    order: 5,
    title: "At the Café",
    goal: {
      summary: "Order food and drinks at a café in Chinese.",
      objectives: ["Order food and drinks", "Ask for the bill", "Understand a waiter's questions"],
    },
    vocabulary: [
      {
        id: "zh-u1-l5-v1",
        term: "我想要 (Wǒ xiǎng yào)",
        translation: "I would like",
        example: "我想要一杯咖啡，谢谢。",
        exampleTranslation: "I would like a coffee, please.",
      },
      {
        id: "zh-u1-l5-v2",
        term: "买单 (mǎidān)",
        translation: "The bill",
        example: "买单，谢谢。",
        exampleTranslation: "The bill, please.",
      },
    ],
    phrases: [
      { id: "zh-u1-l5-p1", text: "您想喝点什么？(Nín xiǎng hē diǎn shénme?)", translation: "What would you like to drink?" },
    ],
    activities: [
      {
        id: "zh-u1-l5-a1",
        type: "translate",
        prompt: "Translate: I would like a coffee, please.",
        correctAnswer: "我想要一杯咖啡，谢谢。",
      },
      {
        id: "zh-u1-l5-a2",
        type: "speaking",
        prompt: "Order a coffee using '我想要...'",
        correctAnswer: "我想要一杯咖啡。",
      },
    ],
    aiTeacher: {
      systemPrompt:
        "You are a friendly Chinese teacher role-playing as a café waiter to help a beginner practice ordering food and drinks. Keep the conversation in simple Mandarin with pinyin support.",
      openingLine: "欢迎光临！您想喝点什么？",
      openingLineTranslation: "Welcome! What would you like to drink?",
      focusAreas: ["ordering food", "politeness phrases"],
      encouragementPhrases: ["很好！(Very good!)", "完美！(Perfect!)"],
    },
  },
];

export const getLessonsByUnit = (unitId: string) =>
  lessons.filter((lesson) => lesson.unitId === unitId).sort((a, b) => a.order - b.order);

export const getLessonsByLanguage = (languageCode: LanguageCode) =>
  lessons
    .filter((lesson) => lesson.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);

export const getLessonById = (lessonId: string) =>
  lessons.find((lesson) => lesson.id === lessonId);
