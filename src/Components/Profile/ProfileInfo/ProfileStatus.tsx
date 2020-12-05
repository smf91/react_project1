import React, { ChangeEvent, useState } from 'react'
import { useEffect } from 'react'

type PropsType = {
    status: string
    updateStatus: (newStatus: string)=> void
}
type StateType = {
    editMode: boolean,
    status: string
}

const ProfileStatus: React.FC<PropsType & StateType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onSatatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    return (
        <>
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "_____"} </span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onSatatusChange} autoFocus={true}
                            onBlur={deactivateEditMode} value={status} />
                    </div>
                }
            </div>
        </>
    )
}

export default ProfileStatus