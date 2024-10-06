import { Link } from 'react-router-dom'

import Modal from "../../components/Modal"

import "./GraceInSpace.css"

export default function Trash(props) {
    return (
        <div className='project'>
            <Modal isOpen={props.isModalOpen} onClose={props.closeModal} />
            
            <Link to="/">
                <img className="rewind-icon" src="/rewind-icon.png" alt="rewind icon"/>
            </Link>
            <h2>Trash</h2>
           <div className="project-container">
               <p>Honestly not sure what to put here yet!</p>
               <img className="project-img" src="/trash.jpg" alt="Image of trash can and trash bag"/>
            </div>
        </div>
    )
}