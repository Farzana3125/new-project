document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordian-item');

    accordionItems.forEach(item => {
        const title = item.querySelector('.accordian-title');
        const content = item.querySelector('.accordian-content');

        title.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';

        
            accordionItems.forEach(item => {
                item.querySelector('.accordian-content').style.display = 'none';
            });

            content.style.display = isOpen ? 'none' : 'block';
        });
    });
});

  