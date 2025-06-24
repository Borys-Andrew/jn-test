import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type DataNotFoundProps = {
  title: string;
  helperText?: string;
  action: 'goBack' | 'reload';
};
export const DataNotFound: React.FC<DataNotFoundProps> = ({
  title = 'Not Found',
  helperText,
  action,
}) => {
  const navigate = useNavigate();

  const cardAction = () => {
    if (action === 'goBack')
      return (
        <Button className="cursor-pointer" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      );

    return (
      <Button
        className="cursor-pointer"
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
    );
  };

  return (
    <div className="flex justify-center items-center py-16">
      <Card className="w-full max-w-xl min-w-[300px] sm:min-w-[450px] text-center">
        <CardContent className="flex flex-col items-center gap-4 py-8">
          <AlertTriangle className="w-12 h-12 text-red-500" />
          <h2 className="text-2xl font-semibold">{title}</h2>
          {helperText && <p className="text-muted-foreground">{helperText}</p>}
        </CardContent>
        <CardFooter className="flex justify-center">{cardAction()}</CardFooter>
      </Card>
    </div>
  );
};
