import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        // локальный статус = статусу из пропсов (глобального стейта)
        status: this.props.status
    }
    activateEditMode = () => {
        // перересует компоненту (лучше не юзать, на крайний случай)
        // this.forceUpdate();
        //изменения происходящие в setState асинхронны! 
        this.setState({ editMode: true });
    }
    deactivateEditMode = () => {
        //изменения происходящие в setState асинхронны! 
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status)
    }
    onSatatusChange = (e) => {
        // получаем локальный стейт и меняем свойство статус значение  которое вводит пользователь
        this.setState({
            status : e.currentTarget.value
        })
    }
    //  метод перерисовывает компоненту после изменения локального стейта (предыдущий пропс и стейт )
    componentDidUpdate(prevProps, prevState) {
        //  проверяем есть ли изменения в текущем state  по сравнению с предыдущем
        // тогда синхронизируй state
        if (prevProps.status !== this.props.status) {
            this.setState({ 
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "_____"} </span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input onChange={this.onSatatusChange} autoFocus={true} 
                                    onBlur={this.deactivateEditMode} value={this.state.status} />
                        </div>
                    }
                </div>
            </>
        )
    }
}


export default ProfileStatus