import React, { useState } from 'react'

export const InstallAlert = () => {
    const [isVisible, setIsVisible] = useState(true)

    const onClick = () => {
        window.installationEvent?.prompt()
        window.installationEvent?.userChoice.then(({ outcome }) => (outcome === 'accepted') && setIsVisible(false))
    }

    if (!window.installationEvent || !isVisible) return null

    return (
        <div className="install-alert">
            <button className="blue-btn" onClick={onClick}>Add to home screen</button>
            <strong> - for quick access</strong>
        </div>
    )
}
