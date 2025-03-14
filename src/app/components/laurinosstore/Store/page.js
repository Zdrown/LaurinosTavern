"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaMinus, FaPlus, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useCart, CartModal, CartNotification } from "../../../context/CartContext";


/* Categories for the sidebar */
const categories = ["All", "Gear", "T-Shirts", "Sweatshirts", "Hats"];



/* Product data with multiple images and sizes for clothing */
const sampleProducts = [
  // Gear
  {
    id: 1,
    category: "Gear",
    name: "Beer Koozie",
    images: ["/Canfront.svg", "/Canback.svg"],
    price: "$25",
    description: "High-quality gear from Laurino's. Perfect for everyday use."
  },
  {
    id: 2,
    category: "Gear",
    name: "Premium Bag",
    images: ["/Bag.svg", "/Bagback3.svg"],
    price: "$30",
    description: "Stylish and functional bag, great for travel or gym."
  },
  // T-Shirts
  {
    id: 3,
    category: "T-Shirts",
    name: "Classic Tee",
    images: ["/Beigeshirtfront.svg", "/Shirtback.svg"],
    price: "$20",
    description: "Comfortable cotton tee for everyday casual wear.",
    sizes: ["Small", "Medium", "Large", "XL"]
  },
  {
    id: 4,
    category: "T-Shirts",
    name: "Vintage Tee",
    images: ["/Shirt2front.svg", "/Shirt2back.svg"],
    price: "$22",
    description: "Retro style with a soft, worn-in feel.",
    sizes: ["Small", "Medium", "Large", "XL"]
  },
  // Sweatshirts
  {
    id: 5,
    category: "Sweatshirts",
    name: "Cozy Sweatshirt",
    images: ["/Sweatshirtfront.svg", "/Sweatshirtback.svg"],
    price: "$35",
    description: "Warm and comfy, perfect for cool evenings.",
    sizes: ["Small", "Medium", "Large", "XL"]
  },
  {
    id: 6,
    category: "Sweatshirts",
    name: "Modern Hoodie",
    images: ["/Hoodiefront.svg", "/Hoodieback.svg"],
    price: "$40",
    description: "Stylish design with a drawstring hood and front pocket.",
    sizes: ["Small", "Medium", "Large", "XL"]
  },
  // Hats
  {
    id: 7,
    category: "Hats",
    name: "Laurinos Cap",
    images: ["/Hatnffront.svg", "/Hatnfback.svg"],
    price: "$15",
    description: "A warm and trendy beanie for brisk weather."
  },
  {
    id: 8,
    category: "Hats",
    name: "Cap",
    images: ["/Hatwhite.svg", "/Whiteback.svg"],
    price: "$18",
    description: "Casual baseball cap for everyday style."
  },
  {
    id: 9,
    category: "Hats",
    name: "Bucket",
    images: ["/Bucketfront.svg", "/Bucketback.svg"],
    price: "$18",
    description: "Casual baseball cap for everyday style."
  },
];

/* Filter function for the sidebar categories */
function filterProducts(category) {
  if (category === "All") {
    return sampleProducts;
  }
  return sampleProducts.filter((prod) => prod.category === category);
}

