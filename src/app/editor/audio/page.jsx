'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu, Home, UploadCloud, Music2, VolumeX, Type, Image as ImageIcon } from 'lucide-react';

export default function AudioManagementPage() {
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(false);
  const [bgMusic, setBgMusic] = useState('');

  const toggleMute = () => setIsMuted(prev => !prev);

  return (
    <main className="p-4 text-black sm:p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Audio Management</h1>

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
          <Button onClick={() => router.push('/subtitles')} className="gap-2">
            <Type className="w-4 h-4" /> Subtitles
          </Button>
          <Button onClick={() => router.push('/image')} className="gap-2">
            <ImageIcon className="w-4 h-4" /> Overlay
          </Button>
        </div>
      </div>

      <section className="space-y-4 bg-white p-4 shadow rounded-xl">
        <h2 className="text-xl font-semibold">Audio Tools</h2>

        <div className="flex items-center gap-4">
          <Button onClick={toggleMute} variant={isMuted ? 'destructive' : 'default'} className="gap-2">
            <VolumeX className="w-4 h-4" /> {isMuted ? 'Muted' : 'Mute Audio'}
          </Button>

          <input
            type="text"
            placeholder="Background music URL (stub)"
            value={bgMusic}
            onChange={(e) => setBgMusic(e.target.value)}
            className="border rounded px-3 py-2 w-full sm:w-96"
          />
        </div>

        <div className="mt-6">
          <h3 className="font-medium text-sm mb-1">Static Audio Waveform</h3>
          <div className="h-20 bg-gradient-to-r from-gray-300 to-gray-500 rounded animate-pulse"></div>
        </div>
      </section>
    </main>
  );
}
