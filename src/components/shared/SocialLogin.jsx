"use client"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from 'next-auth/react';
import { useSearchParams } from "next/navigation";

export default function SocialLogin() {
    const searchParam = useSearchParams();
    const path = searchParam.get('redirect')

    const handleSocialLogin = async (provider) => {

        const resp = await signIn(provider,
            {
                redirect: true,
                callbackUrl: path ? path : '/'
            }
        );
    }

    return (
        <div className='flex flex-row items-center justify-evenly mt-5'>
            <button onClick={() => handleSocialLogin('facebook')}>
                <FaFacebookF className="text-2xl text-[#3B5998]" />
            </button>
            <button onClick={() => handleSocialLogin('linkedin')}>
                <FaLinkedinIn className="text-2xl text-[#0A66C2]" />
            </button>
            <button onClick={() => handleSocialLogin('google')}>
                <FcGoogle className="text-2xl" />
            </button>
            <button onClick={() => handleSocialLogin('github')}>
                <FaGithub className="text-2xl text-[#0A66C2]" />
            </button>
        </div>
    );
}
