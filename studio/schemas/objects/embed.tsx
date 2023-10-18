import React from 'react'
import ReactPlayer from 'react-player'
type Props = {
  url: string
  renderDefault: Function
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
        origin: 'https://violaine-et-jeremy-backoffice.sanity.studio',
      },
      embedOptions: {
        host: 'https://www.youtube-nocookie.com',
      },
    },
  }

  if (!url) return <div>{renderDefault(props)}</div>
  return (
    <div>
      {renderDefault({...props, title: 'YouTube Embed'})}
      <ReactPlayer url={url} config={playerConfig} width="100%" height="auto" />
    </div>
  )
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
    {
      name: 'ratio',
      type: 'string',
      description: 'format width / height. Ex: 1200 / 600',
    },
  ],
  components: {
    preview: EmbedPreview, // Add custom preview component
  },
  preview: {
    select: {
      url: 'url',
    },
  },
}
