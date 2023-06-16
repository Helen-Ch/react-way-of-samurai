import React from "react";
// import {Form, Field} from "react-final-form";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={"Login"} name={"email"} component={Input} validate={[required]}/></div>
                <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}
                            type={"password"}/></div>
                <div><label><Field component={Input} name={"rememberMe"} type="checkbox"/>remember me</label></div>
                {props.error && <div>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>

        </div>
    );
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        // props.login comes from connect mapDispatchToProp
        props.login(formData.email, formData.password, formData.rememberMe);
    }
console.log(props);
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);