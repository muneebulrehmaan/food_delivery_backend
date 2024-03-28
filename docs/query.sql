--Data Taken from ChatGPT
-- Insert data into the Items table
INSERT INTO items (type, description) VALUES
  ('Perishable', 'Fresh Vegetables'),
  ('Non-perishable', 'Packaged Foods');

-- Insert data into the Organizations table
INSERT INTO organizations (name) VALUES
  ('Organization A'),
  ('Organization B');
  -- Insert data into the Pricing table
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
  -- Sample data for Organization 1 and perishable items
  (1, 1, 'Central', 5, 1.5, 10), -- Perishable item pricing for Organization 1 in the Central zone
  (1, 1, 'North', 5, 1.5, 10),   -- Perishable item pricing for Organization 1 in the North zone
  (1, 1, 'South', 5, 1.5, 10),   -- Perishable item pricing for Organization 1 in the South zone
  (1, 1, 'East', 5, 1.5, 10),    -- Perishable item pricing for Organization 1 in the East zone
  (1, 1, 'West', 5, 1.5, 10),    -- Perishable item pricing for Organization 1 in the West zone

  -- Sample data for Organization 1 and non-perishable items
  (1, 2, 'Central', 5, 1, 8),    -- Non-perishable item pricing for Organization 1 in the Central zone
  (1, 2, 'North', 5, 1, 8),      -- Non-perishable item pricing for Organization 1 in the North zone
  (1, 2, 'South', 5, 1, 8),      -- Non-perishable item pricing for Organization 1 in the South zone
  (1, 2, 'East', 5, 1, 8),       -- Non-perishable item pricing for Organization 1 in the East zone
  (1, 2, 'West', 5, 1, 8),       -- Non-perishable item pricing for Organization 1 in the West zone

  -- Sample data for Organization 2 and perishable items
  (2, 1, 'Central', 5, 1.5, 10), -- Perishable item pricing for Organization 2 in the Central zone
  (2, 1, 'North', 5, 1.5, 10),   -- Perishable item pricing for Organization 2 in the North zone
  (2, 1, 'South', 5, 1.5, 10),   -- Perishable item pricing for Organization 2 in the South zone
  (2, 1, 'East', 5, 1.5, 10),    -- Perishable item pricing for Organization 2 in the East zone
  (2, 1, 'West', 5, 1.5, 10),    -- Perishable item pricing for Organization 2 in the West zone

  -- Sample data for Organization 2 and non-perishable items
  (2, 2, 'Central', 5, 1, 8),    -- Non-perishable item pricing for Organization 2 in the Central zone
  (2, 2, 'North', 5, 1, 8),      -- Non-perishable item pricing for Organization 2 in the North zone
  (2, 2, 'South', 5, 1, 8),      -- Non-perishable item pricing for Organization 2 in the South zone
  (2, 2, 'East', 5, 1, 8),       -- Non-perishable item pricing for Organization 2 in the East zone
  (2, 2, 'West', 5, 1, 8);       -- Non-perishable item pricing for Organization 2 in the West zone

