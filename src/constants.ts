import { Verse, Lesson, Note } from './types';

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
    title: 'שיעור ZOOM למורים',
    description: 'A comprehensive Zoom training session for educators, focusing on digital pedagogy and classroom management.',
    duration: '59:40',
    thumbnail: 'https://img.youtube.com/vi/a-h60-owwSg/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'a-h60-owwSg',
    book: 'Genesis',
    chapter: 1
  },
  {
    id: 'lesson-2',
    title: 'איך לעבוד עם תלמידים שמציקים לכם',
    description: 'Practical technical advice on managing challenging student behavior in a digital learning environment.',
    duration: '15:20',
    thumbnail: 'https://img.youtube.com/vi/fkdby9nGq9Q/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'fkdby9nGq9Q'
  },
  {
    id: 'lesson-3',
    title: 'מלכים א פרק כ - הקדמה לסיפור כרם נבות',
    description: 'An introduction to the story of Naboth\'s Vineyard in Kings I, Chapter 20, exploring the ethical and legal implications.',
    duration: '12:45',
    thumbnail: 'https://img.youtube.com/vi/Wk561CcVyxQ/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'Wk561CcVyxQ',
    book: '1 Kings',
    chapter: 20
  },
  {
    id: 'lesson-4',
    title: 'בני גורן עמוד 160 תרגיל 96',
    description: 'A detailed walkthrough of a complex mathematical exercise from the Benny Goren textbook.',
    duration: '08:30',
    thumbnail: 'https://img.youtube.com/vi/l1GzD0S91lA/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'l1GzD0S91lA'
  }
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
