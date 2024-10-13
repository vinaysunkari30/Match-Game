import './index.css'

const Thumbnail = props => {
  const {thumbnail, toMatchThumbnail} = props
  const {id, thumbnailUrl} = thumbnail
  const thumbnailMatch = () => {
    toMatchThumbnail(id)
  }

  return (
    <li className="thumbnail-container">
      <button type="button" onClick={thumbnailMatch}>
        <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
