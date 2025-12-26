// ProductShowcase.jsx - Simple Product Image Gallery
import React, { useState, useEffect } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
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

  // Crystal names from your screenshot
  const crystalNames = [
    "Smoky Quartz",
    "Lepidolite",
    "Pyrite",
    "Green Aventurine",
    "Amethyst",
    "Sunstone",
    "Rainforest Jasper",
    "Labradorite",
    "Moonstone",
    "Multifluorite",
    "Lapis Lazuli",
    "Golden Healer Quartz",
    "Selenite",
    "Citrine",
    "Rose Quartz"
  ];

  // Assign appropriate images for each crystal
  const crystalImages = [
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop", // Smoky Quartz
    "https://images.unsplash.com/photo-1605100940036-c8a7d5c8d0d0?w=800&auto=format&fit=crop", // Lepidolite
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop", // Pyrite
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&auto=format&fit=crop", // Green Aventurine
    "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&auto=format&fit=crop", // Amethyst
    "https://images.unsplash.com/photo-1548135176-6e0d5e8d6c0e?w=800&auto=format&fit=crop", // Sunstone
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop", // Rainforest Jasper
    "https://images.unsplash.com/photo-1605100940036-c833f0ed4866?w=800&auto=format&fit=crop", // Labradorite
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop", // Moonstone
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop", // Multifluorite
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&auto=format&fit=crop", // Lapis Lazuli
    "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&auto=format&fit=crop", // Golden Healer Quartz
    "https://images.unsplash.com/photo-1548135176-6e0d5e8d6c0e?w=800&auto=format&fit=crop", // Selenite
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop", // Citrine
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop"  // Rose Quartz
  ];

  // Simplified Product Data - Using crystal names and appropriate images
  const productData = crystalNames.map((name, index) => ({
    id: index + 1,
    name: name,
    category: "crystals",
    image: crystalImages[index % crystalImages.length]
  }));

  // Categories
  const categories = [
    { id: 'all', name: 'All Crystals', icon: 'fas fa-gem' },
    { id: 'quartz', name: 'Quartz Family', icon: 'fas fa-gem' },
    { id: 'minerals', name: 'Minerals', icon: 'fas fa-mountain' },
    { id: 'stones', name: 'Healing Stones', icon: 'fas fa-heart' },
    { id: 'rare', name: 'Rare Crystals', icon: 'fas fa-star' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? productData 
    : productData.filter(product => {
        // Filtering logic based on crystal types
        if (activeCategory === 'quartz') {
          return product.name.toLowerCase().includes('quartz') || 
                 product.name.toLowerCase().includes('amethyst') ||
                 product.name.toLowerCase().includes('citrine');
        } else if (activeCategory === 'minerals') {
          return product.name.toLowerCase().includes('pyrite') ||
                 product.name.toLowerCase().includes('lapis') ||
                 product.name.toLowerCase().includes('selenite') ||
                 product.name.toLowerCase().includes('fluorite');
        } else if (activeCategory === 'stones') {
          return product.name.toLowerCase().includes('amethyst') ||
                 product.name.toLowerCase().includes('rose quartz') ||
                 product.name.toLowerCase().includes('citrine') ||
                 product.name.toLowerCase().includes('moonstone') ||
                 product.name.toLowerCase().includes('sunstone') ||
                 product.name.toLowerCase().includes('aventurine') ||
                 product.name.toLowerCase().includes('jasper');
        } else if (activeCategory === 'rare') {
          return product.name.toLowerCase().includes('labradorite') ||
                 product.name.toLowerCase().includes('multifluorite') ||
                 product.name.toLowerCase().includes('lepidolite') ||
                 product.name.toLowerCase().includes('golden healer') ||
                 product.name.toLowerCase().includes('lapis lazuli');
        }
        return true;
      });

  const handleProductClick = (index) => {
    setActiveProduct(index);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveProduct(0);
  };

  return (
    <section className="product-showcase-section">
      <div className="container-xxl py-5">
        <div className="container">
          {/* Header Section */}
          <div className="row">
            <div className="col-12">
              <div className="h-100 product-position-relative-z2 text-center mb-5">
                <div className="product-background-text">Crystals</div>
                
                <div className="position-relative z-2">
                  <p className="text-primary text-uppercase mb-2 product-subtitle">Premium Collection</p>
                  <div className="product-title-container">
                    <h1 className="display-6 mb-4 product-title">Crystal Gallery</h1>
                  </div>
                  
                  <div className="col-lg-8 mx-auto">
                    <p className="product-text">
                      Browse our beautiful collection of healing crystals and spiritual products. 
                      Each piece is carefully selected for its energy and beauty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crystal Categories Filter - Showing crystal names */}
          <div className="product-categories-filter mb-5">
            <div className="row justify-content-center">
              {categories.map((category) => (
                <div className="col-auto" key={category.id}>
                  <button
                    className={`product-category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <i className={`${category.icon} me-2`}></i>
                    {category.name}
                  </button>
                </div>
              ))}
            </div>
            
            {/* Display crystal names as tags below categories */}
            <div className="crystal-tags-container mt-4">
              <div className="row justify-content-center">
                {crystalNames.map((crystal, index) => (
                  <div className="col-auto" key={index}>
                    <span className="crystal-tag">
                      <i className="fas fa-gem me-1"></i>
                      {crystal}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="row">
            <div className="col-12">
              <div className="product-full-details">
                {/* Main Product Display */}
                <div className="main-product-display mb-5">
                  <div className="main-product-container">
                    <div className="main-product-image">
                      <img 
                        src={filteredProducts[activeProduct].image} 
                        alt={filteredProducts[activeProduct].name}
                        className="main-product-img"
                      />
                    </div>
                    <div className="main-product-name text-center mt-4">
                      <h3 className="current-product-title">{filteredProducts[activeProduct].name}</h3>
                      <p className="crystal-description">
                        A beautiful {filteredProducts[activeProduct].name.toLowerCase()} crystal with healing properties.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Product Thumbnail Grid */}
                <div className="product-grid-container">
                  <h4 className="product-grid-title text-center mb-4">
                    <i className="fas fa-gem me-2"></i>
                    Crystal Collection
                    <span className="product-count"> ({filteredProducts.length} crystals)</span>
                  </h4>
                  
                  <div className="row g-4">
                    {filteredProducts.map((product, index) => (
                      <div 
                        className={`col-lg-3 col-md-4 col-sm-6`}
                        key={product.id}
                        onClick={() => handleProductClick(index)}
                      >
                        <div className={`product-grid-item ${index === activeProduct ? 'active' : ''}`}>
                          <div className="product-grid-image">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="product-grid-img"
                            />
                            {index === activeProduct && (
                              <div className="product-active-indicator">
                                <i className="fas fa-check-circle"></i>
                              </div>
                            )}
                          </div>
                          <div className="product-grid-name">
                            <h6 className="product-name-text">{product.name}</h6>
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
    </section>
  );
};

export default ProductShowcase;