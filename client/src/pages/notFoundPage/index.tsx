import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-xl text-center p-6 shadow-lg">
        <CardContent className="flex flex-col items-center gap-4 py-8">
          <AlertTriangle className="w-14 h-14 text-red-500" />
          <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
          <p className="text-muted-foreground">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
