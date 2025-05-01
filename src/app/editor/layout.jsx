
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';

export default function EditorLayout({ children }) {
  return (
    <div className="min-h-screen p-6 space-y-6 ">
      <h1 className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-bold text-center">Video Editor</h1>

      <Tabs defaultValue="upload" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="timeline" asChild>
            <Link href="/editor/timeline">Timeline</Link>
          </TabsTrigger>
          <TabsTrigger value="audio" asChild>
            <Link href="/editor/audio">Audio</Link>
          </TabsTrigger>
          <TabsTrigger value="subtitles" asChild>
            <Link href="/editor/subtitles">Subtitles</Link>
          </TabsTrigger>
          <TabsTrigger value="image" asChild>
            <Link href="/editor/image">Image</Link>
          </TabsTrigger>
          <TabsTrigger value="export" asChild>
            <Link href="/editor/export">Export</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      <main className="w-full max-w-4xl mx-auto">{children}</main>
      

    </div>
  );
}
