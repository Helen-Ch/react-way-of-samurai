import React from "react";
// import {Form, Field} from "react-final-form";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input)}
                {createField("Password", "password", [required], Input, {type: "password"})}
                {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

                {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input)}

                {error && <div>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>

        </div>
    );
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        // console.log(formData);
        // props.login comes from connect mapDispatchToProp
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);