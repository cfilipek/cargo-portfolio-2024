import { Link } from 'react-router-dom'

import Modal from "../../components/Modal"

import "./Resume.css"

export default function Resume(props) {
    return (
        <div className='resume'>
            <Modal isOpen={props.isModalOpen} onClose={props.closeModal} />
            <Link to="/">
                <img className="rewind-icon" src="/rewind-icon.png" alt="rewind icon"/>
            </Link>

           <div className="about-container">
                <h2>Claire Filipek's Resume</h2>
                <p>------------------------</p>
                <h2>Experience:</h2>
                <p>------------------------</p>
                <h4>Graduate Research Assistant</h4>
                <p>Matthew Curinga @ Adelphi University</p>
                <p>2024</p> 
                <p>------------------------</p>
                <h4>Coding Instructor</h4>
                <p>The ForUsGirlsFoundation</p>
                <p>2023-2024</p>
                <p>------------------------</p>
                <h4>Jr. Developer</h4>
                <p>Halo Media LLC</p>
                <p>2021-2022</p> 
                <p>------------------------</p>
                <h4>Jr. Front End Developer</h4>
                <p>Code & Theory</p>
                <p>2020</p> 
                <p>------------------------</p>
                <h2>Education:</h2>
                <p>------------------------</p> 
                <h4>Adelphi University</h4>
                <p>2024-present</p> 
                <p>------------------------</p> 
                <h4>The Grace Hopper Program @ Fullstack Academy</h4>
                <p>2019</p> 
                <p>------------------------</p> 
                <h4>School of Visual Arts (SVA)</h4>
                <p>2013-2018</p> 
                <p>------------------------</p> 
                <p>View my LinkedIn or contact me for more information. Thank you for viewing!</p>
            </div>
        </div>
    )
}