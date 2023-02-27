document.getElementById("myForm").addEventListener("submit", saveBookMark);
function saveBookMark (e){
    let siteName = document.getElementById("site-name").value;
    let siteUrl = document.getElementById('site-url').value;

    if(!validateForm(siteName, siteUrl)){
        return false;
      }
        let bookmark = {
        name : siteName,
        url : siteUrl
    }
    if(localStorage.getItem('bookmarks')===null){
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    }else{
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
    }
    document.getElementById("site-name").value = '';
    document.getElementById('site-url').value = '';
    e.preventDefault();
    fetchBookmark();
}
function fetchBookmark (){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    let bookmarksResults = document.getElementById('bookmark-results');
    bookmarksResults.innerHTML = ''
    for(let i = 0 ;i < bookmarks.length;i++){
        let name =  bookmarks[i].name;
        let url = bookmarks[i].url;
        bookmarksResults.innerHTML += `<div class="bg-gray-200 my-3 flex items-center well"><h3 class="text-xl">${name}</h3>
        <div class="ml-8 flex justify-between">
        <a href="${url}" class="bg-blue-500 text-white font-medium py-2 px-8 md:px-12 rounded inline-block hover:bg-blue-600 transition" target="_blank" id="url">Visit</a>
        <a href="#" onclick="deleteBookmark('${url}')" class="bg-red-500 hover:bg-red-600 transition text-white font-medium py-2 px-8 md:px-12 rounded inline-block ml-2">Delete</a>
        </div>
        </div>`;
    }
}
function deleteBookmark(url){
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    bookmarks.forEach(elem => {
        if(elem.url === url){
            bookmarks.splice(elem,1);
        }
    });
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    fetchBookmark();
}
function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
      alert('Please fill in the form');
      return false;
    }
    let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
  
    if(!siteUrl.match(regex)){
      alert('Please use a valid URL');
      return false;
    }
   return true;
  }