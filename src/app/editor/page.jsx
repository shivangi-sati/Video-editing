// app/editor/page.jsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  Menu,
  Home,
  UploadCloud,
  DownloadCloud,
  Loader2,
  GripVertical,
  Trash2
} from 'lucide-react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

import { useDispatch, useSelector } from 'react-redux';
import {
  addScene,
  removeScene,
  reorderScenes,
  addSubtitle,
  removeSubtitle,
  updateSubtitle
} from '@/slices/videoSlice';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

function TimelineItem({ id, index, onRemove }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center gap-2 border p-2 rounded-md shadow w-full h-screen bg-[length:32px_32px] bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-black">
      <GripVertical className="w-4 h-4 cursor-grab" {...attributes} {...listeners} />
      <span className="text-sm">Scene {index + 1}</span>
      <Button variant="ghost" size="icon" onClick={onRemove}>
        <Trash2 className="w-4 h-4 text-red-500" />
      </Button>
    </div>
  );
}

export default function EditorPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const scenes = useSelector(state => state.video.scenes);
  const subtitles = useSelector(state => state.video.subtitles);

  const [isMuted, setIsMuted] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timeUpdateHandler = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener('timeupdate', timeUpdateHandler);
    return () => video.removeEventListener('timeupdate', timeUpdateHandler);
  }, []);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      dispatch(reorderScenes({ activeId: active.id, overId: over.id }));
    }
  };

  const handleToggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const handleAddSubtitle = () => {
    dispatch(addSubtitle());
  };

  const handleSubtitleChange = (id, key, value) => {
    dispatch(updateSubtitle({ id, key, value }));
  };

  const handleRemoveSubtitle = (id) => {
    dispatch(removeSubtitle(id));
  };

  const handleRender = () => {
    setIsRendering(true);
    setTimeout(() => {
      setIsRendering(false);
      setIsRendered(true);
    }, 2000);
  };

  return (
    <main className="p-4 sm:p-6  space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">

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
                <AnimatedBorderButton onClick={() => router.push('/')} className="w-full justify-start gap-2">
                  <Home className="w-4 h-4" /> Home
                </AnimatedBorderButton>
               
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden sm:flex gap-3">
          <AnimatedBorderButton onClick={() => router.push('/')} className="gap-2">
            <Home className="w-4 h-4" /> Home
          </AnimatedBorderButton>
          <AnimatedBorderButton onClick={() => router.push('/upload')} className="gap-2">
            <UploadCloud className="w-4 h-4" /> Upload
          </AnimatedBorderButton>
          <AnimatedBorderButton onClick={() => router.push('/preview')} className="gap-2">
            <UploadCloud className="w-4 h-4" /> Preview 
          </AnimatedBorderButton>
        </div>
      </div>

      <div className="grid gap-6">
        <section className="border rounded-xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">🎬 Preview & Render</h2>
          <div className="relative">
            <video ref={videoRef} controls muted={isMuted} className="rounded w-full max-h-96 bg-black">
              <source src="/sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {subtitles.map((sub) => {
              const start = parseFloat(sub.start);
              const end = parseFloat(sub.end);
              const isVisible = currentTime >= start && currentTime <= end;
              return isVisible ? (
                <div key={sub.id} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-black bg-opacity-70 text-white text-sm rounded">
                  {sub.text}
                </div>
              ) : null;
            })}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <AnimatedBorderButton onClick={handleRender} disabled={isRendering} className="gap-2">
              {isRendering ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Render'}
            </AnimatedBorderButton>
            {isRendered && (
              <AnimatedBorderButton variant="outline" className="gap-2">
                <DownloadCloud className="w-4 h-4" /> Download
              </AnimatedBorderButton>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
