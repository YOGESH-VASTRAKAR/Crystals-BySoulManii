// VideoShowcase.jsx - Modern Product Video Gallery
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoShowcase.css';

const VideoShowcase = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Product Videos Data - Crystals & Healing Products
  const videoData = [
    {
      id: 1,
      title: "Amethyst Healing Properties",
      productName: "Amethyst Crystal",
      category: "crystals",
      description: "Discover the healing properties and uses of Amethyst crystal",
      duration: "5:24",
      productId: "amethyst",
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
      videoUrl: "https://example.com/videos/amethyst-healing.mp4"
    },
    {
      id: 2,
      title: "Rose Quartz Love Energy",
      productName: "Rose Quartz Sphere",
      category: "crystals",
      description: "How to use Rose Quartz for love and emotional healing",
      duration: "8:42",
      productId: "rose-quartz",
      thumbnail: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800",
      videoUrl: "https://example.com/videos/rose-quartz-love.mp4"
    },
    {
      id: 3,
      title: "Clear Quartz Master Healer",
      productName: "Clear Quartz Points",
      category: "crystals",
      description: "Complete guide to using Clear Quartz for energy amplification",
      duration: "12:18",
      productId: "clear-quartz",
      thumbnail: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800",
      videoUrl: "https://example.com/videos/clear-quartz-guide.mp4"
    },
    {
      id: 4,
      title: "Citrine Abundance Ritual",
      productName: "Citrine Cluster",
      category: "crystals",
      description: "Manifest abundance and success with Citrine crystal",
      duration: "6:55",
      productId: "citrine",
      thumbnail: "https://images.unsplash.com/photo-1548135176-6e0d5e8d6c0e?w=800",
      videoUrl: "https://example.com/videos/citrine-abundance.mp4"
    },
    {
      id: 5,
      title: "Black Tourmaline Protection",
      productName: "Black Tourmaline Stone",
      category: "crystals",
      description: "Grounding and protection with Black Tourmaline",
      duration: "9:32",
      productId: "black-tourmaline",
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
      videoUrl: "https://example.com/videos/black-tourmaline-protection.mp4"
    },
    {
      id: 6,
      title: "Crystal Bracelet Tutorial",
      productName: "7 Chakra Bracelet Set",
      category: "jewelry",
      description: "How to wear and charge crystal bracelets",
      duration: "7:45",
      productId: "crystal-bracelet",
      thumbnail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      videoUrl: "https://example.com/videos/crystal-bracelet-tutorial.mp4"
    },
    {
      id: 7,
      title: "Healing Kit Unboxing",
      productName: "Beginner Healing Kit",
      category: "kits",
      description: "Unboxing and reviewing our beginner healing kit",
      duration: "15:27",
      productId: "healing-kit",
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
      videoUrl: "https://example.com/videos/healing-kit-unboxing.mp4"
    },
    {
      id: 8,
      title: "Singing Bowl Meditation",
      productName: "Tibetan Singing Bowl Set",
      category: "tools",
      description: "Meditation session with crystal singing bowl",
      duration: "18:12",
      productId: "singing-bowl",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
      videoUrl: "https://example.com/videos/singing-bowl-meditation.mp4"
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Videos', icon: 'fas fa-play-circle', count: videoData.length },
    { id: 'crystals', name: 'Crystals', icon: 'fas fa-gem', count: videoData.filter(v => v.category === 'crystals').length },
    { id: 'jewelry', name: 'Jewelry', icon: 'fas fa-ring', count: videoData.filter(v => v.category === 'jewelry').length },
    { id: 'kits', name: 'Healing Kits', icon: 'fas fa-box-open', count: videoData.filter(v => v.category === 'kits').length },
    { id: 'tools', name: 'Tools', icon: 'fas fa-tools', count: videoData.filter(v => v.category === 'tools').length }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videoData 
    : videoData.filter(video => video.category === activeCategory);

  const handleVideoSelect = (index) => {
    setActiveVideo(index);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % filteredVideos.length);
    setIsPlaying(true);
  };

  const handlePrevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length);
    setIsPlaying(true);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveVideo(0);
  };

  return (
    <section className="video-showcase-section">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Header Section */}
          <div className="row">
            <div className="col-12">
              <div className="h-100 video-position-relative-z2 text-center mb-5">
                <div className="video-background-text">Videos</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 video-subtitle">Product Videos</p>
                  <div className="video-title-container">
                    <h1 className="display-6 mb-4 video-title">Crystal Video Gallery</h1>
                  </div>
                  
                  <div className="col-lg-8 mx-auto">
                    <p className="video-text">
                      Watch detailed videos about our healing crystals and products. 
                      Learn about their properties, uses, and healing benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Video Gallery */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="video-full-details">
                {/* Video Categories */}
                <div className="video-categories-filter mb-5">
                  <div className="row justify-content-center">
                    {categories.map((category) => (
                      <div className="col-auto" key={category.id}>
                        <button
                          className={`video-category-btn ${activeCategory === category.id ? 'active' : ''}`}
                          onClick={() => handleCategoryClick(category.id)}
                        >
                          <i className={`${category.icon} me-2`}></i>
                          {category.name}
                          <span className="category-count">{category.count}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Video Player & Playlist */}
                <div className="row g-4">
                  {/* Main Video Player */}
                  <div className="col-lg-8">
                    <div className="video-main-player-container">
                      <div className="video-player-wrapper">
                        {/* Video Player */}
                        <div className="video-player">
                          <div className="video-player-placeholder">
                            <div className="video-thumbnail-overlay">
                              <img 
                                src={filteredVideos[activeVideo].thumbnail} 
                                alt={filteredVideos[activeVideo].title}
                                className="video-thumbnail-img"
                              />
                              <div className="video-play-btn-overlay" onClick={handlePlayPause}>
                                <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
                              </div>
                            </div>
                            
                            {/* Video Controls */}
                            <div className="video-controls">
                              <div className="row align-items-center">
                                <div className="col-auto">
                                  <button className="video-control-btn" onClick={handlePlayPause}>
                                    <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
                                  </button>
                                </div>
                                <div className="col-auto">
                                  <button className="video-control-btn" onClick={() => setIsMuted(!isMuted)}>
                                    <i className={`fas fa-volume-${isMuted ? 'mute' : 'up'}`}></i>
                                  </button>
                                </div>
                                <div className="col-auto">
                                  <button className="video-control-btn" onClick={handlePrevVideo}>
                                    <i className="fas fa-step-backward"></i>
                                  </button>
                                </div>
                                <div className="col-auto">
                                  <button className="video-control-btn" onClick={handleNextVideo}>
                                    <i className="fas fa-step-forward"></i>
                                  </button>
                                </div>
                                <div className="col">
                                  <div className="video-progress-bar">
                                    <div className="video-progress-fill" style={{ width: '45%' }}></div>
                                  </div>
                                </div>
                                <div className="col-auto">
                                  <span className="video-time">2:34 / {filteredVideos[activeVideo].duration}</span>
                                </div>
                                <div className="col-auto">
                                  <button className="video-control-btn">
                                    <i className="fas fa-expand"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Current Video Info */}
                        <div className="current-video-info mt-4">
                          <h3 className="current-video-title">{filteredVideos[activeVideo].title}</h3>
                          <div className="video-meta">
                            <span className="video-product-name">
                              <i className="fas fa-gem me-1"></i>
                              {filteredVideos[activeVideo].productName}
                            </span>
                          </div>
                          <p className="video-description mt-3">
                            {filteredVideos[activeVideo].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Playlist */}
                  <div className="col-lg-4">
                    <div className="video-playlist-container">
                      <div className="playlist-header">
                        <h4 className="playlist-title">
                          <i className="fas fa-list-ul me-2"></i>
                          Video Playlist
                          <span className="playlist-count">{filteredVideos.length} videos</span>
                        </h4>
                      </div>
                      
                      <div className="playlist-videos">
                        {filteredVideos.map((video, index) => (
                          <div 
                            className={`playlist-video-item ${index === activeVideo ? 'active' : ''}`}
                            key={video.id}
                            onClick={() => handleVideoSelect(index)}
                          >
                            <div className="row g-0 align-items-center">
                              <div className="col-4">
                                <div className="playlist-thumbnail">
                                  <img 
                                    src={video.thumbnail} 
                                    alt={video.title}
                                    className="img-fluid"
                                  />
                                  <div className="playlist-video-duration">
                                    {video.duration}
                                  </div>
                                  {index === activeVideo && (
                                    <div className="playlist-now-playing">
                                      <i className="fas fa-play"></i>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="col-8">
                                <div className="playlist-video-info">
                                  <h6 className="playlist-video-title">{video.title}</h6>
                                  <div className="playlist-video-meta">
                                    <span className="playlist-product-name">
                                      <i className="fas fa-gem"></i>
                                      {video.productName}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;