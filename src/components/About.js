function About() {
    return (
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">About The App</h2>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="column">
                    <div class="row">
                        <div class="col-lg-4 ms-auto"><p class="lead">The Social Media Lab's Fact Check Assistant is an AI-powered bot for simple fact checking. It was created as a proof of concept for <a href="https://socialmedialab.ca/events/hackathon/" target="_blank">the Social Media Lab’s 2023 Canadian #AI Misinformation Hackathon</a>. The app uses OpenAI API capabilities to facilitate simple fact checking. Please be aware that OpenAI has very limited knowledge of the world and events after 2021 and that while OpenAI has put safeguards in place, their system may occasionally generate incorrect or misleading information and produce offensive or biased content.</p>
                        </div>
                        <div class="col-lg-4 me-auto"><p class="lead">This app is provided “as is” without any warranty of accuracy, reliability, completeness, efficiency, timeliness, or correct sequencing of such information or otherwise, either express or implied. Reliance on any information provided by this app is solely at your own risk. We suggest verifying information provided here by consulting additional sources.</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="https://github.com/smlabto/factcheckassistant" rel="noreferrer" target="_blank">
                        <i class="fas fa-download me-2"></i>Get Source Code!</a>
                </div>
            </div>
        </section>     
    )
}

export default About;