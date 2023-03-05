const musicData = [  
  {        
    question: "Ready ka na ba?",        
    choices: ["OO", "Yes", "Si", "Opo"],
    answer: "A Little Night Music",
    audioPath: "music/ALNM.mp3"
  },
  {        
    question: "What is the title of this song by Amadeus Mozart?",        
    choices: ["A Little Night Music", "Four Seasons", "Air on the G String", "Turkish Rondo"],
    answer: "A Little Night Music",
    audioPath: "music/ALNM.mp3"
  },
  {    
    question: "What is the title of this song by Henry Mancini?",    
    choices: ["Baby Elephant Walk", "Pink Panther Theme", "The Days of Wine and Roses", "Moon River"],
    answer: "Baby Elephant Walk",
    audioPath: "music/Baby Elephant Walk by Henry Mancini.mp3"
  },
  {    
    question: "What is the title of this song by Johann Sebastian Bach?",    
    choices: ["Air on the G String", "Brandenburg Concerto No. 3", "Goldberg Variations", "Toccata and Fugue in D minor"],
    answer: "Air on the G String",
    audioPath: "music/AironGString by Johanne Sebastian Bach.mp3"
  },
  {    
    question: "What is the title of this song by Richard Clayderman?",    
    choices: ["Ballade Pour Adeline", "The Entertainer", "Chopin's Nocturne", "Fur Elise"],
    answer: "Ballade Pour Adeline",
    audioPath: "music/Ballade Pour Adeline by Richard Clayderman.mp3"
  },
  {    
    question: "What is the title of this song by Peter Llycg Tchaikovsky?",    
    choices: ["Dance of the Sugar Plum Fairy", "1812 Overture", "Swan Lake", "The Nutcracker"],
    answer: "Dance of the Sugar Plum Fairy",
    audioPath: "music/Dance of the Sugar Plum Fairy by Peter Llycg Tchaikovsky.mp3"
  },
  {    
    question: "What is the title of this song by Antonio Vivaldi?",    
    choices: ["Four Seasons", "Concerto for Two Trumpets", "La Folia", "Spring"],
    answer: "Four Seasons",
    audioPath: "music/Four Seasons by Antonio Vivaldi.mp3"
  },
  {    
    question: "What is the title of this song by Ludwig Van Beethoven?",    
    choices: ["Fur Elise", "Moonlight Sonata", "Symphony No. 5", "Ode to Joy"],
    answer: "Fur Elise",
    audioPath: "music/Fur Elise by Ludwig Van Beethoven.mp3"
  },
  {    
    question: "What is the title of this song by George Frideric Handel?",    
    choices: ["Messiah", "Water Music Suite No. 2", "Music for the Royal Fireworks", "Sarabande"],
    answer: "Messiah",
    audioPath: "music/Messiah by George Frideric Handel.mp3"
  },
  { 
    question: "What is the title of this song by Ludwig Van Beethoven?",    
    choices: ["Moonlight Piano Sonata","Fur Elise","Symphony No. 9","Symphony No. 5"],
    answer: "Moonlight Piano Sonata",
    audioPath: "music/Moonlight Piano Sonata by Ludwig Van Beethoven.mp3"
  },
  {
    question: "What is the title of this song by Frederic Chopin?",
    choices: ["Nocturne Op 9 No. 2","Etude Op. 10, No. 3","Fantaisie Impromptu","Polonaise Op. 53"],
    answer: "Nocturne Op 9 No. 2",
    audioPath: "music/Nocturne Op 9 No. 2 by Frederic Chopin.mp3"
  },
  {
    question: "What is the title of this song by Johann Strauss Jr.?",
    choices: ["On the Beautiful Danube","The Blue Danube","Radetzky March","Die Fledermaus"],
    answer: "On the Beautiful Danube",
    audioPath: "music/OntheBeautifulDanube by Johanne Strauss Jr..mp3"
  },
  {
    question: "What is the title of this song by Henry Mancini?",
    choices: ["Pink Panther","Moon River","Peter Gunn","The Days of Wine and Roses"],
    answer: "Pink Panther",
    audioPath: "music/Pink Panther by Henry Mancini.mp3"
  },
  {
    question: "What is the title of this song by Sir Edward Elgar?",
    choices: ["Pomp and Circumstance","Enigma Variations","Cello Concerto","Nimrod"],
    answer: "Pomp and Circumstance",
    audioPath: "music/Pomp and Circumstance by Sir Edward Elgar.mp3"
  },
  {
    question: "What is the title of this song by Quincy Jones?",
    choices: ["Soul Bossa Nova","Killer Joe","The Midnight Sun Will Never Set","Birdland"],
    answer: "Soul Bossa Nova",
    audioPath: "music/Soul Bossa Nova by Quincy Jones.mp3"
  },
  {
    question: "What is the title of this song by Johann Sebastian Bach?",
    choices: ["Suite from Anna Magdalena Bach","Toccata and Fugue in D Minor","Jesu, Joy of Man's Desiring","Brandenburg Concerto No. 3"],
    answer: "Suite from Anna Magdalena Bach",
    audioPath: "music/SAMB.mp3"
  },
  {    question: "What is the title of this song by Ludwig Van Beethoven?",
  choices: ["Moonlight Piano Sonata","Fur Elise","Symphony No. 5","Symphony No. 9"],
  answer: "Symphony No. 5",
  audioPath: "music/Symphony No. 5 by Ludwig Van Beethoven.mp3"
},
{
  question: "What is the title of this song by Amadeus Mozart?",
  choices: ["A Little Night Music","Turkish Rondo","Symphony No. 40","Eine kleine Nachtmusik"],
  answer: "Symphony No. 40",
  audioPath: "music/Symphony No. 40 by Amadeus Mozart.mp3"
},
{
  question: "What is the title of this song by Scott Joplin?",
  choices: ["Maple Leaf Rag","The Entertainer","Pineapple Rag","Solace"],
  answer: "The Entertainer",
  audioPath: "music/The Entertainer by Scott Joplin.mp3"
},
{
  question: "What is the title of this song by Amadeus Mozart?",
  choices: ["A Little Night Music","Turkish Rondo","Symphony No. 40","Eine kleine Nachtmusik"],
  answer: "Turkish Rondo",
  audioPath: "music/Turkish Rondo by Amadeus Mozart.mp3"
},
{
  question: "What is the title of this song by Johann Strauss Jr.?",
  choices: ["Emperor Waltz","The Blue Danube","Radetzky March","Wine, Women and Song"],
  answer: "Wine, Women and Song",
  audioPath: "music/Wine, Women and Song by Johann Strauss Jr..mp3"
}
  // add more songs here...
];
// Get references to HTML elements
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const audioPlayer = document.getElementById('audio-player');

