const quotes=[ 
    
    {
    quote:  "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    writer: ' -John Keats'
},{
    quote:  "But man is not made for defeat. A man can be destroyed but not defeated.",
    writer: ' -Ernest Hemingway'
},{
    quote:  "It is better to be feared than loved, if you cannot be both.",
    writer: ' -Niccolo Machiavelli'
},{
    quote:  "Learning never exhausts the mind.",
    writer: ' -Leonardo da Vinci'
},{
    quote:  "There is no charm equal to tenderness of heart.",
    writer: ' -Jane Austen'
},{
    quote:  "When you reach the end of your rope, tie a knot in it and hang on.",
    writer: ' -Franklin D. Roosevelt'
  
},{
    quote:  "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
    writer: ' -Francis of Assisi'

},{
    quote:  "Good judgment comes from experience, and a lot of that comes from bad judgment.",
    writer: ' -Will Rogers'
},{
    
    quote:  "Life without love is like a tree without blossoms or fruit.",
    writer: ' -Khalil Gibran'
},{
    quote:  "No act of kindness, no matter how small, is ever wasted.",
    writer: ' -Aesop'
},{
    quote:  "It is far better to be alone, than to be in bad company.",
    writer: ' -George Washington'
},{
    quote:  "If you cannot do great things, do small things in a great way.",
    writer: ' -Napoleon Hill'
},{
    quote:  "The journey of a thousand miles begins with one step.",
    writer: ' -Lao Tzu'
},{
    quote:  "The best preparation for tomorrow is doing your best today.",
    writer: ' -H. Jackson Brown, Jr.'
},{
    quote:  "A new command I give you: Love one another. As I have loved you, so you must love one another. ",
    writer: ' -Jesus Christ'
},{
    quote:  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    writer: ' -Samuel Beckett'
},{
    quote:  "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    writer: ' -Voltrie'
},{
    quote:  "It is better to be feared than loved, if you cannot be both.",
    writer: ' -Niccolo Machiavelli'
},{
    quote:  "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",
    writer: ' -William Blake'
},{
    quote:  "Life without love is like a tree without blossoms or fruit.",
    writer: ' -Khalil Gibran'
},{
    quote:  "Love cures people - both the ones who give it and the ones who receive it.",
    writer: ' -Karl A. Menninger'
},{
    quote:  "Independence is happiness.",
    writer: ' -Susan B. Anthony'
},{
    quote:  "Being entirely honest with oneself is a good exercise.",
    writer: ' -Sigmund Freud'
},{
    quote:  "You can't blame gravity for falling in love.",
    writer: ' -Albert Einstein'
},{
    quote:  "Honesty is the first chapter in the book of wisdom.",
    writer: ' -Thomas Jefferson'
},{
    quote:  "Not all those who wander are lost.",
    writer: ' -J. R. R. Tolkien'
},{
    quote:  "I have not failed. I've just found 10,000 ways that won't work.",
    writer: ' -Thomas A. Edison'
},{
    quote:  "There is nothing on this earth more to be prized than true friendship.",
    writer: ' -Thomas Aquinas'
},{
    quote:  "There is only one happiness in this life, to love and be loved.",
    writer: ' -George Sand'
},]

const btn =document.querySelector("#Qbtn");
const quote =document.querySelector(".quote");
const writer =document.querySelector(".writer");


btn.addEventListener("click", function() {

    let random = Math.floor(Math.random() *  quotes.length);

    quote.innerHTML =quotes[random].quote;

    writer.innerHTML =quotes[random].writer; 
 
});
