import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

const CreateComment = () => {
    const [ content,   setContent   ] = useState("");
    const [ author,    setAuthor    ] = useState("");
    const [ articleId, setArticleId ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("content : ", content);
        console.log("author : ", author);
        console.log("articleId : ", articleId);
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            case "articleId":
                setArticleId(event.target.value);
                break;
            // no default
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="comment.content" >
                    <Form.Label>Contenu du commentaire</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content} 
                    />
                </Form.Group>
                <Form.Group controlId="comment.author" >
                    <Form.Label>Id de l'auteur</Form.Label>
                    <Form.Control
                        type="number"
                        name="author"
                        onChange={handleChange}
                        value={author}
                    />
                </Form.Group>
                <Form.Group controlId="comment.articleId" >
                    <Form.Label>Id de l'article</Form.Label>
                    <Form.Control
                        type="number"
                        name="articleId"
                        onChange={handleChange}
                        value={articleId}
                    />
                </Form.Group>
                <Button type="submit">Créer le commentaire</Button>
            </Form>
        </Container>
    );
};

export default CreateComment;