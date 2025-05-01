
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

export default function TimelineControls() {
  const [segments, setSegments] = useState(['Scene 1', 'Scene 2']);

  const addSegment = () => {
    setSegments([...segments, `Scene ${segments.length + 1}`]);
  };

  const removeSegment = (index) => {
    setSegments(segments.filter((_, i) => i !== index));
  };

  return (
    <Card className="w-full text-black max-w-2xl mx-auto mt-6 p-4">
      <CardContent className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          {segments.map((segment, i) => (
            <div key={i} className="px-4 py-2 bg-gray-100 rounded shadow text-sm flex items-center gap-2">
              {segment}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeSegment(i)}
                className="px-1"
              >
                ×
              </Button>
            </div>
          ))}
        </div>
        <Button onClick={addSegment}>Add Scene</Button>
      </CardContent>
    </Card>
  );
}
