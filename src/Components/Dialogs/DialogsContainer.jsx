import React from 'react';
import DialogItemContainer from './Dialogs/DialogItemContainer';
import cls from './Dialogs.module.scss';
import MessageContainer from './Messages/MessageContainer';
import { connect } from 'react-redux'
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

class DialogsContainer extends React.Component {
    render() {
        return (
            <div className={cls.dialogs}>
                {/* <div className={cls.dialogBlock}> */}
                    <DialogItemContainer />
                {/* </div> */}
                {/* <div className={cls.messageBlock}> */}
                    <MessageContainer />
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.auth.data
    }
}

//  оборачиваем компоненту с помощью compose
// вторым параметром передается обьект первым функции(функции применяются в обратном порядке)
export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect,
)(DialogsContainer)

// // то-же самое что и выше но только без compose
// // создается компонента с функцией редиректа на основе контейнерной компоненты
// let AuthRedirectComponent = withAuthRedirect(DialogsContainer)

// export default connect(mapStateToProps, {})(AuthRedirectComponent)

