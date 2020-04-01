import React from 'react';

const CreateArticle = () => {
    const handleSubmit = () => {
        console.log("submit");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="titre de l'article"
            />
            <textarea
                name="content"
                placeholder="contenu de l'article"
            >
            </textarea>
            <input
                type="number"
                name="author"
                placeholder="id de l'auteur"
            />
            <button type="submit">Créer l'article</button>
        </form>
    )
};

export default CreateArticle;