
'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu, UploadCloud, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

export default function HomePage() {
  const router = useRouter();



  return (
    <main className="flex flex-col justify-center items-center p-4 sm:p-6 space-y-6 max-w-xl mx-auto text-center w-full h-screen bg-[length:32px_32px] bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-black ">
      
      <div className="flex flex-col gap-5 justify-between items-center">
        <motion.h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }}>Welcome to the Video Editor App</motion.h1>

        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="space-y-4 mt-4">
                <div  onClick={() => router.push('/')} className="text-lg font-semibold mb-4 border-b pb-2">🎬 Video Editor</div>
                <Button onClick={() => router.push('/editor')} className="w-full animated-border justify-start gap-2">
                  <Wand2 className="w-4 h-4" /> Editor
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden sm:flex gap-3">
          <AnimatedBorderButton onClick={() => router.push('/editor')} className="gap-2 cursor-pointer">
            <Wand2 className="w-4 h-4" /> Editor
          </AnimatedBorderButton>
        </div>
      </div>

      <motion.p className=" mt-7 text-sm sm:text-base text-muted-foreground monospace"  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 80, damping: 12, delay:0.9 , ease: 'easeOut'  }}>
        Upload your video, edit scenes, audio, subtitles, and export your final cut.
      </motion.p>
     
    </main>
  );
}
