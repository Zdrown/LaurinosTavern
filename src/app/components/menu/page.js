"use client"; // Only if using Next.js 13 App Router
import React, { useState } from "react";
import styled from "styled-components";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Appetizers");
  
  const categories = [
    "Appetizers",
    "Salads",
    "Burgers & Sandwiches",
    "Soups",
    "Grinders",
    "Fried Platters",
    "Pizza",
    "Quesadillas & Calzones",
    "Entrées",
    "Sides"
  ];

  return (
    <MenuSection>
      <MenuHeader>
        <h1>Our Menu</h1>
        <p>Explore our fresh Cape Cod flavors and classic tavern favorites.</p>
      </MenuHeader>

      <MenuNav>
        <NavInner>
          {categories.map((category) => (
            <NavItem 
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </NavItem>
          ))}
        </NavInner>
      </MenuNav>

      <MenuContent>
        {/* 1. Appetizers */}
        {activeCategory === "Appetizers" && (
          <MenuCategory>
            <h2>Appetizers</h2>
            <div className="items">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Mozzarella Sticks</span>
                  <div className="item-line" />
                  <span className="item-price">$9</span>
                </div>
                <p className="item-desc">Served with marinara sauce.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Potato Skins</span>
                  <div className="item-line" />
                  <span className="item-price">$11/10</span>
                </div>
                <p className="item-desc">
              Served with cheddar and bacon
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Quahog</span>
                  <div className="item-line" />
                  <span className="item-price">$6.50</span>
                </div>
                <p className="item-desc">
                a local favorite stuffed with breads
                onions, peppers & linguica
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Fried Calamari</span>
                  <div className="item-line" />
                  <span className="item-price">$12</span>
                </div>
                <p className="item-desc">
                banana peppers & linguica with
                cocktail sauce
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken Wings (1/2 lb)</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">
                buffalo, plain or sriracha served with
                celery + bleu cheese dressing
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">French Fries</span>
                  <div className="item-line" />
                  <span className="item-price">$6</span>
                </div>
                <p className="item-desc">
                  Classic favorite add parmesan +2$
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Garlic Bread</span>
                  <div className="item-line" />
                  <span className="item-price">$7 / $8</span>
                </div>
                <p className="item-desc">
                  With or without cheese. Served with marinara dip.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Onion Rings</span>
                  <div className="item-line" />
                  <span className="item-price">$7</span>
                </div>
                <p className="item-desc">

                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Cod Fingers</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">
                crispy fried cod fingers with
                tartar sauce*
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken Fingers</span>
                  <div className="item-line" />
                  <span className="item-price">$10</span>
                </div>
                <p className="item-desc">
                4 chicken fingers, celery and a choice of
                sauce
                </p>
              </MenuItem>
            </div>
          </MenuCategory>
          
        )}

        {/* 2. Salads */}
        {activeCategory === "Salads" && (
          <MenuCategory>
            <h2>Salads</h2>
            <div className="items">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Choice of Toppings</span>
                  <div className="item-line" />
                  <span className="item-price">—</span>
                </div>
                <p className="item-desc">
                  Chicken ($7) Shrimp ($10), Steak Tips or Swordfish ($13), Salmon ($13)
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">House Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$7</span>
                </div>
                <p className="item-desc">
                iceberg, red cabbage, carrots
                cucumbers, cherry tomato
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Cesar Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">
                classic caesar served with
                 cheese + homemade croutons
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Greek Feta Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$17</span>
                </div>
                <p className="item-desc">
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Wedge Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$17</span>
                </div>
                <p className="item-desc">
                  With bacon and blue cheese dressing, plus fresh toppings.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Brewster Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$17</span>
                </div>
                <p className="item-desc">
                greens, craisins, blue cheese
                candied pecans
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Antipasto Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$17</span>
                </div>
                <p className="item-desc">
                with salami, genoa salami &
                ham + provolone cheese
                </p>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

      {/* 3. Burgers, Dogs & Sandwiches */}
{activeCategory === "Burgers & Sandwiches" && (
  <MenuCategory>
    <h2>Burgers, Dogs &amp; Sandwiches</h2>
    <p className="category-note">Served with Potato Salad or Cole Slaw</p>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Hamburger</span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="item-line"></div>
          <span className="item-price">$13</span>
        </div>
        <p className="item-desc">Add cheese +$1.50, add bacon +$1.75</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Grilled Hot Dog</span>
          <div className="item-line" />
          <span className="item-price">$6</span>
        </div>
        <p className="item-desc">Comes with potato salad</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">2 Dogs &amp; Fries</span>
          <div className="item-line" />
          <span className="item-price">$15</span>
        </div>
        <p className="item-desc">Cheddar &amp; bacon or cheddar</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Fish Sandwich</span>
          <div className="item-line" />
          <span className="item-price">$17</span>
        </div>
        <p className="item-desc">Fried cod sandwich with lettuce, tomato and onion, tartar sauce</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Crispy Chicken Sandwich</span>
          <div className="item-line" />
          <span className="item-price">$14</span>
        </div>
        <p className="item-desc">Fried chicken fingers, cheese &amp; bacon</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Philly Cheese Subs</span>
          <div className="item-line" />
          <span className="item-price">$14</span>
        </div>
        <p className="item-desc">Steak or chicken with onion, peppers, mushrooms</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">BLT</span>
          <div className="item-line" />
          <span className="item-price">$13</span>
        </div>
        <p className="item-desc">With lettuce, tomato, + cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Baked Ham</span>
          <div className="item-line" />
          <span className="item-price">$13</span>
        </div>
        <p className="item-desc">With lettuce, tomato, onion + cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">White Meat Tuna</span>
          <div className="item-line" />
          <span className="item-price">$13</span>
        </div>
        <p className="item-desc">With lettuce, tomato, onion + cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Roast Beef</span>
          <div className="item-line" />
          <span className="item-price">$14</span>
        </div>
        <p className="item-desc">With lettuce, tomato, onion + cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">French Roast Beef Dip</span>
          <div className="item-line" />
          <span className="item-price">$14</span>
        </div>
        <p className="item-desc">Blue cheese and swiss + homemade au jus</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Italian Cold Cut</span>
          <div className="item-line" />
          <span className="item-price">$13</span>
        </div>
        <p className="item-desc">With lettuce, tomato, onion + cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Veal Parmesan</span>
          <div className="item-line" />
          <span className="item-price">$17</span>
        </div>
        <p className="item-desc">With marinara sauce, cheese</p>
      </MenuItem>
    </div>
  </MenuCategory>
)}

        {/* 4. Soups */}
        {activeCategory === "Soups" && (
          <MenuCategory>
            <h2>Soups</h2>
            <div className="items">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Clam Chowder</span>
                  <div className="item-line" />
                  <span className="item-price">$7 / $8.50</span>
                </div>
                <p className="item-desc">Cup or bowl—freshly made daily.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Baked Onion Soup Au Gratin</span>
                  <div className="item-line" />
                  <span className="item-price">$8</span>
                </div>
                <p className="item-desc">
                  Onion infuse soup made daily.
                </p>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

     {/* 4. Grinders */}
{activeCategory === "Grinders" && (
  <MenuCategory>
    <h2>Grinders</h2>
    <p className="category-note">Served with Potato Salad or Cole Slaw</p>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Italian Ground Sausage</span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="item-line"></div>
          <span className="item-price">$13</span>
        </div>
        <p className="item-desc">With marinara sauce, cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Sliced Meatball</span>
          <div className="item-line" />
          <span className="item-price">$13</span>
        </div>
        <p className="item-desc">With marinara sauce, cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Combo Grinder</span>
          <div className="item-line" />
          <span className="item-price">$14</span>
        </div>
        <p className="item-desc">Sausage, meatball with marinara sauce, cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Chicken Parmesan</span>
          <div className="item-line" />
          <span className="item-price">$16</span>
        </div>
        <p className="item-desc">With marinara sauce, cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Eggplant</span>
          <div className="item-line" />
          <span className="item-price">$14</span>
        </div>
        <p className="item-desc">With marinara sauce, cheese</p>
      </MenuItem>
    </div>
  </MenuCategory>
)}

        {/* 5. Fried Platters */}
{activeCategory === "Fried Platters" && (
  <MenuCategory>
    <h2>Fried Platters</h2>
    <p className="category-note">Served with Tartar Sauce, Cole Slaw + Fries</p>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Fried Shrimp</span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="item-line"></div>
          <span className="item-price">$23</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Chicken Finger Platter</span>
          <div className="item-line" />
          <span className="item-price">$17</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Fried Scallop Platter</span>
          <div className="item-line" />
          <span className="item-price">MP</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Fish and Chips</span>
          <div className="item-line" />
          <span className="item-price">$22</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Fried Calamari Platter</span>
          <div className="item-line" />
          <span className="item-price">$22</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Add A House Salad or Cup of Chowder</span>
          <div className="item-line" />
          <span className="item-price">$5</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Substitute Onion Rings</span>
          <div className="item-line" />
          <span className="item-price">$5</span>
        </div>
      </MenuItem>
    </div>
  </MenuCategory>
)}
{/* 6. Pizza */}
{activeCategory === "Pizza" && (
  <MenuCategory>
    <h2>Pizza</h2>
    <p className="category-note">Toppings: Artichoke, Anchovy, Bacon, Basil, Broccoli, Chicken, Eggplant, Diced Tomatoes, Feta, Garlic, Green Peppers, Ham, Jalapeños, Linguica, Meatball, Mushrooms, Olives, Onions, Pepperoni, Pesto Pineapple, Ricotta, Salami, Spinach, Sausage, Roasted Red Peppers</p>
    
    <h3>Small 10"</h3>
    <p className="subcategory-note">Serves 1-2</p>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Cheese</span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="item-line"></div>
          <span className="item-price">$11</span>
        </div>
        <p className="item-desc">$1 for each additional topping</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Gluten Free</span>
          <div className="item-line" />
          <span className="item-price">$7</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Extra Cheese</span>
          <div className="item-line" />
          <span className="item-price">$5</span>
        </div>
      </MenuItem>
    </div>
    
    <h3>Large Rectangular</h3>
    <p className="subcategory-note">Serves 3-4</p>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Cheese</span>
          <div className="item-line" />
          <span className="item-price">$21</span>
        </div>
        <p className="item-desc">$1 for each additional topping</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Extra Cheese</span>
          <div className="item-line" />
          <span className="item-price">$7</span>
        </div>
      </MenuItem>
    </div>
    
    <h3>Specialty Pizzas</h3>
    <p className="subcategory-note">Small/Large</p>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">The Fenway</span>
          <div className="item-line" />
          <span className="item-price">$15/$28</span>
        </div>
        <p className="item-desc">Mustard as base, with sausage, onion, peppers and cheese</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Pesto Lovers</span>
          <div className="item-line" />
          <span className="item-price">$15/$28</span>
        </div>
        <p className="item-desc">Fresh basil pesto, diced tomatoes, onions, feta + cheddar</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">The Big Mac</span>
          <div className="item-line" />
          <span className="item-price">$16/$30</span>
        </div>
        <p className="item-desc">Ground beef, special sauce, lettuce, pickles, onions + sesame seed crust</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Meat Lovers</span>
          <div className="item-line" />
          <span className="item-price">$15/$29</span>
        </div>
        <p className="item-desc">Sausage, pepperoni, bacon, meatball, linguica + ham</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">The Greek</span>
          <div className="item-line" />
          <span className="item-price">$15/$28</span>
        </div>
        <p className="item-desc">Spinach, garlic, roasted red peppers, black olives + feta</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Vegetarian</span>
          <div className="item-line" />
          <span className="item-price">$15/$28</span>
        </div>
        <p className="item-desc">All the freshest vegetables</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Buffalo Chicken</span>
          <div className="item-line" />
          <span className="item-price">$16/$30</span>
        </div>
        <p className="item-desc">Chicken, buffalo wing sauce + cheddar cheese served & bleu cheese dressing</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Kitchen Sink</span>
          <div className="item-line" />
          <span className="item-price">$16/$30</span>
        </div>
        <p className="item-desc">A little bit of everything!</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Tubby's Pie</span>
          <div className="item-line" />
          <span className="item-price">$15/$28</span>
        </div>
        <p className="item-desc">Ranch, chicken, bacon, crumbled bleu cheese + cheddar</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">BBQ Chicken</span>
          <div className="item-line" />
          <span className="item-price">$15/$28</span>
        </div>
        <p className="item-desc">BBQ sauce, sliced chicken, peppers, onions, pineapple + cheddar</p>
      </MenuItem>
    </div>
  </MenuCategory>
)}
        {/* 8. Quesadillas & Calzones */}
        {activeCategory === "Quesadillas & Calzones" && (
          <MenuCategory>
            <h2>Quesadillas &amp; Calzones</h2>
            <div className="items-grid">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Three Cheese Calzone</span>
                  <div className="item-line" />
                  <span className="item-price">$15</span>
                </div>
                <p className="item-desc">
                  Ricotta, mozzarella, and cheddar.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Spinach &amp; Cheese Calzone</span>
                  <div className="item-line" />
                  <span className="item-price">$16</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Cheese Quesadilla</span>
                  <div className="item-line" />
                  <span className="item-price">$10</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Veggie Quesadilla</span>
                  <div className="item-line" />
                  <span className="item-price">$16</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken Quesadilla</span>
                  <div className="item-line" />
                  <span className="item-price">$16</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Veggie Quesadilla</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

       {/* 7. Entree */}
{activeCategory === "Entrées" && (
  <MenuCategory>
    <h2>Entree</h2>
    <p className="category-note">Dinners Served After 4 Add A House Salad Or Cup Of Chowder + $5</p>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Grilled Salmon</span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="item-line"></div>
          <span className="item-price">$26</span>
        </div>
        <p className="item-desc">Served in a lemon ginger sauce with rice pilaf & today's vegetable</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Chicken Carbonara</span>
          <div className="item-line" />
          <span className="item-price">$23</span>
        </div>
        <p className="item-desc">Sautéed chicken with bacon, garlic, peas cream, tossed with cheese tortellini</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Pan Seared Cod</span>
          <div className="item-line" />
          <span className="item-price">$25</span>
        </div>
        <p className="item-desc">Fresh cod served with a light spiced pineapple glaze, rice pilaf + vegetables</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Shrimp Scampi</span>
          <div className="item-line" />
          <span className="item-price">$24</span>
        </div>
        <p className="item-desc">Jumbo shrimp sautéed with garlic, wine, butter, tomatoes + linguine, finished with lemon + basil</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Piccata Shrimp Or Chicken</span>
          <div className="item-line" />
          <span className="item-price">$24</span>
        </div>
        <p className="item-desc">Sauteed in a lemon, caper garlic butter sauce served with rice & vegetable</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Lasagna </span>
          <div className="item-line" />
          <span className="item-price">$15/$16</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Chicken Marsala</span>
          <div className="item-line" />
          <span className="item-price">$25</span>
        </div>
        <p className="item-desc">Served over linguini in a fresh mushroom marsala wine sauce</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Chicken Parmesan</span>
          <div className="item-line" />
          <span className="item-price">$25</span>
        </div>
        <p className="item-desc">Breaded with marinara, cheese over linguine</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Eggplant Parmesan</span>
          <div className="item-line" />
          <span className="item-price">$23</span>
        </div>
        <p className="item-desc">Breaded with marinara, cheese over linguine</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Veal Parmesan</span>
          <div className="item-line" />
          <span className="item-price">$26</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Combo Chicken & Eggplant</span>
          <div className="item-line" />
          <span className="item-price">$28</span>
        </div>
        <p className="item-desc">Breaded with marinara, cheese over linguine</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Baked Cod</span>
          <div className="item-line" />
          <span className="item-price">$24</span>
        </div>
        <p className="item-desc">Fresh cod topped with a ritz cracker + garlic butter crust, served with rice + vegetable</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Grilled Swordfish</span>
          <div className="item-line" />
          <span className="item-price">$25</span>
        </div>
        <p className="item-desc">Grilled, marinated swordfish steak served with rice + veggie</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Grilled Bourbon Steak Tips</span>
          <div className="item-line" />
          <span className="item-price">$29</span>
        </div>
        <p className="item-desc">Homemade bourbon glaze served with today's potato + veggie</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">New York Strip</span>
          <div className="item-line" />
          <span className="item-price">$28</span>
        </div>
        <p className="item-desc">12 oz. New York strip served with today's potato + veggie</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Ziti Broccoli Or Ziti Primavera</span>
          <div className="item-line" />
          <span className="item-price">$21</span>
        </div>
        <p className="item-desc">Both served in a thick creamy garlic sauce</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Mussels Over Pasta</span>
          <div className="item-line" />
          <span className="item-price">$21</span>
        </div>
        <p className="item-desc">Pesto cream, marinara or creamy garlic sauce</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Baked Scallops</span>
          <div className="item-line" />
          <span className="item-price">MP</span>
        </div>
        <p className="item-desc">Day boat scallops topped with ritz cracker+ garlic butter crust served with rice and vegetable</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Pan Seared Scallops</span>
          <div className="item-line" />
          <span className="item-price">MP</span>
        </div>
        <p className="item-desc">Day boat scallops chef's choice</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Linguine</span>
          <div className="item-line" />
          <span className="item-price">$12/$7/$18/$18</span>
        </div>
        <p className="item-desc">Marinara or butter / meat sauce / alfredo / meatballs</p>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Cheese Tortellini</span>
          <div className="item-line" />
          <span className="item-price">$21</span>
        </div>
        <p className="item-desc">Served with marinara, alfredo, or pesto cream</p>
      </MenuItem>
    </div>
  </MenuCategory>
)}

     {/* 8. Substitution Prices */}
{activeCategory === "Sides" && (
  <MenuCategory>
    <h2>Sides</h2>
    <div className="items">
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Chicken</span>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="item-line"></div>
          <span className="item-price">$8</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Shrimp</span>
          <div className="item-line" />
          <span className="item-price">$12</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Steak Tips</span>
          <div className="item-line" />
          <span className="item-price">$16</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Swordfish</span>
          <div className="item-line" />
          <span className="item-price">$15</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Scallops</span>
          <div className="item-line" />
          <span className="item-price">MP</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Salmon</span>
          <div className="item-line" />
          <span className="item-price">$15</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Vegetable Of The Day</span>
          <div className="item-line" />
          <span className="item-price">$5</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">French Fries</span>
          <div className="item-line" />
          <span className="item-price">$6</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Today's Potatoes</span>
          <div className="item-line" />
          <span className="item-price">$6</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Onion Rings</span>
          <div className="item-line" />
          <span className="item-price">$7</span>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="item-info">
          <span className="item-name">Cheese Tortellini</span>
          <div className="item-line" />
          <span className="item-price">$7</span>
        </div>
      </MenuItem>
    </div>
  </MenuCategory>
)}
      </MenuContent>

      <MenuFooter>
        <p>Prices subject to change. Please inform your server of any allergies.</p>
        <p>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</p>
      </MenuFooter>
    </MenuSection>
  );
}

/* ----------------- Styled Components ----------------- */

const MenuSection = styled.section`
  background: ${({ theme }) => theme.colors.light || "#fefefe"};
  color: ${({ theme }) => theme.colors.primaryDark || "#2a2a2a"};
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  max-width: 700px;
  padding: 0 1.5rem;

  h1 {
    font-family: 'Aloja', serif;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.primaryDark || "#2a2a2a"};
  }

  p {
    color: ${({ theme }) => theme.colors.secondaryDark || "#555"};
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 300;
  }
`;

const MenuNav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryDark || "#2a2a2a"};
  overflow-x: auto;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const NavInner = styled.div`
  display: flex;
  min-width: min-content;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavItem = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active'
})`
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  color: ${({ active, theme }) => 
    active 
      ? theme.colors.accent || "#f8f3e9" 
      : theme.colors.light || "#fefefe"};
  font-size: 0.9rem;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ active }) => (active ? "30%" : "0")};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent || "#f8f3e9"};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent || "#f8f3e9"};
    &:after {
      width: 30%;
    }
  }
