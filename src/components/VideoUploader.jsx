
'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { UploadCloud } from 'lucide-react';

export default function VideoUploader({ onUpload }) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      setFileName(file.name);
      setTimeout(() => {
        onUpload(file);
        setUploading(false);
      }, 1500);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-6 p-4">
      <CardContent className="text-black space-y-4 text-center">
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          hidden
        />

        <Button onClick={() => inputRef.current?.click()} disabled={uploading}>
          <UploadCloud className="mr-2 h-4 w-4" /> {uploading ? 'Uploading...' : 'Upload Video'}
        </Button>

        {fileName && (
          <p className="text-sm text-gray-600">
            Selected: <span className="font-medium">{fileName}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
} 
