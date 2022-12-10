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
    renderWithTemplate(footer, footerElement);
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
            weekDay = 'Sun';
            break;
        case 1:
            weekDay = 'Mon';
            break;
        case 2:
            weekDay = 'Tue';
            break;
        case 3:
            weekDay = 'Wed';
            break;
        case 4:
            weekDay = 'Thu';
            break;
        case 5:
            weekDay = 'Fri';
            break;
        case 6:
            weekDay = 'Sat';
            break;
        default:
            weekDay = 'n/a';
            break;
    }

    return weekDay;
}