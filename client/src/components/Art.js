// -------- Component that holds Art Portfolio -------- //

import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

class Art extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: false,
      thumbnails: undefined,
    };
  }

  //handles when thumbnails get selected to view modal
  handleModal = (url) => {
    this.setState({
      currentModal: url,
    });
  };

  //closes modal windows
  handleClose = () => {
    this.setState({
      currentModal: false,
    });
  };

  componentDidMount() {
    fetch("/thumbnails")
      .then((res) => res.json())
      .then((obj) => this.setState({ thumbnails: obj.resources }));
  }
  //renders all thumbnails
  render() {
    return (
      <div>
        {/*conditionally renders modal window based on state*/}
        {this.state.currentModal && (
          <ArtModal
            currentModal={this.state.currentModal}
            handleClose={this.handleClose}
          />
        )}
        <div id="main-div">
          <div id="div-scroll" className={this.props.animationClass}>
            <div className="art-category">
              <div className="art-title">
                <h1>I DRAW ROBOTS</h1>
              </div>
              {!this.state.thumbnails ? (
                <CircularProgress />
              ) : (
                <div className="art-thumbnails">
                  {this.state.thumbnails.map((thumb) => (
                    <img
                      src={thumb.url}
                      alt={thumb.context.caption}
                      id={thumb.context.caption}
                      key={thumb.context.caption}
                      onClick={() => {
                        this.handleModal(thumb.context.alt);
                      }}
                      className="art-thumb"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div id="div-fade"></div>
        </div>
      </div>
    );
  }
}

//functional modal component
function ArtModal(props) {
  const { currentModal, handleClose } = props;
  const [imageInfo, setImageInfo] = useState(null);

  useEffect(() => {
    fetch("/portfolioImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publicId: currentModal,
      }),
    })
      .then((res) => res.json())
      .then((obj) => setImageInfo(obj));
  }, [currentModal]);

  return (
    <div id="art-modal" className="modal-load">
      {!imageInfo ? (
        <CircularProgress />
      ) : (
        <>
          <div id="modal-title-bar">
            <p>{imageInfo.context.custom.caption}</p>
            <button id="image-close" onClick={handleClose}>
              X
            </button>
          </div>
          <div id="modal-image-wrapper">
            <img
              src={imageInfo.url}
              className="modal-image"
              alt={`${imageInfo.context.custom.caption}`}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Art;
