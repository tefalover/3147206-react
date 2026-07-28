

CREATE TABLE content_type (
    content_type_id SERIAL PRIMARY KEY,

    app_label VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,

    -- Evita valores duplicados en la columna
    CONSTRAINT up_content_type
    -- que no halla duplicida entre modelos
    UNIQUE (app_label, model)
);