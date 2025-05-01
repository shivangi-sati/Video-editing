
'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import { selectVideos } from '@/lib/redux/slices/videoSlice';

export default function VideoPreview() {
  const videos = useAppSelector(selectVideos);
  const videoUrl = videos.length > 0 ? URL.createObjectURL(videos[0]) : null;

  if (!videoUrl) return <p className="text-gray-500">No video uploaded yet.</p>;

  return (
    <div className="mt-4">
      <p className="font-semibold mb-2">Preview</p>
      <video src={videoUrl} controls className="w-full rounded shadow" />
    </div>
  );
}
