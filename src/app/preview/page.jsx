'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import {
  Menu, Home, UploadCloud, Music2, Type, Image as ImageIcon, PlayCircle, Download
} from 'lucide-react';

export default function PreviewExportPage() {
  const router = useRouter();
  const [isRendering, setIsRendering] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  const handleRender = () => {
    setIsRendering(true);
    setTimeout(() => {
      setIsRendering(false);
      setIsRendered(true);
    }, 3000);
  };

  return (
    <main className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Preview & Export</h1>

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="space-y-4 mt-4">
                <div className="text-lg font-semibold mb-4 border-b pb-2">🎬 Video Editor</div>
                <Button onClick={() => router.push('/')} className="w-full justify-start gap-2">
                  <Home className="w-4 h-4" /> Home
                </Button>
                <Button onClick={() => router.push('/editor')} className="w-full justify-start gap-2">
                  <UploadCloud className="w-4 h-4" /> Editor
                </Button>
                <Button onClick={() => router.push('/audio')} className="w-full justify-start gap-2">
                  <Music2 className="w-4 h-4" /> Audio
                </Button>
                <Button onClick={() => router.push('/subtitles')} className="w-full justify-start gap-2">
                  <Type className="w-4 h-4" /> Subtitles
                </Button>
                <Button onClick={() => router.push('/image')} className="w-full justify-start gap-2">
                  <ImageIcon className="w-4 h-4" /> Overlay
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden sm:flex gap-3">
          <Button onClick={() => router.push('/')} className="gap-2">
            <Home className="w-4 h-4" /> Home
          </Button>
          <Button onClick={() => router.push('/editor')} className="gap-2">
            <UploadCloud className="w-4 h-4" /> Editor
          </Button>
          <Button onClick={() => router.push('/audio')} className="gap-2">
            <Music2 className="w-4 h-4" /> Audio
          </Button>
          <Button onClick={() => router.push('/subtitles')} className="gap-2">
            <Type className="w-4 h-4" /> Subtitles
          </Button>
          <Button onClick={() => router.push('/image')} className="gap-2">
            <ImageIcon className="w-4 h-4" /> Overlay
          </Button>
        </div>
      </div>

      <section className="space-y-4 bg-white p-4 shadow rounded-xl">
        <h2 className="text-xl font-semibold">Video Preview</h2>

        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
          <video controls className="w-full max-h-96">
            <source src="/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-6 flex gap-4">
          <Button onClick={handleRender} disabled={isRendering} className="gap-2">
            <PlayCircle className="w-5 h-5" />
            {isRendering ? 'Rendering...' : 'Render Video'}
          </Button>

          {isRendered && (
            <Button variant="secondary" className="gap-2">
              <Download className="w-5 h-5" /> Download
            </Button>
          )}
        </div>
      </section>
    </main>
  );
}
