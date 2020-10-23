import React, { useState } from 'react'

const ProfileStatus = (props) => {
    // используем хуки
    // useState возвращает массив с двумя элементами (первое это значение второе это функция которое изменяет это значение)
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onSatatusChange = (e) => {
        setStatus(e.currentTarget.value)
        // props.updateStatus(status)
    }

    // description local state and life cycle method for class component
    // state = {
    //     editMode: false,
    //     // локальный статус = статусу из пропсов (глобального стейта)
    //     status: this.props.status
    // }
    // activateEditMode = () => {
    //     // перересует компоненту (лучше не юзать, на крайний случай)
    //     // this.forceUpdate();
    //     //изменения происходящие в setState асинхронны! 
    //     this.setState({ editMode: true });
    // }
    // deactivateEditMode = () => {
    //     //изменения происходящие в setState асинхронны! 
    //     this.setState({ editMode: false });
    //     this.props.updateStatus(this.state.status)
    // }
    // onSatatusChange = (e) => {
    //     // получаем локальный стейт и меняем свойство статус значение  которое вводит пользователь
    //     this.setState({
    //         status : e.currentTarget.value
    //     })
    // }
    // //  метод перерисовывает компоненту после изменения локального стейта (предыдущий пропс и стейт )
    // componentDidUpdate(prevProps, prevState) {
    //     //  проверяем есть ли изменения в текущем state  по сравнению с предыдущем
    //     // тогда синхронизируй state
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({ 
    //             status: this.props.status
    //         })
    //     }
    // }
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