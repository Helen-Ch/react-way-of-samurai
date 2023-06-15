import React from "react";
// import {Form, Field} from "react-final-form";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/></div>
                <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/></div>
                <div><label><Field  component={Input} name={"rememberMe"} type="checkbox" />remember me</label></div>
                <div>
                    <button>Login</button>
                </div>
            </form>

        </div>
    );
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

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