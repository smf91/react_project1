import React from 'react';
import DialogItemContainer from './DialogItem/DialogItemContainer';
import cls from './Dialogs.module.scss';
import MessageItemContainer from './MessageItem/MessageItemContainer';

const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogBlock}>
                <DialogItemContainer />
            </div>
            <div className={cls.messageBlock}>
                <MessageItemContainer />
            </div>
        </div>
    )
}

export default Dialogs;
