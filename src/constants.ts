import { Verse, Lesson, Note, Word } from './types';

export const VERSES: Verse[] = [
  {
    id: 'gen-1-1',
    number: 1,
    hebrew: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ׃',
    english: 'In the beginning God created the heavens and the earth.',
    reference: 'Genesis 1:1',
    book: 'Genesis',
    chapter: 1
  },
  {
    id: 'gen-1-2',
    number: 2,
    hebrew: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם׃',
    english: 'Now the earth was unformed and void, and darkness was upon the face of the deep; and the spirit of God hovered over the face of the waters.',
    reference: 'Genesis 1:2',
    book: 'Genesis',
    chapter: 1
  },
  {
    id: 'gen-1-3',
    number: 3,
    hebrew: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר׃',
    english: 'And God said: "Let there be light." And there was light.',
    reference: 'Genesis 1:3',
    book: 'Genesis',
    chapter: 1
  },
  {
    id: 'kings-20-1',
    number: 1,
    hebrew: 'וּבֶן־הֲדַד מֶלֶךְ־אֲרָם קָבַץ אֶת־כָּל־חֵילוֹ וּשְׁלֹשִׁים וּשְׁנַיִם מֶלֶךְ אִתּוֹ וְסוּס וָרֶכֶב וַיַּעַל וַיָּצַר עַל־שֹׁמְרוֹן וַיִּלָּחֶם בָּהּ׃',
    english: 'And Ben-hadad the king of Syria gathered all his host together: and there were thirty and two kings with him, and horses, and chariots: and he went up and besieged Samaria, and warred against it.',
    reference: '1 Kings 20:1',
    book: '1 Kings',
    chapter: 20
  },
  {
    id: 'kings-20-2',
    number: 2,
    hebrew: 'וַיִּשְׁלַח מַלְאָכִים אֶל־אַחְאָב מֶלֶךְ־יִשְׂרָאֵל הָעִירָה׃',
    english: 'And he sent messengers to Ahab king of Israel into the city.',
    reference: '1 Kings 20:2',
    book: '1 Kings',
    chapter: 20
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'שיעור א׳ — Tanakh Lesson 1',
    description: 'A comprehensive introduction to the opening of Bereshit, exploring the linguistic roots of creation.',
    duration: '59:40',
    thumbnail: 'https://img.youtube.com/vi/a-h60-owwSg/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'a-h60-owwSg',
    book: 'Genesis',
    chapter: 1
  },
  {
    id: 'lesson-2',
    title: 'שיעור ב׳ — Tanakh Lesson 2',
    description: 'An exploration of the second day of creation and the separation of the waters.',
    duration: '15:20',
    thumbnail: 'https://img.youtube.com/vi/Wk561CcVyxQ/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'Wk561CcVyxQ'
  },
  {
    id: 'lesson-3',
    title: 'שיעור ג׳ — Tanakh Lesson 3',
    description: 'Deep dive into the creation of life and the botanical wonders of the third day.',
    duration: '12:45',
    thumbnail: 'https://img.youtube.com/vi/M4TEukZCpZM/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'M4TEukZCpZM',
    book: '1 Kings',
    chapter: 20
  },
  {
    id: 'lesson-4',
    title: 'שיעור ד׳ — Tanakh Lesson 4',
    description: 'The celestial bodies and the establishment of time and seasons.',
    duration: '08:30',
    thumbnail: 'https://img.youtube.com/vi/fkdby9nGq9Q/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'fkdby9nGq9Q'
  }
];

export const WORDS: Word[] = [
  {heb:'בְּרֵאשִׁית', trans:'Bereshit', mean:'In the beginning', root:'ר-א-ש', gram:'Noun, feminine, singular, construct state with prefix ב (in/at)', note:'Rashi notes this is not an absolute beginning but a relative one — "in a beginning of". The letter Bet is the second letter of the aleph-bet, teaching that there is mystery before creation.'},
  {heb:'בָּרָא', trans:'Bara', mean:'He created', root:'ב-ר-א', gram:'Verb, Qal binyan, perfect tense, 3rd person masculine singular', note:'Bara denotes creation ex nihilo — from nothing. This root is used exclusively with God as subject in the Tanakh, distinguishing divine creation from human making (asah/yatzar).'},
  {heb:'אֱלֹהִים', trans:'Elohim', mean:'God', root:'א-ל-ה', gram:'Noun, masculine, plural form — but takes singular verb (Bara)', note:'The plural form Elohim with a singular verb is the classic proof-text for the Jewish understanding of divine unity. The plurality expresses majesty, not multiplicity.'},
  {heb:'אֵת', trans:'Et', mean:'Direct object marker', root:'א-ת', gram:'Particle, marks the definite direct object', note:'The untranslatable את. Kabbalistic tradition (Sefer Yetzirah) reads it as encompassing all 22 letters from Aleph to Tav — hinting that the entire Torah is encoded in creation.'},
  {heb:'הַשָּׁמַיִם', trans:'HaShamayim', mean:'The heavens', root:'ש-מ-ם', gram:'Noun, masculine, dual/plural with definite article', note:'Shamayim is grammatically dual in form, suggesting two heavens. The word may derive from esh (fire) + mayim (water) — fire and water combined at creation.'},
  {heb:'הָאָרֶץ', trans:'HaAretz', mean:'The earth', root:'א-ר-צ', gram:'Noun, feminine, singular with definite article', note:'Eretz is the physical earth but also the Land of Israel throughout Tanakh. The juxtaposition shamayim/aretz (heaven/earth) is a merism encompassing all of existence.'},
];

export const NOTES: Note[] = [
  {
    id: 'note-1',
    timestamp: '04:22',
    content: '"Compare this phrasing to Enuma Elish \'When on high\'... the structural similarity suggests a direct polemic."',
    lessonId: 'lesson-1'
  },
  {
    id: 'note-2',
    concept: 'Verse Concept',
    content: 'Look into the gematria of Bereshit (913).',
    lessonId: 'lesson-1'
  },
  {
    id: 'note-3',
    timestamp: '02:15',
    content: 'The mention of Ben-hadad here aligns with the historical records of the Aramaean expansion.',
    lessonId: 'lesson-3'
  },
  {
    id: 'note-4',
    concept: 'Historical Context',
    content: 'Samaria was the capital of the Northern Kingdom of Israel at this time.',
    lessonId: 'lesson-3'
  }
];
