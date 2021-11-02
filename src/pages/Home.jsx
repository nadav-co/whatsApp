import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';


export function Home() {
    const [value, setValue] = useState('')

    const onOpenChat = () => {
        window.open(`https://wa.me/${value}`)
    }
    return (
        <section className="home flex col center">
            <PhoneInput
                country="il"
                value={value}
                onChange={setValue}
            />
            <button onClick={onOpenChat}>Open chat</button>
        </section >
    )
}






