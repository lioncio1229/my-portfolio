import React from 'react';
import CreateIcon from '../Icons/create.svg';
import CloseIcon from '../Icons/close.svg';
import { useRef } from 'react';


const CreateNote = ({handleAddNote, hideCreateNote}) => {
    const textFieldRef = useRef();

    const addNote = () => {
        handleAddNote(textFieldRef.current.value);
        textFieldRef.current.value = '';
        hideCreateNote();
    }

    return ( 
        <div className='window'>
            <div className='window-title'>
                TITLE
                <img style={{left : '12px'}} src={CreateIcon} alt="Create" width={27} height={27}/>
                <img onClick={hideCreateNote} style={{right : '12px', cursor : 'pointer'}} src={CloseIcon} alt="Close" width={23} height={23}/>
            </div>
            <input ref={textFieldRef} className='text-field-1 make-center' type="text" placeholder='Your note' autoComplete='off'/>
            
            <div style={{marginTop : '30px'}}>
                <div onClick={() => addNote() } className='button button-s2 make-center'> ADD </div>
            </div>
        </div>
     );
}

export default CreateNote;
