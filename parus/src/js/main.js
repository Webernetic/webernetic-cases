export const debounce = (func, wait = 250) => {
    let timeout;
    return (...args) => {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const createItem = (text) => {
    return (
        `
                <li>
                    ${text}
                </li>
            `
    )
}

export const actionClasses = (keys, add) => {
    const method =
        add === undefined ? 'toggle' : add ? 'add' : 'remove';

    const keysArray = Array.isArray(keys) ? keys : [keys];

    keysArray.forEach((key) => {
        const { element, toggleClass } = key;

        if (element && toggleClass) {
            element.classList[method](toggleClass);
        }
    });
};

export const showSlideTitle = (index, titles, badge, actionClass) => {
    if (!(badge && index !== undefined && titles.length > 0)) return

    const { firstChild, lastChild } = badge;

    if (titles[index]) {
        firstChild.textContent = index + 1;
        lastChild.textContent = titles[index];

        actionClasses([
            {
                element: firstChild,
                toggleClass: actionClass,
            },
            {
                element: lastChild,
                toggleClass: actionClass,
            }
        ], true)

    }

    document.addEventListener('animationend', () => {
        actionClasses([
            {
                element: firstChild,
                toggleClass: actionClass,
            },
            {
                element: lastChild,
                toggleClass: actionClass,
            }
        ], false)
    });

}