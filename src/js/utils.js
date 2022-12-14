function convertToText(res) {
    if (res.ok) {
        return res.text();
    } else {
        throw new Error('Bad Response');
    }
}

export async function loadTemplate(path) {
    const html = await fetch(path).then(convertToText);
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
}

export function renderWithTemplate(template, parent, data, callback) {

    let clone = template.content.cloneNode(true);
    if(callback) {
        clone = callback(clone, data);
    }
    parent.appendChild(clone);
}

export async function loadHeaderFooter() {
    const footer = await loadTemplate('../partials/footer.html');
    const footerElement = document.getElementById('main-footer');
    const header = await loadTemplate('../partials/header.html');
    const headerElement = document.getElementById('main-header');
    renderWithTemplate(footer, footerElement);
    renderWithTemplate(header, headerElement);
}

export function renderListWithTemplate(template, parent, list, callback) {
    // console.log('template', template);
    // console.log('parent', parent);
    // console.log('list', list);
    // console.log('callback', callback);
    list.forEach(item => {
        const clone = template.content.cloneNode(true);
        const templateWithData = callback(clone, item);
        parent.appendChild(templateWithData);
    })
}

export function getDayOfTheWeek(object) {
    let weekDay;
    let date = new Date(object.dt_txt);
    let dayOfTheWeek = date.getDay();

    switch (dayOfTheWeek) {
        case 0:
            weekDay = 'Sunday';
            break;
        case 1:
            weekDay = 'Monday';
            break;
        case 2:
            weekDay = 'Tuesday';
            break;
        case 3:
            weekDay = 'Wednesday';
            break;
        case 4:
            weekDay = 'Thursday';
            break;
        case 5:
            weekDay = 'Friday';
            break;
        case 6:
            weekDay = 'Saturday';
            break;
        default:
            weekDay = 'n/a';
            break;
    }

    return weekDay;
}