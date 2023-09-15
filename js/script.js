
const tabs = document.querySelectorAll('.tab_btn');
const all_contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');

            let line = document.querySelector('.line');
            line.style.width = e.target.offsetWidth + 'px'
            line.style.left = e.target.offsetLeft + 'px'
        })
        tab.classList.add('active');

        all_contents.forEach(() => {
            all_contents.forEach(content => content.classList.remove('active'));
        })

        all_contents[index].classList.add('active');



    })
})


