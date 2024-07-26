INSERT INTO courses (course_name, course_type) VALUES 
  ('FSF', 'Web Dev'),
  ('DV', 'Data Visualization'),
  ('Cyber', 'Cyber Security');

INSERT INTO groups (group_name) VALUES
  ('dogs'),
  ('strangelove'),
  ('cats');

INSERT INTO students (
    first_name, 
    last_name, 
    course_id, 
    group_id,
    group_leader_id
) VALUES
  ('John', 'Smith', 1, 2, 3),
  ('Jane', 'Doe', 3, null, 3),
  ('Susan', 'Wilson', 1, 3, null),
  ('Frank', 'Jackson', 1, null, 3);