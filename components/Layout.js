// create the layout here

//Header
//anything what comes after
//Footer

// importing components
import Header from "./Header.js"
import Footer from "./Footer.js"

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
            <div className="background-div"></div>
        </div>
    )
}

export default Layout