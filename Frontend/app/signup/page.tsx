import FormCard from "../components/FormCard";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <FormCard>
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white focus:outline-none" type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white focus:outline-none" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 rounded bg-white bg-opacity-20 text-white focus:outline-none" type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn-primary w-full">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-white">
          <a className="underline" href="/signin">Already have an account? Sign In</a>
        </p>
      </FormCard>
    </div>
  );
}
