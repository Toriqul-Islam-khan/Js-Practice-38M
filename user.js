const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))

}
const displayUser = (user) => {
    const userContainer = document.getElementById('userContainer')

    const element = userContainer.innerHTML = `
    <img src="${user.results[0].picture.large}"/>
    <li> Email: ${user.results[0].email}
    <li> Name: ${user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last}
    <li> Gender: ${user.results[0].gender}
    <li> Location: ${user.results[0].location.city}
    
   
    
    `;

    //const gender = user.results[0].gender;
    console.log(user);
    userContainer.appendChild(element);
}
loadUser();