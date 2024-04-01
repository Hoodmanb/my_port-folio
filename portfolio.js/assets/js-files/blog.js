document.addEventListener('DOMContentLoaded', function() {
  const h4 = document.createElement('h4');
  const h61 = document.createElement('h6');
  const h62 = document.createElement('h6');
  const p = document.createElement('p');

  const tags = [h4, h61, h62, p];

  const innerContent = [
    ['How My Coding Journey Started', '17 Mar 2024 &nbsp;&nbsp;', '&nbsp;&nbsp;My Port-Folio', 'specifically for generating Lorem Ipsum text like in some other text editors. However, you can achieve this functionality by using'],
    ['How My Coding Journey Started', '17 Mar 2024 &nbsp;&nbsp;', '&nbsp;&nbsp;My Port-Folio', 'specifically for generating Lorem Ipsum text like in some other text editors. However, you can achieve this functionality by using'],
    ['How My Coding Journey Started', '17 Mar 2024 &nbsp;&nbsp;', '&nbsp;&nbsp;My Port-Folio', 'specifically for generating Lorem Ipsum text like in some other text editors. However, you can achieve this functionality by using']
  ];

  const blogPosts = document.getElementById('blog-posts');

  innerContent.forEach(function(contentArray) {
    const article = document.createElement('article');
    article.classList.add('post');

    contentArray.forEach(function(content, index) {
      const tag = tags[index].cloneNode();
      tag.innerHTML = content;
      article.appendChild(tag);
    });

    blogPosts.appendChild(article);
  });
});


//Burger nav toggle
$(document).ready(function() {
  $("#burger-container").on('click', function() {
    $(this).toggleClass("open");
    console.log(5);
  });
});