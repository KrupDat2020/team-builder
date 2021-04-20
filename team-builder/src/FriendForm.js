import React from 'react';

const { values, update, submit } = props

const onChange = event => {
    const { name, value } = event.target
    update(name, value)
}

const onSubmit = event => {
    event.preventDefault()
    submit()
}

return (
    <form className='form-container' onSubmit={onSubmit}>
        <div className='form-group inputs'>
            <label>Username
                <input
                type='text'
                value={values.username}
                onChange={onChange}
                name='username' />
            </label>
            <label>Email
               <input
                 type='text'
                 value={values.email}
                 onChange={onChange}
                name='email' />
            </label>
            <label>Role
             <select value={values.role} name='role'
             onChange={onChange}>
                 <option value=''>--Select a Role--</option>
                 <option value='Student'>Student</option>
                 <option value='Teacher'>Teacher</option>
                 <option value='Alumni'>Alumni</option>
             </select>
            </label>
            <div className='submit'>
                <button disabled={!values.username || !values.email || !values.role}>Submit</button>
            </div>
        </div>
  </form>
)
