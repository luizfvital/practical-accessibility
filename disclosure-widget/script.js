const container = document.querySelector('.disclosure-widget');
const panel = container.querySelector('div');

const icon = `<svg width="12" height="8" aria-hidden="true" viewBox="-2 -2 14 12">
      <g fill="none" transform="rotate(-90 6 4)">
        <path fill="currentColor" d="M1.41.59l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
        <path d="M-6-8h24v24h-24z" />
      </g>
    </svg>`;

if (container && panel) {
    const trigger = document.createElement('button');
    trigger.setAttribute('id', 'trigger');
    trigger.setAttribute('aria-controls', 'panel');
    trigger.setAttribute('aria-expanded', 'false');

    panel.setAttribute('id', 'panel');
    panel.setAttribute('hidden', '');
    panel.setAttribute('role', 'group');
    panel.setAttribute('aria-labelledby', 'trigger');

    trigger.innerHTML += icon + `<span>Toggle Content</span> `;
    

    container.prepend(trigger);

    trigger.addEventListener("click", function() {
        if (this.getAttribute('aria-expanded') === "true") {
            this.setAttribute('aria-expanded', 'false');
            panel.setAttribute('hidden', '');
        } else {
            this.setAttribute('aria-expanded', 'true');
            panel.removeAttribute('hidden');
        }
    });
}