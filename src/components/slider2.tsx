type Props = {
    url: string
}

const Slider2 = ({ url }: Props) => {
    return (
        <>
            <img style={{ width: "1200px", height: "auto", borderRadius: "8px" }} src={url} alt="" />
        </>
    )
}

export default Slider2
