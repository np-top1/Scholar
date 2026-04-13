import { Verse, Lesson, Note, Word } from './types';

export const VERSES: Verse[] = [
  {
    id: 'kings2-1-8',
    number: 8,
    hebrew: 'וַיֹּאמְרוּ אֵלָיו אִישׁ בַּעַל שֵׂעָר וְאֵזוֹר עוֹר אָזוּר בְּמָתְנָיו וַיֹּאמַר אֵלִיָּה הַתִּשְׁבִּי הוּא׃',
    english: 'And they answered him: "He was a hairy man, and girt with a girdle of leather about his loins." And he said: "It is Elijah the Tishbite."',
    reference: 'II Kings 1:8',
    book: 'II Kings',
    chapter: 1,
    rashi: 'איש בעל שער. מלובש באדרת שער: ואזור עור. חגור בחגורה של עור:'
  },
  {
    id: 'kings2-2-11',
    number: 11,
    hebrew: 'וַיְהִי הֵמָּה הֹלְכִים הָלוֹךְ וְדַבֵּר וְהִנֵּה רֶכֶב־אֵשׁ וְסוּסֵי אֵשׁ וַיַּפְרִדוּ בֵּין שְׁנֵיהֶם וַיַּעַל אֵלִיָּהוּ בַּסְעָרָה הַשָּׁמָיִם׃',
    english: 'And it came to pass, as they still went on, and talked, that, behold, there appeared a chariot of fire, and horses of fire, which parted them both asunder; and Elijah went up by a whirlwind into heaven.',
    reference: 'II Kings 2:11',
    book: 'II Kings',
    chapter: 2,
    rashi: 'רכב אש וסוסי אש. מלאכים נדמו לו כסוסים של אש וכרכב של אש:'
  },
  {
    id: 'kings2-2-12',
    number: 12,
    hebrew: 'וֶאֱלִישָׁע רֹאֶה וְהוּא מְצַעֵק אָבִי אָבִי רֶכֶב יִשְׂרָאֵל וּפָרָשָׁיו וְלֹא רָאָהוּ עוֹד וַיַּחֲזֵק בִּבְגָדָיו וַיִּקְרָעֵם לִשְׁנֵי קְרָעִים׃',
    english: 'And Elisha saw it, and he cried: "My father, my father, the chariots of Israel and the horsemen thereof!" And he saw him no more; and he took hold of his own clothes, and rent them in two pieces.',
    reference: 'II Kings 2:12',
    book: 'II Kings',
    chapter: 2,
    rashi: 'רכב ישראל ופרשיו. שהיה טוב לישראל בתפלתו יותר מרכב ופרשים:'
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'lesson-1',
    title: 'אליהו הנביא — Elijah the Prophet',
    description: 'An introduction to the fiery prophet Elijah and his confrontation with King Ahaziah.',
    duration: '45:20',
    thumbnail: 'https://img.youtube.com/vi/a-h60-owwSg/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'a-h60-owwSg',
    book: 'II Kings',
    chapter: 1
  },
  {
    id: 'lesson-2',
    title: 'עליית אליהו בסערה — Elijah\'s Ascent',
    description: 'Exploring the mystical departure of Elijah in a chariot of fire and the transition to Elisha.',
    duration: '52:15',
    thumbnail: 'https://img.youtube.com/vi/Wk561CcVyxQ/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'Wk561CcVyxQ',
    book: 'II Kings',
    chapter: 2
  },
  {
    id: 'lesson-3',
    title: 'כרם נבות — Naboth\'s Vineyard',
    description: 'The story of Ahab, Jezebel, and the injustice against Naboth.',
    duration: '38:40',
    thumbnail: 'https://img.youtube.com/vi/M4TEukZCpZM/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'M4TEukZCpZM'
  },
  {
    id: 'lesson-4',
    title: 'איך לעבוד עם תלמידים — Technical Guide',
    description: 'A technical guide on how to work with students effectively.',
    duration: '12:30',
    thumbnail: 'https://img.youtube.com/vi/fkdby9nGq9Q/maxresdefault.jpg',
    author: 'Rabbi Ariel Azaria',
    youtubeId: 'fkdby9nGq9Q'
  }
];

export const WORDS: Word[] = [
  {heb:'אֵלִיָּה', trans:'Eliyah', mean:'Elijah', root:'א-ל-י-ה', gram:'Proper Noun, masculine singular', note:'The name means "My God is YHVH". Elijah represents the uncompromising zeal for the unity of God.'},
  {heb:'הַתִּשְׁבִּי', trans:'HaTishbi', mean:'The Tishbite', root:'ת-ש-ב', gram:'Adjective with definite article', note:'Likely refers to his place of origin, Tishbe in Gilead, though some interpret it as "the settler" or "the restorer".'},
  {heb:'רֶכֶב־אֵשׁ', trans:'Rechev-Esh', mean:'Chariot of fire', root:'ר-כ-ב / א-ש', gram:'Noun construct state', note:'Fire symbolizes the divine presence and the transformative power of Elijah\'s prophecy.'},
  {heb:'בַּסְעָרָה', trans:'BaSe\'arah', mean:'In a whirlwind', root:'ס-ע-ר', gram:'Noun with prefix ב (in) and definite article', note:'A whirlwind often accompanies divine revelation or transition in the Tanakh.'},
  {heb:'אָבִי אָבִי', trans:'Avi Avi', mean:'My father, my father', root:'א-ב', gram:'Noun with 1st person suffix, repeated', note:'Elisha\'s cry recognizes Elijah as his spiritual father and the source of his prophetic authority.'},
  {heb:'פָּרָשָׁיו', trans:'Parashav', mean:'His horsemen', root:'פ-ר-ש', gram:'Noun with 3rd person masculine singular suffix', note:'Refers to the spiritual defense of Israel, which Elijah provided through his prayer and presence.'},
];

export const NOTES: Note[] = [
  {
    id: 'note-1',
    timestamp: '04:22',
    content: '"The hairy mantle of Elijah is a sign of his ascetic life and his separation from the corrupt court of Ahab."',
    lessonId: 'lesson-1'
  },
  {
    id: 'note-2',
    concept: 'Prophetic Succession',
    content: 'Elisha asking for a "double portion" of Elijah\'s spirit is a request to be recognized as the primary heir, similar to the firstborn\'s inheritance.',
    lessonId: 'lesson-2'
  },
  {
    id: 'note-3',
    timestamp: '12:15',
    content: 'The chariot of fire represents the divine merkavah, showing that Elijah is being taken directly into the heavenly realm.',
    lessonId: 'lesson-2'
  }
];