/* Enhanced Modal Component with image navigation and size selection */
function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[1] : null
  );

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + product.images.length) % product.images.length
    );
  };
  
  const handleAddToCart = () => {
    // Prepare the product for cart
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0], // Use first image for cart
      size: selectedSize || "One Size",
      category: product.category // Include category for weight calculation
    };
    
    // Add to cart
    addToCart(cartProduct);
    
    // Close modal
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        
        <ImageContainer>
          <NavArrow $left onClick={prevImage}>
            <FaArrowLeft />
          </NavArrow>
          
          <ModalImage 
            src={product.images[currentImageIndex]} 
            alt={product.name} 
          />
          
          <NavArrow $right onClick={nextImage}>
            <FaArrowRight />
          </NavArrow>
        </ImageContainer>
        
        <ImageDots>
          {product.images.map((_, idx) => (
            <Dot 
              key={`dot-${product.id}-${idx}`}
              $active={idx === currentImageIndex} 
              onClick={() => setCurrentImageIndex(idx)} 
            />
          ))}
        </ImageDots>
        
        <ModalTitle>{product.name}</ModalTitle>
        <ModalPrice>{product.price}</ModalPrice>
        <ModalDescription>{product.description}</ModalDescription>
        
        {product.sizes && (
          <SizeSelector>
            <SizeLabel>Size:</SizeLabel>
            <SizeOptions>
              {product.sizes.map((size) => (
                <SizeButton 
                  key={`size-${product.id}-${size}`}
                  $selected={size === selectedSize}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeOptions>
          </SizeSelector>
        )}
        
        <AddToCartButton onClick={handleAddToCart}>
          Add to Cart
        </AddToCartButton>
      </ModalContent>
    </ModalOverlay>
  );
}


/* Cart Component to display items in cart */
function Cart() {
  const {
    items,
    totalAmount,
    removeFromCart,
    updateQuantity,
    cartVisible,
    setCartVisible,
    proceedToCheckout
  } = useCart();
  
  useEffect(() => {
    if (cartVisible) {
      // Prevent body scrolling when cart is visible
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when cart is hidden
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [cartVisible]);
  
  if (!cartVisible) return null;


  
  return (
    <>
      <CartBackdrop $visible={cartVisible} onClick={() => setCartVisible(false)} />
      <CartModal $visible={cartVisible}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button type="button" className="close-button" onClick={() => setCartVisible(false)}>
            &times;
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={`cart-${item.id}-${item.size}`}>
                  <img 
                    className="cart-item-image" 
                    src={item.image} 
                    alt={item.name} 
                  />
                  
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-meta">
                      Size: {item.size}
                    </div>
                    <div className="cart-item-price">
                      ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price.replace('$', '')}
                    </div>
                  </div>
                  
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button type="button" onClick={() => updateQuantity(
                        item.id, item.size, item.color, item.quantity - 1
                      )}>
                        <FaMinus size={12} />
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(
                        item.id, item.size, item.color, item.quantity + 1
                      )}>
                        <FaPlus size={12} />
                      </button>
                    </div>
                    
                    <button type="button"
                      className="remove-button"
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              
              <button type="button"
                className="checkout-button"
                onClick={proceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </CartModal>
    </>
  );
}

/* Component that uses useSearchParams() */
function StoreContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { toggleCart, notification, totalItems, cartVisible } = useCart();

  const productsToShow = filterProducts(selectedCategory);

  // Update category if query param changes
  useEffect(() => {
    setSelectedCategory(initialCat);
  }, [initialCat]);

  return (
    <>
      <Sidebar>
        <BrandLogo>Laurino's</BrandLogo>
        <CategoryList>
          {categories.map((cat) => (
            <SidebarItem
              key={`category-${cat}`}
              $active={cat === selectedCategory}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </SidebarItem>
          ))}
        </CategoryList>
      </Sidebar>

      <ContentArea>
        <StoreHeader>
          <CategoryHeader>{selectedCategory}</CategoryHeader>
          <CartButton onClick={toggleCart}>
            <FaShoppingCart />
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </CartButton>
        </StoreHeader>
        
        <ProductGrid $cartVisible={cartVisible}>
          {productsToShow.map((product) => (
            <ProductCard key={`product-${product.id}`}>
              <ImageWrapper onClick={() => setSelectedProduct(product)}>
                <ProductImage 
                  className="primary-img" 
                  src={product.images[0]} 
                  alt={product.name} 
                />
                <ProductImage 
                  className="secondary-img" 
                  src={product.images[1]} 
                  alt={`${product.name} - alternate view`} 
                />
                <HoverOverlay className="hover-overlay">Quick View</HoverOverlay>
              </ImageWrapper>
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductDetails>
            </ProductCard>
          ))}
        </ProductGrid>
      </ContentArea>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      
      {/* Cart Modal */}
      <Cart />
      
      {/* Notification */}
      <CartNotification $visible={notification.visible}>
        <div className="notification-content">
          <span className="check-icon">✓</span>
          <span className="message">{notification.message}</span>
        </div>
      </CartNotification>
    </>
  );
}

/* Loading state component */
const LoadingState = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    width: '100%'
  }}>
    <div>Loading store...</div>
  </div>
);

