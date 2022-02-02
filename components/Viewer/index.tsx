
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { ViewerProps } from '@toast-ui/react-editor';

const Viewer = dynamic<ViewerProps>(() => import('@toast-ui/react-editor')
  .then(m => m.Viewer), { ssr: false });

const ToastViewerComponent = (props: ViewerProps) => {
  const editorRef = useRef(null);

  return (
    <Viewer
      {...props}
    />
  )
}

export default ToastViewerComponent;