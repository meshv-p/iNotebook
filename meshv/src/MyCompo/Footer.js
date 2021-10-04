import React from 'react'

export default function Footer(props) {
    return (
        <div className={`text-${props.mode === "light" ? 'light' : "dark"} `}>
                <p>This is footer</p>
        </div>
    )
}
