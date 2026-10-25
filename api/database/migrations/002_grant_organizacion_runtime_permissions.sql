-- La API puede consultar, crear y actualizar organizaciones.
-- No puede alterar la estructura ni borrar físicamente registros.

GRANT SELECT, INSERT, UPDATE
ON TABLE helpdesk.organizacion
TO helpdesk_app;

GRANT USAGE, SELECT
ON SEQUENCE helpdesk.organizacion_id_seq
TO helpdesk_app;