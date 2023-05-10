const getPeople = () =>{
    const resp = fetch("https://reqres.in/api/users?page=2");
    resp.then(response => response.json())
    .then((dataPeople) =>{
        let content = "";
        for(person of dataPeople.data){
            content += `<div class="col-4 pt-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${person.first_name} ${person.last_name}</h5>
                <p class="card-text"><b>Email: </b>${person.email}</p>
                <button
                  type="button" 
                  class="btn btn-primary" data-bs-toggle="modal" onclick="findById(${person.id})" data-bs-target="#moreInfModal">Más información</button>
              </div>
            </div>
          </div>`
        }
        $("#cont").html(content);
    })
}

const findById = (id) =>{
    const resp = fetch(`https://reqres.in/api/users/${id}`);
    resp.then(response => response.json())
    .then((resp) =>{
        document.getElementById("idValue").innerHTML = `<b>Id: </b> ${resp.data.id}`
        document.getElementById("emailValue").innerHTML = `<b>Email: </b>${resp.data.email}`
        document.getElementById("nameValue").innerHTML = `<b>Nombre: </b>${resp.data.first_name} ${resp.data.last_name}`
        document.getElementById("img").src = resp.data.avatar

        let myModal = new bootstrap.Modal(document.getElementById('moreInfModal'), options)
        myModal.show()
    })
}

