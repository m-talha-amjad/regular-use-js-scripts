<script>
  // Get all the filter buttons
const filterBtns = document.querySelectorAll('.link-list-wrapper button');

// Add click event to each button
filterBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    let type = event.target.dataset.articleType;
    
    // Check for 'all' type
    if(type === 'all') {
      document.querySelectorAll('.ArticleItem').forEach(article => {
        article.closest('.Grid__Cell').style.display = 'inline-block';
      });
      return;
    }
    // Hide all articles
    document.querySelectorAll('.ArticleList .ArticleItem').forEach(article => {
      article.closest('.Grid__Cell').style.display = 'none'; 
    });
    
    // Show articles matching type
    document.querySelectorAll(`.ArticleList .ArticleItem[data-article-type="${type}"]`)
      .forEach(article => {
        article.closest('.Grid__Cell').style.display = 'inline-block';
      });
    
  });
});
</script>
