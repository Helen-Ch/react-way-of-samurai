import React from 'react';

import styles from './FormsControls.module.css';

const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>{props.children}</div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input = (props) => {
    return (
        <FormControl {...props}>
            <input {...props.input} {...props}/>
        </FormControl>
    )
}