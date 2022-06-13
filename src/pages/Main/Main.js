import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Navbar,
    Footer,
    Landing,
    About,
    Skills,
    Testimonials,
    Blog,
    Education,
    Experience,
    Contacts,
    Projects,
    Services,
    Achievement,
    Header
} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            {/*<Landing />*/}
            <Header />
            <About />
            <Skills />
            <Education />            
            <Projects />
            {/*<Achievement />*/}
            {/* <Blog />*/}
            <Contacts />
             {/*<Footer />*/}
        </div>
    )
}

export default Main
