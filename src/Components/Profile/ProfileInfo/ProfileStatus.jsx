import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
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
        this.setState({
            status: e.currentTarget.value
        })
    }
    //  метод перерисовывает компоненту после изменения локального стейта (предыдущий пропс и стейт )
    componentDidUpdate(prevProps, prevState) {
        //  проверяем есть ли изменения в текущем state  по сравнению с предыдущем
        // тогда синхронизируй state
        if (prevProps.status !== this.state.status) {
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
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "ooooo"} </span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input onChange={this.onSatatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.status} />
                        </div>
                    }
                </div>
            </>
        )
    }
}


export default ProfileStatus