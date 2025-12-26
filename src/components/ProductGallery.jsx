import React, { useState, useEffect, useRef } from 'react';
import './ProductGallery.css';

const ProductGallery = () => {
  const [activeMedia, setActiveMedia] = useState('image');
  const [selectedCrystal, setSelectedCrystal] = useState('ROSE QUARTZ');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Base64 encoded placeholder images
  const BASE64_PLACEHOLDERS = {
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTIwIDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iOTAiIGZpbGw9IiM5ZDY5Y2IiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRodW1ibmFpbDwvdGV4dD48L3N2Zz4=",
    videoThumb: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTIwIDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iOTAiIGZpbGw9IiM1YTBkYjMiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjQ1IiByPSIyMCIgZmlsbD0id2hpdGUiLz48cG9seWdvbiBwb2ludHM9IjU1LDM1IDc1LDQ1IDU1LDU1IiBmaWxsPSIjNWEwZGIzIi8+PC9zdmc+"
  };

  // ALL CRYSTALS IMAGES AND VIDEOS DATA
  const allCrystalMedia = {
    "ROSE QUARTZ": {
      images: [
        "/images/crystals/rose-quartz.jpg",
        "/images/crystals/rose-quartz1.jpg",
        "/images/crystals/rose-quartz2.jpg"
      ],
      videos: [
        { 
          id: 'rose-quartz-video1', 
          title: 'Rose Quartz Healing Properties', 
          thumbnail: "/images/crystals/rose-quartz.jpg",
          url: "/images/crystals/rose-quartz-vedio.mp4"
        },
        { 
          id: 'rose-quartz-video2', 
          title: 'Love Meditation with Rose Quartz', 
          thumbnail: "/images/crystals/rose-quartz1.jpg",
          url: "/images/crystals/rose-quartz-vedio1.mp4" 
        }
      ]
    },
    "CITRINE": {
      images: [
        "/images/crystals/citrine.jpg",
        "/images/crystals/citrine1.jpg",
        "/images/crystals/citrine2.jpg",
        "/images/crystals/citrine3.jpg",
        "/images/crystals/citrine4.jpg"
      ],
      videos: [
        { 
          id: 'citrine-video', 
          title: 'Citrine for Abundance', 
          thumbnail: "/images/crystals/citrine.jpg",
          url: "/images/crystals/citrine-vedio.mp4" 
        }
      ]
    },
    "SELENITE": {
      images: [
        "/images/crystals/selenite.jpg",
        "/images/crystals/selenite1.jpg",
        "/images/crystals/selenite2.jpg",
        "/images/crystals/selenite3.jpg",
        "/images/crystals/selenite4.jpg",
        "/images/crystals/selenite5.jpg"
      ],
      videos: []
    },
    "GOLDEN HEALER QUARTZ": {
      images: [
        "/images/crystals/golden-healer-quartz.jpg",
        "/images/crystals/golden-healer-quartz1.jpg"
      ],
      videos: [
        { 
          id: 'golden-healer-video', 
          title: 'Golden Healer Quartz Guide', 
          thumbnail: "/images/crystals/golden-healer-quartz.jpg",
          url: "/images/crystals/golden-healer-quartz-vedio.mp4" 
        }
      ]
    },
    "LAPIS LAZULI": {
      images: [
        "/images/crystals/lapis-lazuli.jpg",
        "/images/crystals/lapis-lazuli1.jpg",
        "/images/crystals/lapis-lazuli2.jpg"
      ],
      videos: []
    },
    "LABRADORITE": {
      images: [
        "/images/crystals/labradorite.jpg",
        "/images/crystals/labradorite1.jpg"
      ],
      videos: [
        { 
          id: 'labradorite-video1', 
          title: 'Labradorite Magic Properties', 
          thumbnail: "/images/crystals/labradorite.jpg",
          url: "/images/crystals/labradorite-vedio.mp4" 
        },
        { 
          id: 'labradorite-video2', 
          title: 'Labradorite Transformation Guide', 
          thumbnail: "/images/crystals/labradorite1.jpg",
          url: "/images/crystals/labradorite-vedio1.mp4" 
        }
      ]
    },
    "RAINFOREST JASPER": {
      images: [
        "/images/crystals/rainforest-jasper.jpg",
        "/images/crystals/rainforest-jasper1.jpg"
      ],
      videos: [
        { 
          id: 'rainforest-jasper-video', 
          title: 'Rainforest Jasper for Happiness', 
          thumbnail: "/images/crystals/rainforest-jasper.jpg",
          url: "/images/crystals/rainforest-jasper-vedio.mp4" 
        }
      ]
    },
    "SUNSTONE": {
      images: [
        "/images/crystals/sunstone.jpg",
        "/images/crystals/sunstone1.jpg"
      ],
      videos: [
        { 
          id: 'sunstone-video', 
          title: 'Sunstone Energy Guide', 
          thumbnail: "/images/crystals/sunstone.jpg",
          url: "/images/crystals/sunstone-vedio.mp4" 
        }
      ]
    },
    "SMOKY QUARTZ": {
      images: [
        "/images/crystals/smoky-quartz.jpg",
        "/images/crystals/smoky-quartz1.jpg",
        "/images/crystals/smoky-quartz2.jpg",
        "/images/crystals/smoky-quartz3.jpg"
      ],
      videos: [
        { 
          id: 'smoky-quartz-video', 
          title: 'Smoky Quartz Grounding Meditation', 
          thumbnail: "/images/crystals/smoky-quartz.jpg",
          url: "/images/crystals/smoky-quartz-vedio.mp4" 
        }
      ]
    },
    "LEPIDOLITE": {
      images: [
        "/images/crystals/lepidolite.jpg",
        "/images/crystals/lepidolite1.jpg",
        "/images/crystals/lepidolite2.jpg",
        "/images/crystals/lepidolite3.jpg"
      ],
      videos: []
    },
    "PYRITE": {
      images: [
        "/images/crystals/pyrite.jpg",
        "/images/crystals/pyrite1.jpg"
      ],
      videos: [
        { 
          id: 'pyrite-video1', 
          title: 'Pyrite for Wealth Attraction', 
          thumbnail: "/images/crystals/pyrite.jpg",
          url: "/images/crystals/pyrite-vedio1.mp4" 
        },
        { 
          id: 'pyrite-video2', 
          title: 'Pyrite Energy Activation', 
          thumbnail: "/images/crystals/pyrite1.jpg",
          url: "/images/crystals/pyrite-vedio.mp4" 
        }
      ]
    },
    "GREEN AVENTURINE": {
      images: [
        "/images/crystals/green-aventurine.jpg",
        "/images/crystals/green-aventurine1.jpg",
        "/images/crystals/green-aventurine2.jpg",
        "/images/crystals/green-aventurine3.jpg",
        "/images/crystals/green-aventurine4.jpg",
        "/images/crystals/green-aventurine5.jpg",
        "/images/crystals/green-aventurine6.jpg"
      ],
      videos: [
        { 
          id: 'green-aventurine-video', 
          title: 'Green Aventurine Luck Guide', 
          thumbnail: "/images/crystals/green-aventurine.jpg",
          url: "/images/crystals/green-aventurine-vedio.mp4" 
        }
      ]
    },
    "AMETHYST": {
      images: [
        "/images/crystals/amethyst.jpg",
        "/images/crystals/amethyst1.jpg",
        "/images/crystals/amethyst2.jpg",
        "/images/crystals/amethyst3.jpg",
        "/images/crystals/amethyst4.jpg"
      ],
      videos: []
    },
    "MULTI FLUORITE": {
      images: [
        "/images/crystals/multifluorite.jpg"
      ],
      videos: [
        { 
          id: 'fluorite-video', 
          title: 'Fluorite for Mental Clarity', 
          thumbnail: "/images/crystals/multifluorite.jpg",
          url: "/images/crystals/multifluorite-vedio.mp4" 
        }
      ]
    },
    "MOONSTONE": {
      images: [
        "/images/crystals/moonstone.jpg"
      ],
      videos: []
    }
  };

  const crystalNames = Object.keys(allCrystalMedia);
  const currentCrystal = allCrystalMedia[selectedCrystal] || { images: [], videos: [] };
  const { images = [], videos = [] } = currentCrystal;

  // Get current video
  const currentVideo = videos[selectedVideo] || null;

  // Handle body overflow when modal is open
  useEffect(() => {
    if (isImageViewerOpen || isModalOpen) {
      document.body.classList.add('crystal-modal-open');
    } else {
      document.body.classList.remove('crystal-modal-open');
    }
    
    return () => {
      document.body.classList.remove('crystal-modal-open');
    };
  }, [isImageViewerOpen, isModalOpen]);

  // Reset video when changing
  useEffect(() => {
    if (videoRef.current && currentVideo && !videoError) {
      videoRef.current.load();
      videoRef.current.muted = true;
    }
  }, [selectedCrystal, selectedVideo, videoError, currentVideo]);

  const handleCrystalChange = (crystalName) => {
    setSelectedCrystal(crystalName);
    setSelectedImage(0);
    setSelectedVideo(0);
    setActiveMedia(allCrystalMedia[crystalName].images.length > 0 ? 'image' : 'video');
    setVideoError(false);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setActiveMedia('image');
    // Directly open image viewer when image is clicked
    if (images.length > 0) {
      setIsImageViewerOpen(true);
    }
  };

  const handleVideoClick = (index) => {
    setSelectedVideo(index);
    setActiveMedia('video');
    setVideoError(false);
    // Directly open image viewer when video is clicked
    if (videos.length > 0) {
      setIsImageViewerOpen(true);
    }
  };

  const openModal = () => {
    if (activeMedia === 'image') {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('crystal-modal-open');
  };

  const openImageViewer = () => {
    if (activeMedia === 'image' && images.length > 0) {
      setIsImageViewerOpen(true);
    } else if (activeMedia === 'video' && videos.length > 0) {
      setIsImageViewerOpen(true);
    }
  };

  const closeImageViewer = () => {
    setIsImageViewerOpen(false);
    document.body.classList.remove('crystal-modal-open');
  };

  const goToPrev = () => {
    if (activeMedia === 'image' && images.length > 0) {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (activeMedia === 'video' && videos.length > 0) {
      const newIndex = selectedVideo === 0 ? videos.length - 1 : selectedVideo - 1;
      setSelectedVideo(newIndex);
      setVideoError(false);
    }
  };

  const goToNext = () => {
    if (activeMedia === 'image' && images.length > 0) {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (activeMedia === 'video' && videos.length > 0) {
      const newIndex = selectedVideo === videos.length - 1 ? 0 : selectedVideo + 1;
      setSelectedVideo(newIndex);
      setVideoError(false);
    }
  };

  const handleVideoError = (e) => {
    setVideoError(true);
  };

  const retryVideoLoad = () => {
    if (videoRef.current && currentVideo) {
      setVideoError(false);
      videoRef.current.load();
      videoRef.current.muted = true;
    }
  };

  const handleImageError = (e, type = 'image') => {
    e.target.onerror = null;
    e.target.src = type === 'video' ? BASE64_PLACEHOLDERS.videoThumb : BASE64_PLACEHOLDERS.thumbnail;
  };

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <section className="crystal-gallery-section">
      <div className="crystal-container-xxl crystal-py-5">
        <div className="crystal-container">
          {/* Header Section */}
          <div className="crystal-row">
            <div className="crystal-col-12">
              <div className="crystal-h-100 crystal-product-gallery-position-relative-z2 crystal-text-center crystal-mb-5">
                <div className="crystal-product-gallery-background-text">Gallery</div>
                
                <div className="crystal-position-relative crystal-z-2">
                  <p className="crystal-text-primary crystal-text-uppercase crystal-mb-2 crystal-product-gallery-subtitle">Crystal Media</p>
                  <div className="crystal-product-gallery-title-container">
                    <h1 className="crystal-display-6 crystal-mb-4 crystal-product-gallery-title">Crystal Gallery</h1>
                  </div>
                  
                  <div className="crystal-col-lg-8 crystal-mx-auto">
                    <p className="crystal-product-gallery-text">
                      Explore all images and videos of our healing crystals. 
                      Click on any crystal to view its media collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crystal Selector Section - Below Header */}
          <div className="crystal-row">
            <div className="crystal-col-12">
              <div className="crystal-product-gallery-selector">
                <div className="crystal-product-gallery-selector-header">
                  <h4>Select Crystal</h4>
                </div>
                <div className="crystal-product-gallery-crystal-buttons">
                  {crystalNames.map((crystal) => (
                    <button
                      key={crystal}
                      className={`crystal-product-gallery-crystal-btn ${selectedCrystal === crystal ? 'crystal-active' : ''}`}
                      onClick={() => handleCrystalChange(crystal)}
                    >
                      <span className="crystal-product-gallery-crystal-name">{crystal}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Crystal Info Header */}
          <div className="crystal-row crystal-mt-4">
            <div className="crystal-col-12">
              <div className="crystal-product-gallery-info-header">
                <h3 className="crystal-product-gallery-crystal-title">{selectedCrystal}</h3>
              </div>
            </div>
          </div>

          {/* Main Content - Single Column Layout */}
          <div className="crystal-row crystal-mt-4">
            <div className="crystal-col-12">
              <div className="crystal-product-gallery-full-layout">
                {/* Thumbnails Section - Full Width */}
                <div className="crystal-product-gallery-thumbnails-full">
                  {/* Images Thumbnails */}
                  {images.length > 0 && (
                    <div className={`crystal-product-gallery-thumbnail-section ${activeMedia === 'image' ? 'crystal-active' : ''}`}>
                      <div className="crystal-product-gallery-thumbnail-header">
                        <i className="fas fa-images crystal-me-2"></i>
                        <span>Images</span>
                        <span className="crystal-thumbnail-instruction">
                          <i className="fas fa-mouse-pointer crystal-me-1"></i>
                          Click to preview
                        </span>
                      </div>
                      <div className="crystal-product-gallery-thumbnails-grid-full">
                        {images.map((image, index) => (
                          <div 
                            key={index}
                            className={`crystal-product-gallery-thumbnail-item ${selectedImage === index && activeMedia === 'image' ? 'crystal-active' : ''}`}
                            onClick={() => handleImageClick(index)}
                          >
                            <img 
                              src={image} 
                              alt={`${selectedCrystal} thumbnail ${index + 1}`}
                              className="crystal-product-gallery-thumbnail-image"
                              onError={(e) => handleImageError(e, 'image')}
                            />
                            {selectedImage === index && activeMedia === 'image' && (
                              <div className="crystal-product-gallery-thumbnail-active-indicator">
                                <i className="fas fa-check"></i>
                              </div>
                            )}
                            <div className="crystal-product-gallery-thumbnail-overlay">
                              <span>Click to preview</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Videos Thumbnails */}
                  {videos.length > 0 && (
                    <div className={`crystal-product-gallery-thumbnail-section ${activeMedia === 'video' ? 'crystal-active' : ''}`}>
                      <div className="crystal-product-gallery-thumbnail-header">
                        <i className="fas fa-video crystal-me-2"></i>
                        <span>Videos</span>
                        <span className="crystal-thumbnail-instruction">
                          <i className="fas fa-mouse-pointer crystal-me-1"></i>
                          Click to preview
                        </span>
                      </div>
                      <div className="crystal-product-gallery-thumbnails-grid-full">
                        {videos.map((video, index) => (
                          <div 
                            key={video.id}
                            className={`crystal-product-gallery-thumbnail-item ${selectedVideo === index && activeMedia === 'video' ? 'crystal-active' : ''}`}
                            onClick={() => handleVideoClick(index)}
                          >
                            <div className="crystal-product-gallery-video-thumbnail">
                              <img 
                                src={video.thumbnail || BASE64_PLACEHOLDERS.videoThumb} 
                                alt={video.title}
                                className="crystal-product-gallery-thumbnail-image"
                                onError={(e) => handleImageError(e, 'video')}
                              />
                              <div className="crystal-product-gallery-video-play-icon">
                                <i className="fas fa-play"></i>
                              </div>
                              <div className="crystal-product-gallery-video-title-overlay">
                                <span>{video.title}</span>
                              </div>
                            </div>
                            {selectedVideo === index && activeMedia === 'video' && (
                              <div className="crystal-product-gallery-thumbnail-active-indicator">
                                <i className="fas fa-check"></i>
                              </div>
                            )}
                            <div className="crystal-product-gallery-thumbnail-overlay">
                              <span>Click to preview</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* No Media Message for Thumbnails */}
                  {images.length === 0 && videos.length === 0 && (
                    <div className="crystal-product-gallery-no-thumbnails-message">
                      <i className="fas fa-images fa-3x crystal-mb-3"></i>
                      <h6>No Media Available</h6>
                      <p>This crystal has no images or videos yet.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Viewer Modal (Popup) - Opens directly on thumbnail click */}
      {isImageViewerOpen && (
        <div className="crystal-product-gallery-image-viewer-modal" onClick={closeImageViewer}>
          <div className="crystal-product-gallery-image-viewer-content" onClick={(e) => e.stopPropagation()}>
            {/* Title at top left */}
            <div className="crystal-product-gallery-viewer-title">
              <div className="crystal-product-gallery-viewer-counter-top">
                {activeMedia === 'image' ? (
                  <>                    
                    <span>{selectedImage + 1} / {images.length}</span>
                  </>
                ) : (
                  <>
                    <span>{selectedVideo + 1} / {videos.length}</span>
                  </>
                )}
              </div>
            </div>
            
            <button className="crystal-product-gallery-modal-close" onClick={closeImageViewer}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="crystal-product-gallery-image-viewer-body">
              {activeMedia === 'image' && images.length > 0 && (
                <div className="crystal-product-gallery-image-viewer-container">
                  <img 
                    src={images[selectedImage]} 
                    alt={`${selectedCrystal} view ${selectedImage + 1}`}
                    className="crystal-product-gallery-image-viewer-image"
                    onError={(e) => handleImageError(e, 'image')}
                  />
                  <button className="crystal-product-gallery-image-viewer-nav-btn crystal-product-gallery-image-viewer-prev-btn" onClick={goToPrev}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="crystal-product-gallery-image-viewer-nav-btn crystal-product-gallery-image-viewer-next-btn" onClick={goToNext}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  {/* Image Viewer Actions REMOVED */}
                </div>
              )}

              {activeMedia === 'video' && videos.length > 0 && (
                <div className="crystal-product-gallery-video-viewer-container">
                  <div className="crystal-product-gallery-video-viewer-wrapper">
                    <div className="crystal-video-viewer-player-container">
                      {videoError ? (
                        <div className="crystal-video-error-message">
                          <i className="fas fa-exclamation-triangle fa-3x crystal-mb-3"></i>
                          <h5>Video Not Available</h5>
                          <div className="crystal-mt-3">
                            <button 
                              className="crystal-btn crystal-btn-primary crystal-me-2"
                              onClick={retryVideoLoad}
                            >
                              <i className="fas fa-redo crystal-me-2"></i>
                              Try Again
                            </button>
                          </div>
                        </div>
                      ) : (
                        <video 
                          ref={videoRef}
                          key={`${selectedCrystal}-${selectedVideo}-viewer`}
                          className="crystal-product-gallery-video-viewer-video"
                          controls
                          controlsList="nodownload"
                          muted
                          poster={currentVideo?.thumbnail || BASE64_PLACEHOLDERS.videoThumb}
                          onError={handleVideoError}
                          onPlay={handleVideoPlay}
                          preload="metadata"
                        >
                          <source src={currentVideo?.url || ''} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                    <div className="crystal-product-gallery-video-viewer-info">
                      <h5>{currentVideo?.title || 'Video Title'}</h5>
                    </div>
                  </div>
                  <button className="crystal-product-gallery-image-viewer-nav-btn crystal-product-gallery-image-viewer-prev-btn" onClick={goToPrev}>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="crystal-product-gallery-image-viewer-nav-btn crystal-product-gallery-image-viewer-next-btn" onClick={goToNext}>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  {/* Video Viewer Actions REMOVED */}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal for Zoomed Image */}
      {isModalOpen && images.length > 0 && (
        <div className="crystal-product-gallery-modal" onClick={closeModal}>
          <div className="crystal-product-gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="crystal-product-gallery-modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="crystal-product-gallery-modal-image-container">
              <img 
                src={images[selectedImage]} 
                alt={`Zoomed ${selectedCrystal}`}
                className="crystal-product-gallery-modal-image"
                onError={(e) => handleImageError(e, 'image')}
              />
              <button className="crystal-product-gallery-modal-nav-btn crystal-product-gallery-modal-prev-btn" onClick={goToPrev}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="crystal-product-gallery-modal-nav-btn crystal-product-gallery-modal-next-btn" onClick={goToNext}>
                <i className="fas fa-chevron-right"></i>
              </button>
              <div className="crystal-product-gallery-modal-counter">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGallery;