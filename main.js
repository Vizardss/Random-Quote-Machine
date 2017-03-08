$(document).ready(function(){

  var quotes = [
    {
      quote: 'A man who lives right, and is right, has more power in his silence than another has by his words.',
      author: '- Phillips Brooks'
    },
    {
      quote: 'Glory is fleeting, but obscurity is forever.',
      author: '- Napoleon Bonaparte'
    },
    {
      quote: 'People seldom improve when they have no other model, but themselves to copy after.',
      author: '- Oliver Goldsmith'
    },
    {
      quote: 'Nothing preaches better than the act.',
      author: '- Benjamin Franklin'
    },
    {
      quote: 'What you do not want others to do to you, do not do to others.',
      author: '- Confucius'
    },
    {
      quote: 'The world is upheld by the veracity of good men: they make the earth wholesome. They who lived with them found life glad and nutritious. Life is sweet and tolerable only in our belief in such society.',
      author: '- Ralph Waldo Emerson'
    },
    {
      quote: 'No rules exist, and examples are simply life-savers answering the appeals of rules making vain attempts to exist.',
      author: '- André Breton'
    },
    {
      quote: 'Example is not the main thing in influencing others. It is the only thing.',
      author: '- Albert Schweitzer'
    },
    {
      quote: 'If you must hold yourself up to your children as an object lesson, hold yourself up as a warning and not an example.',
      author: '- George Bernard Shaw'
    },
    {
      quote: 'There is nothing so annoying as a good example!!',
      author: '- Mark Twain'
    },
    {
      quote: 'The road to learning by precept is long, but by example short and effective.',
      author: '- Seneca'
    },
    {
      quote: 'Produce great men, the rest follows.',
      author: '- Walt Whitman'
    },
    {
      quote: 'Well done, is better than well said.',
      author: '- Benjamin Franklin'
    },
    {
      quote: 'The presence of a noble nature, generous in its wishes, ardent in its charity, changes the lights for us: we begin to see things again in their larger, quieter masses, and to believe that we too can be seen and judged in the wholeness of our character.',
      author: '- George Eliot'
    },
    {
      quote: 'Example is the school of mankind, and they will learn at no other',
      author: '- Edmund Burke'
    },
    {
      quote: 'Example has more followers than reason. We unconsciously imitate what pleases us, and approximate to the characters we most admire.',
      author: '- Christian Nevell Bovee'
    },
    {
      quote: 'He teaches me to be good that does me good.',
      author: '- Thomas Fuller'
    },
    {
      quote: 'It is not so much the example of others we imitate as the reflection of ourselves in their eyes and the echo of ourselves in their words.',
      author: '- Eric Hoffer'
    },
    {
      quote: 'They teach the morals of a whore, and the manners of a dancing master.',
      author: '- Samuel Johnson'
    },
    {
      quote: 'Example moves the world more than doctrine. The great exemplars are the poets of action, and it makes little difference whether they be forces for good or forces for evil.',
      author: '- Henry Miller'
    },
  ];
  
  var colors = ['#FAEBD7','#00FFFF','#7FFFD4','#000000','#0000FF','#A52A2A','#D2691E','#7FFF00', '#6495ED','#DC143C','#B8860B', '#A9A9A9','#191970','#FF4500', '#FF0000'];



    function addQuote() {
      var generate = Math.floor(Math.random()* quotes.length);

      $('#quote').append(quotes[generate]['quote']);
      $('#author').append(quotes[generate]['author']);
    }

  addQuote();

  function generateColors() {
    var numberColor = Math.floor(Math.random()* colors.length);

    $('body').css('background-color', colors[numberColor]);
    $('.text p').css('color', colors[numberColor]);
    $('.quote').css('color', colors[numberColor]);
    $('.btn-new').css('background-color', colors[numberColor]);
    $('.btn-twitter').css('background-color', colors[numberColor]);
  }
  generateColors();

  $('.btn-new').on('click', function () {

    $('#quote, #author, .quote i').empty();

    addQuote();
    generateColors();

  });

  $('.btn-twitter').on('click', function(){
    var h2 = $('#quote').text();
    var p = $('#author').text();

    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + h2 + ' ' + p);

  });
});
