const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const saffix = this.dataset.sizing || this.dataset.bg || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + saffix);



}

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
inputs.forEach(input => input.addEventListener('change', handleUpdate))