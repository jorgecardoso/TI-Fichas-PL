
  const listItems = document.querySelectorAll('li');

  listItems.forEach((li, index) => {
    if (li.querySelector('input[type="checkbox"]')) {
      return;
    }

    const storageKey = `li-checkbox-${index}`;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = localStorage.getItem(storageKey) === 'true';

    checkbox.addEventListener('change', () => {
      localStorage.setItem(storageKey, String(checkbox.checked));
    });

    li.appendChild(checkbox);
  });

