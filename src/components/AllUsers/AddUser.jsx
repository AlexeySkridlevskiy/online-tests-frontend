import React, {useState} from "react";

function AddUser(){

    const [user, setUser] = useState({
        name : "",
        email : "",
    });

    function submit(event){
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: {"name": user.name},
        };
        
        fetch("http://localhost:8080/user/save", options)
        .then(res => res.json())
        .then(data => setUser(data.name, data.email));
    }

    function handle(event) {
        console.log(event)
        const newData = {...user}
        newData[event.target.id] = event.target.value
        setUser(newData)
        console.log(newData);
    }

    return(
        <form method="POST" onSubmit={(event)=>submit(event)}>
            <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange = {(event) => handle(event)}
                    value = {user.name}
                />
            <label>Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    onChange = {(event) => handle(event)}
                    value = {user.email}
                />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddUser