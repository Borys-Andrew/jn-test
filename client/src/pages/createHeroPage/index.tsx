import { HeroForm } from '@/components';
import { useCreateHero } from './hooks';

export const CreateHeroPage = () => {
  const { createHero, handleCancel } = useCreateHero();

  return (
    <div className="py-6 max-w-5xl mx-auto">
      <h1 className="font-semibold mx-auto mb-4">Create a new Hero</h1>
      <HeroForm mode="create" onSubmit={createHero} onCancel={handleCancel} />
    </div>
  );
};
