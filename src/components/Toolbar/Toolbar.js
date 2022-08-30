import React, { useState, useCallback, useRef, useEffect } from 'react'
import './styles/Toolbar.css'

import Draggable from 'react-draggable'
import { Popup } from "@progress/kendo-react-popup";

const Toolbar = () => {
    const [position, setPosition] = useState({ x: (window.innerWidth || document.documentElement.clientWidth) - 30, y: 0.9 * ((window.innerHeight || document.documentElement.clientHeight) - 100)})
    const [click, setClick] = useState(false)
    const [startDrag, setStartDrag] = useState(false)
    const [paused, setPaused] = useState(false)
    const [text, setText] = useState('')

    const stateRef = useRef()
    const tool = useRef()

    const msg = new SpeechSynthesisUtterance()

    stateRef.current = position

    useEffect(() => {
        const page = window.location.href.split('/').pop()
        setText(page)
    }, [])

    const handlePlay = (msg) => {
        msg.text = "Hello everyone this is the read aloud feature. Let's see how this works," + text
        window.speechSynthesis.speak(msg)
    }

    const handlePause = () => {
        setPaused(true)
        window.speechSynthesis.pause()
    }

    const handleResume = () => {
        setPaused(false)
        window.speechSynthesis.resume()
    }

    const handleCancel = () => {
        window.speechSynthesis.cancel()
    }

    const handleOnStop = useCallback((e, data) => {
        const documentElement = document.documentElement
        const wrapperHeight = (window.innerHeight || documentElement.clientHeight)
        const wrapperWidth = (window.innerWidth || documentElement.clientWidth)

        const center = {
            x: data.x + (30 / 2),
            y: data.y + (30 / 2),
        }

        const margin = {
            left: center.x - 0,
            bottom: wrapperHeight - center.y,
            right: wrapperWidth - center.x
        }

        const positions = {
            left: { x: 0, y: data.y < 0 ? 0 : data.y > (wrapperHeight - 16 - 70) ? (wrapperHeight - 16 - 70) : data.y},
            bottom: { x: data.x, y: (wrapperHeight - 16 - 70) },
            right:  { x: (wrapperWidth - 30), y: data.y < 0 ? 0: data.y > (wrapperHeight - 16 - 70) ? (wrapperHeight - 16 - 70) : data.y}
        }
        const sorted = Object.keys(margin).sort((a, b) => margin[a] - margin[b])
        const nearestSide = sorted[0]
        
        if (Math.abs(positions[nearestSide].x - stateRef.current.x) <= 1 && Math.abs(positions[nearestSide].y - stateRef.current.y) <= 1) {
            setPosition(positions[nearestSide])
            setClick(true)
        } else {
            setPosition(positions[nearestSide])
            setClick(false)
        }
        setStartDrag(false)
    }, [])

    const handleOnStart = useCallback(() => {
        setStartDrag(true)
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const anchor = React.useRef()

    const onClick = () => {
        click ? setIsOpen(!isOpen) : setIsOpen(false)
    }

    return (
        <div className='tool'>
            <Draggable
                position={position}
                onStop={(e, data) => handleOnStop(e, data)}
                onStart={() => handleOnStart()}
            >
                <button ref={anchor} className='toggle' onClick={onClick}></button>
            </Draggable>
            <div className='toolbar' ref={tool}>
                <Popup anchor={anchor.current} show={isOpen} popupClass={"contentParent"}>
                    {(isOpen && !startDrag) ?
                    <>
                        <table className='toolbarTable'>
                            <tr>
                                <td>Font Size</td>
                                <td><button>-</button></td>
                                <td><button>+</button></td>
                            </tr>
                        </table>
                        <div className='readAloud'>
                            <button onClick={() => handlePlay(msg)}>Play</button>
                            {paused ? <button onClick={() => handleResume()}>Resume</button> : <button onClick={() => handlePause()}>Pause</button>}
                            <button onClick={() => handleCancel()}>Restart</button>
                        </div>
                    </>
                    : <></>}
                </Popup>
            </div>
        </div>
    )
}

export default Toolbar