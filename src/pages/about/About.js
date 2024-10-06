import { Link } from 'react-router-dom'

import Modal from "../../components/Modal"

import "./About.css"

export default function About(props) {
    return (
        <div className='about'>
            <Modal isOpen={props.isModalOpen} onClose={props.closeModal} />

            <Link to="/">
                <img className="rewind-icon" src="/rewind-icon.png" alt="rewind icon"/>
            </Link>
           <div className="about-container">
             <h2>About Me</h2>
            <p>
            I am studying to become a Computer Science Educator in a Master's Program at Adelphi University. I believe that my background as a Front End Developer only enhances my ability to teach as I can teach from experience in the field and shine a light on accessibility, equity, and overall best practices.
            </p>
            </div>
        </div>
    )
}