'use client';

import { useDispatch, useSelector } from 'react-redux';
import { muteSegment, unmuteSegment } from '@/store/audioSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AudioControls() {
  const dispatch = useDispatch();
  const segments = useSelector((state) => state.timeline.segments);
  const muted = useSelector((state) => state.audio.mutedSegments);

  return (
    <Card className="w-full max-w-2xl text-black mx-auto mt-6 p-4">
      <CardContent className="space-y-4">
        <h2 className="text-lg font-semibold">Audio Management</h2>
        <ul className="list-disc pl-4 text-sm space-y-1">
          {segments.map((segment, index) => {
            const isMuted = muted.includes(index);
            return (
              <li key={index} className="flex justify-between items-center">
                <span>
                  {segment} {isMuted ? '(Muted)' : ''}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    isMuted ? dispatch(unmuteSegment(index)) : dispatch(muteSegment(index))
                  }
                >
                  {isMuted ? 'Unmute' : 'Mute'}
                </Button>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
