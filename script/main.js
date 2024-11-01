var user = document.getElementById('user')
var userphoto = `./image/${user.value}.jpg`
var message = document.getElementById('boxText')

var form = document.getElementById('form-post')
var posts = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()
    post()

    message.value = ''
})

function post() {

    let postDados = '<li>'
        postDados += '<div class="profile">'
        postDados += `<img src="${userphoto}" alt="">`
        postDados += `<h4 id="user">${user.value}</h4>`
        postDados += '</div>'
        postDados += `<p class="post">${message.value}</p>`
        postDados += '</li>'

    posts += postDados

    var postList = document.getElementById('postList')
    postList.innerHTML = posts
}
