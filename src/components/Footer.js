import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.instagram.com/_shiva_.07/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shivam-choudhary-1423611b5/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
