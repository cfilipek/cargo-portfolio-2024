import { Link } from 'react-router-dom'

import BackgroundVideo from "../../components/BackgroundVideo"
import Modal from "../../components/Modal"

import "./Home.css"

export default function Home(props) {
    return (
        <div className='home'>
            <Modal isOpen={props.isModalOpen} onClose={props.closeModal} />

            <BackgroundVideo />
           <div className="icons-container">

               <a href='https://claires-cs-education-portfolio.netlify.app/projects/6LKLPEMS3k5G03NaMOU9' target="_blank" rel="noreferrer">
                    <div className="folder-container">
                        <img className="folder-icon" src="/folder-icon.png" alt="Mac Folder Icon"/>
                        <p>Grace In Space</p>
                    </div>
                 </a>

                <a href="https://claires-cs-education-portfolio.netlify.app/" target="_blank" rel="noreferrer">
                    <div className="folder-container">
                        <img className="folder-icon" src="/folder-icon.png" alt="Mac Folder Icon"/>
                        <p>Computer Science Teaching Portfolio</p>
                    </div>
                 </a>

                 <Link to="/resume">
                    <div className="folder-container">
                        <img className="folder-icon" src="/hammer-icon.png" alt="Mac Folder Icon"/>
                        <p>Resume</p>
                    </div>
                 </Link>

                 <Link to="/about">
                    <div className="folder-container">
                        <img className="folder-icon" src="/edit-icon.png" alt="Mac Folder Icon"/>
                        <p>About</p>
                    </div>
                 </Link>

                 <Link to="/trash">
                    <div className="folder-container">
                        <img className="trash-icon" src="/trash-icon.png" alt="Mac Folder Icon"/>
                        <p>Trash</p>
                    </div>
                 </Link>
            </div>
        </div>
    )
}