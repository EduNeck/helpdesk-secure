CREATE TABLE helpdesk.organizacion (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    nombre VARCHAR(150) NOT NULL,
    nombre_comercial VARCHAR(150),
    identificacion VARCHAR(20),

    tipo VARCHAR(30) NOT NULL,

    activo BOOLEAN NOT NULL DEFAULT TRUE,

    creado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    actualizado_en TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT organizacion_nombre_not_blank
        CHECK (BTRIM(nombre) <> ''),

    CONSTRAINT organizacion_tipo_check
        CHECK (tipo IN (
            'municipio',
            'empresa_privada',
            'proveedor',
            'interno'
        ))
);