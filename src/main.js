import api from './api'

  async function renderExperience() {
    const response = await api.get("http://demo7006223.mockable.io/");
    let data = response.data;

    let title = document.createElement('h1');
    let texto = document.createTextNode("Experiência");
    title.appendChild(texto);

    let company = document.createElement('h2')
    company.appendChild(document.createTextNode(data[0].company));
    let ocupation = document.createElement('h3')
    ocupation.appendChild(document.createTextNode(data[0].ocupation));
    let activities = document.createElement('span')
    activities.appendChild(document.createTextNode(data[0].activities));
    activities.setAttribute('class', 'activities-1')

    let company2 = document.createElement('h2')
    company2.appendChild(document.createTextNode(data[1].company));
    company2.setAttribute('class', 'company-1');

    let ocupation2 = document.createElement('h3')
    ocupation2.appendChild(document.createTextNode(data[1].ocupation));
    let activities2 = document.createElement('span')
    activities2.appendChild(document.createTextNode(data[1].activities));
    activities2.setAttribute('class', 'activities-2');
    
    let experiencias = document.createElement('div');
    experiencias.appendChild(title);

    experiencias.appendChild(company);
    experiencias.appendChild(ocupation);
    experiencias.appendChild(activities);

    experiencias.appendChild(company2);  
    experiencias.appendChild(ocupation2);
    experiencias.appendChild(activities2);


    let titleSkills = document.createElement('h1');
    let textoSkills = document.createTextNode("Habilidades Técnicas");
    titleSkills.appendChild(textoSkills);

    let es6 = document.createElement('li')
    es6.appendChild(document.createTextNode(data[2].es6));
    let html = document.createElement('li')
    html.appendChild(document.createTextNode(data[2].html));
    let css = document.createElement('li')
    css.appendChild(document.createTextNode(data[2].css));
    let react = document.createElement('li')
    react.appendChild(document.createTextNode(data[2].react));
    let node = document.createElement('li')
    node.appendChild(document.createTextNode(data[2].node));

    let skill = document.createElement('ul');
    skill.appendChild(titleSkills);
    skill.appendChild(es6);
    skill.appendChild(html);
    skill.appendChild(css);
    skill.appendChild(react);
    skill.appendChild(node);

    document.getElementById('experience').appendChild(experiencias)
    document.getElementById('skills').appendChild(skill)
  }

  renderExperience();





