import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../stores/actions/user/actionCreator";

export default function RegisterPage() {
  const dispatch = useDispatch()
  const [formUser, setFormUser] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    Address: ''
  })

  function handleChangeInput(e) {
    const { name, value } = e.target
    const newInput = {
      ...formUser,
      [name]: value
    }

    setFormUser(newInput)
  }

  function handleAddUser(e) {
    e.preventDefault()
    const newInput = {
      ...formUser,
      role: 'Admin'
    }

    dispatch(addUser(newInput))
    setFormUser({
      username: '',
      email: '',
      password: '',
      phoneNumber: '',
      Address: ''
    })
  }
  
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-center">Register Admin</h1>

      <form onSubmit={handleAddUser} className="flex flex-col">
        <label className="mt-3 mb-1 font-medium">Username</label>
        <input
          name="username"
          value={formUser.username}
          onChange={handleChangeInput}
          type="text"
          placeholder="john_doe"
          className="input input-bordered"
        />

        <label className="mt-3 mb-1 font-medium">Email</label>
        <input
          name="email"
          value={formUser.email}
          onChange={handleChangeInput}
          type="email"
          placeholder="johndoe@mail.com"
          className="input input-bordered"
        />

        <label className="mt-3 mb-1 font-medium">Password</label>
        <input
          name="password"
          value={formUser.password}
          onChange={handleChangeInput}
          type="password"
          placeholder="Minimal 5 characters"
          className="input input-bordered"
        />

        <label className="mt-3 mb-1 font-medium">Phone Number</label>
        <input
          name="phoneNumber"
          value={formUser.phoneNumber}
          onChange={handleChangeInput}
          type="tel"
          placeholder="081xxx"
          className="input input-bordered"
        />

        <label className="mt-3 mb-1 font-medium">Address</label>
        <input
          name="Address"
          value={formUser.Address}
          onChange={handleChangeInput}
          type="text"
          placeholder="Jakarta"
          className="input input-bordered"
        />

        <div className="flex gap-2 mt-4">
          <button type="submit" className="btn btn-info">Submit</button>
        </div>
      </form>
    </>
  );
}
