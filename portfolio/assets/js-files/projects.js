// fetch projects using the fetch api
fetch('/projects')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    console.log(data)
    document.dispatchEvent(new Event('dataLoaded'));
  })
  .catch(err => { console.error(err); });

document.addEventListener('dataLoaded', function () {

  data.forEach(projectData => {
    // Create new elements for each project
    const span = document.createElement("span");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");
    const h6 = document.createElement("p");
    const h51 = document.createElement("h5");
    const span1 = document.createElement("span");
    const projects = document.createElement("div")
    const section2 = document.getElementById("completed")
    projects.id = 'projects';
    projects.classList.add("projects");

    // manipulate data fetched
    span.classList.add("img-cont");
    img.src = projectData.image.url;
    img.setAttribute('alt', projectData.image.alt);
    span.appendChild(img);

    div.classList.add("description");

    h5.textContent = projectData.description.h5;
    p.textContent = projectData.description.p;
    h6.textContent = projectData.description.h6;

    h51.textContent = projectData.description.h51.tools;
    let list = projectData.description.h51.list.split(' ');
    list.forEach(item => {
      const boldText = document.createElement('b');
      boldText.textContent = item;
      h51.appendChild(boldText);
    });

    span1.classList.add('source');

    let a = `<a href= ${projectData.description.source.a} class="first" target="_blank"><i class="fab" style="font-size:30px;">&#xf092;</i></a>`;
    let a1 = `<a href= ${projectData.description.source.a1} class="second"><i class='fas' style="font-size:30px;">&#xf0c1;</i></a>`;

    span1.innerHTML = a + a1;

    div.append(h5, p, h6, h51, span1);
    projects.append(span, div)
    section2.append(projects)
  });
});
