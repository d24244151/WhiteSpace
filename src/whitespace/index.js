import React from 'react';
import './css/Whitespace.scss';
import Header from './Header';

function Whitespace() {
    return (
        <div className='clswhitespace'>
            <Header />
            <div className='clswhitespace-secone'>
                <div className='container'>
                    <div className='clswhitespace-cont'>
                        <div className='leftcontent'>
                            <h2>Get More Done with whitepace</h2>
                            <p>Project management software that enables
                                your teams to collaborate, plan, analyze and manage everyday tasks
                            </p>
                            <button>Try Whitepace free<span></span></button>
                        </div>

                        <div className='rghtcont'>
                            {/* <img src='assets/image/imgcontainer.png' alt='container' /> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='clswhitespace-prjt'>
                <div className='prjtcont'>
                    <div className='prjtdiv'>
                        <h2>Project Management</h2>
                        <p>Images, videos, PDFs and audio files are supported. Create math expressions
                            and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                        </p>
                        <button>Get Started</button>
                    </div>
                    <div className='prjt-rghtcont'></div>
                </div>
                <div className='prjtcont1'>
                    <div className='prjt1-rghtcont'>

                    </div>
                    <div className='prjtdiv1'>
                        <h2>Work together</h2>
                        <p>With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.
                        </p>
                        <button>Try it now</button>
                    </div>
                </div>
            </div>

            <div className='clswhitespace-extension'>
                <div className='extension'>
                    <h2>Use as Extension</h2>
                    <p>Use the web clipper extension, available on Chrome and Firefox,
                        to save web pages or take screenshots as notes.
                    </p>
                    <button>Let’s Go</button>
                </div>
                <div className='extension-img'>
                </div>
            </div>

            <div className='clswhitespace-customise'>
                <div className='customise-img'>
                </div>

                <div className='customise'>
                    <h2>Customise it to your needs</h2>
                    <p>Customise the app with plugins, custom themes and multiple text editors
                        (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <button>Let’s Go</button>
                </div>
            </div>

            <div className='clswhitespace-choseplan'>
                <div className='choseplan-head'>
                    <h2>Choose Your Plan</h2>
                    <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
                </div>

                <div className='choseplan-card'>
                    <div className='cardone'>
                        <p>Free</p>
                        <h2>$0</h2>
                        <span>Capture ideas and find them quickly</span>
                        <ul>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <button>Get Started</button>
                        </ul>
                    </div>
                    <div className='cardtwo'>
                        <p>Free</p>
                        <h2>$0</h2>
                        <span>Capture ideas and find them quickly</span>
                        <ul>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <button>Get Started</button>
                        </ul>
                    </div>
                    <div className='cardtree'>
                        <p>Free</p>
                        <h2>$0</h2>
                        <span>Capture ideas and find them quickly</span>
                        <ul>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <li><span></span>Sync unlimited devices</li>
                            <button>Get Started</button>
                        </ul>
                    </div>
                </div>


            </div>

            <div className='clswhitespace-everywhere'>
                <h2>Your work, everywhere you are</h2>
                <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            </div>

            <div className='clswhitespace-data'>
                <div className='percentdata'>
                    <h2>100% your data</h2>
                    <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                    <button>Read more</button>
                </div>

                <div className='percentimg'></div>
            </div>

            <div className='clswhitespace-sponser'>
                <h2>Our sponsors</h2>
                <div className='sponser'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='clswhitespace-favapp'>
                <div className='favappimg'></div>
                <div className='favappcontent'>
                    <h2>Work with Your Favorite Apps Using whitepace</h2>
                    <p>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default Whitespace;