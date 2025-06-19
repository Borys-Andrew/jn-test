import { useParams } from 'react-router-dom';

export const HeroDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return <div>HeroDetailsPage for hero with ID: {id}</div>;
};
