function newProjectList() {
  const projectList = document.createElement("div");
  projectList.addEventListener("click", () => alert("hi"));
  projectList.innerHTML = `
        <ul class="project-list__content">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>Project 4</li>
        </ul>
    `;

  return projectList;
}

export default newProjectList;