/* Main Store Page Component */
export default function LaurinosStorePage() {
  return (
    <StoreContainer>
      <Suspense fallback={<LoadingState />}>
        <StoreContent />
      </Suspense>
    </StoreContainer>
  );
}

/* --------------------- Styled Components --------------------- */

/* Container for the entire store page */
const StoreContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primaryDark};
  font-family: 'Inter', sans-serif;
  position: relative;
`;

/* Left sidebar with categories */
const Sidebar = styled.div`
  width: 280px;
  padding: 2.5rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.05);
`;

const BrandLogo = styled.div`
  font-family: "Aloja", serif;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-align: center;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

/* Use $ prefix for transient props that shouldn't be passed to the DOM */
const SidebarItem = styled.div`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
  color: ${({ $active, theme }) => ($active ? theme.colors.primaryDark : theme.colors.secondaryDark)};
  background: ${({ $active, theme }) => ($active ? theme.colors.lighterBlue : "transparent")};
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme, $active }) => $active ? theme.colors.lighterBlue : "rgba(0, 0, 0, 0.05)"};
    transform: translateX(5px);
  }
`;

/* Main content area on the right */
const ContentArea = styled.div`
  flex: 1;
  padding: 3rem;
  background: #fafafa;
  position: relative;
`;

/* Store header with category title and cart button */
const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

/* Category title at the top */
const CategoryHeader = styled.h2`
  font-family: "Aloja", serif;
  font-size: 2.5rem;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primaryDark};
    border-radius: 3px;
  }
`;

/* Cart button */
const CartButton = styled.button`
  position: relative;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
    transform: scale(1.05);
  }
`;

/* Cart count badge */
const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
`;

/* Grid for product cards */
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
  
  /* When cart is visible, show products in two columns */
  
  
`;

/* The product card: vertical layout with an image on top */
const ProductCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  }
`;

/* The image wrapper with hover overlay for "Quick View" */
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  cursor: pointer;
  overflow: hidden;
  
  &:hover .primary-img {
    opacity: 0;
  }
  
  &:hover .secondary-img {
    opacity: 1;
  }
  
  &:hover .hover-overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;

/* The product image at the top of the card */
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.5s ease;
  
  &.primary-img {
    position: relative;
    z-index: 1;
  }
  
  &.secondary-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 2;
  }
`;

/* "Quick View" overlay that appears on hover */
const HoverOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 3;
`;

/* The bottom portion with product name, desc, price */
const ProductDetails = styled.div`
  padding: 1.5rem;
  text-align: left;
  background: white;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const ProductDescription = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
  margin-bottom: 1rem;
  line-height: 1.5;
  flex-grow: 1;
`;

const ProductPrice = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

/* Modal Styled Components */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 650px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  font-size: 1.8rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryDark};
  transition: all 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: rotate(90deg);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.$left ? 'left: -20px;' : 'right: -20px;'}
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  transition: all 0.2s;
  z-index: 1;
  
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-50%) scale(1.1);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  transition: all 0.3s ease;
`;

const ImageDots = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primaryDark : '#ddd'};
  margin: 0 5px;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.2);
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const ModalTitle = styled.h3`
  font-family: "Aloja", serif;
  font-size: 2.2rem;
  margin: 1rem 0 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

const ModalPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

const SizeSelector = styled.div`
  margin-bottom: 2rem;
`;

const SizeLabel = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  text-align: center;
`;

const SizeOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

const SizeButton = styled.button`
  padding: 0.5rem 1.2rem;
  border: 2px solid ${({ $selected, theme }) => 
    $selected ? theme.colors.primaryDark : '#ddd'};
  background: ${({ $selected, theme }) => 
    $selected ? theme.colors.accent : 'transparent'};
  color: ${({ $selected, theme }) => 
    $selected ? theme.colors.primaryDark : theme.colors.secondaryDark};
  border-radius: 8px;
  font-weight: ${({ $selected }) => $selected ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const AddToCartButton = styled.button`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

/* Cart backdrop that covers the content area */
const CartBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 998; /* Just below the cart modal */
  opacity: ${props => props.$visible ? 1 : 0};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  pointer-events: ${props => props.$visible ? 'auto' : 'none'};
`;