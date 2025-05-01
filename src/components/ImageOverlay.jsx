
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setImageOverlay, clearImageOverlay } from '@/store/overlaySlice';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function ImageOverlay() {
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.overlay.imageData);
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        dispatch(setImageOverlay(reader.result));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Card className="w-full text-black max-w-2xl mx-auto mt-6 p-4">
      <CardContent className="space-y-4">
        <h2 className="text-lg font-semibold">Image Overlay</h2>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          <Button onClick={handleUpload}>Upload</Button>
          <Button variant="destructive" onClick={() => dispatch(clearImageOverlay())}>
            Clear
          </Button>
        </div>

        {imageData && (
          <div className="mt-4">
            <p className="text-sm mb-1">Preview:</p>
            <img
              src={imageData}
              alt="Overlay Preview"
              className="max-w-full h-auto rounded shadow border"
              style={{ maxHeight: '200px' }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
