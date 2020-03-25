import React from "react";
import 'font-awesome/css/font-awesome.min.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    };

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    };

    onSubmitSignIn = () => {
        fetch('https://red-book-api.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    };

    render() {
        const {onRouteChange} = this.props;
        return (
            <section className={"preview"}>
                <form className={"login-form"} method={"post"}>


                    <h2 className={"login-form__header"}>Войти</h2>

                    <div className={"login-form__all"}>
                        <i className={"login-form__icon fa fa-at"}/>
                        <input
                            onChange={this.onEmailChange}
                            className={"login-form__all--input"}
                            type={"text"}
                            placeholder={"Почта"}
                            required
                        />
                    </div>

                    <div className={"login-form__all"}>
                        <i className={"login-form__icon fa fa-lock"}/>
                        <input
                            onChange={this.onPasswordChange}
                            className={"login-form__all--input"}
                            type={"password"}
                            placeholder={"Пароль"}
                            required
                        />
                    </div>

                    <input onClick={this.onSubmitSignIn}
                           type={"button"}
                           className={"btn"}
                           value={"Войти"}
                    />

                    <div className={"login-form__text"}>
                        Нет аккаунта? <p
                        onClick={() => onRouteChange("signup")}
                        className={"login-form__text--par"}>зарегистрироваться</p>
                    </div>
                </form>
            </section>
        )
    }
}


export default Signin;