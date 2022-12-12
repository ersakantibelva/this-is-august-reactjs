export default function FormAdmin() {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4 text-center">Register Admin</h1>

      <form className="flex flex-col">
        <label className="font-medium mb-1 mt-3">Email</label>
        <input
          type="email"
          placeholder="John Doe"
          className="input input-bordered"
        />

        <label className="font-medium mb-1 mt-3">Password</label>
        <input
          type="password"
          placeholder="Minimal 5 characters"
          className="input input-bordered"
        />

        <div className="flex gap-2 mt-4">
          <button className="btn btn-info">Submit</button>
          <button className="btn btn-error">Cancel</button>
        </div>
      </form>
    </>
  );
}
