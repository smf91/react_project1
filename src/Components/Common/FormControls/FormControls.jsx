import React from 'react'
import cls from './FormControls.module.scss'

//  с помощю rest оператора достаем input meta а пропсы оставляем
export const Textarea = ({input, meta, ...props}) => {
    let hasErr = meta.touched && meta.error
    return (
        <div className={cls.formBlock}>
            <div className={cls.formControl}>
                <textarea {...input} {...props}/>
            </div>
            { hasErr && <div className={cls.msgError}>error!</div>}
        </div>
    )
}