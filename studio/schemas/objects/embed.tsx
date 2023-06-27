import React from 'react'
import ReactPlayer from 'react-player'
type Props = {
  props: {
    url: string
  }
}

const EmbedPreview = (props: Props): JSX.Element => {
  const {url, renderDefault} = props

  const playerConfig = {
    youtube: {
      playerVars: {
        controls: 1,
        disablekb: 1,
        enablejsapi: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        cc_load_policy: 0,
        showinfo: 0,
        rel: 0,
        origin: 'https://lome-backoffice.sanity.studio',
      },
      embedOptions: {
        host: 'https://www.youtube-nocookie.com',
      },
    },
    // vimeo: {
    //   title: false,
    //   background: true,
    //   controls: false,
    // },
  }

  if (!url) return <div>{props.renderDefault(props)}</div>
  return (
    <div>
      {renderDefault({...props, title: 'YouTube Embed'})}
      <ReactPlayer url={url} config={playerConfig} width="100%" height="auto" />
    </div>
  )

  // return <iframe src={url} width="100%" height="315" frameBorder="0"></iframe>
}

export default {
  title: 'Embed',
  name: 'embed',
  type: 'object',

  fields: [
    {
      name: 'url',
      type: 'url',
    },
  ],
  components: {
    preview: EmbedPreview, // Add custom preview component
  },
  preview: {
    select: {
      url: 'url',
    },
    // component: VideoPreview,
    // prepare(selection) {
    //   console.log(selection);
    //   const { video, title } = selection;
    //   return {
    //     title: title,
    //     media: video
    //   };
    // }
  },
}
