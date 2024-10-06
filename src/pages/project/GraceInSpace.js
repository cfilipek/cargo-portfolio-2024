import { Link } from 'react-router-dom'

import Modal from "../../components/Modal"

import "./GraceInSpace.css"

export default function GraceInSpace(props) {
    return (
        <div className='project'>
            <Modal isOpen={props.isModalOpen} onClose={props.closeModal} />

            <Link to="/">
                <img className="rewind-icon" src="/rewind-icon.png" alt="rewind icon"/>
            </Link>

            <h2>Grace In Space</h2>
           <div className="project-container">
               {<div>TODO CREATE PROJECT HERE</div>}
            </div>
        </div>
    )
}