import { Link } from "react-router-dom"
import '../styles/topic-card.css'

type TopicProps = {
    url1: string,
    url2: string,
    title1: string,
    title2: string,
    title3: string,
    title4: string,
    link1: string,
    link2: string
}

const TopicCard = ({ url1, url2, title1, title2, title3, title4, link1, link2 }: TopicProps) => {
    return (
        <div className="topic-block">
            <div className="topic-block-body">
                <div className="section_catelog_bottom">
                    <div className="section_ss sosanh">
                        <div className="ss_image">
                            <Link className="button-link" to={"/"}>
                                <img src={url1} alt="" />
                            </Link>
                        </div>

                        <div className="ss_all_content">
                            <div className="title">
                                {title1} <br /> {title2}
                            </div>

                            <Link className="button-link" to={"/"}>{link1} ›</Link>
                        </div>
                    </div>

                    <div className="section_ss muakem">
                        <div className="ss_image">
                            <Link className="button-link" to={"/"}>
                                <img src={url2} alt="" />
                            </Link>
                        </div>

                        <div className="ss_all_content">
                            <div className="title">
                                {title3} <br /> {title4}
                            </div>

                            <Link className="button-link" to={"/"}>{link2} ›</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicCard