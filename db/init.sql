CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(30),
    password TEXT
);

CREATE TABLE submissions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  problem_content VARCHAR(10000),
  solution_content VARCHAR(10000)
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  submission_id INTEGER REFERENCES submissions,
  rating INTEGER,
  content VARCHAR(2000)
);

CREATE TABLE tribe (
  id SERIAL PRIMARY KEY, 
  user_id INTEGER REFERENCES users,
  friend_id INTEGER REFERENCES users
);