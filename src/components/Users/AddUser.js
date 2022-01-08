import React, { useState } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import classes from './AddUser.module.css';


const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            return;
        }

        if (+enterAge < 1) {
            return;
        }
        props.click(enterUsername, enterAge);
        setEnterUsername('');
        setEnterAge('');
    }
 
        const [enterUsername, setEnterUsername] = useState('');
        const [enterAge, setEnterAge] = useState('');

        const userNameChangeHandler = (event) => {
            setEnterUsername(event.target.value);
        }

        const userAgeChangeHandler = (event) => {
            setEnterAge(event.target.value);
        }



        return (
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    {/* if we add the addUserHandler() it will parce this line ane run the function . */}
                    <label>
                        <label htmlFor="username">UserName</label>
                        <input id="username" type="text" value={enterUsername} onChange={userNameChangeHandler} />
                        <label htmlFor="age">Age</label>
                        <input id="age" type="Number" value={enterAge} onChange={userAgeChangeHandler} />
                        <Button type="submit">Add User</Button>
                    </label>
                </form>
            </Card>
        );
    };

    export default AddUser;

