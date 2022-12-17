import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../stores/actions/user/actionCreator";

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  function handleChangeInput(e) {
    const { name, value } = e.target
    const newInput = {
      ...formLogin,
      [name]: value
    }
    setFormLogin(newInput)
  }

  async function handleLogin(e) {
    try {
      e.preventDefault()
      console.log(formLogin);
      const data = await dispatch(loginUser(formLogin))
      console.log('data', data);
      if(!data) throw new Error('Invalid email/password')
      else {
        localStorage.setItem("access_token", data.access_token)
        navigate('/products')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Sign In</h1>

          </div>

          <form onSubmit={handleLogin} className="max-w-md mx-auto mt-8 mb-0 space-y-4">
            <div>
              <label className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  name="email"
                  value={formLogin.email}
                  onChange={handleChangeInput}
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  value={formLogin.password}
                  onChange={handleChangeInput}
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">

              <button
                type="submit"
                className="w-full px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
