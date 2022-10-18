import React, { useEffect, useState } from 'react'

export const InstallAlert = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(!!window.installationEvent)
    }, [window.installationEvent])

    const onClick = () => {
        window.installationEvent?.prompt()
    }
    if (!isVisible) return null

    return (
        <div className="install-alert">
            <button className="blue-btn" onClick={onClick}>Add to home screen</button>
            <strong> - for quick access</strong>
        </div>
    )
}
