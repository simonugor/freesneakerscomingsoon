//here should be the "coming soon" part

// importing layout
import Layout from "../components/Layout.js"

const Index = () => {
    return (
        <Layout>
            <h3 className="coming-soon">Coming Soon!</h3>

            <div className="main-howdoesitwork-div">
                <h3 className="howdoesitwork-heading">How does it work?</h3>
                <div className="howdoesitwork-text">
                    <p>1.) Enter you email.</p>
                    <p>2.) Click Generate button.</p>
                    <p className="margin-bottom">3.) Your random number will be sent into our database.</p>
                    <p className="margin-bottom">Every week an email with the highest number wins free sneakers!</p>
                    <p>You can generate new number every 5 hours. Simply repeat the
                        proccess and if you get higher number, it will be sent it!
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Index