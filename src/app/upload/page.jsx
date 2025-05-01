
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import VideoUploader from '@/components/VideoUploader';

export default function UploadPage() {
  const router = useRouter();
  const [videoURL, setVideoURL] = useState(null);

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setVideoURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="p-6 space-y-8 text-black max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Upload Video</h1>

      <div className="flex justify-center gap-4">
        <AnimatedBorderButton onClick={() => router.push('/')}>Home</AnimatedBorderButton>
        <AnimatedBorderButton onClick={() => router.push('/editor')}>Editor</AnimatedBorderButton>
      </div>

      <VideoUploader onUpload={handleUpload} />

      {videoURL && (
        <video controls className="mt-4 w-full rounded">
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </main>
  );
}
