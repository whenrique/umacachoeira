import React from 'react'
import * as s from './style'

const Waterfall = ({ waterfall, updateWaterfall }) => {
  const { user, urls, exif, alt_description } = waterfall || {}

  return (
    <s.Wrapper>
      {!waterfall && (
        <>
          <s.Heading>Às vezes você só quer clicar e <s.Strong>OK</s.Strong> em ver uma cachoeira.</s.Heading>
          <s.Button onClick={updateWaterfall}>OK</s.Button>
        </>
      )}
      {waterfall && (
        <s.Waterfall>
          <s.WaterfallPic src={urls.small} alt={alt_description} />
          <div className="pic-info">
            <p>by: {user.name}</p>
            {user.instagram_username && (
              <p>
                ig: <a
                  href={`https://www.instagram.com/${user.instagram_username}/`}
                  title={`Instagram profile - @${user.instagram_username}`} rel="noopener noreferrer" target="_blank">
                    @{user.instagram_username}
                </a>
              </p>
            )}
            <p>brand: {exif.make}</p>
            <p>model: {exif.model}</p>
            <p>exposure: {exif.exposure_time}</p>
            <p>aperture: {exif.aperture}</p>
            <p>focal: {exif.focal_length}</p>
            <p>iso: {exif.iso}</p>
          </div>
        </s.Waterfall>
      )}
    </s.Wrapper>
  )
}

export default Waterfall
