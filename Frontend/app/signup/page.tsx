"use client";



export default function SignUp() {




  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] p-6 text-white">
      
      <div className="fixed top-0 left-0 h-full w-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md space-y-8 rounded-3xl border border-white/10 bg-white/[0.02] p-10 backdrop-blur-2xl shadow-2xl">
        
        
        <div className="text-center">
          <h2 className="text-4xl font-extrabold">
            Create Account
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            
             
              Join our community today
          </p>
        </div>

        
        <form className="space-y-5" >
            <div className="grid gap-4">
              <input
             
                type="text"
                placeholder="Full Name"
                className="rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-indigo-500"
              />
            
            </div>
        

        
          <input
       
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-indigo-500"
          />

          <input
       
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 outline-none focus:border-indigo-500"
          />

        
          <button className="w-full rounded-xl bg-indigo-600 p-3 font-bold hover:bg-indigo-500 transition"
          type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          
           "Already have an account?"
           <a href="/signin"> Sign In </a>
           </p>

        
      </div>
    </div>
  );
}