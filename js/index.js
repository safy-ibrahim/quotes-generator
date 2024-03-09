
var container = document.getElementById('demo')


var quoteArr = [
    {
        quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        person: '― Mahatma Gandhi'
    },
    {
        quote: '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
        person: '― Martin Luther King Jr'
    },
    {
        quote: '“To live is the rarest thing in the world. Most people exist, that is all.”',
        person: '― Oscar Wilde'
    },
    {
        quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ",
        person: '― Maya Angelou'
    },
    {
        quote: '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
        person: '― C.S. Lewis, The Four Loves'
    },
    {
        quote: ' “Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend” ',
        person: '― Albert Camus'
    },
    {
        quote: " “In three words I can sum up everything I've learned about life: it goes on.”",
        person: '― Robert Frost'
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        person: '― Mae West'
    },
    {
        quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
        person: '- William W. Purkey'
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        person: '― Bernard M. Baruch'
    }
];


var newArr = [];
function showQoutes() {

     var quoteIndex = quoteArr[Math.floor(Math.random()*10)];
    //   شغاله من غير لووب
    // container.innerHTML= `
    // <p class="fs-3">${quoteIndex.quote}</p>
    // <p class="fs-3">${quoteIndex.person}</p>
    // `
 
    //  بطريقة تانيه
    // newArr.push(quoteIndex);

    // for(var i=0 ; i<newArr.length ; i++){
    //     container.innerHTML= `
    //     <p class="fs-3">${newArr[i].quote}</p>
    //     <p class="fs-3">${newArr[i].person}</p>
    //     `
    // }


    //    البونص

    var quoteIndex;

    do {
        quoteIndex = quoteArr[Math.floor(Math.random() * 10)];
    } while (newArr.includes(quoteIndex))

    newArr.push(quoteIndex);
    // container.innerHTML = `
    //     <p class="fs-3">${quoteIndex.quote}</p>
    //     <p class="fs-3">${quoteIndex.person}</p>
    //  `

    for(var i=0 ; i<newArr.length ; i++){
        container.innerHTML= `
        <p class="fs-3">${newArr[i].quote}</p>
        <p class="fs-3">${newArr[i].person}</p>
        `
    }


   


    

}
