"use client"; // Only if using Next.js 13 App Router
import React from "react";
import styled from "styled-components";

export default function MenuPage() {
  return (
    <MenuSection>
      <MenuHeader>
        <h1>Our Menu</h1>
        <p>Explore our fresh Cape Cod flavors and classic tavern favorites.</p>
      </MenuHeader>

      <MenuContent>
        {/* 1. Appetizers */}
        <MenuCategory>
          <h2>Appetizers</h2>
          <div className="items">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Mozzarella Sticks</span>
                <span className="item-price">$9</span>
              </div>
              <p className="item-desc">Served with marinara sauce.</p>
            </MenuItem>
            {/* Other appetizer items remain the same */}
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Potato Skins</span>
                <span className="item-price">$11.50</span>
              </div>
              <p className="item-desc">
                A local favorite stuffed with bacon, peppers, &amp; arugula.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Fried Calamari</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">
                Rings &amp; linguica served with marinara sauce.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Chicken Wings (1/2 lb)</span>
                <span className="item-price">$9</span>
              </div>
              <p className="item-desc">
                Tossed in your choice of sauce. Ask for available flavors!
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Garlic Bread</span>
                <span className="item-price">$7 / $8</span>
              </div>
              <p className="item-desc">
                With or without cheese. Served with marinara dip.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Cod Fingers</span>
                <span className="item-price">$10</span>
              </div>
              <p className="item-desc">
                Crispy fried cod strips served with tartar sauce.
              </p>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 2. Salads */}
        <MenuCategory>
          <h2>Salads</h2>
          <div className="items">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Choice of Toppings</span>
                <span className="item-price">—</span>
              </div>
              <p className="item-desc">
                Chicken or Shrimp ($10), Steak Tips or Swordfish ($13), Salmon ($14)
              </p>
            </MenuItem>
            {/* Other salad items remain the same */}
            <MenuItem>
              <div className="item-info">
                <span className="item-name">House Salad</span>
                <span className="item-price">$7</span>
              </div>
              <p className="item-desc">
                Classic garden mix with fresh veggies &amp; choice of dressing.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Greek Feta Salad</span>
                <span className="item-price">$14</span>
              </div>
              <p className="item-desc">
                Crisp romaine, olives, feta cheese, cherry tomatoes, and cucumber.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Wedge Salad</span>
                <span className="item-price">$14</span>
              </div>
              <p className="item-desc">
                With bacon and blue cheese dressing, plus fresh toppings.
              </p>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 3. Burgers, Dogs & Sandwiches */}
        <MenuCategory>
          <h2>Burgers, Dogs &amp; Sandwiches</h2>
          <p className="category-note">Served with Potato Salad or Cole Slaw</p>
          <div className="items">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Hamburger</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">Add cheese +$1, add bacon +$1.75</p>
            </MenuItem>
            {/* Other burger/sandwich items remain the same */}
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Grilled Hot Dog</span>
                <span className="item-price">$6</span>
              </div>
              <p className="item-desc">Comes with potato salad.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Fish Sandwich</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">
                Served on a bun with lettuce &amp; tartar sauce.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Crispy Chicken Sandwich</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">
                Fried chicken breast with lettuce, tomato, and mayo.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Philly Cheese Subs</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">
                Steak or chicken with peppers, onions, and melted cheese.
              </p>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* Rest of the menu categories remain the same */}
        {/* 4. Soups */}
        <MenuCategory>
          <h2>Soups</h2>
          <div className="items">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Clam Chowder</span>
                <span className="item-price">$7 / $8.50</span>
              </div>
              <p className="item-desc">Cup or bowl—freshly made daily.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">French Onion</span>
                <span className="item-price">$7</span>
              </div>
              <p className="item-desc">
                Topped with croutons and melted cheese.
              </p>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 5. Grinders */}
        <MenuCategory>
          <h2>Grinders</h2>
          <div className="items-grid">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Italian Sausage</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">Hearty and full of flavor.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Italian Linguica</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">Spicy sausage with peppers &amp; onions.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Sausage &amp; Peppers</span>
                <span className="item-price">$14</span>
              </div>
              <p className="item-desc">Classic grinder style with marinara.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Meatball</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">Homemade meatballs &amp; sauce.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Eggplant</span>
                <span className="item-price">$14</span>
              </div>
              <p className="item-desc">Lightly breaded with marinara &amp; cheese.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Veal Parmesan</span>
                <span className="item-price">$17</span>
              </div>
              <p className="item-desc">Served with marinara sauce.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Italian Cold Cut</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">Assorted meats, lettuce, tomato, &amp; cheese.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">BLT</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">Bacon, lettuce, tomato on a grinder roll.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Baked Ham</span>
                <span className="item-price">$13</span>
              </div>
              <p className="item-desc">Smoky ham with melted cheese.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Baked Meatball</span>
                <span className="item-price">$14</span>
              </div>
              <p className="item-desc">Extra cheese, extra sauce—baked to perfection.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Baked Chicken</span>
                <span className="item-price">$14</span>
              </div>
              <p className="item-desc">Tender chicken, sauce &amp; cheese, oven-baked.</p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Baked Eggplant</span>
                <span className="item-price">$14</span>
              </div>
              <p className="item-desc">Oven-baked with sauce, cheese &amp; herbs.</p>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 6. Fried Platters */}
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
                <span className="item-price">MP</span>
              </div>
              <p className="item-desc">
                Fresh local haddock, lightly battered.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Fried Scallop</span>
                <span className="item-price">MP</span>
              </div>
              <p className="item-desc">
                Succulent scallops from local waters.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Fried Clam Strip</span>
                <span className="item-price">MP</span>
              </div>
              <p className="item-desc">
                Golden-fried clam strips with lemon wedge.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Fried Calamari Platter</span>
                <span className="item-price">MP</span>
              </div>
              <p className="item-desc">
                Crispy calamari rings &amp; tentacles.
              </p>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 7. Pizza */}
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
                    <span className="item-price">$11</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">1 Topping</span>
                    <span className="item-price">$12.50</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">2 Toppings</span>
                    <span className="item-price">$13.50</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">3 Toppings</span>
                    <span className="item-price">$14.50</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">4 Toppings</span>
                    <span className="item-price">$15.50</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">Extra Cheese</span>
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
                    <span className="item-price">$15</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">1 Topping</span>
                    <span className="item-price">$16</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">2 Toppings</span>
                    <span className="item-price">$17</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">3 Toppings</span>
                    <span className="item-price">$18</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">4 Toppings</span>
                    <span className="item-price">$19</span>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="item-info">
                    <span className="item-name">Extra Cheese</span>
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
                <span className="item-price">$15 / $28</span>
              </div>
              <p className="item-desc">
                Marinated steak tips, sausage, onion, peppers.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">The Bomb</span>
                <span className="item-price">$16 / $30</span>
              </div>
              <p className="item-desc">
                Pepperoni, sausage, onion, peppers, mushrooms.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Spinach &amp; Ricotta</span>
                <span className="item-price">$14 / $27.50</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Meat Lover</span>
                <span className="item-price">$15 / $28</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">BBQ Chicken</span>
                <span className="item-price">$14 / $27</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Hawaiian</span>
                <span className="item-price">$14 / $27</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Veggie</span>
                <span className="item-price">$14 / $27</span>
              </div>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 8. Quesadillas & Calzones */}
        <MenuCategory>
          <h2>Quesadillas &amp; Calzones</h2>
          <div className="items-grid">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Three Cheese Calzone</span>
                <span className="item-price">$15</span>
              </div>
              <p className="item-desc">
                Ricotta, mozzarella, and cheddar.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Spinach &amp; Cheese Calzone</span>
                <span className="item-price">$16</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Cheese Quesadilla</span>
                <span className="item-price">$10</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Veggie Quesadilla</span>
                <span className="item-price">$16</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Chicken Quesadilla</span>
                <span className="item-price">$14</span>
              </div>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 9. Entrées */}
        <MenuCategory>
          <h2>Entrées</h2>
          <p className="category-note">
            Dinners served after 4. Add a House Salad or Cup of Chowder +$5
          </p>
          <div className="items-grid">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Grilled Salmon</span>
                <span className="item-price">$26</span>
              </div>
              <p className="item-desc">
                Salmon with a tangy sweet glaze or lemon-butter sauce.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Chicken Carbonara</span>
                <span className="item-price">$25</span>
              </div>
              <p className="item-desc">
                Sautéed chicken with bacon, garlic, peas, and creamy sauce.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Chicken &amp; Eggplant</span>
                <span className="item-price">$28</span>
              </div>
              <p className="item-desc">
                Layered with marinara, cheese, and herbs.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Shrimp Scampi</span>
                <span className="item-price">$24</span>
              </div>
              <p className="item-desc">
                Shrimp sautéed in white wine &amp; garlic sauce over linguine.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Piccata Shrimp or Chicken</span>
                <span className="item-price">$24</span>
              </div>
              <p className="item-desc">
                Lemon, capers, &amp; white wine sauce over pasta.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Chicken Marsala</span>
                <span className="item-price">$24</span>
              </div>
              <p className="item-desc">
                Marsala wine sauce with mushrooms over chicken.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Linguine</span>
                <span className="item-price">$12 / $17 / $18</span>
              </div>
              <p className="item-desc">
                Marinara, garlic &amp; butter, or Alfredo (add shrimp/chicken).
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Cheese Tortellini</span>
                <span className="item-price">$21</span>
              </div>
              <p className="item-desc">
                Served with Alfredo, pesto cream, or marinara.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Baked Cod</span>
                <span className="item-price">$21</span>
              </div>
              <p className="item-desc">
                Fresh Atlantic cod topped with seasoned breadcrumbs.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Grilled Bourbon Steak Tips</span>
                <span className="item-price">$26</span>
              </div>
              <p className="item-desc">
                Marinated tips in a bourbon glaze, served with side of choice.
              </p>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Ziti Broccoli or Ziti Primavera</span>
                <span className="item-price">$21</span>
              </div>
              <p className="item-desc">
                Light sauce with fresh veggies &amp; ziti pasta.
              </p>
            </MenuItem>
          </div>
        </MenuCategory>

        {/* 10. Substitution Prices & Sides */}
        <MenuCategory>
          <h2>Substitutions &amp; Sides</h2>
          <div className="items-grid">
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Chicken</span>
                <span className="item-price">$6</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Shrimp</span>
                <span className="item-price">$9</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Swordfish</span>
                <span className="item-price">$9</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Scallops</span>
                <span className="item-price">$10</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Salmon</span>
                <span className="item-price">$9</span>
              </div>
            </MenuItem>
            {/* Sides */}
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Vegetable of the Day</span>
                <span className="item-price">$2</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">French Fries</span>
                <span className="item-price">$2</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Garlic Mash</span>
                <span className="item-price">$3</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div className="item-info">
                <span className="item-name">Cheese Tortellini</span>
                <span className="item-price">MP</span>
              </div>
              <p className="item-desc">
                Ask your server for current pricing.
              </p>
            </MenuItem>
          </div>
        </MenuCategory>
      </MenuContent>
    </MenuSection>
  );
}

/* ----------------- Styled Components ----------------- */

const MenuSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primaryDark};
  min-height: 80vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MenuHeader = styled.div`
  margin-bottom: 3rem;
  max-width: 800px;

  h1 {
    font-family: 'Aloja', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.secondaryDark};
    font-size: 1.2rem;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const MenuCategory = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.tertiaryDark};
  border-radius: 8px;
  padding: 2rem;
  width: 100%;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  h3 {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  .category-note {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondaryDark};
    margin-bottom: 1rem;
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

  .pizza-size {
    h3 {
      margin-top: 0;
      text-align: left;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .items-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const MenuItem = styled.div`
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiaryDark};
  padding-bottom: 1rem;

  .item-info {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.25rem;

    .item-name {
      font-weight: bold;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.primaryDark};
    }
    .item-price {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  .item-desc {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondaryDark};
    margin-left: 0.25rem;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }`;