`;;



const MenuContent = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0 1.5rem;
`;

const MenuCategory = styled.div`
  margin-bottom: 3rem;
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiaryDark || "#ddd"};
    color: ${({ theme }) => theme.colors.primaryDark || "#2a2a2a"};
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 2rem 0 1rem;
    color: ${({ theme }) => theme.colors.primaryDark || "#2a2a2a"};
  }

  .category-note {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondaryDark || "#555"};
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .pizza-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .pizza-size h3 {
    margin-top: 0;
    text-align: left;
  }

  @media (max-width: 768px) {
    .items-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const MenuItem = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  .item-info {
    display: flex;
    align-items: baseline;
    margin-bottom: 0.5rem;

    .item-name {
      font-weight: 500;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.primaryDark || "#2a2a2a"};
      flex-shrink: 0;
    }

    .item-line {
      flex-grow: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.tertiaryDark || "#ddd"};
      margin: 0 0.5rem;
      position: relative;
      top: -0.3rem;
    }

    .item-price {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondaryDark || "#555"};
      flex-shrink: 0;
    }
  }

  .item-desc {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondaryDark || "#555"};
    line-height: 1.4;
    max-width: 90%;
  }
`;

const MenuFooter = styled.footer`
  margin-top: 2rem;
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiaryDark || "#ddd"};
  width: 100%;
  max-width: 1000px;
  text-align: center;
  
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.secondaryDark || "#555"};
    margin-bottom: 0.5rem;
    font-style: italic;
  }
`;