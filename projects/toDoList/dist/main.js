(()=>{"use strict";class e{constructor(e){this.name=e,this.toDoList=[]}createProject(n){const o=new e(n);return t.push(o),o}addToDo(e){this.toDoList.push(e)}getToDos(){return this.toDoList}getProjectName(){return this.name}}const t=[];!function(){const n=document.querySelector("#projectBar"),o=document.createElement("ul");function c(e){const t=document.createElement("li"),n=document.createElement("span"),c=document.createTextNode(e.name);n.appendChild(c),t.appendChild(n);const d=document.createElement("button"),r=document.createTextNode("Delete");d.classList.add("deleteBtn"),d.appendChild(r),t.appendChild(d),d.addEventListener("click",(()=>{o.removeChild(t)})),o.appendChild(t)}o.classList.add(".projectList"),document.querySelector("#newProjectButton").addEventListener("click",(()=>{const n=document.createElement("input");n.placeholder="Project Name",o.appendChild(n);const d=document.createElement("button"),r=document.createTextNode("Submit");d.appendChild(r),o.appendChild(d),d.addEventListener("click",(()=>{console.log(t),t.push(new e(n.value)),o.removeChild(n),o.removeChild(d),c(t[t.length-1])}))})),t.push(new e("Project1")),t[0].addToDo("Wash Dog"),t.push(new e("Project2")),t.push(new e("Project3")),n.appendChild(o),t.forEach((e=>{c(e)}))}(),function(){const e=document.querySelector("#content"),n=projectBar.querySelectorAll("ul"),o=document.createElement("ul");let c=t[0];function d(e){const t=document.createElement("li"),n=document.createTextNode(e);t.appendChild(n);const c=document.createElement("button"),d=document.createTextNode("Delete");c.classList.add("deleteBtn"),c.appendChild(d),t.appendChild(c),c.addEventListener("click",(()=>{o.removeChild(t)})),o.appendChild(t)}document.querySelector("#newToDoButton").addEventListener("click",(()=>{const e=document.createElement("input");e.placeholder="Enter information",o.appendChild(e);const t=document.createElement("button"),n=document.createTextNode("Submit");t.appendChild(n),o.appendChild(t),t.addEventListener("click",(()=>{c.getToDos().push(e.value),o.removeChild(e),o.removeChild(t),d(c.getToDos()[c.getToDos().length-1])}))})),n.forEach((e=>{e.addEventListener("click",(e=>{t.forEach((t=>{e.target.innerHTML.includes(t.name)&&(o.innerHTML="",c=t,t.getToDos().forEach((e=>{d(e)})))}))}))})),c.getToDos().forEach((e=>{d(e)})),e.appendChild(o)}()})();