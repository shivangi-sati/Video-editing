Project Stack
Framework: Next.js (App Router)
Styling: Tailwind CSS
UI Components: ShadCN UI
Icons: Lucide React
State Management: Redux Toolkit (structure prepared)
Language: JavaScript (JSX)

Install Required Dependencies:
npx create-next-app@latest video-editor --js --app
npm install @reduxjs/toolkit react-redux
npm install lucide-react
npm install @radix-ui/react-icons class-variance-authority tailwind-variants
npm install framer-motion


/editor/page.jsx

Implements video drag-and-drop upload UI

Uses a mock progress bar using animate-pulse

Shows a thumbnail preview and timeline strip (mocked)

Provides segment buttons to add/remove/rearrange clips (UI only)

/audio/page.jsx

Toggles mute for audio

Accepts a background music URL (stub input only)

Renders a simulated static waveform using a gradient

UI built using Lucide icons and ShadCN buttons

/subtitles/page.jsx

Input fields for multiple subtitle blocks

Users can adjust timing, font style, color, and placement

UI supports toggling and organizing text overlays

Fully responsive, uses controlled inputs and preview boxes

/image/page.jsx

Image upload button with drag-and-drop zone

After uploading, the image is displayed in a resizable mock container

Allows positioning and styling (opacity, border, animation effects)

/preview/page.jsx

Uses the native <video> tag to preview the current clip

Includes a mock "Render" button with loading animation

Displays a simulated download button to mimic final export
