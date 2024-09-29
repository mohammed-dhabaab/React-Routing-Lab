import React from 'react'
import styles from '../../styles'

function Sign() {
    return (
        <main className={`${styles.outerWrapper}`}>
            <div className={`${styles.wrapper} bg-secondary max-w-[600px] p-5 gap-10 rounded-lg flex flex-col`}>
                <h2 className='text-center text-3xl font-semibold'>Risgester</h2>
                <div className='flex flex-col gap-4'>
                    <input className={`${styles.input}`} type="text" placeholder='Username' />
                    <input className={`${styles.input}`} type="email" name="email" id="email" placeholder='Email' />
                    <input className={`${styles.input}`} type="password" name="" id="" placeholder='Password' />
                    <button className={`${styles.primaryButton} font-medium`}>Submit</button>
                </div>
            </div>
        </main>
    )
}

export default Sign