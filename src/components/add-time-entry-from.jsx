import React, { useState } from 'react';
import firebase from '../firebase'

const AddTimeEntryForm = () => {
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')


    function onnSubmit(e){
        e.preventDefault()

        firebase
            .firestore()
            .collection('times')
            .add({
                title,
                time_seconds: parseInt(time)
            })
            .then(()=>{
                setTitle('')
                setTime('')
            })
    }


    return(
        <div>
        <h1>Add Time Entry </h1>


        <form onSubmit={onnSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={ e => setTitle(e.currentTarget.value)} />
            </div>
            <div>
                <label>Time</label>
                <input type="number" value={time} onChange={ e => setTime(e.currentTarget.value)}/>
            </div>
            <button>Add Time Entry</button>
        </form>
        </div>

    );

}

export default AddTimeEntryForm;