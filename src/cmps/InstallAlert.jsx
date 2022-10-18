import React from 'react'

export const InstallAlert = () => {

    const onClick = () => {
        console.log('hi', window.installationEvent);
    }

    return (
        <div className="install-alert">
            <button onClick={onClick}>Add to home screen</button>
        </div>
    )
}
