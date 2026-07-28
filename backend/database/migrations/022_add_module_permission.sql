-- Insertar un modulo en el from de como se debe mostrar
INSERT INTO permissions (permission_name, permission_codename)
VALUES
('Crear grupos', 'create_groups'),
('Editar grupos', 'edit_group'),
('Reportar grupos', 'report_group'),
('Habilitar/Deshabilitar group', 'state_group');