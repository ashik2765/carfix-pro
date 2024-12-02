import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function OurTeam() {
    const teamMembers = [
        {
            name: 'Devid cameron',
            title: 'Engine Expert',
            image: '/assets/images/team/1.jpg', // Replace with the actual image path
        },
        {
            name: 'Jon Doe',
            title: 'Engine Expert',
            image: '/assets/images/team/2.jpg', // Replace with the actual image path
        },
        {
            name: 'Jems bond',
            title: 'Engine Expert',
            image: '/assets/images/team/3.jpg', // Replace with the actual image path
        },
    ];

    return (
        <div className="container mx-auto">
            <section className="py-12 bg-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-orange-600 text-lg font-semibold">Team</h2>
                    <h3 className="text-3xl font-bold">Meet Our Team</h3>
                    <p className="text-gray-500 mt-2">
                        The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
                        Words Which Do not Look Even Slightly Believable.
                    </p>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                        <span className="sr-only">Previous</span>
                        {/* Replace with left arrow icon */}
                        ←
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <Image

                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h4 className="text-xl font-semibold">{member.name}</h4>
                                <p className="text-gray-500 mb-4">{member.title}</p>
                                <div className="flex justify-center space-x-4 text-gray-600">
                                    <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                        <FaFacebook size={24} />
                                    </a>
                                    <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                                        <FaTwitter size={24} />
                                    </a>
                                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                        <span className="sr-only">Next</span>
                        {/* Replace with right arrow icon */}
                        →
                    </button>
                </div>
            </section>
        </div>
    );
}
