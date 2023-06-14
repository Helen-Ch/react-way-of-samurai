import React from "react";
// import {Form, Field} from "react-final-form";
import {Field, reduxForm} from "redux-form";


export const LoginForm = (props) => {
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} name={"login"} component={"input"}/></div>
                <div><Field placeholder={"Password"} name={"password"} component={"input"}/></div>
                <div><label><Field  component={"input"} name={"rememberMe"} type="checkbox" />remember me</label></div>
                <div>
                    <button>Login</button>
                </div>
            </form>

        </div>
    );
}

export const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

export const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}