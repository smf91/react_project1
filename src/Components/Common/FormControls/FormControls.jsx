import React from 'react'
import cls from './FormControls.module.scss'

//  с помощю rest оператора достаем input meta а пропсы оставляем
export const Textarea = ({ input, meta, ...props }) => {
    let hasErr = meta.touched && meta.error
    return (
        <div className={cls.formBlock}>
            <div className={cls.formControl + " " + (hasErr ? cls.fieldError : " ")}>
                <textarea {...input} {...props} />
            </div>
            { hasErr && <div className={cls.msgError}>{meta.error}</div>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    let hasErr = meta.touched && meta.error
    return (
        <div className={cls.formBlock}>
            <div className={cls.formControl + " " + (hasErr ? cls.fieldError : " ")}>
                <input {...input} {...props} />
                { hasErr && <div className={cls.msgError1}>{meta.error}</div>}
            </div>
            {/* { hasErr && <div className={cls.msgError1}>{meta.error}</div>} */}
        </div>
    )
}