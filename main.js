const formEl = document.forms['article-create'];
formEl.addEventListener ('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    axios.post('/articles/create', formData);
    
   
});