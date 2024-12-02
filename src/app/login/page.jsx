"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import SocialLogin from "@/components/shared/SocialLogin";
import { Suspense } from "react";

function SearchParamsHandler({ setPath }) {
  const searchParams = useSearchParams();
  const path = searchParams?.get("redirect") || "/";
  setPath(path);
  return null;
}

export default function LoginPage() {
  const router = useRouter();
  const [path, setPath] = React.useState("/");

  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path,
    });

    if (resp.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler setPath={setPath} />
      </Suspense>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:text-left">
            <Image
              src="/assets/images/login/login.svg"
              width={460}
              height={502}
              alt="Login Image"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={loginHandler} className="card-body">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center">
              <p>Or Sign In with</p>
              <SocialLogin />
              <p className="mt-5">
                Don&apos;t have an account?{" "}
                <Link href="/signUp">
                  <span className="text-primary">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
