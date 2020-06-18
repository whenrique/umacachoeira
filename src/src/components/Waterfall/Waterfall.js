import React from 'react'

const Waterfall = ({ waterfall, updateWaterfall }) => {
  const { user, urls, exif, alt_description } = waterfall || {}

  return (
    <div className="wrapper">
      {!waterfall && (
        <>
          <h1>Às vezes você só quer clicar em <strong>OK</strong> em ver uma cachoeira.</h1>
          <button onClick={updateWaterfall}>OK</button>
        </>
      )}
      {waterfall && (
        <div className="waterfall">
          <img src={urls.small} alt={alt_description} className="waterfall-pic" />
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
        </div>
      )}
    </div>
  )
}

export default Waterfall
