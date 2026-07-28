-- Asignacion de permisos al modulo de grupos
UPDATE permissions
SET content_type_id = 2
WHERE permission_codename IN (
    'create_groups',
    'edit_group',
    'report_group',
    'state_group'
);