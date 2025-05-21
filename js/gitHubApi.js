const projectsContainer = document.getElementById('projects-container')



function getApiGitHub(){
    fetch('https://api.github.com/users/RafaelDesenvolvedor1/repos')
        .then(async res => {
            if(!res.ok){
                throw new Error(res.status)
            }

            let data = await res.json()

            //console.log(data)

            data.filter(i => i.private === false).map(item => {
                let project = document.createElement('div')
        

                project.innerHTML =` <div class="card grid-item" style="width: 18rem;" data-aos="fade-up" >
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${item.topics.map(t => innerHTML=`<span class='badge text-bg-primary'>${t}</span>`).join(' ')}</h6>

                <p class="card-text">
            ${item.description}</p>
                <a href="${item.homepage }" target="blank" class="card-link"><i class="fa-solid fa-link"></i></a>
                <a href="${item.html_url}" target="blank" class="card-link"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>`

                projectsContainer.appendChild(project)
            })
        })
}

getApiGitHub()