
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  const panel = document.getElementById('menu-panel');
  const overlay = document.getElementById('overlay');
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  btn.addEventListener('click', () => {
    const isOpen = panel.classList.contains('translate-x-0');

    if (isOpen) {
      // Close
      panel.classList.remove('translate-x-0');
      panel.classList.add('-translate-x-full');
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0');
      line1.classList.remove('rotate-45', 'top-6');
      line2.classList.remove('opacity-0');
      line3.classList.remove('-rotate-45', 'top-6');
    } else {
      // Open
      panel.classList.remove('-translate-x-full');
      panel.classList.add('translate-x-0');
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      line1.classList.add('rotate-45', 'top-6');
      line2.classList.add('opacity-0');
      line3.classList.add('-rotate-45', 'top-6');
    }
    menu.classList.toggle('pointer-events-auto');
  });

  // Close on overlay click
  overlay.addEventListener('click', () => {
    btn.click();
  });

  // Close on link click
  document.querySelectorAll('#menu-panel a').forEach(link => {
    link.addEventListener('click', () => btn.click());
  });

 const toggle = document.getElementById('support-toggle');
  const card = document.getElementById('support-card');
  const closeCard = document.getElementById('support-close');
 const openChat   = document.getElementById('open-live-chat');
  const chat = document.getElementById('live-chat');
  const closeChat = document.getElementById('chat-close');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');
  const messages = document.getElementById('chat-messages');

  // Toggle support card
  toggle.addEventListener('click', () => {
    card.classList.toggle('opacity-0');
    card.classList.toggle('scale-90');
    card.classList.toggle('pointer-events-none');
    card.classList.toggle('opacity-100');
    card.classList.toggle('scale-100');
    card.classList.toggle('pointer-events-auto');
  });

  closeCard.addEventListener('click', () => {
    card.classList.add('opacity-0', 'scale-90', 'pointer-events-none');
    card.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
  });

  // Open live chat
  openChat.addEventListener('click', () => {
    closeCard.click();
    chat.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    chat.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    input.focus();
  });

  closeChat.addEventListener('click', () => {
    chat.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    chat.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
  });

  // Send message
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    const msg = document.createElement('div');
    msg.className = 'flex justify-end';
    msg.innerHTML = `<div class="bg-[#ff6a00] text-white rounded-2xl px-5 py-3 max-w-xs shadow">${text}</div>`;
    messages.appendChild(msg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      const bot = document.createElement('div');
      bot.className = 'flex justify-start';
      bot.innerHTML = `<div class="bg-white text-black rounded-2xl px-5 py-3 max-w-xs shadow">Thanks! An agent will be with you shortly.</div>`;
      messages.appendChild(bot);
      messages.scrollTop = messages.scrollHeight;
    }, 1000);
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', e => e.key === 'Enter' && sendMessage());