import React from 'react'

import { FaGithub } from "react-icons/fa6";


const Hero = () => {
  return (
    <section className="pt-36 pb-24 bg-stone-50">
    <div className="container mx-auto flex flex-col items-center text-center space-y-8 ">
      <div className="bg-amber-100 border border-stone-200 h-16 w-16 rounded-full flex justify-center items-center text-3xl">
        👋
      </div>
      <h1 className="text-7xl font-bold text-stone-800">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-stone-500">
        React と Tailwind CSS が好きな、初心者プログラマの 青柳です
      </p>
      <a
        className="bg-emerald-600 text-white py-3 px-6 flex items-center rounded-lg hover:bg-emerald-700"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-6 h-6 mr-2" />
        GitHub
      </a>
    </div>
  </section>
  )
}

export default Hero