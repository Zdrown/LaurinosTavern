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
                  <span className="item-price">$11.50</span>
                </div>
                <p className="item-desc">
                  A local favorite stuffed with bacon, peppers, &amp; arugula.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Fried Calamari</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">
                  Rings &amp; linguica served with marinara sauce.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken Wings (1/2 lb)</span>
                  <div className="item-line" />
                  <span className="item-price">$9</span>
                </div>
                <p className="item-desc">
                  Tossed in your choice of sauce. Ask for available flavors!
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
                  <span className="item-name">Cod Fingers</span>
                  <div className="item-line" />
                  <span className="item-price">$10</span>
                </div>
                <p className="item-desc">
                  Crispy fried cod strips served with tartar sauce.
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
                  Chicken or Shrimp ($10), Steak Tips or Swordfish ($13), Salmon ($14)
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">House Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$7</span>
                </div>
                <p className="item-desc">
                  Classic garden mix with fresh veggies &amp; choice of dressing.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Greek Feta Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">
                  Crisp romaine, olives, feta cheese, cherry tomatoes, and cucumber.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Wedge Salad</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">
                  With bacon and blue cheese dressing, plus fresh toppings.
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
                <p className="item-desc">Add cheese +$1, add bacon +$1.75</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Grilled Hot Dog</span>
                  <div className="item-line" />
                  <span className="item-price">$6</span>
                </div>
                <p className="item-desc">Comes with potato salad.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Fish Sandwich</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">
                  Served on a bun with lettuce &amp; tartar sauce.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Crispy Chicken Sandwich</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">
                  Fried chicken breast with lettuce, tomato, and mayo.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Philly Cheese Subs</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">
                  Steak or chicken with peppers, onions, and melted cheese.
                </p>
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
                  <span className="item-name">French Onion</span>
                  <div className="item-line" />
                  <span className="item-price">$7</span>
                </div>
                <p className="item-desc">
                  Topped with croutons and melted cheese.
                </p>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

        {/* 5. Grinders */}
        {activeCategory === "Grinders" && (
          <MenuCategory>
            <h2>Grinders</h2>
            <div className="items-grid">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Italian Sausage</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">Hearty and full of flavor.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Italian Linguica</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">Spicy sausage with peppers &amp; onions.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Sausage &amp; Peppers</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">Classic grinder style with marinara.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Meatball</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">Homemade meatballs &amp; sauce.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Eggplant</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">Lightly breaded with marinara &amp; cheese.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Veal Parmesan</span>
                  <div className="item-line" />
                  <span className="item-price">$17</span>
                </div>
                <p className="item-desc">Served with marinara sauce.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Italian Cold Cut</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">Assorted meats, lettuce, tomato, &amp; cheese.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">BLT</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">Bacon, lettuce, tomato on a grinder roll.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Baked Ham</span>
                  <div className="item-line" />
                  <span className="item-price">$13</span>
                </div>
                <p className="item-desc">Smoky ham with melted cheese.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Baked Meatball</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">Extra cheese, extra sauce—baked to perfection.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Baked Chicken</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">Tender chicken, sauce &amp; cheese, oven-baked.</p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Baked Eggplant</span>
                  <div className="item-line" />
                  <span className="item-price">$14</span>
                </div>
                <p className="item-desc">Oven-baked with sauce, cheese &amp; herbs.</p>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

        {/* 6. Fried Platters */}
        {activeCategory === "Fried Platters" && (
          <MenuCategory>
            <h2>Fried Platters</h2>
            <p className="category-note">
              Served with Tartar Sauce, Cole Slaw &amp; Fries
            </p>
            <p className="category-note">Add salad or cup of chowder +$2</p>
            <div className="items">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Fried Haddock</span>
                  <div className="item-line" />
                  <span className="item-price">MP</span>
                </div>
                <p className="item-desc">
                  Fresh local haddock, lightly battered.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Fried Scallop</span>
                  <div className="item-line" />
                  <span className="item-price">MP</span>
                </div>
                <p className="item-desc">
                  Succulent scallops from local waters.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Fried Clam Strip</span>
                  <div className="item-line" />
                  <span className="item-price">MP</span>
                </div>
                <p className="item-desc">
                  Golden-fried clam strips with lemon wedge.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Fried Calamari Platter</span>
                  <div className="item-line" />
                  <span className="item-price">MP</span>
                </div>
                <p className="item-desc">
                  Crispy calamari rings &amp; tentacles.
                </p>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

        {/* 7. Pizza */}
        {activeCategory === "Pizza" && (
          <MenuCategory>
            <h2>Pizza</h2>
            <p className="category-note">
              Toppings: Artichoke, Anchovy, Basil, Broccoli, Chicken, Eggplant,
              Diced Tomatoes, Feta, Garlic, Green Peppers, Ham, Jalapenos, Linguica,
              Meatball, Mushrooms, Olives, Onions, Pepperoni, Pesto, Pineapple,
              Ricotta, Salmon, Spinach, Sausage, Roasted Red Peppers
            </p>

            <div className="pizza-section">
              <div className="pizza-size">
                <h3>Small 10" (Serves 1-2)</h3>
                <div className="items">
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">Cheese / Gluten Free</span>
                      <div className="item-line" />
                      <span className="item-price">$11</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">1 Topping</span>
                      <div className="item-line" />
                      <span className="item-price">$12.50</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">2 Toppings</span>
                      <div className="item-line" />
                      <span className="item-price">$13.50</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">3 Toppings</span>
                      <div className="item-line" />
                      <span className="item-price">$14.50</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">4 Toppings</span>
                      <div className="item-line" />
                      <span className="item-price">$15.50</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">Extra Cheese</span>
                      <div className="item-line" />
                      <span className="item-price">$1</span>
                    </div>
                  </MenuItem>
                </div>
              </div>

              <div className="pizza-size">
                <h3>Large Rectangular (Serves 3-5)</h3>
                <div className="items">
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">Cheese</span>
                      <div className="item-line" />
                      <span className="item-price">$15</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">1 Topping</span>
                      <div className="item-line" />
                      <span className="item-price">$16</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">2 Toppings</span>
                      <div className="item-line" />
                      <span className="item-price">$17</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">3 Toppings</span>
                      <div className="item-line" />
                      <span className="item-price">$18</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">4 Toppings</span>
                      <div className="item-line" />
                      <span className="item-price">$19</span>
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="item-info">
                      <span className="item-name">Extra Cheese</span>
                      <div className="item-line" />
                      <span className="item-price">$2</span>
                    </div>
                  </MenuItem>
                </div>
              </div>
            </div>

            <h3>Signature Pizzas (Small / Large)</h3>
            <div className="items-grid">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">The Fenway</span>
                  <div className="item-line" />
                  <span className="item-price">$15 / $28</span>
                </div>
                <p className="item-desc">
                  Marinated steak tips, sausage, onion, peppers.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">The Bomb</span>
                  <div className="item-line" />
                  <span className="item-price">$16 / $30</span>
                </div>
                <p className="item-desc">
                  Pepperoni, sausage, onion, peppers, mushrooms.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Spinach &amp; Ricotta</span>
                  <div className="item-line" />
                  <span className="item-price">$14 / $27.50</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Meat Lover</span>
                  <div className="item-line" />
                  <span className="item-price">$15 / $28</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">BBQ Chicken</span>
                  <div className="item-line" />
                  <span className="item-price">$14 / $27</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Hawaiian</span>
                  <div className="item-line" />
                  <span className="item-price">$14 / $27</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Veggie</span>
                  <div className="item-line" />
                  <span className="item-price">$14 / $27</span>
                </div>
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
                  <span className="item-price">$14</span>
                </div>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

        {/* 9. Entrées */}
        {activeCategory === "Entrées" && (
          <MenuCategory>
            <h2>Entrées</h2>
            <p className="category-note">
              Dinners served after 4. Add a House Salad or Cup of Chowder +$5
            </p>
            <div className="items-grid">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Grilled Salmon</span>
                  <div className="item-line" />
                  <span className="item-price">$26</span>
                </div>
                <p className="item-desc">
                  Salmon with a tangy sweet glaze or lemon-butter sauce.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken Carbonara</span>
                  <div className="item-line" />
                  <span className="item-price">$25</span>
                </div>
                <p className="item-desc">
                  Sautéed chicken with bacon, garlic, peas, and creamy sauce.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken &amp; Eggplant</span>
                  <div className="item-line" />
                  <span className="item-price">$28</span>
                </div>
                <p className="item-desc">
                  Layered with marinara, cheese, and herbs.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Shrimp Scampi</span>
                  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                  <div className="item-line"></div>
                  <span className="item-price">$24</span>
                </div>
                <p className="item-desc">
                  Shrimp sautéed in white wine &amp; garlic sauce over linguine.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Piccata Shrimp or Chicken</span>
                  {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                  <div className="item-line"></div>
                  <span className="item-price">$24</span>
                </div>
                <p className="item-desc">
                  Lemon, capers, &amp; white wine sauce over pasta.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken Marsala</span>
                  <div className="item-line" />
                  <span className="item-price">$24</span>
                </div>
                <p className="item-desc">
                  Marsala wine sauce with mushrooms over chicken.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Linguine</span>
                  <div className="item-line" />
                  <span className="item-price">$12 / $17 / $18</span>
                </div>
                <p className="item-desc">
                  Marinara, garlic &amp; butter, or Alfredo (add shrimp/chicken).
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Cheese Tortellini</span>
                  <div className="item-line" />
                  <span className="item-price">$21</span>
                </div>
                <p className="item-desc">
                  Served with Alfredo, pesto cream, or marinara.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Baked Cod</span>
                  <div className="item-line" />
                  <span className="item-price">$21</span>
                </div>
                <p className="item-desc">
                  Fresh Atlantic cod topped with seasoned breadcrumbs.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Grilled Bourbon Steak Tips</span>
                  <div className="item-line" />
                  <span className="item-price">$26</span>
                </div>
                <p className="item-desc">
                  Marinated tips in a bourbon glaze, served with side of choice.
                </p>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Ziti Broccoli or Ziti Primavera</span>
                  <div className="item-line" />
                  <span className="item-price">$21</span>
                </div>
                <p className="item-desc">
                  Light sauce with fresh veggies &amp; ziti pasta.
                </p>
              </MenuItem>
            </div>
          </MenuCategory>
        )}

        {/* 10. Substitutions & Sides */}
        {activeCategory === "Sides" && (
          <MenuCategory>
            <h2>Substitutions &amp; Sides</h2>
            <div className="items-grid">
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Chicken</span>
                  <div className="item-line" />
                  <span className="item-price">$6</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Shrimp</span>
                  <div className="item-line" />
                  <span className="item-price">$9</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Swordfish</span>
                  <div className="item-line" />
                  <span className="item-price">$9</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Scallops</span>
                  <div className="item-line" />
                  <span className="item-price">$10</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Salmon</span>
                  <div className="item-line" />
                  <span className="item-price">$9</span>
                </div>
              </MenuItem>
              {/* Sides */}
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Vegetable of the Day</span>
                  <div className="item-line" />
                  <span className="item-price">$2</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">French Fries</span>
                  <div className="item-line" />
                  <span className="item-price">$2</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Garlic Mash</span>
                  <div className="item-line" />
                  <span className="item-price">$3</span>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="item-info">
                  <span className="item-name">Cheese Tortellini</span>
                  <div className="item-line" />
                  <span className="item-price">MP</span>
                </div>
                <p className="item-desc">
                  Ask your server for current pricing.
                </p>
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