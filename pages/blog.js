import Layout from "../components/Layout"
import Link from "next/link"

const Blog = () => {
    return (
        <Layout>
            <div className="blog-div">
                <h3 className="aboutus-heading">Blog</h3>

                <Link href="2021SneakerTrendPredictions">
                    <a className="blog-link">2021 Sneaker trend predictions</a>
                </Link>

                <Link href="designersToWatch">
                    <a className="blog-link">Designers to watch in 2021</a>
                </Link>

                <Link href="mostValuableSneaker">
                    <a className="blog-link">Most valuable sneakers of 2020</a>
                </Link>

                <Link href="bestNikeDunk">
                    <a className="blog-link">Best Nike SB Dunk releases of 2020</a>
                </Link>

                <Link href="sneakerBrands">
                    <a className="blog-link">Sneaker brands to watch in 2021</a>
                </Link>

                <Link href="newBalance">
                    <a className="blog-link">New Balance 2020</a>
                </Link>

                <Link href="materialMatters">
                    <a className="blog-link">Material matters</a>
                </Link>

                <Link href="colorwayCorral">
                    <a className="blog-link">Colorway corral: safari</a>
                </Link>

                <Link href="jerryLorenzo">
                    <a className="blog-link">Jerry Lorenzo swaps the swoosh for three stripes</a>
                </Link>

                <Link href="pumaSuede">
                    <a className="blog-link">Puma Suede: sneaker for all time</a>
                </Link>
            </div>
        </Layout>
    )
}

export default Blog