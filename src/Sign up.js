import React from "react";



export default function Signup() {
    const [name, setCount] = React.useState(0);
    const [email, setEmail] = React.useState(0);

    function updateCount(elem) {
        setCount(elem.target.value);
    }
    function updateEmail(elem) {
        setEmail(elem.target.value);
    }
    function submitForm(event){
        event.preventDefault();
        const payLoad = {name, email};
        console.log(payLoad);
    }
    return (
        <form onSubmit={submitForm} action="./signup.php">
            <div className="control">
                <label>Name:</label> <input required onChange={updateCount()} type="text"/>
            </div>
            <div className="control">
                <label>Email:</label> <input required onChange={updateEmail()} type="email"/>
            </div>
            <div className="control">
                <input type="submit"/>
            </div>
        </form>
    );
};