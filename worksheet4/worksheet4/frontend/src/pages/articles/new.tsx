import { FormEvent, useState } from 'react';
import formStyles from '../../styles/Form.module.scss';
import axios from 'axios';

const NewDiscussion = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState<Date | undefined>(undefined);
  const [publisher, setPublisher] = useState('');

  const submitNewArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newArticle = {
      title,
      content,
      author,
      description,
      published_date: publishedDate,
      publisher,
    };

    try {
      await axios.post('http://localhost:3001/api/articles', newArticle);
      // Handle successful submission (e.g., redirect to articles page or show success message)
    } catch (error) {
      console.error('Error creating article:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="container">
      <h1>New Article</h1>
      <form className={formStyles.form} onSubmit={submitNewArticle}>
        <label htmlFor="title">Title:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          className={formStyles.formItem}
          name="content"
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className={formStyles.formItem}
          name="description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label htmlFor="published_date">Published Date:</label>
        <input
          className={formStyles.formItem}
          type="date"
          name="published_date"
          id="published_date"
          value={publishedDate ? publishedDate.toISOString().split('T')[0] : ''}
          onChange={(event) => setPublishedDate(event.target.value ? new Date(event.target.value) : undefined)}
        />
        <label htmlFor="publisher">Publisher:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="publisher"
          id="publisher"
          value={publisher}
          onChange={(event) => setPublisher(event.target.value)}
        />
        <button className={formStyles.formItem} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDiscussion;
