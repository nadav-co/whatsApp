import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';


export function Home() {
    const [value, setValue] = useState('')

    const onOpenChat = () => {
        window.open(`https://wa.me/${value}`, '_blank')
        setValue('+972')
    }

    const onPaste = (ev) => {
        ev.preventDefault()
        const val = ev.clipboardData.getData('text')
        if (!val) return
        const selectionLength = window.getSelection().toString().length
        const prevVal = ev.target.value.substring(0, value.length - selectionLength + 1)
        setValue(`${prevVal}${val.startsWith('0') ? val.substring(1) : val}`)
    }
    return (
        <section className="home flex col center">
            <PhoneInput
                country="il"
                value={value}
                inputProps={{ onPaste }}
                onChange={setValue}
            />
            <button className="blue-btn" onClick={onOpenChat}>Open chat</button>
        </section >
    )
}






