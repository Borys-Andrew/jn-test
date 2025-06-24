import { useHeroDetails } from './hooks';
import { HeroViewCard } from './components';
import { HeroForm } from '@/components/heroForm';

export const HeroDetailsPage = () => {
  const { hero, handleDelete, toggleEdit, isEdit, handleEdit, renderFallback } =
    useHeroDetails();

  const fallback = renderFallback();
  if (fallback) {
    return <div className="py-6 max-w-5xl mx-auto">{fallback}</div>;
  }

  if (!hero) {
    return null;
  }

  return (
    <div className="py-6 max-w-5xl mx-auto">
      {isEdit ? (
        <HeroForm
          mode="edit"
          initialValues={hero}
          onSubmit={handleEdit}
          onCancel={toggleEdit}
        />
      ) : (
        <HeroViewCard hero={hero} onDelete={handleDelete} onEdit={toggleEdit} />
      )}
    </div>
  );
};
