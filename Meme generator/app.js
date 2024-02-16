document.addEventListener('DOMContentLoaded', function () {
    const memeForm = document.getElementById('memeForm');
    const memeContainer = document.getElementById('memeContainer');

    memeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        const imageLink = document.getElementById('imageLink').value;

        if (!topText || !bottomText || !imageLink) {
            alert('Please fill in all fields.');
            return;
        }

        createMeme(topText, bottomText, imageLink);
        memeForm.reset();
    });

    memeContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            event.target.closest('.meme').remove();
        }
    });

    function createMeme(topText, bottomText, imageLink) {
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');

        const img = document.createElement('img');
        img.src = imageLink;
        memeDiv.appendChild(img);

        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add('text-overlay', 'top-text');
        topTextDiv.innerText = topText;
        memeDiv.appendChild(topTextDiv);

        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('text-overlay', 'bottom-text');
        bottomTextDiv.innerText = bottomText;
        memeDiv.appendChild(bottomTextDiv);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerText = 'Delete';
        memeDiv.appendChild(deleteButton);

        memeContainer.appendChild(memeDiv);
    }
});
