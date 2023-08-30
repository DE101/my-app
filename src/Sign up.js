import React from "react";


export default function Signup() {
    const [name, setName] = React.useState(0);
    const [email, setEmail] = React.useState(0);

    function updateCount(elem) {
        setName(elem.target.value);
    }
    function updateEmail(elem) {
        setEmail(elem.target.value);
    }
    function submitForm(event){
        event.preventDefault();
        const payLoad = {name, email};
        console.log(payLoad);

        fetch ("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));

    }



    return (
        <form onSubmit={submitForm} action="./signup.php">
            <div className="control">
                <label>Name:</label> {" "}
                <input required onChange={updateCount} type="text"/>
            </div>
            <div className="control">
                <label>Email:</label> {" "}
                <input required onChange={updateEmail} type="email"/>
            </div>
            <div className="control">
                <input type="submit"/>
            </div>
        </form>
    );
};