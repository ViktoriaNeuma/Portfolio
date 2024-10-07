/* document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-level');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    bar.style.width = bar.parentElement.classList[1].split('-')[0] + '-bar'.includes('html') ? '90%' :
                                      bar.parentElement.classList[1].split('-')[0] + '-bar'.includes('css') ? '80%' :
                                      bar.parentElement.classList[1].split('-')[0] + '-bar'.includes('js') ? '70%' :
                                      bar.parentElement.classList[1].split('-')[0].includes('german') ? '95%' :
                                      bar.parentElement.classList[1].split('-')[0].includes('english') ? '85%' :
                                      bar.parentElement.classList[1].split('-')[0].includes('russian') ? '60%' :
                                      bar.parentElement.classList[1].split('-')[0].includes('photoshop') ? '75%' :
                                      bar.parentElement.classList[1].split('-')[0].includes('blender') ? '65%' :
                                      '80%';
                });
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
}); */