'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Download, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { ToastContainer } from '@/components/ui/toast';

export default function ExportButton() {
  const [rendering, setRendering] = useState(false);
  const [exported, setExported] = useState(false);
  const [error, setError] = useState(false);
  const { toasts, toast } = useToast();

  const handleRender = () => {
    setRendering(true);
    setExported(false);
    setError(false);
    toast({ description: 'We are preparing your video...' });

    window.setTimeout(() => {
      const success = Math.random() > 0.2;
      setRendering(false);

      if (success) {
        setExported(true);
        toast({ description: 'Your video is ready to download.' });
      } else {
        setError(true);
        toast({ description: 'Something went wrong during export.' });
      }
    }, 3000);
  };

  return (
    <>
      <Card className="mt-6 w-full max-w-md mx-auto p-4">
        <CardContent className="space-y-4">
          <Button onClick={handleRender} disabled={rendering} className="w-full">
            {rendering ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Rendering...
              </>
            ) : (
              'Render & Export'
            )}
          </Button>

          {exported && (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <a href="#" download="final-video.mp4" className="hover:underline">
                Download Final Video
              </a>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <XCircle className="w-4 h-4" /> Export failed. Try again.
            </div>
          )}
        </CardContent>
      </Card>
      {typeof window !== 'undefined' && <ToastContainer toasts={toasts} />}
    </>
  );
}

