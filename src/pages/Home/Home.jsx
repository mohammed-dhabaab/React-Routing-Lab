import React from 'react'
import styles from '../../styles'
import { FaCode } from "react-icons/fa6";

function Home() {
    const skills = ["React", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "Boostrap", "CSS", "HTML"]
    return (
        <main className={`${styles.outerWrapper}`}>
            <a target='_blenk' href='https://github.com/Tuwaiq-Content/JavaScript-FullStack?tab=readme-ov-file' className={`${styles.wrapper} max-w-[800px] flex flex-col gap-4 items-center  sm:flex-row bg-secondary p-5 rounded-lg`}>
                <div>
                    <FaCode size={140} fill='rgb(78, 55, 151)' />
                </div>

                <div className='flex flex-col gap-6'>
                    <div>
                        <h1 className={`text-3xl mb-2 font-semibold`}>JavaScript FullStack</h1>
                        <p className={`md:text-xl`}>Learn how to build user-centred a full-stack application with our JavaScript bootcamp at Tuwaiq </p>

                    </div>

                    <ul className='flex gap-2 flex-wrap items-center'>
                        {skills.map((skill, index) => {
                            return (
                                <li key={index} className='bg-primary text-white font-medium py-1 px-2 rounded-md'>{skill}</li>
                            )
                        })}

                    </ul>
                </div>

            </a>
        </main>
    )
}

export default Home