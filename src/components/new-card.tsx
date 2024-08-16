import Card from 'react-bootstrap/Card';
import '../styles/new-card.css'

type NewProps = {
    id: string,
    image: string,
    title: string,
    date: string
}

const NewCard = ({ image, title, date }: NewProps) => {
    return (
        <Card style={{ width: '386.66px', height: '322px' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{date}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewCard