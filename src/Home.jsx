import React from 'react'
import Video from './components/Video'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Counter from './components/Counter'
import ScreenShotSlider from './components/ScreenShotSlider'

export default function Home() {
    return (<div>
        <Hero/>
        <About/>
        <ScreenShotSlider/>
        <Counter/>
        <Video/>
        <Contact/>
    </div>)
}
