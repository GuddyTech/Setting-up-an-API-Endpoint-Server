import React from 'react'

const FormComp = () => {
    return (
        <form onSubmit={sendData}>
            <label> Enter Content
                <input name="content" type="text" />

            </label>
            <br />
            <label> Enter Date
                <input name="date" type="date" />

            </label>
           
        </form>
    )
}

export default FormComp