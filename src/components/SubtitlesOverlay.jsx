
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addSubtitle, removeSubtitle } from '@/store/subtitlesSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function SubtitlesOverlay() {
  const dispatch = useDispatch();
  const subtitles = useSelector((state) => state.subtitles.items);
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  return (
    <Card className="w-full text-black max-w-2xl mx-auto mt-6 p-4">
      <CardContent className="space-y-4">
        <h2 className="text-lg font-semibold">Subtitles</h2>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input
            placeholder="Subtitle text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Input
            placeholder="Time (e.g. 00:01:20)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button
            onClick={() => {
              if (text && time) {
                dispatch(addSubtitle({ text, time }));
                setText('');
                setTime('');
              }
            }}
          >
            Add
          </Button>
        </div>

        <ul className="text-sm list-disc pl-4 space-y-1">
          {subtitles.map((subtitle, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>
                [{subtitle.time}] {subtitle.text}
              </span>
              <Button variant="ghost" size="sm" onClick={() => dispatch(removeSubtitle(index))}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
