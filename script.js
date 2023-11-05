window.onload = function () {
    // fetch('./res/json/posts.json')
    fetch('https://api.npoint.io/2d5af9286bb6156116e5')
        .then((response) => response.json())
        .then(json => {
            json.map(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                const userIcon = document.createElement('img');
                userIcon.classList.add('icon');
                userIcon.src = post.usericon;

                const date = document.createElement('p');
                date.classList.add('date');
                date.innerText = post.date;

                const content = document.createElement('p');
                content.innerText = post.content;

                const image = document.createElement('img');
                image.classList.add('img');
                image.src = post.image;

                const thumbs = document.createElement('img');
                thumbs.classList.add('icon');
                const thumbsUp = post.thumbs;
                if (thumbsUp) {
                    thumbs.src = './res/positive_reaction_emoticon.png';
                } else {
                    thumbs.src = './res/sad_reaction_emoticon.png';
                }

                postDiv.appendChild(userIcon);
                postDiv.appendChild(date);
                postDiv.appendChild(image);
                postDiv.appendChild(content);
                postDiv.appendChild(thumbs);

                const postContainer = document.getElementById('container');
                postContainer.appendChild(postDiv);

            });
        }).catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        }).finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
        })

    fetch('../../res/json/diy.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
        })
}

// if show is set, then toggle to remove or vice versa
function showUseraccount() {
    document.getElementById("useraccountDropdown").classList.toggle("show");
}

//  clicking anywhere outside of the user icon will close the dropdown
window.onclick = function (event) {
    if (!event.target.matches('#useraccountIcon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

}