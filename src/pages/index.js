import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/blockchain.png'
import pic02 from '../assets/images/postgods.png'
import pic03 from '../assets/images/journey.png'
import pic04 from '../assets/images/calendar.png'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Python Blockchain</h3>
                                <p>Project created to improve my skills using python.</p>
                                <h5>Tools Used:</h5>
                                <ul>
                                    <li>Python</li>
                                    <li>Git</li>
                                    <li>Github</li> 
                                    <li>Visual Studio</li>
                                </ul>
                                <button>Github</button>
                            </header>
                                

                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Post Gods</h3>
                                <p>A one page WordPress website developed for the Post Gods podcast.</p>
                                <h5>Tools Used</h5>
                                    <ul>
                                        <li>HTML</li>
                                        <li>Wordpress</li>
                                        <li>Vagrant</li>
                                        <li>Github</li>
                                        <li>CSS3</li>
                                        <li>Virtual Box</li>
                                    </ul>
                                    <button>Github</button>
                                    <button>Live Website</button>

                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Journey Of Entrepreneurship</h3>
                                <p>A one page WordPress website developed for the Journey Of Entrepreneurship podcast.</p>
                                <h5>Tools Used</h5>
                                    <ul>
                                        <li>HTML</li>
                                        <li>Wordpress</li>
                                        <li>Vagrant</li>
                                        <li>Github</li>
                                        <li>CSS3</li>
                                        <li>Virtual Box</li>
                                    </ul>
                                    <button>Github</button>
                                    <button>Live Website</button>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Javascript Calendar</h3>
                                <p>A responsive Javascript Calendar created for the KOPMN website to advertise upcoming events.</p>
                                    <h5>Tools used:</h5>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>CSS3</li>
                                        <li>Git</li>
                                        <li>Github</li>
                                        <li>HTML</li>
                                    </ul>
                                    <button>Github</button>
                           
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About</h2>
                            </header>
                            <p>I am a self-taught web developer, primary skillset in WordPress. I am steadily building my knowledge of various new technologies. As a freelancer, I have the opportunity to create solutions for podcasters, non-profit organizations, and small business owners.</p>
                            <p>I have 8 years of experience editing podcast, over 100 episodes, with my most recent projects being Post Gods and the Journey Of Entrepreneurship. I enjoy the creative process of helping podcasters share their stories, with listeners around the world.</p>
                            <p>I became a Toastmaster January 1st, 2017. During my time as a Toastmaster, I have had the opportunity to participate in several speech contests as a contestant and facilitator. I am currently serving as the Vice President of Public Relations for the City Of Delray Beach Toastmasters.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Contact Me</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex