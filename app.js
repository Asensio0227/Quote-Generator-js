const data = [
  {
    id: 1,
    name: "john",
    text: `"Make improvements, not excuses. Seek respect, not attention."`,
  },
  {
    id: 2,
    name: "brendon",
    text: `"The only way that we can live, is if we grow. The only way that we can grow is if we change. The only way that we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we can become exposed is if we throw ourselves out into the open. Do it. Throw yourself."`
  },
  {
    id: 3,
    name: "gabreilla",
    text: `"Do not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind."`
  },
  {
    id: 4,
    name: "schicks",
    text: `"Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journeye of us there's only today. And the truth is, you never really know."`,
  },
  {
    id: 5,
    name: "enrique iglesias",
    job:"singer",
    text: `“Do not fear failure but rather fear not trying".`,
  },
  {
    id:6,
    name: "Mthee",
    text: `"Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life."`
  },
  {
    id: 7,
    name: "chris",
    text: `"Sometimes you have to lose all you have to find out who you truly are."`
  },
  {
    id: 8,
    name: "marry",
    job: "designer",
    text: `"Do not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind."`,
  },
  {
    id:9,
    name: "peter",
    text: `"I have come to accept the feeling of not knowing where I am going. And I have trained myself to love it. Because it is only when we are suspended in mid-air with no landing in sight, that we force our wings to unravel and alas begin our flight. And as we fly, we still may not know where we are going to. But the miracle is in the unfolding of the wings. You may not know where you're going, but you know that so long as you spread your wings, the winds will carry you." `,
  },
  {
    id:10,
    name: "susan",
    text: `"Maybe you can afford to wait. Maybe for you there's a tomorrow. Maybe for you there's one thousand tomorrows, or three thousand, or ten, so much time you can bathe in it, roll around it, let it slide like coins through you fingers. So much time you can waste it.
    But for some of us there's only today. And the truth is, you never really know."`,
  },
  {
    id: 11,
    name: "emma ",
    text: `"You can talk with someone for years, everyday, and still, it won't mean as much as what you can have when you sit in front of someone, not saying a word, yet you feel that person with your heart, you feel like you have known the person for forever.... connections are made with the heart, not the tongue."`,
  },
  {
    id: 12,
    name: "oberlo",
    text: `"Don't say you don't have enough time. You have exactly the same number of hours per day that were give to Helen Keller, Pasteur, Michelengelo, Mother Teresa, Leonardo n nDa Vinci, Thomas Jefferson annd Albert Einstein".`,
  },
  {
    id: 13,
    name: "oberlo",
    text: `"Everyone has inside them a piece of good news. The good news is you don't know how great you can be!
    How much you can love!
    What you can accomplsh! 
    And what your potentials is."`,
  }
];

const toggle = document.querySelector('.nav-toggle');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const author = document.querySelector('.author');
const text = document.querySelector('.text');

let index = 0;

window.addEventListener('load', () => {
  const venom = data[index];
  author.textContent = venom.name;
  text.textContent = venom.text;
});

const showPerson = (info) => {
  const venom = data[info];
  author.textContent = venom.name;
  text.textContent = venom.text;
}

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = data.length - 1;
  }
  showPerson(index);
});

nextBtn.addEventListener('click', () => {
  index++;
  if (index > data.length - 1) {
    index = 0
  }
  showPerson(index);
})