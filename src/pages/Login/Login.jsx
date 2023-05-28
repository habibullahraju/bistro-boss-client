import React, {useContext, useEffect, useRef, useState} from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import {AuthContext} from "../../Providers/AuthProvider";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import Swal from 'sweetalert2'

const Login = () => {
  const [disable, setDisable] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
            title: 'User Login Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    console.log(value);
    if (validateCaptcha(value) === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
            <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <LoadCanvasTemplate />

                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type the captcha above"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disable}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
            </form>
            <p>
              <span>
                New here? <Link to="/signup">Create an account</Link>
              </span>
            </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
