const baseUrl = "https://651da7e644e393af2d5a2461.mockapi.io/api/v1";

  const getUsers = async () => { 
      try {
          const resp = await fetch(`${baseUrl}/users`)
          const data = await resp.json();
          return data.reverse();
      
      } catch (err) {
          console.log(err);
          return [];
      }
  }
  
  
  const createUser = async(user) => { 
      if(!user.firstName) throw new Error("Enter your first name")
      if(!user.lastName) throw new Error("Enter your last name")
      
      const resp = await fetch(`${baseUrl}/users`,{
        method: "post",
        body: JSON.stringify(user), // javascript object i json string e çevirir
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
  
      const data = await resp.json();
      return data;
  }
  
  const deleteUser = async(id) => { 
    if(!id) throw new Error("Id is required")
    
    const resp = await fetch(`${baseUrl}/users/${id}`,{
      method: "delete",
    })
  
    const data = await resp.json();
    return data;
  }
  
  
  document.getElementById("btnAdd").addEventListener("click", async ()=>{
      try {
        const txtFirstName = document.getElementById("txtFirstName");
        const txtLastName = document.getElementById("txtLastName");
  
        const user = {
          firstName: txtFirstName.value,
          lastName: txtLastName.value
        }
  
        const newUser = await createUser(user);
        const strHTML = createUserCard(newUser);
  
        document.getElementById("usersEl").insertAdjacentHTML("afterbegin",strHTML);
        
      } catch (err) {
        console.log(err)
        alert(err.message);
      }
  })
  
  
  const loadUserData =  async () => { 
      const users  = await getUsers();
      let strHTML = "";
  
      users.forEach( (user)=>{
          strHTML += createUserCard(user)
      })
  
      document.getElementById("usersEl").innerHTML = strHTML;
      createDeleteEvents();
  }
  
  
  const createUserCard = (user) => { 
    const { avatar, firstName, lastName, id } = user;
    return `<div class="col-6 col-md-3 user" data-id="${id}">
          <button class="btn btn-light btn-delete">❌</button>
          <div class="card">
            <img src="${avatar}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${firstName} ${lastName}</h5>
            </div>
          </div>
        </div>`
  
  }

  const createDeleteEvents = () => { 
    
    document.querySelectorAll(".btn-delete").forEach( (item)=>{
      item.addEventListener("click", (e)=>{

        const result = confirm("Are you sure to delete?");
        if(!result) return;


        const userEl = item.closest(".user");
        const id = userEl.getAttribute("data-id");
        deleteUser(id);
        userEl.remove();
      });
    })
  }
  
  
  
  
   loadUserData();
   