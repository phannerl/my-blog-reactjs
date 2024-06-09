import { Button, Form } from 'react-bootstrap';
import { useAppSelector } from '../redux';
const FormCreatedUpdateComp = () => {
    const articleCurrent = useAppSelector((state) => state.currentArticle);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Article Title</Form.Label>
                <Form.Control as="textarea" rows={2} value={articleCurrent?.title} />
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Article Description</Form.Label>
                <Form.Control as="textarea" rows={4} value={articleCurrent?.description} />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Article Content</Form.Label>
                <Form.Control as="textarea" rows={4} value={articleCurrent?.content} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default FormCreatedUpdateComp;
