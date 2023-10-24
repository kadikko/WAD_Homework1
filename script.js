window.onload = function() {
    fetch('./res/json/posts.json')
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

                const thumbs = document.createElement('div');
                thumbs.classList.add('icon');
                const thumbsUp = post.thumbs;
                if (thumbsUp) {
                    thumbs.src = './res/img/thumbs-up.png';
                }else{
                    thumbs.src = './res/img/thumbs-down.png';
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
