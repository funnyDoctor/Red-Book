import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    onSubmitSignIn = () => {
        fetch('https://red-book-api.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    };

    render() {
        return (
            <section className={"preview"}>
                <form className={"login-form"} method={"post"}>

                    <h2 className={"login-form__header register-header"}>Регистрация</h2>

                    <div className={"login-form__all"}>
                        <i className={"login-form__icon fa fa-user"}/>
                        <input
                            onChange={this.onNameChange}
                            className={"login-form__all--input register-input"}
                            type={"text"}
                            placeholder={"Имя"}
                            required/>
                    </div>

                    <div className={"login-form__all"}>
                        <i className={"login-form__icon fa fa-at"}/>
                        <input
                            onChange={this.onEmailChange}
                            className={"login-form__all--input register-input"}
                            type={"email"}
                            placeholder={"Почта"}
                            required/>
                    </div>

                    <div className={"login-form__all"}>
                        <i className={"login-form__icon fa fa-unlock"}/>
                        <input
                            onChange={this.onPasswordChange}
                            className={"login-form__all--input register-input"}
                            type={"password"}
                            placeholder={"Пароль"}
                            required/>
                    </div>

                    <input
                        onClick={this.onSubmitSignIn}
                        type={"button"}
                        className={"btn"}
                        value={"Зарегистрироваться"}/>

                    {/*<div className={"login-form__text register-query"}>*/}
                    {/*    If you have any questions <p*/}
                    {/*    className={"login-form__text--par"}>click here</p>*/}
                    {/*</div>*/}
                </form>
            </section>
        )
    }
}

export default Register;