// Set up initial quiz state
let currentQuestionIndex = 0;
let score = 0;

// Display the current question and choices
function displayQuestion() {
  const currentQuestion = musicData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = '';
  currentQuestion.choices.forEach(choice => {
    const choiceBtn = document.createElement('button');
    choiceBtn.classList.add('choice-btn');
    choiceBtn.textContent = choice;
    choiceBtn.addEventListener('click', () => {
      if (choice === currentQuestion.answer) {
        choiceBtn.classList.add('correct');
        score++;
      } else {
        choiceBtn.classList.add('incorrect');
      }
       if (choice !== currentQuestion.answer && currentQuestionIndex === 0) {
         alert('HAHA MALI AGAD!');
       }      
      document.querySelectorAll('.choice-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.answer) {
          btn.classList.add('correct');
        }
      });
      currentQuestionIndex++;
      if (currentQuestionIndex < musicData.length) {
        setTimeout(() => {
          displayQuestion();
          playAudio();
        }, 1000);
      } else {
        // Quiz is over
        audioPlayer.pause();
        alert(`Your score is ${score} out of ${musicData.length}.`);
      }
    });
    choicesEl.appendChild(choiceBtn);
  });
}

// Start the quiz by displaying the first question
displayQuestion();

// Play the audio for the current question
function playAudio() {
  const currentQuestion = musicData[currentQuestionIndex];
  console.log('Playing audio:', currentQuestion.audioPath);
  audioPlayer.src = currentQuestion.audioPath;
  audioPlayer.play();
}


