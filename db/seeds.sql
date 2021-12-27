INSERT INTO departments
    (name)
VALUES
    ('UX'),
    ('Server Maintence'),
    ('Graphic Design'),
    ('Testing'),
    ('Database Architecture');

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('UX Designer', 45000.00, 1),
    ('Frontend Engineer', 40000.00, 1),
    ('Backend Engineer', 50000.00, 2),
    ('Server Architect', 60000.00, 2),
    ('Graphic Designer', 35000.00, 3),
    ('Test Writer', 40000.00, 4),
    ('Head Tester', 50000.00, 4),
    ('Sequelizer', 80000.00, 5),
    ('ORM Translater', 120000.00, 5);

INSERT INTO employees
    (first_name, last_name, role_id)
VALUES
    ('Sarah', 'Crumz', 1),
    ('John', 'Doe', 2),
    ('Osa', 'Basal', 3),
    ('Louis', 'Michael', 4),
    ('Trevor', 'Tress', 5),
    ('Nick', 'Earl', 6),
    ('Johnny', 'Mocny', 7),
    ('Jacqui', 'Marpa', 8),
    ('Rishabh', 'Heer', 9);