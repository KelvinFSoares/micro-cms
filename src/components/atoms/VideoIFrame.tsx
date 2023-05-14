import { FunctionComponent } from 'react';

type VideoIFrameProps = {
  videoUrl: string;
  iframeWidth: string;
  iframeHeight: string;
  title: string;
};

const VideoIFrame: FunctionComponent<VideoIFrameProps> = ({
  videoUrl,
  iframeWidth,
  iframeHeight,
  title,
  ...rest
}) => {
  return (
    <div
      className={`relative pb-9/16 w-${iframeWidth} h-${iframeHeight}`}
      {...rest}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoIFrame;
