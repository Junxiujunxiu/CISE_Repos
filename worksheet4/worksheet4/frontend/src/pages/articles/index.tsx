import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import SortableTable from '../../components/table/SortableTable';
import { Article } from '../../components/Article';

type ArticlesProps = {
  articles: Article[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  const headers: { key: keyof Article & string; label: string }[] = [
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
    { key: 'author', label: 'Author' },
    { key: 'description', label: 'Description' },
    { key: 'published_date', label: 'Published Date' },
    { key: 'publisher', label: 'Publisher' },
    { key: 'updated_date', label: 'Updated Date' },
  ];

  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>
      <SortableTable headers={headers} data={articles} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ArticlesProps> = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/articles');
    const articles = response.data.map((article: any) => ({
      id: article._id,
      title: article.title,
      content: article.content,
      author: article.author,
      description: article.description,
      published_date: article.published_date,
      publisher: article.publisher,
      updated_date: article.updated_date,
    }));

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: {
        articles: [],
      },
    };
  }
};

export default Articles;
