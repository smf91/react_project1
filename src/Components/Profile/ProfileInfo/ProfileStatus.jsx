import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        //изменения происходящие в setState асинхронны! 
        this.setState({ editMode: true });
    }
    deactivateEditMode = () => {
        //изменения происходящие в setState асинхронны! 
        this.setState({ editMode: false });
    }
    // перересует компоненту (лучше не юзать, на крайний случай)
    // this.forceUpdate();
    render() {

        return (
            <>
                <div>
                    {this.state.editMode
                        ? <div> <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} /></div>
                        : <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                    }
                </div>
            </>
        )
    }
}


export default ProfileStatus