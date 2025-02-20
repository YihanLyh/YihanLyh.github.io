document.addEventListener('DOMContentLoaded', (event) => {
    const containers = document.querySelectorAll('.rolling-text-container');

    containers.forEach(container => {
        const rollingText = container.querySelector('.rolling-text');
        // duplicate texts
        rollingText.innerHTML = rollingText.innerHTML + rollingText.innerHTML;
        rollingText.innerHTML = rollingText.innerHTML + rollingText.innerHTML;
        
        // initial animation
        let currentDirection = 'right-to-left';
        rollingText.style.animation = `roll-${currentDirection} 150s linear infinite`;

        const checkPosition = () => {
            // position relative to viewpoint
            const rect = rollingText.getBoundingClientRect();
            
            // 20% position
            const viewportThreshold = window.innerHeight * 0.2;
            
            const elementMiddle = rect.top + (rect.height / 2);
            const newDirection = elementMiddle <= viewportThreshold 
                ? 'left-to-right' 
                : 'right-to-left';

        
            if (newDirection !== currentDirection) {
                rollingText.style.animation = `roll-${newDirection} 110s linear infinite`;
                currentDirection = newDirection;
            }
            
            requestAnimationFrame(checkPosition);
        };

        requestAnimationFrame(checkPosition);
    });
});