import data from './data.js'
// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandpar">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandpar.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
const body = document.body;



const articleMaker = ({title, date, firstParagraph, secondParagraph, thirdParagraph}) => {
  const article = document.createElement('div')
  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  const span = document.createElement('span')

  article.classList.add('article');
  p.classList.add('date');
  span.classList.add('expandpar');
  h2.textContent = title;
  p.textContent = date;
  span.textContent = '+';

  span.addEventListener('click', () => {
    article.classList.toggle('article-open')
  })

  function paragraphCreator (text, parent) {
    const par = document.createElement('p');
    par.textContent = text;
    return parent.appendChild(par);
  }

  article.appendChild(h2);
  article.appendChild(p);
  paragraphCreator(firstParagraph, article);
  paragraphCreator(secondParagraph, article);
  paragraphCreator(thirdParagraph, article);
  article.appendChild(span);
  return body.append(article);
}

data.forEach(item => {
  articleMaker(item)
});